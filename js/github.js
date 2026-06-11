// Chave para armazenamento local
const STORAGE_KEY = 'bolao_copa_dados';

async function lerDadosGitHub() {
  showLoading();
  
  try {
    // Tentar ler do localStorage primeiro (cache)
    const cachedData = localStorage.getItem(STORAGE_KEY);
    let dados = null;
    
    if (cachedData) {
      dados = JSON.parse(cachedData);
    }
    
    // Tentar sincronizar com GitHub se tiver token
    if (GITHUB_TOKEN && GITHUB_USER && GITHUB_REPO) {
      const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`;
      
      try {
        const response = await fetch(url, {
          headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          const conteudo = JSON.parse(atob(data.content));
          
          // Mesclar dados do GitHub com dados locais (priorizar GitHub)
          if (conteudo) {
            dados = conteudo;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
          }
        }
      } catch (error) {
        console.log('Erro ao ler do GitHub, usando cache local');
      }
    }
    
    // Se não tem dados, criar estrutura padrão
    if (!dados || !dados.jogos || dados.jogos.length === 0) {
      dados = {
        jogos: JOGOS_PADRAO || [],
        palpites: [],
        resultados: {},
        editoresLiberados: [],
        proximoJogoId: 49
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
    }
    
    hideLoading();
    return dados;
    
  } catch (error) {
    console.error('Erro ao ler dados:', error);
    hideLoading();
    
    // Tentar recuperar do localStorage
    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) {
      return JSON.parse(localData);
    }
    
    return {
      jogos: JOGOS_PADRAO || [],
      palpites: [],
      resultados: {},
      editoresLiberados: [],
      proximoJogoId: 49
    };
  }
}

async function salvarDadosGitHub(dados) {
  showLoading();
  
  // Sempre salvar no localStorage primeiro
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
  
  // Tentar salvar no GitHub se tiver token
  if (GITHUB_TOKEN && GITHUB_USER && GITHUB_REPO) {
    const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`;
    
    try {
      // Verificar se arquivo existe para pegar SHA
      let sha = null;
      const getResponse = await fetch(url, {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      
      if (getResponse.ok) {
        const fileData = await getResponse.json();
        sha = fileData.sha;
      }
      
      const conteudo = btoa(unescape(encodeURIComponent(JSON.stringify(dados, null, 2))));
      
      const body = {
        message: `Atualização do bolão - ${new Date().toLocaleString()}`,
        content: conteudo,
        branch: 'main'
      };
      if (sha) body.sha = sha;
      
      const putResponse = await fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      
      if (putResponse.ok) {
        hideLoading();
        showSuccess('Dados salvos!');
        return true;
      } else {
        hideLoading();
        showSuccess('Dados salvos localmente (sync pendente)');
        return true;
      }
    } catch (error) {
      console.error('Erro ao salvar no GitHub:', error);
      hideLoading();
      showSuccess('Dados salvos localmente');
      return true;
    }
  } else {
    hideLoading();
    showSuccess('Dados salvos localmente');
    return true;
  }
}

function showLoading() {
  let loader = document.getElementById('globalLoader');
  if (!loader) {
    loader = document.createElement('div');
    loader.id = 'globalLoader';
    loader.className = 'loading-overlay';
    loader.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loader);
  }
  loader.style.display = 'flex';
}

function hideLoading() {
  const loader = document.getElementById('globalLoader');
  if (loader) {
    loader.style.display = 'none';
  }
}

function showSuccess(message) {
  showToast(message, 'success');
}

function showError(message) {
  showToast(message, 'error');
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.style.borderLeftColor = type === 'success' ? 'var(--success)' : 'var(--error)';
  toast.innerHTML = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}