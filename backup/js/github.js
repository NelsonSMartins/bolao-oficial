const STORAGE_KEY = 'bolao_copa_cache';

async function lerDadosGitHub() {
    showLoading();
    
    try {
        // Tentar ler do GitHub
        let dados = null;
        
        if (GITHUB_TOKEN && GITHUB_USER && GITHUB_REPO) {
            const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`;
            
            const response = await fetch(url, {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                const conteudo = JSON.parse(atob(data.content));
                dados = conteudo;
                localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
                console.log('✅ Dados carregados do GitHub');
            } else if (response.status === 404) {
                console.log('Arquivo não existe, será criado');
            } else {
                console.error('Erro GitHub:', response.status);
            }
        }
        
        // Fallback para cache local
        if (!dados) {
            const cache = localStorage.getItem(STORAGE_KEY);
            if (cache) {
                dados = JSON.parse(cache);
                console.log('📱 Dados carregados do cache');
            }
        }
        
        // Criar estrutura padrão se necessário
        if (!dados || !dados.jogos || dados.jogos.length === 0) {
            dados = {
                jogos: JOGOS_PADRAO,
                palpites: [],
                resultados: {},
                editoresLiberados: [],
                proximoJogoId: 49
            };
            console.log('🆕 Estrutura padrão criada');
        }
        
        hideLoading();
        return dados;
        
    } catch (error) {
        console.error('Erro:', error);
        hideLoading();
        
        const cache = localStorage.getItem(STORAGE_KEY);
        if (cache) return JSON.parse(cache);
        
        return {
            jogos: JOGOS_PADRAO,
            palpites: [],
            resultados: {},
            editoresLiberados: [],
            proximoJogoId: 49
        };
    }
}

async function salvarDadosGitHub(dados) {
    showLoading();
    
    // Salvar no cache local primeiro
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
    
    // Salvar no GitHub
    if (GITHUB_TOKEN && GITHUB_USER && GITHUB_REPO) {
        const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`;
        
        try {
            // Obter SHA se arquivo existir
            let sha = null;
            const getResponse = await fetch(url, {
                headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
            });
            
            if (getResponse.ok) {
                const fileData = await getResponse.json();
                sha = fileData.sha;
            }
            
            const conteudo = btoa(unescape(encodeURIComponent(JSON.stringify(dados, null, 2))));
            
            const putResponse = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: `Bolão atualizado - ${new Date().toLocaleString()}`,
                    content: conteudo,
                    sha: sha,
                    branch: 'main'
                })
            });
            
            if (putResponse.ok) {
                hideLoading();
                showSuccess('✅ Dados salvos na nuvem!');
                return true;
            } else {
                const error = await putResponse.text();
                console.error('Erro ao salvar:', error);
                hideLoading();
                showSuccess('💾 Dados salvos localmente (sync pendente)');
                return true;
            }
        } catch (error) {
            console.error('Erro:', error);
            hideLoading();
            showSuccess('💾 Dados salvos localmente');
            return true;
        }
    } else {
        hideLoading();
        showSuccess('💾 Dados salvos localmente');
        return true;
    }
}

function showLoading() {
    let loader = document.getElementById('globalLoader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'globalLoader';
        loader.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:9999';
        loader.innerHTML = '<div style="width:40px;height:40px;border:3px solid white;border-top-color:#1a5f7a;border-radius:50%;animation:spin 0.8s linear infinite"></div>';
        document.body.appendChild(loader);
    }
    loader.style.display = 'flex';
}

function hideLoading() {
    const loader = document.getElementById('globalLoader');
    if (loader) loader.style.display = 'none';
}

function showSuccess(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed;bottom:20px;left:20px;right:20px;background:white;padding:12px;border-radius:12px;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,0.15);z-index:10000;border-left:4px solid #2e7d32';
    toast.innerHTML = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

function showError(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed;bottom:20px;left:20px;right:20px;background:white;padding:12px;border-radius:12px;text-align:center;box-shadow:0 4px 12px rgba(0,0,0,0.15);z-index:10000;border-left:4px solid #d32f2f';
    toast.innerHTML = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}