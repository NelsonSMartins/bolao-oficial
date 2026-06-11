let dados = null;
let usuarioAtual = null;
let jogos = [];

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
            statusMsg.innerHTML = '✅ Você pode editar seus palpites! Os palpites já confirmados podem ser alterados.';
            statusMsg.className = 'alert alert-success';
        } else {
            statusMsg.innerHTML = '🔒 Seus palpites estão confirmados. Para alterar, solicite ao administrador que libere sua edição.';
            statusMsg.className = 'alert alert-warning';
        }
    }
    
    renderizarPalpites(podeEditar);
}

function renderizarPalpites(podeEditar) {
    const container = document.getElementById('palpitesContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    const palpitesUsuario = dados.palpites.filter(p => p.usuario === usuarioAtual.username);
    
    // Agrupar jogos por data
    const jogosPorData = {};
    jogos.forEach(jogo => {
        const data = jogo.data || '2026-06';
        if (!jogosPorData[data]) {
            jogosPorData[data] = [];
        }
        jogosPorData[data].push(jogo);
    });
    
    // Ordenar datas
    const datasOrdenadas = Object.keys(jogosPorData).sort();
    
    datasOrdenadas.forEach(data => {
        // Criar grupo por data
        const dataGroup = document.createElement('div');
        dataGroup.className = 'card mb-4';
        dataGroup.innerHTML = `<div class="card-header bg-dark text-white">📅 ${formatarData(data)}</div>`;
        
        const dataBody = document.createElement('div');
        dataBody.className = 'card-body';
        
        jogosPorData[data].forEach(jogo => {
            const palpite = palpitesUsuario.find(p => p.jogoId === jogo.id);
            const resultado = dados.resultados[jogo.id];
            const jogoBloqueado = resultado !== undefined; // Se já tem resultado, não pode editar
            
            const jogoDiv = document.createElement('div');
            jogoDiv.className = 'jogo-card';
            
            let statusHtml = '';
            if (resultado) {
                statusHtml = `<div class="badge badge-warning mt-2">🏁 Resultado oficial: ${resultado.casa} x ${resultado.fora}</div>`;
            }
            
            let confirmadoHtml = '';
            if (palpite && !podeEditar) {
                confirmadoHtml = `<div class="badge badge-success mt-2">✓ Confirmado</div>`;
            }
            
            jogoDiv.innerHTML = `
                <div class="jogo-titulo">${jogo.timeCasa} x ${jogo.timeFora}</div>
                <div class="jogo-times">
                    <div class="time-casa">${jogo.timeCasa}</div>
                    <div class="placar-inputs">
                        <input type="number" id="casa_${jogo.id}" class="palpite-input" 
                               value="${palpite ? palpite.casa : ''}" 
                               ${!podeEditar || jogoBloqueado ? 'disabled' : ''}
                               placeholder="0" min="0" max="20" step="1">
                        <span style="font-weight: bold;">x</span>
                        <input type="number" id="fora_${jogo.id}" class="palpite-input" 
                               value="${palpite ? palpite.fora : ''}" 
                               ${!podeEditar || jogoBloqueado ? 'disabled' : ''}
                               placeholder="0" min="0" max="20" step="1">
                    </div>
                    <div class="time-fora">${jogo.timeFora}</div>
                </div>
                ${statusHtml}
                ${confirmadoHtml}
            `;
            
            dataBody.appendChild(jogoDiv);
        });
        
        dataGroup.appendChild(dataBody);
        container.appendChild(dataGroup);
    });
    
    // Adicionar botão de salvar apenas se puder editar
    if (podeEditar) {
        const saveButton = document.createElement('button');
        saveButton.className = 'btn btn-success btn-block';
        saveButton.innerHTML = '💾 Confirmar Todos os Palpites';
        saveButton.onclick = salvarTodosPalpites;
        container.appendChild(saveButton);
    }
}

function formatarData(dataStr) {
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

async function salvarTodosPalpites() {
    const novosPalpites = [];
    let temPalpiteIncompleto = false;
    
    for (const jogo of jogos) {
        const casaInput = document.getElementById(`casa_${jogo.id}`);
        const foraInput = document.getElementById(`fora_${jogo.id}`);
        
        if (casaInput && foraInput) {
            if (casaInput.value && foraInput.value) {
                novosPalpites.push({
                    usuario: usuarioAtual.username,
                    jogoId: jogo.id,
                    casa: parseInt(casaInput.value),
                    fora: parseInt(foraInput.value),
                    dataPalpite: new Date().toISOString()
                });
            } else if (casaInput.value || foraInput.value) {
                temPalpiteIncompleto = true;
            }
        }
    }
    
    if (temPalpiteIncompleto) {
        showError('Por favor, preencha ambos os campos de gol para cada jogo que deseja palpitar.');
        return;
    }
    
    if (novosPalpites.length === 0) {
        showError('Por favor, preencha pelo menos um palpite.');
        return;
    }
    
    // Remover palpites antigos do usuário
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

// Função para calcular pontuação (usada pelo ranking)
function calcularPontuacao(palpite, resultado) {
    if (!resultado) return 0;
    
    const acertouPlacar = (palpite.casa === resultado.casa && palpite.fora === resultado.fora);
    if (acertouPlacar) return 3;
    
    const palpiteVencedor = palpite.casa > palpite.fora ? 'casa' : (palpite.casa < palpite.fora ? 'fora' : 'empate');
    const resultadoVencedor = resultado.casa > resultado.fora ? 'casa' : (resultado.casa < resultado.fora ? 'fora' : 'empate');
    
    if (palpiteVencedor === resultadoVencedor) return 1;
    
    return 0;
}

document.addEventListener('DOMContentLoaded', carregarPalpites);