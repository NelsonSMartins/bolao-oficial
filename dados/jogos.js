// ============================================
// JOGOS DA COPA 2026
// ============================================

const JOGOS = [
    // 11/06/2026
    { id: 1, timeCasa: 'México', timeFora: 'África do Sul', data: '2026-06-11' },
    { id: 2, timeCasa: 'Coreia do Sul', timeFora: 'Tchéquia', data: '2026-06-11' },
    // 12/06/2026
    { id: 3, timeCasa: 'Canadá', timeFora: 'Bósnia e Herzegovina', data: '2026-06-12' },
    { id: 4, timeCasa: 'Estados Unidos', timeFora: 'Paraguai', data: '2026-06-12' },
    // 13/06/2026
    { id: 5, timeCasa: 'Catar', timeFora: 'Suíça', data: '2026-06-13' },
    { id: 6, timeCasa: 'Brasil', timeFora: 'Marrocos', data: '2026-06-13' },
    { id: 7, timeCasa: 'Haiti', timeFora: 'Escócia', data: '2026-06-13' },
    // 14/06/2026
    { id: 8, timeCasa: 'Austrália', timeFora: 'Turquia', data: '2026-06-14' },
    { id: 9, timeCasa: 'Alemanha', timeFora: 'Curaçao', data: '2026-06-14' },
    { id: 10, timeCasa: 'Holanda', timeFora: 'Japão', data: '2026-06-14' },
    { id: 11, timeCasa: 'Costa do Marfim', timeFora: 'Equador', data: '2026-06-14' },
    { id: 12, timeCasa: 'Suécia', timeFora: 'Tunísia', data: '2026-06-14' },
    // 15/06/2026
    { id: 13, timeCasa: 'Espanha', timeFora: 'Cabo Verde', data: '2026-06-15' },
    { id: 14, timeCasa: 'Arábia Saudita', timeFora: 'Uruguai', data: '2026-06-15' },
    { id: 15, timeCasa: 'Bélgica', timeFora: 'Egito', data: '2026-06-15' },
    { id: 16, timeCasa: 'Irã', timeFora: 'Nova Zelândia', data: '2026-06-15' },
    // 16/06/2026
    { id: 17, timeCasa: 'França', timeFora: 'Senegal', data: '2026-06-16' },
    { id: 18, timeCasa: 'Argentina', timeFora: 'Argélia', data: '2026-06-16' },
    { id: 19, timeCasa: 'Iraque', timeFora: 'Noruega', data: '2026-06-16' },
    // 17/06/2026
    { id: 20, timeCasa: 'Áustria', timeFora: 'Jordânia', data: '2026-06-17' },
    { id: 21, timeCasa: 'Portugal', timeFora: 'República Democrática do Congo', data: '2026-06-17' },
    { id: 22, timeCasa: 'Gana', timeFora: 'Panamá', data: '2026-06-17' },
    { id: 23, timeCasa: 'Inglaterra', timeFora: 'Croácia', data: '2026-06-17' },
    { id: 24, timeCasa: 'Uzbequistão', timeFora: 'Colômbia', data: '2026-06-17' },
    // 18/06/2026
    { id: 25, timeCasa: 'África do Sul', timeFora: 'República Tcheca', data: '2026-06-18' },
    { id: 26, timeCasa: 'México', timeFora: 'Coreia do Sul', data: '2026-06-18' },
    { id: 27, timeCasa: 'Canadá', timeFora: 'Catar', data: '2026-06-18' },
    { id: 28, timeCasa: 'Bósnia e Herzegovina', timeFora: 'Suíça', data: '2026-06-18' },
    // 19/06/2026
    { id: 29, timeCasa: 'Estados Unidos', timeFora: 'Austrália', data: '2026-06-19' },
    { id: 30, timeCasa: 'Brasil', timeFora: 'Haiti', data: '2026-06-19' },
    { id: 31, timeCasa: 'Marrocos', timeFora: 'Escócia', data: '2026-06-19' },
    // 20/06/2026
    { id: 32, timeCasa: 'Paraguai', timeFora: 'Turquia', data: '2026-06-20' },
    { id: 33, timeCasa: 'Alemanha', timeFora: 'Costa do Marfim', data: '2026-06-20' },
    { id: 34, timeCasa: 'Curaçao', timeFora: 'Equador', data: '2026-06-20' },
    { id: 35, timeCasa: 'Holanda', timeFora: 'Suécia', data: '2026-06-20' },
    // 21/06/2026
    { id: 36, timeCasa: 'Japão', timeFora: 'Tunísia', data: '2026-06-21' },
    { id: 37, timeCasa: 'Bélgica', timeFora: 'Irã', data: '2026-06-21' },
    { id: 38, timeCasa: 'Egito', timeFora: 'Nova Zelândia', data: '2026-06-21' },
    { id: 39, timeCasa: 'Espanha', timeFora: 'Arábia Saudita', data: '2026-06-21' },
    { id: 40, timeCasa: 'Cabo Verde', timeFora: 'Uruguai', data: '2026-06-21' },
    // 22/06/2026
    { id: 41, timeCasa: 'Argentina', timeFora: 'Áustria', data: '2026-06-22' },
    { id: 42, timeCasa: 'Senegal', timeFora: 'Noruega', data: '2026-06-22' },
    { id: 43, timeCasa: 'França', timeFora: 'Iraque', data: '2026-06-22' },
    // 23/06/2026
    { id: 44, timeCasa: 'Argélia', timeFora: 'Jordânia', data: '2026-06-23' },
    { id: 45, timeCasa: 'Inglaterra', timeFora: 'Gana', data: '2026-06-23' },
    { id: 46, timeCasa: 'Croácia', timeFora: 'Panamá', data: '2026-06-23' },
    { id: 47, timeCasa: 'Portugal', timeFora: 'Uzbequistão', data: '2026-06-23' },
    { id: 48, timeCasa: 'República Democrática do Congo', timeFora: 'Colômbia', data: '2026-06-23' },
    // 24/06/2026
    { id: 49, timeCasa: 'Canadá', timeFora: 'Suíça', data: '2026-06-24' },
    { id: 50, timeCasa: 'Bósnia e Herzegovina', timeFora: 'Catar', data: '2026-06-24' },
    { id: 51, timeCasa: 'Brasil', timeFora: 'Escócia', data: '2026-06-24' },
    { id: 52, timeCasa: 'Marrocos', timeFora: 'Haiti', data: '2026-06-24' },
    { id: 53, timeCasa: 'México', timeFora: 'República Tcheca', data: '2026-06-24' },
    { id: 54, timeCasa: 'África do Sul', timeFora: 'Coreia do Sul', data: '2026-06-24' },
    // 25/06/2026
    { id: 55, timeCasa: 'Alemanha', timeFora: 'Equador', data: '2026-06-25' },
    { id: 56, timeCasa: 'Curaçao', timeFora: 'Costa do Marfim', data: '2026-06-25' },
    { id: 57, timeCasa: 'Japão', timeFora: 'Suécia', data: '2026-06-25' },
    { id: 58, timeCasa: 'Holanda', timeFora: 'Tunísia', data: '2026-06-25' },
    { id: 59, timeCasa: 'Estados Unidos', timeFora: 'Turquia', data: '2026-06-25' },
    { id: 60, timeCasa: 'Paraguai', timeFora: 'Austrália', data: '2026-06-25' },
    // 26/06/2026
    { id: 61, timeCasa: 'França', timeFora: 'Noruega', data: '2026-06-26' },
    { id: 62, timeCasa: 'Senegal', timeFora: 'Iraque', data: '2026-06-26' },
    { id: 63, timeCasa: 'Espanha', timeFora: 'Uruguai', data: '2026-06-26' },
    { id: 64, timeCasa: 'Cabo Verde', timeFora: 'Arábia Saudita', data: '2026-06-26' },
    // 27/06/2026
    { id: 65, timeCasa: 'Bélgica', timeFora: 'Nova Zelândia', data: '2026-06-27' },
    { id: 66, timeCasa: 'Egito', timeFora: 'Irã', data: '2026-06-27' },
    { id: 67, timeCasa: 'Inglaterra', timeFora: 'Panamá', data: '2026-06-27' },
    { id: 68, timeCasa: 'Croácia', timeFora: 'Gana', data: '2026-06-27' },
    { id: 69, timeCasa: 'Portugal', timeFora: 'Colômbia', data: '2026-06-27' },
    { id: 70, timeCasa: 'República Democrática do Congo', timeFora: 'Uzbequistão', data: '2026-06-27' },
    { id: 71, timeCasa: 'Argentina', timeFora: 'Jordânia', data: '2026-06-27' },
    { id: 72, timeCasa: 'Argélia', timeFora: 'Áustria', data: '2026-06-27' }
];

const USUARIOS = {
    'Nelson': { nome: 'Nelson' },
    'Douglas': { nome: 'Douglas' },
    'Alexandre': { nome: 'Alexandre' },
    'Alcy': { nome: 'Alcy' },
    'Carla': { nome: 'Carla' },
    'Thiago': { nome: 'Thiago' },
    'Ronaldo': { nome: 'Ronaldo' },
    'Kelly': { nome: 'Kelly' },
    'Ana': { nome: 'Ana' },
    'Carmem': { nome: 'Carmem' },
    'Rogéria': { nome: 'Rogéria' },
    'Carol': { nome: 'Carol' },
    'Márcio': { nome: 'Márcio' },
    'Raphael': { nome: 'Raphael' },
    'Julio': { nome: 'Julio' },
    'Elyseu': { nome: 'Elyseu' }
};