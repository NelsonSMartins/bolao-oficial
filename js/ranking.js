let dados = null;

function calcularPontuacao(palpite, resultado) {
    if (!resultado) return 0;
    
    const acertouPlacar = (palpite.casa === resultado.casa && palpite.fora === resultado.fora);
    if (acertouPlacar) return 3;
    
    const palpiteVencedor = palpite.casa > palpite.fora ? 'casa' : (palpite.casa < palpite.fora ? 'fora' : 'empate');
    const resultadoVencedor = resultado.casa > resultado.fora ? 'casa' : (resultado.casa < resultado.fora ? 'fora' : 'empate');
    
    if (palpiteVencedor === resultadoVencedor) return 1;
    
    return 0;
}

async function carregarRanking() {
    const usuario = verificarLogin();
    if (!usuario) return;
    
    document.getElementById('userName').textContent = usuario.nome;
    
    dados = await lerDadosGitHub();
    if (!dados) {
        alert('Erro ao carregar dados');
        return;
    }
    
    const pontosPorUsuario = {};
    
    for (const [username, userInfo] of Object.entries(USUARIOS)) {
        if (username === 'admin') continue;
        
        let totalPontos = 0;
        const palpitesUsuario = dados.palpites.filter(p => p.usuario === username);
        
        for (const palpite of palpitesUsuario) {
            const resultado = dados.resultados[palpite.jogoId];
            totalPontos += calcularPontuacao(palpite, resultado);
        }
        
        pontosPorUsuario[username] = {
            nome: userInfo.nome,
            pontos: totalPontos
        };
    }
    
    const ranking = Object.entries(pontosPorUsuario)
        .sort((a, b) => b[1].pontos - a[1].pontos)
        .map(([username, data], index) => ({
            posicao: index + 1,
            nome: data.nome,
            pontos: data.pontos
        }));
    
    renderizarRanking(ranking);
}

function renderizarRanking(ranking) {
    const container = document.getElementById('rankingContainer');
    container.innerHTML = '';
    
    ranking.forEach(item => {
        let medalha = '';
        if (item.posicao === 1) medalha = '🥇';
        else if (item.posicao === 2) medalha = '🥈';
        else if (item.posicao === 3) medalha = '🥉';
        else medalha = `${item.posicao}º`;
        
        const rankingDiv = document.createElement('div');
        rankingDiv.className = 'ranking-item';
        rankingDiv.innerHTML = `
            <div class="ranking-posicao">${medalha}</div>
            <div class="ranking-nome">${item.nome}</div>
            <div class="ranking-pontos">${item.pontos} pts</div>
        `;
        container.appendChild(rankingDiv);
    });
    
    if (ranking.length === 0) {
        container.innerHTML = '<div class="alert alert-info">Aguardando palpites e resultados...</div>';
    }
}

document.addEventListener('DOMContentLoaded', carregarRanking);