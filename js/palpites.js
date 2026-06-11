let dados = null;
let usuarioAtual = null;
let jogos = [];
let filtroAtual = 'todos';

async function carregarPalpites() {
    usuarioAtual = verificarLogin();
    if (!usuarioAtual) return;
    
    const userNameSpan = document.getElementById('userName');
    if (userNameSpan) {
        userNameSpan.textContent = usuarioAtual.nome;
    }
    
    dados = await lerDadosGitHub();
    if (!dados) {
        alert('Erro ao carregar dados');
        return;
    }
    
    jogos = dados.jogos;
    
    const podeEditar = dados.editoresLiberados && dados.editoresLiberados.includes(usuarioAtual.username);
    const statusMsg = document.getElementById('statusMsg');
    
    if (statusMsg) {
        if (podeEditar) {
            statusMsg.innerHTML = '✅ Você pode editar seus palpites! Faça suas alterações e clique em "Confirmar Palpites".';
            statusMsg.className = 'alert alert-success';
        } else {
            statusMsg.innerHTML = '🔒 Seus palpites estão confirmados. Para alterar, solicite ao administrador que libere sua edição.';
            statusMsg.className = 'alert alert-warning';
        }
    }
    
    carregarFiltroDatas();
    renderizarPalpites(podeEditar);
}

function carregarFiltroDatas() {
    const filtroContainer = document.getElementById('filtroDatas');
    if (!filtroContainer) return;
    
    // Obter datas únicas dos jogos
    const datasUnicas = [...new Set(jogos.map(j => j.data).filter(d => d))];
    datasUnicas.sort();
    
    filtroContainer.innerHTML = `
        <div class="btn-group flex-wrap mb-3" style="gap: 5px;">
            <button class="btn ${filtroAtual === 'todos' ? 'btn-primary' : 'btn-outline-primary'}" 
                    onclick="setFiltro('todos')">📋 Todos</button>
            ${datasUnicas.map(data => `
                <button class="btn ${filtroAtual === data ? 'btn-primary' : 'btn-outline-primary'}" 
                        onclick="setFiltro('${data}')">📅 ${formatarDataCurta(data)}</button>
            `).join('')}
        </div>
    `;
}

function setFiltro(filtro) {
    filtroAtual = filtro;
    const podeEditar = dados.editoresLiberados && dados.editoresLiberados.includes(usuarioAtual.username);
    carregarFiltroDatas();
    renderizarPalpites(podeEditar);
}

