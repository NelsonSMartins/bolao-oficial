// ============================================
// APOSTAS DOS JOGADORES
// Formato: "idJogo_NomeJogador": { casa: gols, fora: gols }
// ============================================

const APOSTAS = {
    // ========================================
    // CARLA
    // ========================================
    "1_Carla": { casa: 2, fora: 1 },
    "2_Carla": { casa: 1, fora: 1 },
    "3_Carla": { casa: 3, fora: 2 },
    "4_Carla": { casa: 2, fora: 1 },
    "5_Carla": { casa: 1, fora: 0 },
    "6_Carla": { casa: 3, fora: 1 },
    "7_Carla": { casa: 2, fora: 0 },
    "8_Carla": { casa: 1, fora: 1 },
    "9_Carla": { casa: 3, fora: 2 },
    "10_Carla": { casa: 0, fora: 1 },
    "11_Carla": { casa: 2, fora: 1 },
    "12_Carla": { casa: 1, fora: 1 },

    // ========================================
    // DOUGLAS
    // ========================================
    "1_Douglas": { casa: 2, fora: 1 },
    "2_Douglas": { casa: 2, fora: 1 },
    "3_Douglas": { casa: 2, fora: 1 },
    "4_Douglas": { casa: 1, fora: 2 },
    "5_Douglas": { casa: 1, fora: 2 },
    "6_Douglas": { casa: 2, fora: 1 },
    "7_Douglas": { casa: 0, fora: 3 },
    "8_Douglas": { casa: 1, fora: 2 },
    "9_Douglas": { casa: 8, fora: 0 },
    "10_Douglas": { casa: 3, fora: 1 },
    "11_Douglas": { casa: 0, fora: 2 },
    "12_Douglas": { casa: 2, fora: 1 },

    // ========================================
    // NELSON
    // ========================================
    "1_Nelson": { casa: 3, fora: 1 },
    "2_Nelson": { casa: 2, fora: 0 },
    "3_Nelson": { casa: 2, fora: 1 },
    "4_Nelson": { casa: 2, fora: 2 },
    "5_Nelson": { casa: 0, fora: 2 },
    "6_Nelson": { casa: 2, fora: 1 },
    "7_Nelson": { casa: 0, fora: 2 },
    "8_Nelson": { casa: 0, fora: 2 },
    "9_Nelson": { casa: 6, fora: 0 },
    "10_Nelson": { casa: 3, fora: 0 },
    "11_Nelson": { casa: 2, fora: 1 },
    "12_Nelson": { casa: 1, fora: 1 },

    // ========================================
    // ALEXANDRE
    // ========================================
    "1_Alexandre": { casa: 2, fora: 1 },
    "2_Alexandre": { casa: 1, fora: 1 },
    "3_Alexandre": { casa: 2, fora: 1 },
    "4_Alexandre": { casa: 1, fora: 1 },
    "5_Alexandre": { casa: 1, fora: 3 },
    "6_Alexandre": { casa: 2, fora: 1 },
    "7_Alexandre": { casa: 1, fora: 2 },
    "8_Alexandre": { casa: 1, fora: 3 },
    "9_Alexandre": { casa: 5, fora: 0 },
    "10_Alexandre": { casa: 2, fora: 2 },
    "11_Alexandre": { casa: 2, fora: 2 },
    "12_Alexandre": { casa: 2, fora: 1 },

    // ========================================
    // KELLY
    // ========================================
    "1_Kelly": { casa: 2, fora: 0 },
    "2_Kelly": { casa: 1, fora: 1 },
    "3_Kelly": { casa: 0, fora: 2 },
    "4_Kelly": { casa: 3, fora: 1 },
    "5_Kelly": { casa: 1, fora: 2 },
    "6_Kelly": { casa: 2, fora: 1 },
    "7_Kelly": { casa: 0, fora: 3 },
    "8_Kelly": { casa: 1, fora: 2 },
    "9_Kelly": { casa: 4, fora: 0 },
    "10_Kelly": { casa: 2, fora: 2 },
    "11_Kelly": { casa: 1, fora: 1 },
    "12_Kelly": { casa: 2, fora: 0 },

    // ========================================
    // ALCY
    // ========================================
    "1_Alcy": { casa: 2, fora: 1 },
    "2_Alcy": { casa: 2, fora: 1 },
    "3_Alcy": { casa: 3, fora: 1 },
    "4_Alcy": { casa: 1, fora: 1 },
    "5_Alcy": { casa: 1, fora: 1 },
    "6_Alcy": { casa: 3, fora: 1 },
    "7_Alcy": { casa: 0, fora: 1 },
    "8_Alcy": { casa: 2, fora: 2 },
    "9_Alcy": { casa: 4, fora: 0 },
    "10_Alcy": { casa: 2, fora: 2 },
    "11_Alcy": { casa: 1, fora: 2 },
    "12_Alcy": { casa: 2, fora: 1 },

    // ========================================
    // ROGÉRIA
    // ========================================
    "1_Rogéria": { casa: 1, fora: 0 },
    "2_Rogéria": { casa: 2, fora: 1 },
    "3_Rogéria": { casa: 3, fora: 1 },
    "4_Rogéria": { casa: 1, fora: 1 },
    "5_Rogéria": { casa: 1, fora: 2 },
    "6_Rogéria": { casa: 2, fora: 1 },
    "7_Rogéria": { casa: 1, fora: 1 },
    "8_Rogéria": { casa: 0, fora: 1 },
    "9_Rogéria": { casa: 2, fora: 0 },
    "10_Rogéria": { casa: 1, fora: 1 },
    "11_Rogéria": { casa: 1, fora: 2 },
    "12_Rogéria": { casa: 1, fora: 0 },

    // ========================================
    // ELISEU (Elyseu)
    // ========================================
    "1_Elyseu": { casa: 2, fora: 1 },
    "2_Elyseu": { casa: 1, fora: 1 },
    "3_Elyseu": { casa: 2, fora: 1 },
    "4_Elyseu": { casa: 1, fora: 2 },
    "5_Elyseu": { casa: 1, fora: 0 },
    "6_Elyseu": { casa: 1, fora: 1 },
    "7_Elyseu": { casa: 0, fora: 1 },
    "8_Elyseu": { casa: 2, fora: 2 },
    "9_Elyseu": { casa: 2, fora: 0 },
    "10_Elyseu": { casa: 2, fora: 2 },
    "11_Elyseu": { casa: 1, fora: 3 },
    "12_Elyseu": { casa: 2, fora: 1 },

    // ========================================
    // JULIO
    // ========================================
    "1_Julio": { casa: 3, fora: 1 },
    "2_Julio": { casa: 2, fora: 1 },
    "3_Julio": { casa: 3, fora: 0 },
    "4_Julio": { casa: 2, fora: 0 },
    "5_Julio": { casa: 0, fora: 2 },
    "6_Julio": { casa: 3, fora: 2 },
    "7_Julio": { casa: 1, fora: 3 },
    "8_Julio": { casa: 0, fora: 2 },
    "9_Julio": { casa: 6, fora: 0 },
    "10_Julio": { casa: 2, fora: 2 },
    "11_Julio": { casa: 1, fora: 3 },
    "12_Julio": { casa: 2, fora: 1 },

    // ========================================
    // RONALDO
    // ========================================
    "1_Ronaldo": { casa: 2, fora: 1 },
    "2_Ronaldo": { casa: 1, fora: 2 },
    "3_Ronaldo": { casa: 1, fora: 1 },
    "4_Ronaldo": { casa: 2, fora: 3 },
    "5_Ronaldo": { casa: 0, fora: 2 },
    "6_Ronaldo": { casa: 2, fora: 1 },
    "7_Ronaldo": { casa: 1, fora: 3 },
    "8_Ronaldo": { casa: 1, fora: 1 },
    "9_Ronaldo": { casa: 3, fora: 0 },
    "10_Ronaldo": { casa: 2, fora: 2 },
    "11_Ronaldo": { casa: 0, fora: 0 },
    "12_Ronaldo": { casa: 2, fora: 0 },

    // ========================================
    // CAROL
    // ========================================
    "1_Carol": { casa: 2, fora: 1 },
    "2_Carol": { casa: 1, fora: 1 },
    "3_Carol": { casa: 0, fora: 0 },
    "4_Carol": { casa: 1, fora: 2 },
    "5_Carol": { casa: 0, fora: 1 },
    "6_Carol": { casa: 2, fora: 1 },
    "7_Carol": { casa: 0, fora: 2 },
    "8_Carol": { casa: 1, fora: 2 },
    "9_Carol": { casa: 2, fora: 0 },
    "10_Carol": { casa: 3, fora: 2 },
    "11_Carol": { casa: 1, fora: 1 },
    "12_Carol": { casa: 1, fora: 0 },

    // ========================================
    // THIAGO
    // ========================================
    "1_Thiago": { casa: 3, fora: 1 },
    "2_Thiago": { casa: 0, fora: 1 },
    "3_Thiago": { casa: 2, fora: 0 },
    "4_Thiago": { casa: 2, fora: 0 },
    "5_Thiago": { casa: 1, fora: 3 },
    "6_Thiago": { casa: 2, fora: 3 },
    "7_Thiago": { casa: 0, fora: 1 },
    "8_Thiago": { casa: 3, fora: 2 },
    "9_Thiago": { casa: 4, fora: 0 },
    "10_Thiago": { casa: 2, fora: 2 },
    "11_Thiago": { casa: 0, fora: 0 },
    "12_Thiago": { casa: 1, fora: 0 },

    // ========================================
    // CARMEM
    // ========================================
    "1_Carmem": { casa: 1, fora: 1 },
    "2_Carmem": { casa: 1, fora: 0 },
    "3_Carmem": { casa: 0, fora: 0 },
    "4_Carmem": { casa: 2, fora: 1 },
    "5_Carmem": { casa: 2, fora: 0 },
    "6_Carmem": { casa: 1, fora: 0 },
    "7_Carmem": { casa: 0, fora: 0 },
    "8_Carmem": { casa: 1, fora: 2 },
    "9_Carmem": { casa: 2, fora: 0 },
    "10_Carmem": { casa: 1, fora: 1 },
    "11_Carmem": { casa: 1, fora: 1 },
    "12_Carmem": { casa: 2, fora: 1 },

    // ========================================
    // MARCIO
    // ========================================
    "1_Márcio": { casa: 2, fora: 0 },
    "2_Márcio": { casa: 2, fora: 2 },
    "3_Márcio": { casa: 1, fora: 0 },
    "4_Márcio": { casa: 0, fora: 1 },
    "5_Márcio": { casa: 0, fora: 3 },
    "6_Márcio": { casa: 1, fora: 2 },
    "7_Márcio": { casa: 0, fora: 2 },
    "8_Márcio": { casa: 0, fora: 1 },
    "9_Márcio": { casa: 5, fora: 0 },
    "10_Márcio": { casa: 2, fora: 2 },
    "11_Márcio": { casa: 0, fora: 0 },
    "12_Márcio": { casa: 1, fora: 0 },

    // ========================================
    // ANA
    // ========================================
    "1_Ana": { casa: 3, fora: 0 },
    "2_Ana": { casa: 1, fora: 0 },
    "3_Ana": { casa: 2, fora: 1 },
    "4_Ana": { casa: 2, fora: 1 },
    "5_Ana": { casa: 0, fora: 2 },
    "6_Ana": { casa: 2, fora: 1 },
    "7_Ana": { casa: 0, fora: 2 },
    "8_Ana": { casa: 1, fora: 2 },
    "9_Ana": { casa: 4, fora: 0 },
    "10_Ana": { casa: 2, fora: 1 },
    "11_Ana": { casa: 1, fora: 2 },
    "12_Ana": { casa: 2, fora: 1 }
};