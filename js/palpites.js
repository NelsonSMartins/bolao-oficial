let dados = null;
let usuarioAtual = null;
let jogos = [];
let filtroAtual = 'todos';
let podeEditar = false;

async function carregarPalpites() {
  usuarioAtual = verificarLogin();
  if (!usuarioAtual) return;
  
  const userNameSpan = document.getElementById('userName');
  if (userNameSpan) userNameSpan.textContent = usuarioAtual.nome;
  
  dados = await lerDadosGitHub();
  if (!dados) {
    showError('Erro ao carregar dados');
    return;
  }
  
  jogos = dados.jogos || JOGOS_PADRAO;
  podeEditar = dados.editoresLiberados && dados.editoresLiberados.includes(usuarioAtual.username);
  
  // Atualizar status bar
  const statusMsg = document.getElementById('statusMsg');
  const saveBtn = document.getElementById('saveAllBtn');
  
  if (podeEditar) {
    statusMsg.innerHTML = '<span>✏️</span><span>Modo edição ativo - Você pode alterar seus palpites</span>';
    statusMsg.className = 'status-message success';
    if (saveBtn) saveBtn.style.display = 'inline-flex';
  } else {
    const temPalpite = dados.palpites.some(p => p.usuario === usuarioAtual.username);
    if (temPalpite) {
      statusMsg.innerHTML = '<span>🔒</span><span>Palpites confirmados. Para alterar, solicite liberação ao admin.</span>';
    } else {
      statusMsg.innerHTML = '<span>⚠️</span><span>Você ainda não fez seus palpites.</span>';
    }
    statusMsg.className = 'status-message warning';
    if (saveBtn) saveBtn.style.display = 'none';
  }
  
  carregarFiltros();
  renderizarJogos();
}

function carregarFiltros() {
  const container = document.getElementById('filterBar');
  if (!container) return;
  
  const datasUnicas = [...new Set(jogos.map(j => j.data).filter(d => d))];
  datasUnicas.sort();
  
  const datasFormatadas = {
    '2026-06-11': '11/06', '2026-06-12': '12/06', '2026-06-13': '13/06',
    '2026-06-14': '14/06', '2026-06-15': '15/06', '2026-06-16': '16/06',
    '2026-06-17': '17/06', '2026-06-18': '18/06', '2026-06-19': '19/06',
    '2026-06-20': '20/06', '2026-06-21': '21/06', '2026-06-22': '22/06',
    '2026-06-23': '23/06'
  };
  
  container.innerHTML = `
    <button class="filter-btn ${filtroAtual === 'todos' ? 'active' : ''}" onclick="window.setFiltro('todos')">📋 Todos</button>
    ${datasUnicas.map(data => `
      <button class="filter-btn ${filtroAtual === data ? 'active' : ''}" onclick="window.setFiltro('${data}')">📅 ${datasFormatadas[data] || data.slice(5)}</button>
    `).join('')}
  `;
}

function setFiltro(filtro) {
  filtroAtual = filtro;
  carregarFiltros();
  renderizarJogos();
}

function renderizarJogos() {
  const container = document.getElementById('gamesContainer');
  if (!container) return;
  
  container.innerHTML = '<div class="games-grid"></div>';
  const gamesGrid = container.querySelector('.games-grid');
  
  let jogosFiltrados = jogos;
  if (filtroAtual !== 'todos') {
    jogosFiltrados = jogos.filter(j => j.data === filtroAtual);
  }
  
  if (jogosFiltrados.length === 0) {
    gamesGrid.innerHTML = '<div class="card"><div class="card-body" style="text-align: center; padding: 40px;">📭 Nenhum jogo nesta data</div></div>';
    return;
  }
  
  const jogosPorData = {};
  jogosFiltrados.forEach(jogo => {
    const data = jogo.data;
    if (!jogosPorData[data]) jogosPorData[data] = [];
    jogosPorData[data].push(jogo);
  });
  
  const palpitesUsuario = dados.palpites.filter(p => p.usuario === usuarioAtual.username);
  
  for (const [data, jogosData] of Object.entries(jogosPorData)) {
    const dataGroup = document.createElement('div');
    dataGroup.className = 'date-group';
    dataGroup.innerHTML = `<div class="date-header">📅 ${formatarDataCompleta(data)}</div>`;
    
    for (const jogo of jogosData) {
      const palpite = palpitesUsuario.find(p => p.jogoId === jogo.id);
      const resultado = dados.resultados[jogo.id];
      const jogoBloqueado = resultado !== undefined;
      
      const gameCard = document.createElement('div');
      gameCard.className = 'game-card';
      
      let statusBadge = '';
      if (resultado && palpite) {
        const pontos = calcularPontos(palpite, resultado);
        if (pontos === 3) statusBadge = '<span class="badge badge-success">🎯 +3 placar exato</span>';
        else if (pontos === 1) statusBadge = '<span class="badge badge-info">✅ +1 resultado</span>';
        else if (pontos === 0) statusBadge = '<span class="badge badge-error">❌ Errou</span>';
      } else if (resultado && !palpite) {
        statusBadge = '<span class="badge badge-error">⚠️ Não palpou</span>';
      } else if (!podeEditar && palpite) {
        statusBadge = '<span class="badge badge-success">✓ Confirmado</span>';
      }
      
      gameCard.innerHTML = `
        <div class="game-info">
          <div class="game-teams">${jogo.timeCasa} 🆚 ${jogo.timeFora}</div>
          ${resultado ? `<div class="game-result">🏁 ${resultado.casa} x ${resultado.fora}</div>` : ''}
          ${statusBadge}
        </div>
        <div class="game-bet">
          <input type="number" id="casa_${jogo.id}" class="bet-input" 
                 value="${palpite ? palpite.casa : ''}" 
                 ${!podeEditar || jogoBloqueado ? 'disabled' : ''}
                 placeholder="0" min="0" max="30" inputmode="numeric">
          <span style="font-weight: 700;">x</span>
          <input type="number" id="fora_${jogo.id}" class="bet-input" 
                 value="${palpite ? palpite.fora : ''}" 
                 ${!podeEditar || jogoBloqueado ? 'disabled' : ''}
                 placeholder="0" min="0" max="30" inputmode="numeric">
        </div>
      `;
      
      dataGroup.appendChild(gameCard);
    }
    gamesGrid.appendChild(dataGroup);
  }
}

