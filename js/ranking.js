let dados = null;

function calcularPontuacaoRanking(palpite, resultado) {
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
    
    const userNameSpan = document.getElementById('userName');
    if (userNameSpan) {
        userNameSpan.textContent = usuario.nome;
    }
    
    dados = await lerDadosGitHub();
    if (!dados) {
        alert('Erro ao carregar dados');
        return;
    }
    
    const pontosPorUsuario = [];
    
    for (const [username, userInfo] of Object.entries(USUARIOS)) {
        if (username === 'admin') continue;
        
        let totalPontos = 0;
        let placaresExatos = 0;
        let acertosResultado = 0;
        
        const palpitesUsuario = dados.palpites.filter(p => p.usuario === username);
        
        for (const palpite of palpitesUsuario) {
            const resultado = dados.resultados[palpite.jogoId];
            if (resultado) {
                const pontos = calcularPontuacaoRanking(palpite, resultado);
                totalPontos += pontos;
                if (pontos === 3) placaresExatos++;
                if (pontos === 1) acertosResultado++;
            }
        }
        
        pontosPorUsuario.push({
            username: username,
            nome: userInfo.nome,
            pontos: totalPontos,
            placaresExatos: placaresExatos,
            acertosResultado: acertosResultado
        });
    }
    
    // Ordenar: primeiro por pontos, depois por placares exatos
    pontosPorUsuario.sort((a, b) => {
        if (a.pontos !== b.pontos) return b.pontos - a.pontos;
        return b.placaresExatos - a.placaresExatos;
    });
    
    renderizarRanking(pontosPorUsuario);
}

function renderizarRanking(ranking) {
    const container = document.getElementById('rankingContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (ranking.length === 0) {
        container.innerHTML = '<div class="alert alert-info">Aguardando palpites e resultados...</div>';
        return;
    }
    
    // Criar tabela de ranking
    const table = document.createElement('table');
    table.className = 'table table-hover';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Posição</th>
                <th>Participante</th>
                <th>Pontos</th>
                <th>Placar Exato (3pts)</th>
                <th>Resultado (1pt)</th>
            </tr>
        </thead>
        <tbody id="rankingBody"></tbody>
    `;
    
    container.appendChild(table);
    
    const tbody = document.getElementById('rankingBody');
    
    ranking.forEach((item, index) => {
        const posicao = index + 1;
        let medalha = '';
        if (posicao === 1) medalha = '🥇 ';
        else if (posicao === 2) medalha = '🥈 ';
        else if (posicao === 3) medalha = '🥉 ';
        
        const row = tbody.insertRow();
        row.innerHTML = `
            <td><strong>${medalha}${posicao}º</strong></td>
            <td><strong>${item.nome}</strong></td>
            <td class="text-success fw-bold">${item.pontos} pts</td>
            <td>${item.placaresExatos}</td>
            <td>${item.acertosResultado}</td>
        `;
    });
}

document.addEventListener('DOMContentLoaded', carregarRanking);