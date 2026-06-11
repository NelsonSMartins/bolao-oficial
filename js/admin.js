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
    container.innerHTML = '';
    
    if (dados.jogos.length === 0) {
        container.innerHTML = '<div class="alert alert-info">Nenhum jogo cadastrado ainda.</div>';
        return;
    }
    
    dados.jogos.forEach(jogo => {
        const jogoDiv = document.createElement('div');
        jogoDiv.className = 'jogo-card';
        jogoDiv.innerHTML = `
            <strong>${jogo.timeCasa} x ${jogo.timeFora}</strong>
            <button class="btn btn-danger btn-sm float-end" onclick="removerJogo(${jogo.id})">Remover</button>
        `;
        container.appendChild(jogoDiv);
    });
}

function adicionarJogo() {
    const timeCasa = document.getElementById('timeCasa').value;
    const timeFora = document.getElementById('timeFora').value;
    
    if (!timeCasa || !timeFora) {
        showError('Preencha ambos os times');
        return;
    }
    
    dados.jogos.push({
        id: dados.proximoJogoId++,
        timeCasa: timeCasa,
        timeFora: timeFora,
        ativo: true
    });
    
    salvarDadosGitHub(dados);
    document.getElementById('timeCasa').value = '';
    document.getElementById('timeFora').value = '';
    carregarListaJogos();
    carregarResultados();
}

function removerJogo(id) {
    if (confirm('Remover este jogo?')) {
        dados.jogos = dados.jogos.filter(j => j.id !== id);
        salvarDadosGitHub(dados);
        carregarListaJogos();
        carregarResultados();
    }
}

function carregarResultados() {
    const container = document.getElementById('resultadosJogos');
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
            <strong>${jogo.timeCasa} x ${jogo.timeFora}</strong><br>
            <div class="row mt-2">
                <div class="col-4">
                    <input type="number" id="res_casa_${jogo.id}" class="form-control" value="${resultado.casa || ''}" placeholder="Gols Casa" min="0">
                </div>
                <div class="col-1 text-center">x</div>
                <div class="col-4">
                    <input type="number" id="res_fora_${jogo.id}" class="form-control" value="${resultado.fora || ''}" placeholder="Gols Fora" min="0">
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
    container.innerHTML = '';
    
    for (const [username, userInfo] of Object.entries(USUARIOS)) {
        if (username === 'admin') continue;
        
        const estaLiberado = dados.editoresLiberados && dados.editoresLiberados.includes(username);
        
        const div = document.createElement('div');
        div.className = 'jogo-card';
        div.innerHTML = `
            <div class="row align-items-center">
                <div class="col-6">
                    <strong>${userInfo.nome}</strong>
                </div>
                <div class="col-3">
                    <span class="${estaLiberado ? 'text-success' : 'text-danger'}">
                        ${estaLiberado ? '✅ Liberado' : '🔒 Bloqueado'}
                    </span>
                </div>
                <div class="col-3">
                    <button class="btn btn-sm ${estaLiberado ? 'btn-warning' : 'btn-success'} w-100" 
                            onclick="liberarParticipante('${username}')">
                        ${estaLiberado ? 'Bloquear' : 'Liberar'}
                    </button>
                </div>
            </div>
        `;
        container.appendChild(div);
    }
}

function liberarParticipante(username) {
    if (!dados.editoresLiberados) dados.editoresLiberados = [];
    
    const index = dados.editoresLiberados.indexOf(username);
    if (index > -1) {
        dados.editoresLiberados.splice(index, 1);
    } else {
        dados.editoresLiberados.push(username);
    }
    
    salvarDadosGitHub(dados);
    carregarListaParticipantes();
}

function liberarTodos() {
    dados.editoresLiberados = Object.keys(USUARIOS).filter(u => u !== 'admin');
    salvarDadosGitHub(dados);
    carregarListaParticipantes();
}

function importarExcel() {
    const fileInput = document.getElementById('excelFile');
    const file = fileInput.files[0];
    
    if (!file) {
        showError('Selecione um arquivo Excel');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
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
                dados.palpites = dados.palpites.filter(p => !(p.usuario === participante && p.jogoId === jogoObj.id));
                
                dados.palpites.push({
                    usuario: participante,
                    jogoId: jogoObj.id,
                    casa: golsCasa,
                    fora: golsFora,
                    dataPalpite: new Date().toISOString()
                });
                importados++;
            } else {
                erros.push(`${participante} - ${jogo}`);
            }
        });
        
        salvarDadosGitHub(dados);
        const resultDiv = document.getElementById('importResult');
        resultDiv.innerHTML = `
            <div class="alert alert-success mt-2">✅ Importados ${importados} palpites!</div>
            ${erros.length > 0 ? `<div class="alert alert-warning mt-2">⚠️ Não importados: ${erros.join(', ')}</div>` : ''}
        `;
    };
    
    reader.readAsArrayBuffer(file);
}

document.addEventListener('DOMContentLoaded', carregarAdmin);