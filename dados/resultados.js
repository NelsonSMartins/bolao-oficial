// ============================================
// RESULTADOS DOS JOGOS
// Preencha conforme os jogos vão acontecendo
// Formato: "idJogo": { casa: gols, fora: gols }
// ============================================

const RESULTADOS = {
    // 11/06/2026 - Fase de Grupos
    1: { casa: 2, fora: 0 },  // México 2 x 0 África do Sul
    2: { casa: 2, fora: 1 },  // Coreia do Sul 2 x 1 Tchéquia
    
    // 12/06/2026 - Fase de Grupos
    3: { casa: 1, fora: 1 },  // Canadá 1 x 1 Bósnia e Herzegovina
    4: { casa: 4, fora: 1 },  // Estados Unidos 4 x 1 Paraguai
    
    // 13/06/2026 - Fase de Grupos
    5: { casa: 1, fora: 1 },  // Catar 1 x 1 Suíça
    6: { casa: 1, fora: 1 },  // Brasil 1 x 1 Marrocos
    7: { casa: 0, fora: 1 },  // Haiti 0 x 1 Escócia
    
    // 14/06/2026 - Fase de Grupos
    8: { casa: 2, fora: 0 },  // Austrália 2 x 0 Turquia
    9: { casa: 7, fora: 1 },  // Alemanha 7 x 1 Curaçao
    10: { casa: 2, fora: 2 }, // Holanda 2 x 2 Japão
    11: { casa: 1, fora: 0 }, // Costa do Marfim 1 x 0 Equador
    12: { casa: 5, fora: 1 }, // Suécia 5 x 1 Tunísia
    
    // 15/06/2026 - Fase de Grupos
    13: { casa: 0, fora: 0 }, // Espanha x Cabo Verde
    14: { casa: 1, fora: 1 }, // Arábia Saudita x Uruguai
    15: { casa: 1, fora: 1 }, // Bélgica x Egito
    16: { casa: 2, fora: 2 }, // Irã x Nova Zelândia
    
    // 16/06/2026 - Fase de Grupos
    17: { casa: 3, fora: 1 }, // França x Senegal
    18: { casa: 3, fora: 0 }, // Argentina x Argélia
    19: { casa: 1, fora: 4 }, // Iraque x Noruega
    
    // 17/06/2026 - Fase de Grupos
    20: { casa: 3, fora: 1 }, // Áustria x Jordânia
    21: { casa: 1, fora: 1 }, // Portugal x República Democrática do Congo
    22: { casa: 1, fora: 0 }, // Gana x Panamá
    23: { casa: 4, fora: 2 }, // Inglaterra x Croácia
    24: { casa: 1, fora: 3 }, // Uzbequistão x Colômbia
    
    // 18/06/2026 - Fase de Grupos
    25: { casa: 1, fora: 1 }, // África do Sul x República Tcheca
    26: { casa: 1, fora: 0 }, // México x Coreia do Sul
    27: { casa: 6, fora: 0 }, // Canadá x Catar
    28: { casa: 1, fora: 4 }, // Bósnia e Herzegovina x Suíça
    
    // 19/06/2026 - Fase de Grupos
    29: { casa: 2, fora: 0 }, // Estados Unidos x Austrália
    30: { casa: 3, fora: 0 }, // Brasil x Haiti
    31: { casa: 1, fora: 0 }, // Marrocos x Escócia
    
    // 20/06/2026 - Fase de Grupos
    32: { casa: 1, fora: 0 }, // Paraguai x Turquia
    33: { casa: 2, fora: 1 }, // Alemanha x Costa do Marfim
    34: { casa: 0, fora: 0 }, // Curaçao x Equador
    35: { casa: 5, fora: 1 }, // Holanda x Suécia
    
    // 21/06/2026 - Fase de Grupos
    36: { casa: 4, fora: 0 }, // Japão x Tunísia
    37: { casa: 0, fora: 0 }, // Bélgica x Irã
    38: { casa: 3, fora: 1 }, // Egito x Nova Zelândia
    39: { casa: 4, fora: 0 }, // Espanha x Arábia Saudita
    40: { casa: 2, fora: 2 }, // Cabo Verde x Uruguai
    
    // 22/06/2026 - Fase de Grupos
    41: { casa: 2, fora: 0 }, // Argentina x Áustria
    42: { casa: 2, fora: 3 }, // Senegal x Noruega
    43: { casa: 3, fora: 0 }, // França x Iraque
    
    // 23/06/2026 - Fase de Grupos
    44: { casa: 2, fora: 1 }, // Argélia x Jordânia
    45: { casa: 0, fora: 0 }, // Inglaterra x Gana
    46: { casa: 1, fora: 0 }, // Croácia x Panamá
    47: { casa: 5, fora: 0 }, // Portugal x Uzbequistão
    48: { casa: 0, fora: 1 }, // República Democrática do Congo x Colômbia
    
    // 24/06/2026 - Fase de Grupos
    49: { casa: 1, fora: 2 }, // Canadá x Suíça
    50: { casa: 3, fora: 1 }, // Bósnia e Herzegovina x Catar
    51: { casa: 3, fora: 0 }, // Brasil x Escócia
    52: { casa: 4, fora: 2 }, // Marrocos x Haiti
    53: { casa: 3, fora: 0 }, // México x República Tcheca
    54: { casa: 1, fora: 0 }, // África do Sul x Coreia do Sul
    
    // 25/06/2026 - Fase de Grupos
    55: { casa: 1, fora: 2 }, // Alemanha x Equador
    56: { casa: 0, fora: 2 }, // Curaçao x Costa do Marfim
    57: { casa: 1, fora: 1 }, // Japão x Suécia
    58: { casa: 3, fora: 1 }, // Holanda x Tunísia
    59: { casa: 2, fora: 3 }, // Estados Unidos x Turquia
    60: { casa: 0, fora: 0 }, // Paraguai x Austrália
    
    // 26/06/2026 - Fase de Grupos
    // 61: { casa: 0, fora: 0 }, // França x Noruega
    // 62: { casa: 0, fora: 0 }, // Senegal x Iraque
    // 63: { casa: 0, fora: 0 }, // Espanha x Uruguai
    // 64: { casa: 0, fora: 0 }, // Cabo Verde x Arábia Saudita
    
    // 27/06/2026 - Fase de Grupos
    // 65: { casa: 0, fora: 0 }, // Bélgica x Nova Zelândia
    // 66: { casa: 0, fora: 0 }, // Egito x Irã
    // 67: { casa: 0, fora: 0 }, // Inglaterra x Panamá
    // 68: { casa: 0, fora: 0 }, // Croácia x Gana
    // 69: { casa: 0, fora: 0 }, // Portugal x Colômbia
    // 70: { casa: 0, fora: 0 }, // República Democrática do Congo x Uzbequistão
    // 71: { casa: 0, fora: 0 }, // Argentina x Jordânia
    // 72: { casa: 0, fora: 0 }, // Argélia x Áustria
};
