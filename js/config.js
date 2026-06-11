// Configuração do GitHub
const GITHUB_TOKEN = '';
const GITHUB_USER = 'NelsonSMartins';
const GITHUB_REPO = 'bolao-oficial';
const GITHUB_FILE = 'dados/dados.json';

// Lista completa de 50 usuários + admin
const USUARIOS = {
    'admin': { senha: 'adminq1w2e3', role: 'admin', nome: 'Administrador' },
    'Douglas': { senha: 'a1b2c3d4', role: 'user', nome: 'Douglas' },
    'Alexandre': { senha: 'e5f6g7h8', role: 'user', nome: 'Alexandre' },
    'Alcy': { senha: 'i9j0k1l2', role: 'user', nome: 'Alcy' },
    'Carla': { senha: 'm3n4o5p6', role: 'user', nome: 'Carla' },
    'Thiago': { senha: 'q7r8s9t0', role: 'user', nome: 'Thiago' },
    'Ronaldo': { senha: 'u1v2w3x4', role: 'user', nome: 'Ronaldo' },
    'Kelly': { senha: 'y5z6a7b8', role: 'user', nome: 'Kelly' },
    'Ana': { senha: 'c9d0e1f2', role: 'user', nome: 'Ana' },
    'Carmem': { senha: 'g3h4i5j6', role: 'user', nome: 'Carmem' },
    'Rogéria': { senha: 'k7l8m9n0', role: 'user', nome: 'Rogéria' },
    'Carol': { senha: 'o1p2q3r4', role: 'user', nome: 'Carol' },
    'Nelson': { senha: 's5t6u7v8', role: 'user', nome: 'Nelson' },
    'Márcio': { senha: 'w9x0y1z2', role: 'user', nome: 'Márcio' },
    'Raphael': { senha: 'a3b4c5d6', role: 'user', nome: 'Raphael' },
    'Julio': { senha: 'e7f8g9h0', role: 'user', nome: 'Julio' },
    'Elyseu': { senha: 'i1j2k3l4', role: 'user', nome: 'Elyseu' },
    'user17': { senha: 'm5n6o7p8', role: 'user', nome: 'User 17' },
    'user18': { senha: 'q9r0s1t2', role: 'user', nome: 'User 18' },
    'user19': { senha: 'u3v4w5x6', role: 'user', nome: 'User 19' },
    'user20': { senha: 'y7z8a9b0', role: 'user', nome: 'User 20' },
    'user21': { senha: 'c1d2e3f4', role: 'user', nome: 'User 21' },
    'user22': { senha: 'g5h6i7j8', role: 'user', nome: 'User 22' },
    'user23': { senha: 'k9l0m1n2', role: 'user', nome: 'User 23' },
    'user24': { senha: 'o3p4q5r6', role: 'user', nome: 'User 24' },
    'user25': { senha: 's7t8u9v0', role: 'user', nome: 'User 25' },
    'user26': { senha: 'w1x2y3z4', role: 'user', nome: 'User 26' },
    'user27': { senha: 'a5b6c7d8', role: 'user', nome: 'User 27' },
    'user28': { senha: 'e9f0g1h2', role: 'user', nome: 'User 28' },
    'user29': { senha: 'i3j4k5l6', role: 'user', nome: 'User 29' },
    'user30': { senha: 'm7n8o9p0', role: 'user', nome: 'User 30' },
    'user31': { senha: 'q1r2s3t4', role: 'user', nome: 'User 31' },
    'user32': { senha: 'u5v6w7x8', role: 'user', nome: 'User 32' },
    'user33': { senha: 'y9z0a1b2', role: 'user', nome: 'User 33' },
    'user34': { senha: 'c3d4e5f6', role: 'user', nome: 'User 34' },
    'user35': { senha: 'g7h8i9j0', role: 'user', nome: 'User 35' },
    'user36': { senha: 'k1l2m3n4', role: 'user', nome: 'User 36' },
    'user37': { senha: 'o5p6q7r8', role: 'user', nome: 'User 37' },
    'user38': { senha: 's9t0u1v2', role: 'user', nome: 'User 38' },
    'user39': { senha: 'w3x4y5z6', role: 'user', nome: 'User 39' },
    'user40': { senha: 'a7b8c9d0', role: 'user', nome: 'User 40' },
    'user41': { senha: 'e1f2g3h4', role: 'user', nome: 'User 41' },
    'user42': { senha: 'i5j6k7l8', role: 'user', nome: 'User 42' },
    'user43': { senha: 'm9n0o1p2', role: 'user', nome: 'User 43' },
    'user44': { senha: 'q3r4s5t6', role: 'user', nome: 'User 44' },
    'user45': { senha: 'u7v8w9x0', role: 'user', nome: 'User 45' },
    'user46': { senha: 'y1z2a3b4', role: 'user', nome: 'User 46' },
    'user47': { senha: 'c5d6e7f8', role: 'user', nome: 'User 47' },
    'user48': { senha: 'g9h0i1j2', role: 'user', nome: 'User 48' },
    'user49': { senha: 'k3l4m5n6', role: 'user', nome: 'User 49' },
    'user50': { senha: 'o7p8q9r0', role: 'user', nome: 'User 50' }
};

