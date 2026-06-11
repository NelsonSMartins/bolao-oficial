// Configuração do GitHub
// O token será injetado pela Vercel em produção
const GITHUB_TOKEN = window.GITHUB_TOKEN || '';
const GITHUB_TOKEN = '';  // Deixe vazio
const GITHUB_USER = 'NelsonSMartins';
const GITHUB_REPO = 'bolao-copa';

// Usuários do bolão
const USUARIOS = {
    'admin': { senha: 'admin123', role: 'admin', nome: 'Administrador' },
    'Alcy': { senha: 'veiomole', role: 'user', nome: 'Alcy' },
    'Caio': { senha: 'cagalargo', role: 'user', nome: 'Caio' },
    'Marcio': { senha: 'ajudacego', role: 'user', nome: 'Marcio' },
    'Julio': { senha: 'monjaru', role: 'user', nome: 'Julio' },
    'Alex': { senha: 'topete', role: 'user', nome: 'Alex' },
    'Nelson': { senha: 'lider', role: 'user', nome: 'Nelson' },
    'Metello': { senha: 'anao', role: 'user', nome: 'Metello' },
    'Raphael': { senha: 'gigante', role: 'user', nome: 'Raphael' },
    'André': { senha: 'bailarina', role: 'user', nome: 'André' }
};

let usuarioLogado = null;

// Função para verificar se é celular
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Ajustar viewport para celular
if (isMobile()) {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes');
    }
}