function formatarDataCurta(dataStr) {
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

function formatarDataLonga(dataStr) {
    const datas = {
        '2026-06-11': '11 de Junho - Quinta',
        '2026-06-12': '12 de Junho - Sexta',
        '2026-06-13': '13 de Junho - Sábado',
        '2026-06-14': '14 de Junho - Domingo',
        '2026-06-15': '15 de Junho - Segunda',
        '2026-06-16': '16 de Junho - Terça',
        '2026-06-17': '17 de Junho - Quarta',
        '2026-06-18': '18 de Junho - Quinta',
        '2026-06-19': '19 de Junho - Sexta',
        '2026-06-20': '20 de Junho - Sábado',
        '2026-06-21': '21 de Junho - Domingo',
        '2026-06-22': '22 de Junho - Segunda',
        '2026-06-23': '23 de Junho - Terça'
    };
    return datas[dataStr] || dataStr;
}

function renderizarPalpites(podeEditar) {
    const container = document.getElementById('palpitesContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    const palpitesUsuario = dados.palpites.filter(p => p.usuario === usuarioAtual.username);
    
    // Filtrar jogos pela data selecionada
    let jogosFiltrados = jogos;
    if (filtroAtual !== 'todos') {
        jogosFiltrados = jogos.filter(j => j.data === filtroAtual);
    }
    
    if (jogosFiltrados.length === 0) {
        container.innerHTML = '<div class="alert alert-info">Nenhum jogo nesta data.</div>';
        return;
    }
    
    // Agrupar por data
    const jogosPorData = {};
    jogosFiltrados.forEach(jogo => {
        const data = jogo.data || '2026-06';
        if (!jogosPorData[data]) {
            jogosPorData[data] = [];
        }
        jogosPorData[data].push(jogo);
    });
    
    const datasOrdenadas = Object.keys(jogosPorData).sort();
    
    datasOrdenadas.forEach(data => {
        const dataGroup = document.createElement('div');
        dataGroup.className = 'card mb-4';
        dataGroup.innerHTML = `<div class="card-header bg-dark text-white">📅 ${formatarDataLonga(data)}</div>`;
        
        const dataBody = document.createElement('div');
        dataBody.className = 'card-body';
        
        jogosPorData[data].forEach(jogo => {
            const palpite = palpitesUsuario.find(p => p.jogoId === jogo.id);
            const resultado = dados.resultados[jogo.id];
            const jogoBloqueado = resultado !== undefined;
            
            const jogoDiv = document.createElement('div');
            jogoDiv.className = 'jogo-card';
            
            let resultadoHtml = '';
            if (resultado) {
                const pontos = calcularPontuacaoExibicao(palpite, resultado);
                resultadoHtml = `
                    <div class="mt-2">
                        <span class="badge bg-secondary">🏁 Resultado oficial: ${resultado.casa} x ${resultado.fora}</span>
                        ${palpite ? `<span class="badge ${pontos > 0 ? 'bg-success' : 'bg-danger'} ms-2">${pontos} ponto(s)</span>` : ''}
                    </div>
                `;
            }
            
            let confirmadoHtml = '';
            if (palpite && !podeEditar && !resultado) {
                confirmadoHtml = `<div class="badge bg-success mt-2">✓ Palpite confirmado</div>`;
            }
            
            // Validar placar do palpite
            let palpiteValido = true;
            let mensagemInvalido = '';
            if (palpite && (palpite.casa < 0 || palpite.casa > 30 || palpite.fora < 0 || palpite.fora > 30)) {
                palpiteValido = false;
                mensagemInvalido = '<div class="text-danger small mt-1">⚠️ Placar inválido! Use valores entre 0 e 30.</div>';
            }
            
            jogoDiv.innerHTML = `
                <div class="jogo-titulo">${jogo.timeCasa} x ${jogo.timeFora}</div>
                <div class="jogo-times">
                    <div class="time-casa">${jogo.timeCasa}</div>
                    <div class="placar-inputs">
                        <input type="number" id="casa_${jogo.id}" class="palpite-input ${!palpiteValido ? 'is-invalid' : ''}" 
                               value="${palpite ? palpite.casa : ''}" 
                               ${!podeEditar || jogoBloqueado ? 'disabled' : ''}
                               placeholder="0" min="0" max="30" step="1">
                        <span style="font-weight: bold;">x</span>
                        <input type="number" id="fora_${jogo.id}" class="palpite-input ${!palpiteValido ? 'is-invalid' : ''}" 
                               value="${palpite ? palpite.fora : ''}" 
                               ${!podeEditar || jogoBloqueado ? 'disabled' : ''}
                               placeholder="0" min="0" max="30" step="1">
                    </div>
                    <div class="time-fora">${jogo.timeFora}</div>
                </div>
                ${mensagemInvalido}
                ${resultadoHtml}
                ${confirmadoHtml}
            `;
            
            // Adicionar evento de validação
            if (podeEditar && !jogoBloqueado) {
                const casaInput = jogoDiv.querySelector(`#casa_${jogo.id}`);
                const foraInput = jogoDiv.querySelector(`#fora_${jogo.id}`);
                if (casaInput && foraInput) {
                    casaInput.addEventListener('change', () => validarPalpiteInput(jogo.id));
                    foraInput.addEventListener('change', () => validarPalpiteInput(jogo.id));
                }
            }
            
            dataBody.appendChild(jogoDiv);
        });
        
        dataGroup.appendChild(dataBody);
        container.appendChild(dataGroup);
    });
    
    if (podeEditar) {
        const saveButton = document.createElement('button');
        saveButton.className = 'btn btn-success btn-block mt-3';
        saveButton.innerHTML = '💾 Confirmar Todos os Palpites';
        saveButton.onclick = salvarTodosPalpites;
        container.appendChild(saveButton);
    }
}

function validarPalpiteInput(jogoId) {
    const casaInput = document.getElementById(`casa_${jogoId}`);
    const foraInput = document.getElementById(`fora_${jogoId}`);
    
    if (casaInput && foraInput) {
        const casa = parseInt(casaInput.value);
        const fora = parseInt(foraInput.value);
        
        if ((casaInput.value && (casa < 0 || casa > 30)) || 
            (foraInput.value && (fora < 0 || fora > 30))) {
            casaInput.classList.add('is-invalid');
            foraInput.classList.add('is-invalid');
            showError('Placar inválido! Use valores entre 0 e 30.');
        } else {
            casaInput.classList.remove('is-invalid');
            foraInput.classList.remove('is-invalid');
        }
    }
}

function calcularPontuacaoExibicao(palpite, resultado) {
    if (!palpite || !resultado) return 0;
    
    const acertouPlacar = (palpite.casa === resultado.casa && palpite.fora === resultado.fora);
    if (acertouPlacar) return 3;
    
    const palpiteVencedor = palpite.casa > palpite.fora ? 'casa' : (palpite.casa < palpite.fora ? 'fora' : 'empate');
    const resultadoVencedor = resultado.casa > resultado.fora ? 'casa' : (resultado.casa < resultado.fora ? 'fora' : 'empate');
    
    if (palpiteVencedor === resultadoVencedor) return 1;
    
    return 0;
}

async function salvarTodosPalpites() {
    const novosPalpites = [];
    let temPalpiteIncompleto = false;
    let temPalpiteInvalido = false;
    
    for (const jogo of jogos) {
        const casaInput = document.getElementById(`casa_${jogo.id}`);
        const foraInput = document.getElementById(`fora_${jogo.id}`);
        
        if (casaInput && foraInput) {
            const casaValue = casaInput.value;
            const foraValue = foraInput.value;
            
            if (casaValue && foraValue) {
                const casa = parseInt(casaValue);
                const fora = parseInt(foraValue);
                
                if (casa >= 0 && casa <= 30 && fora >= 0 && fora <= 30) {
                    novosPalpites.push({
                        usuario: usuarioAtual.username,
                        jogoId: jogo.id,
                        casa: casa,
                        fora: fora,
                        dataPalpite: new Date().toISOString()
                    });
                } else {
                    temPalpiteInvalido = true;
                    showError(`Palpite inválido para ${jogo.timeCasa} x ${jogo.timeFora}. Use valores entre 0 e 30.`);
                }
            } else if (casaValue || foraValue) {
                temPalpiteIncompleto = true;
            }
        }
    }
    
    if (temPalpiteInvalido) return;
    
    if (temPalpiteIncompleto) {
        showError('Por favor, preencha ambos os campos de gol para cada jogo que deseja palpitar.');
        return;
    }
    
    if (novosPalpites.length === 0) {
        showError('Por favor, preencha pelo menos um palpite.');
        return;
    }
    
    dados.palpites = dados.palpites.filter(p => p.usuario !== usuarioAtual.username);
    dados.palpites.push(...novosPalpites);
    
    const sucesso = await salvarDadosGitHub(dados);
    if (sucesso) {
        showSuccess('Palpites confirmados com sucesso!');
        setTimeout(() => {
            location.reload();
        }, 1500);
    }
}

window.setFiltro = setFiltro;

document.addEventListener('DOMContentLoaded', carregarPalpites);