// Lista completa de jogos da Copa
const JOGOS_PADRAO = [
    // 11/06/2026
    { id: 1, timeCasa: 'México', timeFora: 'África do Sul', data: '2026-06-11', ativo: true },
    { id: 2, timeCasa: 'Coreia do Sul', timeFora: 'Tchéquia', data: '2026-06-11', ativo: true },
    // 12/06/2026
    { id: 3, timeCasa: 'Canadá', timeFora: 'Bósnia e Herzegovina', data: '2026-06-12', ativo: true },
    { id: 4, timeCasa: 'Estados Unidos', timeFora: 'Paraguai', data: '2026-06-12', ativo: true },
    // 13/06/2026
    { id: 5, timeCasa: 'Catar', timeFora: 'Suíça', data: '2026-06-13', ativo: true },
    { id: 6, timeCasa: 'Brasil', timeFora: 'Marrocos', data: '2026-06-13', ativo: true },
    { id: 7, timeCasa: 'Haiti', timeFora: 'Escócia', data: '2026-06-13', ativo: true },
    // 14/06/2026
    { id: 8, timeCasa: 'Austrália', timeFora: 'Turquia', data: '2026-06-14', ativo: true },
    { id: 9, timeCasa: 'Alemanha', timeFora: 'Curaçao', data: '2026-06-14', ativo: true },
    { id: 10, timeCasa: 'Holanda', timeFora: 'Japão', data: '2026-06-14', ativo: true },
    { id: 11, timeCasa: 'Costa do Marfim', timeFora: 'Equador', data: '2026-06-14', ativo: true },
    { id: 12, timeCasa: 'Suécia', timeFora: 'Tunísia', data: '2026-06-14', ativo: true },
    // 15/06/2026
    { id: 13, timeCasa: 'Espanha', timeFora: 'Cabo Verde', data: '2026-06-15', ativo: true },
    { id: 14, timeCasa: 'Arábia Saudita', timeFora: 'Uruguai', data: '2026-06-15', ativo: true },
    { id: 15, timeCasa: 'Bélgica', timeFora: 'Egito', data: '2026-06-15', ativo: true },
    { id: 16, timeCasa: 'Irã', timeFora: 'Nova Zelândia', data: '2026-06-15', ativo: true },
    // 16/06/2026
    { id: 17, timeCasa: 'França', timeFora: 'Senegal', data: '2026-06-16', ativo: true },
    { id: 18, timeCasa: 'Argentina', timeFora: 'Argélia', data: '2026-06-16', ativo: true },
    { id: 19, timeCasa: 'Iraque', timeFora: 'Noruega', data: '2026-06-16', ativo: true },
    // 17/06/2026
    { id: 20, timeCasa: 'Áustria', timeFora: 'Jordânia', data: '2026-06-17', ativo: true },
    { id: 21, timeCasa: 'Portugal', timeFora: 'República Democrática do Congo', data: '2026-06-17', ativo: true },
    { id: 22, timeCasa: 'Gana', timeFora: 'Panamá', data: '2026-06-17', ativo: true },
    { id: 23, timeCasa: 'Inglaterra', timeFora: 'Croácia', data: '2026-06-17', ativo: true },
    { id: 24, timeCasa: 'Uzbequistão', timeFora: 'Colômbia', data: '2026-06-17', ativo: true },
    // 18/06/2026
    { id: 25, timeCasa: 'África do Sul', timeFora: 'República Tcheca', data: '2026-06-18', ativo: true },
    { id: 26, timeCasa: 'México', timeFora: 'Coreia do Sul', data: '2026-06-18', ativo: true },
    { id: 27, timeCasa: 'Canadá', timeFora: 'Catar', data: '2026-06-18', ativo: true },
    { id: 28, timeCasa: 'Bósnia e Herzegovina', timeFora: 'Suíça', data: '2026-06-18', ativo: true },
    // 19/06/2026
    { id: 29, timeCasa: 'Estados Unidos', timeFora: 'Austrália', data: '2026-06-19', ativo: true },
    { id: 30, timeCasa: 'Brasil', timeFora: 'Haiti', data: '2026-06-19', ativo: true },
    { id: 31, timeCasa: 'Marrocos', timeFora: 'Escócia', data: '2026-06-19', ativo: true },
    // 20/06/2026
    { id: 32, timeCasa: 'Paraguai', timeFora: 'Turquia', data: '2026-06-20', ativo: true },
    { id: 33, timeCasa: 'Alemanha', timeFora: 'Costa do Marfim', data: '2026-06-20', ativo: true },
    { id: 34, timeCasa: 'Curaçao', timeFora: 'Equador', data: '2026-06-20', ativo: true },
    { id: 35, timeCasa: 'Holanda', timeFora: 'Suécia', data: '2026-06-20', ativo: true },
    // 21/06/2026
    { id: 36, timeCasa: 'Japão', timeFora: 'Tunísia', data: '2026-06-21', ativo: true },
    { id: 37, timeCasa: 'Bélgica', timeFora: 'Irã', data: '2026-06-21', ativo: true },
    { id: 38, timeCasa: 'Egito', timeFora: 'Nova Zelândia', data: '2026-06-21', ativo: true },
    { id: 39, timeCasa: 'Espanha', timeFora: 'Arábia Saudita', data: '2026-06-21', ativo: true },
    { id: 40, timeCasa: 'Cabo Verde', timeFora: 'Uruguai', data: '2026-06-21', ativo: true },
    // 22/06/2026
    { id: 41, timeCasa: 'Argentina', timeFora: 'Áustria', data: '2026-06-22', ativo: true },
    { id: 42, timeCasa: 'Senegal', timeFora: 'Noruega', data: '2026-06-22', ativo: true },
    { id: 43, timeCasa: 'França', timeFora: 'Iraque', data: '2026-06-22', ativo: true },
    // 23/06/2026
    { id: 44, timeCasa: 'Argélia', timeFora: 'Jordânia', data: '2026-06-23', ativo: true },
    { id: 45, timeCasa: 'Inglaterra', timeFora: 'Gana', data: '2026-06-23', ativo: true },
    { id: 46, timeCasa: 'Croácia', timeFora: 'Panamá', data: '2026-06-23', ativo: true },
    { id: 47, timeCasa: 'Portugal', timeFora: 'Uzbequistão', data: '2026-06-23', ativo: true },
    { id: 48, timeCasa: 'República Democrática do Congo', timeFora: 'Colômbia', data: '2026-06-23', ativo: true }
];

let usuarioLogado = null;

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes');
    }
}