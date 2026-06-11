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
            jogos: JOGOS_PADRAO,
            palpites: [],
            resultados: {},
            editoresLiberados: [],
            proximoJogoId: 49
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
                <div class="col-7">
                    <strong>${jogo.timeCasa} x ${jogo.timeFora}</strong>
                    <br><small class="text-muted">${formatarDataAdmin(jogo.data)}</small>
                </div>
                <div class="col-5 text-end">
                    <button class="btn btn-danger btn-sm" onclick="removerJogo(${jogo.id})">Remover</button>
                </div>
            </div>
        `;
        container.appendChild(jogoDiv);
    });
}

function formatarDataAdmin(dataStr) {
    if (!dataStr) return '';
    const datas = {
        '2026-06-11': '11/06',
        '2026-06-12': '12/06',
        '2026-06-13': '13/06',
        '2026-06-14': '14/06',
        '2026-06-15': '15/06',
        '2026-06-16': '16/06',
        '2026-06-17': '17/06',
        '2026-06-18': '18/06',
        '2026-06-19': '19/06',
        '2026-06-20': '20/06',
        '2026-06-21': '21/06',
        '2026-06-22': '22/06',
        '2026-06-23': '23/06'
    };
    return datas[dataStr] || dataStr;
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
        data: new Date().toISOString().split('T')[0],
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
    if (confirm('Remover este jogo? Isso também removerá todos os palpites relacionados.')) {
        dados.jogos = dados.jogos.filter(j => j.id !== id);
        dados.palpites = dados.palpites.filter(p => p.jogoId !== id);
        delete dados.resultados[id];
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
    
    // Agrupar por data
    const jogosPorData = {};
    dados.jogos.forEach(jogo => {
        const data = jogo.data || '2026-06';
        if (!jogosPorData[data]) {
            jogosPorData[data] = [];
        }
        jogosPorData[data].push(jogo);
    });
    
    const datasOrdenadas = Object.keys(jogosPorData).sort();
    
    datasOrdenadas.forEach(data => {
        const dataGroup = document.createElement('div');
        dataGroup.className = 'card mb-3';
        dataGroup.innerHTML = `<div class="card-header bg-secondary text-white">📅 ${formatarDataAdmin(data)}</div>`;
        
        const dataBody = document.createElement('div');
        dataBody.className = 'card-body';
        
        jogosPorData[data].forEach(jogo => {
            const resultado = dados.resultados[jogo.id] || {};
            
            const div = document.createElement('div');
            div.className = 'jogo-card';
            div.innerHTML = `
                <strong>${jogo.timeCasa} x ${jogo.timeFora}</strong>
                <div class="row mt-2">
                    <div class="col-4">
                        <input type="number" id="res_casa_${jogo.id}" class="form-control" 
                               value="${resultado.casa !== undefined ? resultado.casa : ''}" 
                               placeholder="Gols Casa" min="0" step="1" 
                               onchange="validarPlacar(${jogo.id})">
                    </div>
                    <div class="col-1 text-center pt-2">x</div>
                    <div class="col-4">
                        <input type="number" id="res_fora_${jogo.id}" class="form-control" 
                               value="${resultado.fora !== undefined ? resultado.fora : ''}" 
                               placeholder="Gols Fora" min="0" step="1"
                               onchange="validarPlacar(${jogo.id})">
                    </div>
                    <div class="col-3">
                        <span id="valid_${jogo.id}" class="badge bg-success" style="display:none">✓ Válido</span>
                        <span id="invalid_${jogo.id}" class="badge bg-danger" style="display:none">⚠️ Inválido</span>
                    </div>
                </div>
            `;
            dataBody.appendChild(div);
        });
        
        dataGroup.appendChild(dataBody);
        container.appendChild(dataGroup);
    });
}

function validarPlacar(jogoId) {
    const casaInput = document.getElementById(`res_casa_${jogoId}`);
    const foraInput = document.getElementById(`res_fora_${jogoId}`);
    const validSpan = document.getElementById(`valid_${jogoId}`);
    const invalidSpan = document.getElementById(`invalid_${jogoId}`);
    
    if (casaInput && foraInput && casaInput.value !== '' && foraInput.value !== '') {
        const casa = parseInt(casaInput.value);
        const fora = parseInt(foraInput.value);
        
        if (casa >= 0 && fora >= 0 && casa <= 30 && fora <= 30) {
            validSpan.style.display = 'inline-block';
            invalidSpan.style.display = 'none';
        } else {
            validSpan.style.display = 'none';
            invalidSpan.style.display = 'inline-block';
            showError('Placar inválido! Os gols devem estar entre 0 e 30.');
        }
    } else {
        validSpan.style.display = 'none';
        invalidSpan.style.display = 'none';
    }
}

async function salvarResultados() {
    const novosResultados = {};
    let invalido = false;
    
    for (const jogo of dados.jogos) {
        const casaInput = document.getElementById(`res_casa_${jogo.id}`);
        const foraInput = document.getElementById(`res_fora_${jogo.id}`);
        
        if (casaInput && foraInput && casaInput.value !== '' && foraInput.value !== '') {
            const casa = parseInt(casaInput.value);
            const fora = parseInt(foraInput.value);
            
            if (casa >= 0 && casa <= 30 && fora >= 0 && fora <= 30) {
                novosResultados[jogo.id] = {
                    casa: casa,
                    fora: fora
                };
            } else {
                invalido = true;
                showError(`Placar inválido para ${jogo.timeCasa} x ${jogo.timeFora}`);
            }
        }
    }
    
    if (invalido) return;
    
    dados.resultados = novosResultados;
    const sucesso = await salvarDadosGitHub(dados);
    
    if (sucesso) {
        showSuccess('Resultados salvos! Ranking atualizado.');
        carregarResultados();
    }
}

function carregarListaParticipantes() {
    const container = document.getElementById('listaParticipantes');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Botão para limpar todos os palpites
    const clearAllBtn = document.createElement('div');
    clearAllBtn.className = 'alert alert-warning mb-3';
    clearAllBtn.innerHTML = `
        <strong>⚠️ Atenção Administrador:</strong>
        <button class="btn btn-danger btn-sm float-end" onclick="limparTodosPalpites()">🗑️ Limpar Todos os Palpites</button>
        <div class="clearfix"></div>
        <small class="text-muted">Isso remove TODOS os palpites de TODOS os participantes. Use com cuidado!</small>
    `;
    container.appendChild(clearAllBtn);
    
    let participantesEncontrados = false;
    
    for (const [username, userInfo] of Object.entries(USUARIOS)) {
        if (username === 'admin') continue;
        
        participantesEncontrados = true;
        const estaLiberado = dados.editoresLiberados && dados.editoresLiberados.includes(username);
        const qtdPalpites = dados.palpites.filter(p => p.usuario === username).length;
        
        const div = document.createElement('div');
        div.className = 'jogo-card';
        div.innerHTML = `
            <div class="row align-items-center">
                <div class="col-4">
                    <strong>${userInfo.nome}</strong><br>
                    <small class="text-muted">${username}</small>
                </div>
                <div class="col-2">
                    <span class="badge bg-info">${qtdPalpites} palpites</span>
                </div>
                <div class="col-3">
                    <span class="${estaLiberado ? 'text-success' : 'text-danger'}">
                        ${estaLiberado ? '✅ Liberado' : '🔒 Bloqueado'}
                    </span>
                </div>
                <div class="col-3">
                    <button class="btn btn-sm ${estaLiberado ? 'btn-warning' : 'btn-success'} w-100 mb-1" 
                            onclick="liberarParticipante('${username}')">
                        ${estaLiberado ? 'Bloquear' : 'Liberar'}
                    </button>
                    <button class="btn btn-sm btn-outline-danger w-100" 
                            onclick="limparPalpitesParticipante('${username}')">
                        Limpar Palpites
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
    if (confirm('Liberar TODOS os participantes para editar?')) {
        dados.editoresLiberados = Object.keys(USUARIOS).filter(u => u !== 'admin');
        salvarDadosGitHub(dados);
        carregarListaParticipantes();
        showSuccess('Todos os participantes foram liberados!');
    }
}

