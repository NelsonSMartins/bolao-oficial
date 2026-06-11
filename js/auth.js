async function fazerLogin(usuario, senha) {
    const user = USUARIOS[usuario];
    
    if (user && user.senha === senha) {
        usuarioLogado = {
            username: usuario,
            nome: user.nome,
            role: user.role
        };
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
        
        // Animação de sucesso
        showSuccess(`Bem-vindo, ${user.nome}!`);
        
        setTimeout(() => {
            if (user.role === 'admin') {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'palpites.html';
            }
        }, 500);
        return true;
    } else {
        showError('Usuário ou senha inválidos!');
        return false;
    }
}

function logout() {
    localStorage.removeItem('usuarioLogado');
    showSuccess('Logout realizado com sucesso!');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

function verificarLogin() {
    const usuario = localStorage.getItem('usuarioLogado');
    if (!usuario) {
        if (!window.location.pathname.includes('index.html')) {
            window.location.href = 'index.html';
        }
        return null;
    }
    return JSON.parse(usuario);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const usuario = document.getElementById('usuario').value;
            const senha = document.getElementById('senha').value;
            await fazerLogin(usuario, senha);
        });
    }
    
    const usuarioAtual = verificarLogin();
    if (usuarioAtual && window.location.pathname.includes('index.html')) {
        if (usuarioAtual.role === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'palpites.html';
        }
    }
});