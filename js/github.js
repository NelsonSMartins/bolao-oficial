async function lerDadosGitHub() {
    // Tentar ler do localStorage primeiro (fallback)
    const localData = localStorage.getItem('bolao_dados');
    if (localData) {
        try {
            return JSON.parse(localData);
        } catch(e) {}
    }
    
    // Retornar dados padrão com todos os jogos
    return {
        jogos: JOGOS_PADRAO,
        palpites: [],
        resultados: {},
        editoresLiberados: [],
        proximoJogoId: 49
    };
}

async function salvarDadosGitHub(dados) {
    // Salvar no localStorage como fallback
    localStorage.setItem('bolao_dados', JSON.stringify(dados));
    console.log('Dados salvos localmente:', dados);
    showSuccess('Dados salvos com sucesso!');
    return true;
}

function showLoading() {
    let loader = document.getElementById('globalLoader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'globalLoader';
        loader.innerHTML = '<div class="spinner"></div>';
        loader.style.position = 'fixed';
        loader.style.top = '0';
        loader.style.left = '0';
        loader.style.width = '100%';
        loader.style.height = '100%';
        loader.style.backgroundColor = 'rgba(0,0,0,0.7)';
        loader.style.display = 'flex';
        loader.style.justifyContent = 'center';
        loader.style.alignItems = 'center';
        loader.style.zIndex = '9999';
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

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger fade-in';
    errorDiv.innerHTML = message;
    errorDiv.style.position = 'fixed';
    errorDiv.style.top = '20px';
    errorDiv.style.right = '20px';
    errorDiv.style.zIndex = '10000';
    errorDiv.style.maxWidth = '300px';
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success fade-in';
    successDiv.innerHTML = message;
    successDiv.style.position = 'fixed';
    successDiv.style.top = '20px';
    successDiv.style.right = '20px';
    successDiv.style.zIndex = '10000';
    successDiv.style.maxWidth = '300px';
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}