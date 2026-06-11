
function carregarRanking() {
    const usuario = verificarLogin();
    if (!usuario) return;
    
    document.getElementById('userName').innerHTML = usuario.nome;
    dados = lerDados();
    
    const ranking = calcularRanking();
    const container = document.getElementById('rankingContainer');
    
    if (ranking.length === 0) {
        container.innerHTML = '<div class="alert">Aguardando palpites e resultados...</div>';
        return;
    }
    
    let html = '<table class="ranking-table"><tr><th>Pos</th><th>Jogador</th><th>Pontos</th><th>Placar Exato</th><th>Resultado</th></tr>';
    
    ranking.forEach((item, idx) => {
        const medalha = idx === 0 ? '🥇' : (idx === 1 ? '🥈' : (idx === 2 ? '🥉' : `${idx+1}º`));
        html += `
            <tr class="${idx === 0 ? 'ranking-pos-1' : (idx === 1 ? 'ranking-pos-2' : (idx === 2 ? 'ranking-pos-3' : ''))}">
                <td>${medalha}</td>
                <td><strong>${item.nome}</strong></td>
                <td class="pontos">${item.pontos}</td>
                <td>${item.placaresExatos}</td>
                <td>${item.resultadosCorretos}</td>
            </tr>
        `;
    });
    
    html += '</table>';
    container.innerHTML = html;
}

function calcularRanking() {
    const ranking = [];
    
    for (const [username, user] of Object.entries(USUARIOS)) {
        if (username === 'admin') continue;
        
        let pontos = 0;
        let placaresExatos = 0;
        let resultadosCorretos = 0;
        
        for (const jogo of dados.jogos) {
            const palpiteKey = `${jogo.id}_${username}`;
            const palpite = dados.palpites[palpiteKey];
            const resultado = dados.resultados[jogo.id];
            
            if (palpite && resultado) {
                if (palpite.casa === resultado.casa && palpite.fora === resultado.fora) {
                    pontos += 3;
                    placaresExatos++;
                } else {
                    const palpiteVencedor = palpite.casa > palpite.fora ? 'casa' : (palpite.casa < palpite.fora ? 'fora' : 'empate');
                    const resultadoVencedor = resultado.casa > resultado.fora ? 'casa' : (resultado.casa < resultado.fora ? 'fora' : 'empate');
                    if (palpiteVencedor === resultadoVencedor) {
                        pontos += 1;
                        resultadosCorretos++;
                    }
                }
            }
        }
        
        ranking.push({
            username,
            nome: user.nome,
            pontos,
            placaresExatos,
            resultadosCorretos
        });
    }
    
    ranking.sort((a, b) => {
        if (a.pontos !== b.pontos) return b.pontos - a.pontos;
        return b.placaresExatos - a.placaresExatos;
    });
    
    return ranking;
}

document.addEventListener('DOMContentLoaded', carregarRanking);