let dados = null;
let usuarioAtual = null;

async function carregarAdmin() {
    usuarioAtual = verificarLogin();
    if (!usuarioAtual || usuarioAtual.role !== 'admin') {
        window.location.href = 'index.html';
        return;
    }
    
    dados = await lerDadosGitHub();
    if (!dados) {
        dados = {
            jogos: [],
            palpites: [],
            resultados: {},
            editoresLiberados: [],
            proximoJogoId: 1
        };
    }
    
    carregarListaJogos();
    carregarResultados();
    carregarListaParticipantes();
}

function carregarListaJogos() {
    const container = document.getElementById('listaJogos');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (dados.jogos.length === 0) {
        container.innerHTML = '<div class="alert alert-info">Nenhum jogo cadastrado ainda.</div>';
        return;
    }
    
    dados.jogos.forEach(jogo => {
        const jogoDiv = document.createElement('div');
        jogoDiv.className = 'jogo-card';
        jogoDiv.innerHTML = `
            <div class="row align-items-center">
                <div class="col-8">
                    <strong>${jogo.timeCasa} x ${jogo.timeFora}</strong>
                </div>
                <div class="col-4 text-end">
                    <button class="btn btn-danger btn-sm" onclick="removerJogo(${jogo.id})">Remover</button>
                </div>
            </div>
        `;
        container.appendChild(jogoDiv);
    });
}

function adicionarJogo() {
    const timeCasa = document.getElementById('timeCasa');
    const timeFora = document.getElementById('timeFora');
    
    if (!timeCasa || !timeFora) {
        showError('Preencha ambos os times');
        return;
    }
    
    const timeCasaValue = timeCasa.value.trim();
    const timeForaValue = timeFora.value.trim();
    
    if (!timeCasaValue || !timeForaValue) {
        showError('Preencha ambos os times');
        return;
    }
    
    dados.jogos.push({
        id: dados.proximoJogoId++,
        timeCasa: timeCasaValue,
        timeFora: timeForaValue,
        ativo: true
    });
    
    salvarDadosGitHub(dados);
    timeCasa.value = '';
    timeFora.value = '';
    carregarListaJogos();
    carregarResultados();
    showSuccess('Jogo adicionado com sucesso!');
}

function removerJogo(id) {
    if (confirm('Remover este jogo?')) {
        dados.jogos = dados.jogos.filter(j => j.id !== id);
        salvarDadosGitHub(dados);
        carregarListaJogos();
        carregarResultados();
        showSuccess('Jogo removido com sucesso!');
    }
}