function formatarDataCompleta(dataStr) {
  const datas = {
    '2026-06-11': 'Quinta, 11/06', '2026-06-12': 'Sexta, 12/06', '2026-06-13': 'Sábado, 13/06',
    '2026-06-14': 'Domingo, 14/06', '2026-06-15': 'Segunda, 15/06', '2026-06-16': 'Terça, 16/06',
    '2026-06-17': 'Quarta, 17/06', '2026-06-18': 'Quinta, 18/06', '2026-06-19': 'Sexta, 19/06',
    '2026-06-20': 'Sábado, 20/06', '2026-06-21': 'Domingo, 21/06', '2026-06-22': 'Segunda, 22/06',
    '2026-06-23': 'Terça, 23/06'
  };
  return datas[dataStr] || dataStr;
}

function calcularPontos(palpite, resultado) {
  if (!palpite || !resultado) return 0;
  if (palpite.casa === resultado.casa && palpite.fora === resultado.fora) return 3;
  
  const palpiteVencedor = palpite.casa > palpite.fora ? 'casa' : (palpite.casa < palpite.fora ? 'fora' : 'empate');
  const resultadoVencedor = resultado.casa > resultado.fora ? 'casa' : (resultado.casa < resultado.fora ? 'fora' : 'empate');
  
  return palpiteVencedor === resultadoVencedor ? 1 : 0;
}

async function salvarTodosPalpites() {
  const novosPalpites = [];
  
  for (const jogo of jogos) {
    const casaInput = document.getElementById(`casa_${jogo.id}`);
    const foraInput = document.getElementById(`fora_${jogo.id}`);
    
    if (casaInput && foraInput && casaInput.value && foraInput.value) {
      const casa = parseInt(casaInput.value);
      const fora = parseInt(foraInput.value);
      
      if (casa >= 0 && casa <= 30 && fora >= 0 && fora <= 30) {
        novosPalpites.push({
          usuario: usuarioAtual.username,
          jogoId: jogo.id,
          casa: casa,
          fora: fora,
          dataPalpite: new Date().toISOString()
        });
      } else {
        showError(`Placar inválido para ${jogo.timeCasa} x ${jogo.timeFora}`);
        return;
      }
    }
  }
  
  if (novosPalpites.length === 0) {
    showError('Preencha pelo menos um palpite');
    return;
  }
  
  // Remover palpites antigos e adicionar novos
  dados.palpites = dados.palpites.filter(p => p.usuario !== usuarioAtual.username);
  dados.palpites.push(...novosPalpites);
  
  // Bloquear edição automaticamente após salvar
  if (dados.editoresLiberados && dados.editoresLiberados.includes(usuarioAtual.username)) {
    const index = dados.editoresLiberados.indexOf(usuarioAtual.username);
    dados.editoresLiberados.splice(index, 1);
  }
  
  const sucesso = await salvarDadosGitHub(dados);
  if (sucesso) {
    showSuccess('Palpites confirmados!');
    setTimeout(() => location.reload(), 1500);
  }
}

// Expor funções globalmente
window.setFiltro = setFiltro;
window.salvarTodosPalpites = salvarTodosPalpites;

document.addEventListener('DOMContentLoaded', carregarPalpites);