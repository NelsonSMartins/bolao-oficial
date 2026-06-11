let dados = null;
let usuarioAtual = null;

function carregarPalpites() {
    usuarioAtual = verificarLogin();
    if (!usuarioAtual) return;
    
    document.getElementById('userName').innerHTML = usuarioAtual.nome;
    dados = lerDados();
    
    const container = document.getElementById('palpitesContainer');
    container.innerHTML = '';
    
    if (dados.jogos.length === 0) {
        container.innerHTML = '<div class="alert">Nenhum jogo cadastrado ainda.</div>';
        return;
    }
    
    // Ordenar jogos por data
    const jogosOrdenados = [...dados.jogos].sort((a,b) => (a.data || '').localeCompare(b.data || ''));
    
    for (const jogo of jogosOrdenados) {
        const palpiteKey = `${jogo.id}_${usuarioAtual.username}`;
        const palpite = dados.palpites[palpiteKey];
        const resultado = dados.resultados[jogo.id];
        
        const div = document.createElement('div');
        div.className = 'palpite-item';
        
        let statusHtml = '';
        let pontosHtml = '';
        
        if (palpite && resultado) {
            const pontos = calcularPontos(palpite, resultado);
            if (pontos === 3) {
                statusHtml = '<span class="badge-acertou">🎯 Acertou o placar! +3 pontos</span>';
            } else if (pontos === 1) {
                statusHtml = '<span class="badge-parcial">✅ Acertou o resultado! +1 ponto</span>';
            } else {
                statusHtml = '<span class="badge-errou">❌ Errou</span>';
            }
            pontosHtml = `<div class="resultado">🏁 Resultado: ${resultado.casa} x ${resultado.fora}</div>`;
        } else if (resultado && !palpite) {
            statusHtml = '<span class="badge-errou">⚠️ Não palpou</span>';
            pontosHtml = `<div class="resultado">🏁 Resultado: ${resultado.casa} x ${resultado.fora}</div>`;
        } else if (palpite && !resultado) {
            statusHtml = '<span class="badge-parcial">⏳ Aguardando resultado</span>';
        } else {
            statusHtml = '<span class="badge-errou">❌ Sem palpite</span>';
        }
        
        div.innerHTML = `
            <div class="palpite-jogo">
                ${jogo.timeCasa} 🆚 ${jogo.timeFora}
                <div class="resultado">📅 ${formatarData(jogo.data)}</div>
                ${pontosHtml}
            </div>
            <div class="palpite-valor">
                ${palpite ? `${palpite.casa} x ${palpite.fora}` : '? x ?'}
                ${statusHtml}
            </div>
        `;
        
        container.appendChild(div);
    }
}

function formatarData(dataStr) {
    if (!dataStr) return 'Data não definida';
    const partes = dataStr.split('-');
    if (partes.length === 3) {
        return `${partes[2]}/${partes[1]}/${partes[0]}`;
    }
    return dataStr;
}

function calcularPontos(palpite, resultado) {
    if (!palpite || !resultado) return 0;
    if (palpite.casa === resultado.casa && palpite.fora === resultado.fora) return 3;
    
    const palpiteVencedor = palpite.casa > palpite.fora ? 'casa' : (palpite.casa < palpite.fora ? 'fora' : 'empate');
    const resultadoVencedor = resultado.casa > resultado.fora ? 'casa' : (resultado.casa < resultado.fora ? 'fora' : 'empate');
    
    return palpiteVencedor === resultadoVencedor ? 1 : 0;
}

document.addEventListener('DOMContentLoaded', carregarPalpites);