function limparPalpitesParticipante(username) {
    if (confirm(`Remover TODOS os palpites de ${username}? Esta ação não pode ser desfeita.`)) {
        dados.palpites = dados.palpites.filter(p => p.usuario !== username);
        salvarDadosGitHub(dados);
        carregarListaParticipantes();
        showSuccess(`Palpites de ${username} removidos!`);
    }
}

function limparTodosPalpites() {
    if (confirm('⚠️ ATENÇÃO! Isso removerá TODOS os palpites de TODOS os participantes. Esta ação NÃO pode ser desfeita. Digite "CONFIRMAR" para prosseguir.')) {
        const confirmacao = prompt('Digite "CONFIRMAR" para confirmar:');
        if (confirmacao === 'CONFIRMAR') {
            dados.palpites = [];
            salvarDadosGitHub(dados);
            carregarListaParticipantes();
            showSuccess('Todos os palpites foram removidos!');
        } else {
            showError('Operação cancelada.');
        }
    }
}

function importarExcel() {
    const fileInput = document.getElementById('excelFile');
    const file = fileInput.files[0];
    
    if (!file) {
        showError('Selecione um arquivo Excel');
        return;
    }
    
    if (typeof XLSX === 'undefined') {
        showError('Biblioteca Excel não carregada.');
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
                    dados.palpites = dados.palpites.filter(p => !(p.usuario === participante && p.jogoId === jogoObj.id));
                    
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
                    ${erros.length > 0 ? `<div class="alert alert-warning mt-2">⚠️ Erros: ${erros.join(', ')}</div>` : ''}
                `;
            }
            showSuccess(`${importados} palpites importados!`);
        } catch (error) {
            showError('Erro ao processar Excel.');
        }
    };
    reader.readAsArrayBuffer(file);
}

window.validarPlacar = validarPlacar;
window.limparPalpitesParticipante = limparPalpitesParticipante;
window.limparTodosPalpites = limparTodosPalpites;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', carregarAdmin);
} else {
    carregarAdmin();
}