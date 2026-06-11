let dados = null;
let usuarioAtual = null;

async function carregarPalpitesGeral() {
    usuarioAtual = verificarLogin();
    if (!usuarioAtual) return;
    
    document.getElementById('userName').textContent = usuarioAtual.nome;
    
    dados = await lerDadosGitHub();
    if (!dados) {
        alert('Erro ao carregar dados');
        return;
    }
    
    const filtroJogo = document.getElementById('filtroJogo');
    dados.jogos.forEach(jogo => {
        const option = document.createElement('option');
        option.value = jogo.id;
        option.textContent = `${jogo.timeCasa} x ${jogo.timeFora}`;
        filtroJogo.appendChild(option);
    });
    
    renderizarPalpitesGeral('todos');
}

function renderizarPalpitesGeral(filtroJogoId) {
    const container = document.getElementById('palpitesContainer');
    container.innerHTML = '';
    
    const palpitesPorUsuario = {};
    
    for (const [username, userInfo] of Object.entries(USUARIOS)) {
        if (username === 'admin') continue;
        
        const palpitesUsuario = dados.palpites.filter(p => p.usuario === username);
        
        palpitesPorUsuario[username] = {
            nome: userInfo.nome,
            palpites: palpitesUsuario
        };
    }
    
    const jogosParaMostrar = filtroJogoId === 'todos' 
        ? dados.jogos 
        : dados.jogos.filter(j => j.id == filtroJogoId);
    
    jogosParaMostrar.forEach(jogo => {
        const resultado = dados.resultados[jogo.id];
        
        const jogoCard = document.createElement('div');
        jogoCard.className = 'card mb-3';
        jogoCard.innerHTML = `
            <div class="card-header" style="background: #2c3e50;">
                <strong>${jogo.timeCasa} x ${jogo.timeFora}</strong>
                ${resultado ? `<span class="badge badge-success float-end">${resultado.casa} x ${resultado.fora}</span>` : '<span class="badge badge-warning float-end">⏳ Aguardando</span>'}
            </div>
            <div class="card-body" style="padding: 10px;">
                <div class="table-responsive">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>Participante</th>
                                <th>Palpite</th>
                                <th>Pontos</th>
                            </tr>
                        </thead>
                        <tbody id="palpites_${jogo.id}">
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        
        container.appendChild(jogoCard);
        
        const tbody = document.getElementById(`palpites_${jogo.id}`);
        
        for (const [username, data] of Object.entries(palpitesPorUsuario)) {
            const palpite = data.palpites.find(p => p.jogoId === jogo.id);
            
            if (palpite && resultado) {
                const pontos = calcularPontuacaoDisplay(palpite, resultado);
                const row = tbody.insertRow();
                row.innerHTML = `
                    <td><strong>${data.nome}</strong></td>
                    <td class="text-center"><span class="badge badge-primary">${palpite.casa} x ${palpite.fora}</span></td>
                    <td class="text-center"><span class="badge ${pontos > 0 ? 'badge-success' : 'badge-secondary'}">${pontos} pts</span></td>
                `;
            } else if (palpite && !resultado) {
                const row = tbody.insertRow();
                row.innerHTML = `
                    <td><strong>${data.nome}</strong></td>
                    <td class="text-center"><span class="badge badge-primary">${palpite.casa} x ${palpite.fora}</span></td>
                    <td class="text-center">⏳ Aguardando</td>
                `;
            } else if (!palpite) {
                const row = tbody.insertRow();
                row.innerHTML = `
                    <td><strong>${data.nome}</strong></td>
                    <td colspan="2" class="text-muted text-center">⚠️ Não palpou</td>
                `;
            }
        }
    });
}

function calcularPontuacaoDisplay(palpite, resultado) {
    if (!resultado) return 0;
    
    const acertouPlacar = (palpite.casa === resultado.casa && palpite.fora === resultado.fora);
    if (acertouPlacar) return 3;
    
    const palpiteVencedor = palpite.casa > palpite.fora ? 'casa' : (palpite.casa < palpite.fora ? 'fora' : 'empate');
    const resultadoVencedor = resultado.casa > resultado.fora ? 'casa' : (resultado.casa < resultado.fora ? 'fora' : 'empate');
    
    if (palpiteVencedor === resultadoVencedor) return 1;
    
    return 0;
}

function filtrarPalpites() {
    const filtro = document.getElementById('filtroJogo').value;
    renderizarPalpitesGeral(filtro);
}

document.addEventListener('DOMContentLoaded', carregarPalpitesGeral);