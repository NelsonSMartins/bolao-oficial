let dados = null;
let usuarioAtual = null;
let jogos = [];

async function carregarPalpites() {
    usuarioAtual = verificarLogin();
    if (!usuarioAtual) return;
    
    document.getElementById('userName').textContent = usuarioAtual.nome;
    
    dados = await lerDadosGitHub();
    if (!dados) {
        alert('Erro ao carregar dados');
        return;
    }
    
    jogos = dados.jogos;
    
    const podeEditar = dados.editoresLiberados && dados.editoresLiberados.includes(usuarioAtual.username);
    const statusMsg = document.getElementById('statusMsg');
    
    if (podeEditar) {
        statusMsg.innerHTML = '✅ Você pode editar seus palpites!';
        statusMsg.className = 'alert alert-success';
    } else {
        statusMsg.innerHTML = '🔒 Palpites bloqueados. Aguarde o administrador liberar para edição.';
        statusMsg.className = 'alert alert-warning';
    }
    
    renderizarPalpites(podeEditar);
}

function renderizarPalpites(podeEditar) {
    const container = document.getElementById('palpitesContainer');
    container.innerHTML = '';
    
    const palpitesUsuario = dados.palpites.filter(p => p.usuario === usuarioAtual.username);
    
    jogos.forEach(jogo => {
        const palpite = palpitesUsuario.find(p => p.jogoId === jogo.id);
        const resultado = dados.resultados[jogo.id];
        
        const jogoDiv = document.createElement('div');
        jogoDiv.className = 'jogo-card';
        
        let statusHtml = '';
        if (resultado) {
            statusHtml = `<div class="badge badge-warning mt-2">Resultado oficial: ${resultado.casa} x ${resultado.fora}</div>`;
        }
        
        jogoDiv.innerHTML = `
            <div class="jogo-titulo">${jogo.timeCasa} x ${jogo.timeFora}</div>
            <div class="jogo-times">
                <div class="time-casa">${jogo.timeCasa}</div>
                <div class="placar-inputs">
                    <input type="number" id="casa_${jogo.id}" class="palpite-input" 
                           value="${palpite ? palpite.casa : ''}" 
                           ${!podeEditar || resultado ? 'disabled' : ''}
                           placeholder="0" min="0" max="20">
                    <span style="font-weight: bold;">x</span>
                    <input type="number" id="fora_${jogo.id}" class="palpite-input" 
                           value="${palpite ? palpite.fora : ''}" 
                           ${!podeEditar || resultado ? 'disabled' : ''}
                           placeholder="0" min="0" max="20">
                </div>
                <div class="time-fora">${jogo.timeFora}</div>
            </div>
            ${statusHtml}
        `;
        
        container.appendChild(jogoDiv);
    });
}

async function salvarTodosPalpites() {
    const novosPalpites = [];
    
    for (const jogo of jogos) {
        const casaInput = document.getElementById(`casa_${jogo.id}`);
        const foraInput = document.getElementById(`fora_${jogo.id}`);
        
        if (casaInput && foraInput && casaInput.value && foraInput.value) {
            novosPalpites.push({
                usuario: usuarioAtual.username,
                jogoId: jogo.id,
                casa: parseInt(casaInput.value),
                fora: parseInt(foraInput.value),
                dataPalpite: new Date().toISOString()
            });
        }
    }
    
    dados.palpites = dados.palpites.filter(p => p.usuario !== usuarioAtual.username);
    dados.palpites.push(...novosPalpites);
    
    const sucesso = await salvarDadosGitHub(dados);
    if (sucesso) {
        location.reload();
    }
}

document.addEventListener('DOMContentLoaded', carregarPalpites);