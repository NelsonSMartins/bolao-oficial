let dados = null;
let usuarioAtual = null;

async function carregarAdmin() {
  usuarioAtual = verificarLogin();
  if (!usuarioAtual || usuarioAtual.role !== 'admin') {
    window.location.href = 'index.html';
    return;
  }
  
  dados = await lerDadosGitHub();
  if (!dados || !dados.jogos || dados.jogos.length === 0) {
    dados = {
      jogos: JOGOS_PADRAO || [],
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
  
  if (!dados.jogos || dados.jogos.length === 0) {
    container.innerHTML = '<div class="alert alert-info">Nenhum jogo cadastrado. Use o formulário acima para adicionar.</div>';
    return;
  }
  
  dados.jogos.forEach(jogo => {
    const div = document.createElement('div');
    div.className = 'jogo-item';
    div.innerHTML = `
      <div class="jogo-info">
        <strong>${jogo.timeCasa} 🆚 ${jogo.timeFora}</strong>
        <div class="jogo-data">📅 ${formatarDataExibicao(jogo.data)}</div>
      </div>
      <button class="btn-danger btn-sm" onclick="removerJogo(${jogo.id})">🗑️ Remover</button>
    `;
    container.appendChild(div);
  });
}

function formatarDataExibicao(dataStr) {
  if (!dataStr) return 'Data não definida';
  const partes = dataStr.split('-');
  if (partes.length === 3) {
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }
  return dataStr;
}

function adicionarJogo() {
  const timeCasa = document.getElementById('timeCasa');
  const timeFora = document.getElementById('timeFora');
  const dataJogo = document.getElementById('dataJogo');
  
  if (!timeCasa || !timeFora) {
    showError('Preencha os campos de times');
    return;
  }
  
  const timeCasaValue = timeCasa.value.trim();
  const timeForaValue = timeFora.value.trim();
  const dataValue = dataJogo ? dataJogo.value : new Date().toISOString().split('T')[0];
  
  if (!timeCasaValue || !timeForaValue) {
    showError('Preencha ambos os times');
    return;
  }
  
  if (!dataValue) {
    showError('Selecione uma data para o jogo');
    return;
  }
  
  const novoId = dados.proximoJogoId || (dados.jogos.length + 1);
  
  dados.jogos.push({
    id: novoId,
    timeCasa: timeCasaValue,
    timeFora: timeForaValue,
    data: dataValue,
    ativo: true
  });
  
  dados.proximoJogoId = novoId + 1;
  
  salvarDadosGitHub(dados);
  timeCasa.value = '';
  timeFora.value = '';
  if (dataJogo) dataJogo.value = '';
  carregarListaJogos();
  carregarResultados();
  showSuccess('Jogo adicionado com sucesso!');
}

function removerJogo(id) {
  if (confirm('Remover este jogo? Todos os palpites relacionados também serão removidos.')) {
    dados.jogos = dados.jogos.filter(j => j.id !== id);
    dados.palpites = dados.palpites.filter(p => p.jogoId !== id);
    delete dados.resultados[id];
    salvarDadosGitHub(dados);
    carregarListaJogos();
    carregarResultados();
    showSuccess('Jogo removido!');
  }
}

function carregarResultados() {
  const container = document.getElementById('resultadosJogos');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (!dados.jogos || dados.jogos.length === 0) {
    container.innerHTML = '<div class="alert alert-info">Nenhum jogo cadastrado.</div>';
    return;
  }
  
  // Ordenar jogos por data
  const jogosOrdenados = [...dados.jogos].sort((a, b) => {
    if (a.data && b.data) return a.data.localeCompare(b.data);
    return 0;
  });
  
  jogosOrdenados.forEach(jogo => {
    const resultado = dados.resultados[jogo.id] || {};
    const dataFormatada = formatarDataExibicao(jogo.data);
    
    const div = document.createElement('div');
    div.className = 'resultado-item';
    div.innerHTML = `
      <div class="resultado-times">
        <strong>${jogo.timeCasa} 🆚 ${jogo.timeFora}</strong>
        <div class="jogo-data">📅 ${dataFormatada}</div>
      </div>
      <div class="resultado-inputs">
        <input type="number" id="res_casa_${jogo.id}" class="resultado-casa" 
               value="${resultado.casa !== undefined ? resultado.casa : ''}" 
               placeholder="0" min="0" max="30" step="1" style="width: 70px; padding: 8px; text-align: center;">
        <span style="font-weight: bold;">x</span>
        <input type="number" id="res_fora_${jogo.id}" class="resultado-fora" 
               value="${resultado.fora !== undefined ? resultado.fora : ''}" 
               placeholder="0" min="0" max="30" step="1" style="width: 70px; padding: 8px; text-align: center;">
      </div>
    `;
    container.appendChild(div);
  });
}

async function salvarResultados() {
  const novosResultados = {};
  
  for (const jogo of dados.jogos) {
    const casaInput = document.getElementById(`res_casa_${jogo.id}`);
    const foraInput = document.getElementById(`res_fora_${jogo.id}`);
    
    if (casaInput && foraInput) {
      const casaVal = casaInput.value.trim();
      const foraVal = foraInput.value.trim();
      
      if (casaVal !== '' && foraVal !== '') {
        const casa = parseInt(casaVal);
        const fora = parseInt(foraVal);
        
        if (casa >= 0 && casa <= 30 && fora >= 0 && fora <= 30) {
          novosResultados[jogo.id] = { casa, fora };
        } else {
          showError(`Placar inválido para ${jogo.timeCasa} x ${jogo.timeFora}. Use 0-30.`);
          return;
        }
      }
    }
  }
  
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
  
  // Botões de ação em massa
  const acoesDiv = document.createElement('div');
  acoesDiv.className = 'mb-3';
  acoesDiv.style.marginBottom = '20px';
  acoesDiv.style.display = 'flex';
  acoesDiv.style.gap = '10px';
  acoesDiv.style.flexWrap = 'wrap';
  acoesDiv.innerHTML = `
    <button class="btn-warning" onclick="liberarTodos()">🔓 Liberar Todos</button>
    <button class="btn-danger" onclick="limparTodosPalpites()">🗑️ Limpar Todos os Palpites</button>
  `;
  container.appendChild(acoesDiv);
  
  for (const [username, userInfo] of Object.entries(USUARIOS)) {
    if (username === 'admin') continue;
    
    const estaLiberado = dados.editoresLiberados && dados.editoresLiberados.includes(username);
    const qtdPalpites = dados.palpites.filter(p => p.usuario === username).length;
    
    const div = document.createElement('div');
    div.className = 'participante-item';
    div.innerHTML = `
      <div class="participante-info">
        <div class="participante-nome">${userInfo.nome}</div>
        <div class="participante-username">@${username} • ${qtdPalpites} palpites</div>
      </div>
      <div class="participante-actions">
        <span style="margin-right: 10px;">${estaLiberado ? '✅ Liberado' : '🔒 Bloqueado'}</span>
        <button class="btn-sm ${estaLiberado ? 'btn-warning' : 'btn-success'}" onclick="liberarParticipante('${username}')">
          ${estaLiberado ? 'Bloquear' : 'Liberar'}
        </button>
        <button class="btn-sm btn-outline" onclick="limparPalpitesParticipante('${username}')" style="background: transparent; border: 1px solid #d32f2f; color: #d32f2f;">
          Limpar
        </button>
      </div>
    `;
    container.appendChild(div);
  }
}

function liberarParticipante(username) {
  if (!dados.editoresLiberados) dados.editoresLiberados = [];
  
  const index = dados.editoresLiberados.indexOf(username);
  if (index > -1) {
    dados.editoresLiberados.splice(index, 1);
    showSuccess(`${username} bloqueado!`);
  } else {
    dados.editoresLiberados.push(username);
    showSuccess(`${username} liberado para editar!`);
  }
  
  salvarDadosGitHub(dados);
  carregarListaParticipantes();
}

function liberarTodos() {
  if (confirm('Liberar TODOS os participantes para editar?')) {
    dados.editoresLiberados = Object.keys(USUARIOS).filter(u => u !== 'admin');
    salvarDadosGitHub(dados);
    carregarListaParticipantes();
    showSuccess('Todos liberados!');
  }
}

function limparPalpitesParticipante(username) {
  if (confirm(`Remover TODOS os palpites de ${username}?`)) {
    dados.palpites = dados.palpites.filter(p => p.usuario !== username);
    salvarDadosGitHub(dados);
    carregarListaParticipantes();
    showSuccess(`Palpites de ${username} removidos!`);
  }
}

function limparTodosPalpites() {
  const confirmacao = prompt('⚠️ Isso remove TODOS os palpites. Digite "CONFIRMAR" para prosseguir:');
  if (confirmacao === 'CONFIRMAR') {
    dados.palpites = [];
    salvarDadosGitHub(dados);
    carregarListaParticipantes();
    showSuccess('Todos os palpites foram removidos!');
  } else {
    showError('Operação cancelada.');
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
    showError('Biblioteca Excel não carregada. Aguarde e tente novamente.');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
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
          <div class="alert alert-success" style="margin-top: 16px;">✅ Importados ${importados} palpites!</div>
          ${erros.length > 0 ? `<div class="alert alert-warning" style="margin-top: 8px;">⚠️ Erros: ${erros.join(', ')}</div>` : ''}
        `;
      }
      showSuccess(`${importados} palpites importados!`);
    } catch (error) {
      showError('Erro ao processar Excel.');
    }
  };
  reader.readAsArrayBuffer(file);
}

function showTab(tabId) {
  // Esconder todas as tabs
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Mostrar a tab selecionada
  document.getElementById(`tab-${tabId}`).classList.add('active');
  
  // Ativar o botão correspondente
  const buttons = document.querySelectorAll('.admin-tab');
  const tabMap = { jogos: 0, resultados: 1, participantes: 2, importar: 3 };
  if (buttons[tabMap[tabId]]) {
    buttons[tabMap[tabId]].classList.add('active');
  }
}

// Expor funções globalmente
window.adicionarJogo = adicionarJogo;
window.removerJogo = removerJogo;
window.salvarResultados = salvarResultados;
window.liberarParticipante = liberarParticipante;
window.liberarTodos = liberarTodos;
window.limparPalpitesParticipante = limparPalpitesParticipante;
window.limparTodosPalpites = limparTodosPalpites;
window.importarExcel = importarExcel;
window.showTab = showTab;

document.addEventListener('DOMContentLoaded', carregarAdmin);