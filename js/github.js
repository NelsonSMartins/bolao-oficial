// Funções para ler/escrever no GitHub
async function lerDadosGitHub() {
    showLoading();
    
    const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`;
    
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (response.status === 404) {
            // Criar estrutura padrão
            const dadosPadrao = {
                jogos: [
                    { id: 1, timeCasa: 'México', timeFora: 'Canadá', ativo: true },
                    { id: 2, timeCasa: 'Brasil', timeFora: 'Argentina', ativo: true },
                    { id: 3, timeCasa: 'França', timeFora: 'Alemanha', ativo: true },
                    { id: 4, timeCasa: 'Portugal', timeFora: 'Espanha', ativo: true },
                    { id: 5, timeCasa: 'Inglaterra', timeFora: 'Holanda', ativo: true }
                ],
                palpites: [],
                resultados: {},
                editoresLiberados: [],
                proximoJogoId: 6
            };
            
            await salvarDadosGitHub(dadosPadrao);
            hideLoading();
            return dadosPadrao;
        }
        
        const data = await response.json();
        const conteudo = atob(data.content);
        hideLoading();
        return JSON.parse(conteudo);
    } catch (error) {
        console.error('Erro ao ler dados:', error);
        hideLoading();
        showError('Erro ao carregar dados. Verifique sua conexão.');
        return null;
    }
}

async function salvarDadosGitHub(dados) {
    showLoading();
    
    const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`;
    
    let sha = null;
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (response.status === 200) {
            const data = await response.json();
            sha = data.sha;
        }
    } catch (error) {
        console.log('Arquivo será criado');
    }
    
    const conteudo = btoa(unescape(encodeURIComponent(JSON.stringify(dados, null, 2))));
    
    const body = {
        message: `Atualizar dados do bolão - ${new Date().toLocaleString()}`,
        content: conteudo,
        branch: 'main'
    };
    
    if (sha) {
        body.sha = sha;
    }
    
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    
    hideLoading();
    
    if (response.ok) {
        showSuccess('Dados salvos com sucesso!');
        return true;
    } else {
        const error = await response.text();
        console.error('Erro ao salvar:', error);
        showError('Erro ao salvar dados. Tente novamente.');
        return false;
    }
}

// Funções auxiliares de UI
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