function carregarResultados() {
    const container = document.getElementById('resultadosJogos');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (dados.jogos.length === 0) {
        container.innerHTML = '<div class="alert alert-info">Cadastre jogos primeiro.</div>';
        return;
    }
    
    dados.jogos.forEach(jogo => {
        const resultado = dados.resultados[jogo.id] || {};
        
        const div = document.createElement('div');
        div.className = 'jogo-card';
        div.innerHTML = `
            <strong>${jogo.timeCasa} x ${jogo.timeFora}</strong>
            <div class="row mt-2">
                <div class="col-5">
                    <input type="number" id="res_casa_${jogo.id}" class="form-control" 
                           value="${resultado.casa !== undefined ? resultado.casa : ''}" 
                           placeholder="Gols Casa" min="0" step="1">
                </div>
                <div class="col-2 text-center pt-2">x</div>
                <div class="col-5">
                    <input type="number" id="res_fora_${jogo.id}" class="form-control" 
                           value="${resultado.fora !== undefined ? resultado.fora : ''}" 
                           placeholder="Gols Fora" min="0" step="1">
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

async function salvarResultados() {
    const novosResultados = {};
    
    for (const jogo of dados.jogos) {
        const casaInput = document.getElementById(`res_casa_${jogo.id}`);
        const foraInput = document.getElementById(`res_fora_${jogo.id}`);
        
        if (casaInput && foraInput && casaInput.value !== '' && foraInput.value !== '') {
            novosResultados[jogo.id] = {
                casa: parseInt(casaInput.value),
                fora: parseInt(foraInput.value)
            };
        }
    }
    
    dados.resultados = novosResultados;
    const sucesso = await salvarDadosGitHub(dados);
    
    if (sucesso) {
        showSuccess('Resultados salvos! Ranking atualizado.');
    }
}

function carregarListaParticipantes() {
    const container = document.getElementById('listaParticipantes');
    if (!container) return;
    
    container.innerHTML = '';
    
    let participantesEncontrados = false;
    
    for (const [username, userInfo] of Object.entries(USUARIOS)) {
        if (username === 'admin') continue;
        
        participantesEncontrados = true;
        const estaLiberado = dados.editoresLiberados && dados.editoresLiberados.includes(username);
        
        const div = document.createElement('div');
        div.className = 'jogo-card';
        div.innerHTML = `
            <div class="row align-items-center">
                <div class="col-5">
                    <strong>${userInfo.nome}</strong><br>
                    <small class="text-muted">${username}</small>
                </div>
                <div class="col-3">
                    <span class="${estaLiberado ? 'text-success' : 'text-danger'}">
                        ${estaLiberado ? '✅ Liberado' : '🔒 Bloqueado'}
                    </span>
                </div>
                <div class="col-4">
                    <button class="btn btn-sm ${estaLiberado ? 'btn-warning' : 'btn-success'} w-100" 
                            onclick="liberarParticipante('${username}')">
                        ${estaLiberado ? 'Bloquear' : 'Liberar'}
                    </button>
                </div>
            </div>
        `;
        container.appendChild(div);
    }
    
    if (!participantesEncontrados) {
        container.innerHTML = '<div class="alert alert-info">Nenhum participante cadastrado.</div>';
    }
}

function liberarParticipante(username) {
    if (!dados.editoresLiberados) dados.editoresLiberados = [];
    
    const index = dados.editoresLiberados.indexOf(username);
    if (index > -1) {
        dados.editoresLiberados.splice(index, 1);
        showSuccess(`${username} foi bloqueado!`);
    } else {
        dados.editoresLiberados.push(username);
        showSuccess(`${username} foi liberado para editar!`);
    }
    
    salvarDadosGitHub(dados);
    carregarListaParticipantes();
}

function liberarTodos() {
    dados.editoresLiberados = Object.keys(USUARIOS).filter(u => u !== 'admin');
    salvarDadosGitHub(dados);
    carregarListaParticipantes();
    showSuccess('Todos os participantes foram liberados!');
}

function importarExcel() {
    const fileInput = document.getElementById('excelFile');
    const file = fileInput.files[0];
    
    if (!file) {
        showError('Selecione um arquivo Excel');
        return;
    }
    
    // Verificar se a biblioteca XLSX está disponível
    if (typeof XLSX === 'undefined') {
        showError('Biblioteca Excel não carregada. Aguarde um momento e tente novamente.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array'});
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(sheet);
            
            let importados = 0;
            let erros = [];
            
            rows.forEach(row => {
                const participante = row.Participante;
                const jogo = row.Jogo;
                const golsCasa = row['Gols Casa'];
                const golsFora = row['Gols Fora'];
                
                const jogoObj = dados.jogos.find(j => `${j.timeCasa} x ${j.timeFora}` === jogo);
                
                if (jogoObj && USUARIOS[participante]) {
                    // Remover palpite antigo
                    dados.palpites = dados.palpites.filter(p => !(p.usuario === participante && p.jogoId === jogoObj.id));
                    
                    // Adicionar novo palpite
                    dados.palpites.push({
                        usuario: participante,
                        jogoId: jogoObj.id,
                        casa: parseInt(golsCasa),
                        fora: parseInt(golsFora),
                        dataPalpite: new Date().toISOString()
                    });
                    importados++;
                } else {
                    erros.push(`${participante} - ${jogo}`);
                }
            });
            
            salvarDadosGitHub(dados);
            const resultDiv = document.getElementById('importResult');
            if (resultDiv) {
                resultDiv.innerHTML = `
                    <div class="alert alert-success mt-2">✅ Importados ${importados} palpites!</div>
                    ${erros.length > 0 ? `<div class="alert alert-warning mt-2">⚠️ Não importados: ${erros.join(', ')}</div>` : ''}
                `;
            }
            showSuccess(`${importados} palpites importados com sucesso!`);
        } catch (error) {
            console.error('Erro ao importar Excel:', error);
            showError('Erro ao processar o arquivo Excel. Verifique o formato.');
        }
    };
    
    reader.onerror = function() {
        showError('Erro ao ler o arquivo.');
    };
    
    reader.readAsArrayBuffer(file);
}

// Função para abrir tabs (já existe no HTML, mas garantimos que funciona)
window.openTab = function(evt, tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }
    document.getElementById(tabName).className += " active";
    if (evt && evt.currentTarget) {
        evt.currentTarget.className += " active";
    }
};

// Carregar admin quando a página iniciar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', carregarAdmin);
} else {
    carregarAdmin();
}