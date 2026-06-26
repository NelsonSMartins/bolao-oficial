// ============================================
// PERGUNTAS DA FORCA - COPA 2026
// 100 perguntas sobre futebol, copas e jogadores
// ============================================

const TODAS_PERGUNTAS = [
    // ===== CAMPEÕES MUNDIAIS (10) =====
    { 
        palavra: "BRASIL", 
        dicas: ["País com 5 títulos mundiais", "Pentacampeão em 2002", "País do futebol arte"] 
    },
    { 
        palavra: "ALEMANHA", 
        dicas: ["4 títulos mundiais", "Campeã em 2014", "País da seleção alemã"] 
    },
    { 
        palavra: "ITALIA", 
        dicas: ["4 títulos mundiais", "Campeã em 2006", "País da Squadra Azzurra"] 
    },
    { 
        palavra: "ARGENTINA", 
        dicas: ["3 títulos mundiais", "Campeã em 2022", "País de Messi"] 
    },
    { 
        palavra: "FRANCA", 
        dicas: ["2 títulos mundiais", "Campeã em 2018", "País de Mbappé"] 
    },
    { 
        palavra: "URUGUAI", 
        dicas: ["2 títulos mundiais", "Campeão em 1950", "País do Maracanazo"] 
    },
    { 
        palavra: "INGLATERRA", 
        dicas: ["1 título mundial", "Campeã em 1966", "País da Premier League"] 
    },
    { 
        palavra: "ESPANHA", 
        dicas: ["1 título mundial", "Campeã em 2010", "País do tiki-taka"] 
    },
    { 
        palavra: "CROACIA", 
        dicas: ["Vice-campeã em 2018", "Terceiro lugar em 2022", "País de Modric"] 
    },
    { 
        palavra: "HOLANDA", 
        dicas: ["Vice-campeã em 2010", "Terceiro lugar em 2014", "País da Laranja Mecânica"] 
    },

    // ===== JOGADORES BRASILEIROS (10) =====
    { 
        palavra: "PELE", 
        dicas: ["Rei do futebol", "3 títulos mundiais", "Maior jogador da história"] 
    },
    { 
        palavra: "RONALDO", 
        dicas: ["Fenômeno", "Campeão em 2002", "Artilheiro da Copa de 2002"] 
    },
    { 
        palavra: "NEYMAR", 
        dicas: ["Camisa 10 do Brasil", "Maior artilheiro da seleção", "Joga no Santos"] 
    },
    { 
        palavra: "RONALDINHO", 
        dicas: ["Campeão em 2002", "Bruxo", "Melhor do mundo em 2005"] 
    },
    { 
        palavra: "ROMARIO", 
        dicas: ["Campeão em 1994", "Base do Vasco", "Baixinho"] 
    },
    { 
        palavra: "RIVALDO", 
        dicas: ["Campeão em 2002", "Pernambucano", "Melhor do mundo em 1999"] 
    },
    { 
        palavra: "GARRINCHA", 
        dicas: ["Campeão em 1962", "Anjo das pernas tortas", "Jogou no Botafogo"] 
    },
    { 
        palavra: "ZICO", 
        dicas: ["Galinho", "Maior ídolo do Flamengo", "Gênio do futebol"] 
    },
    { 
        palavra: "ROBERTO CARLOS", 
        dicas: ["Lateral esquerdo", "Campeão em 2002", "Famoso pela falta"] 
    },
    { 
        palavra: "CAFU", 
        dicas: ["Lateral direito", "Campeão em 1994 e 2002", "Capitão do penta"] 
    },

    // ===== JOGADORES ARGENTINOS (5) =====
    { 
        palavra: "MESSI", 
        dicas: ["8 Bolas de Ouro", "Campeão em 2022", "Ídolo do Barcelona"] 
    },
    { 
        palavra: "MARADONA", 
        dicas: ["Campeão em 1986", "Mão de Deus", "Ídolo do Napoli"] 
    },
    { 
        palavra: "DI MARIA", 
        dicas: ["Gol na final de 2022", "Joga no Benfica", "Ponta esquerda"] 
    },
    { 
        palavra: "AGUERO", 
        dicas: ["Artilheiro do Manchester City", "Sogro de Messi", "Atacante argentino"] 
    },
    { 
        palavra: "BATISTUTA", 
        dicas: ["Artilheiro da seleção argentina", "Jogou na Fiorentina", "Atacante de força"] 
    },

    // ===== JOGADORES EUROPEUS (10) =====
    { 
        palavra: "CRISTIANO RONALDO", 
        dicas: ["5 Champions", "Maior artilheiro da história", "Ídolo do Real Madrid"] 
    },
    { 
        palavra: "MBAPPE", 
        dicas: ["Campeão em 2018", "Velocidade", "Joga no Real Madrid"] 
    },
    { 
        palavra: "DE BRUYNE", 
        dicas: ["Meia do Manchester City", "Melhor passes do mundo", "Belga"] 
    },
    { 
        palavra: "HAALAND", 
        dicas: ["Atacante do Manchester City", "Artilheiro na Premier League", "Norueguês"] 
    },
    { 
        palavra: "BENZEMA", 
        dicas: ["Bola de Ouro 2022", "Jogou no Real Madrid", "Francês"] 
    },
    { 
        palavra: "MODRIC", 
        dicas: ["Bola de Ouro 2018", "Meia do Real Madrid", "Croata"] 
    },
    { 
        palavra: "LEWANDOWSKI", 
        dicas: ["Artilheiro do Bayern", "Joga no Barcelona", "Polonês"] 
    },
    { 
        palavra: "SALAH", 
        dicas: ["Atacante do Liverpool", "Rei do Egito", "Campeão da Champions"] 
    },
    { 
        palavra: "KANE", 
        dicas: ["Atacante do Bayern", "Artilheiro da seleção inglesa", "Camisa 9"] 
    },
    { 
        palavra: "NEUER", 
        dicas: ["Goleiro da Alemanha", "Campeão em 2014", "Goleiro líbero"] 
    },

    // ===== ANOS DAS COPAS (5) =====
    { 
        palavra: "1930", 
        dicas: ["Primeira Copa do Mundo", "Uruguai campeão", "Sede no Uruguai"] 
    },
    { 
        palavra: "1958", 
        dicas: ["Brasil campeão", "Pelé estreou com 17 anos", "Sede na Suécia"] 
    },
    { 
        palavra: "1970", 
        dicas: ["Brasil tricampeão", "Pelé e Garrincha", "Sede no México"] 
    },
    { 
        palavra: "1994", 
        dicas: ["Brasil tetracampeão", "Romário artilheiro", "Sede nos EUA"] 
    },
    { 
        palavra: "2002", 
        dicas: ["Brasil pentacampeão", "Ronaldo artilheiro", "Sede na Coreia/Japão"] 
    },

    // ===== SELEÇÕES E APELIDOS (10) =====
    { 
        palavra: "CANARINHO", 
        dicas: ["Apelido da seleção brasileira", "Cores amarelo e azul", "5 títulos mundiais"] 
    },
    { 
        palavra: "ALBICELESTE", 
        dicas: ["Apelido da Argentina", "Cores branco e azul", "Messi e Maradona"] 
    },
    { 
        palavra: "TIKI TAKA", 
        dicas: ["Estilo de jogo espanhol", "Muitos passes", "Campeã em 2010"] 
    },
    { 
        palavra: "AMARELINHA", 
        dicas: ["Apelido do Brasil", "Camisa amarela", "Pentacampeão"] 
    },
    { 
        palavra: "AZURRA", 
        dicas: ["Apelido da Itália", "Camisa azul", "4 títulos mundiais"] 
    },
    { 
        palavra: "MANNSCHAFT", 
        dicas: ["Apelido da Alemanha", "Camisa branca", "4 títulos mundiais"] 
    },
    { 
        palavra: "GENERAL", 
        dicas: ["Apelido de Zagallo", "Técnico campeão", "Brasil 1970"] 
    },
    { 
        palavra: "FENÔMENO", 
        dicas: ["Apelido de Ronaldo", "Pentacampeão", "Atacante"] 
    },
    { 
        palavra: "BRUXO", 
        dicas: ["Apelido de Ronaldinho", "Campeão em 2002", "Sorriso"] 
    },
    { 
        palavra: "REI", 
        dicas: ["Apelido de Pelé", "Maior da história", "3 títulos"] 
    },

    // ===== ESTÁDIOS E CIDADES (10) =====
    { 
        palavra: "MARACANA", 
        dicas: ["Estádio do Rio de Janeiro", "Final de 1950", "Estádio do Brasil"] 
    },
    { 
        palavra: "WEMBLEY", 
        dicas: ["Estádio de Londres", "Final de 1966", "Inglaterra"] 
    },
    { 
        palavra: "SANTIAGO", 
        dicas: ["Estádio do Chile", "Copa de 1962", "Sede no Chile"] 
    },
    { 
        palavra: "BERNABEU", 
        dicas: ["Estádio do Real Madrid", "Espanha", "Estádio famoso"] 
    },
    { 
        palavra: "CAMP NOU", 
        dicas: ["Estádio do Barcelona", "Espanha", "Maior da Europa"] 
    },
    { 
        palavra: "AZTECA", 
        dicas: ["Estádio do México", "Final de 1970", "Final de 1986"] 
    },
    { 
        palavra: "MINEIRÃO", 
        dicas: ["Estádio de Belo Horizonte", "7 a 1 da Alemanha", "Brasil"] 
    },
    { 
        palavra: "FONTENOVA", 
        dicas: ["Estádio de Salvador", "Copa de 2014", "Brasil"] 
    },
    { 
        palavra: "BEIRA RIO", 
        dicas: ["Estádio do Internacional", "Porto Alegre", "Brasil"] 
    },
    { 
        palavra: "MORUMBI", 
        dicas: ["Estádio do São Paulo", "São Paulo", "Brasil"] 
    },

    // ===== TÉCNICOS FAMOSOS (10) =====
    { 
        palavra: "ZAGALLO", 
        dicas: ["Técnico do penta", "Campeão em 1970", "Único com 4 copas"] 
    },
    { 
        palavra: "PARREIRA", 
        dicas: ["Técnico do tetra", "Campeão em 1994", "Uruguaio"] 
    },
    { 
        palavra: "SCALONI", 
        dicas: ["Técnico da Argentina", "Campeão em 2022", "Revelação"] 
    },
    { 
        palavra: "DESCHAMPS", 
        dicas: ["Técnico da França", "Campeão em 2018", "Volante"] 
    },
    { 
        palavra: "LOW", 
        dicas: ["Técnico da Alemanha", "Campeão em 2014", "Substituto de Klinsmann"] 
    },
    { 
        palavra: "GUARDIOLA", 
        dicas: ["Técnico do Manchester City", "Espanhol", "Tiki-taka"] 
    },
    { 
        palavra: "KLOPP", 
        dicas: ["Técnico do Liverpool", "Alemão", "Heavy metal"] 
    },
    { 
        palavra: "MOURINHO", 
        dicas: ["Técnico português", "Special One", "Treinou Chelsea e Real"] 
    },
    { 
        palavra: "SCOLARI", 
        dicas: ["Técnico do penta", "Felipão", "Campeão em 2002"] 
    },
    { 
        palavra: "TITE", 
        dicas: ["Técnico do Brasil", "Corinthiano", "Último técnico do Brasil"] 
    },

    // ===== RECORDES E CURIOSIDADES (10) =====
    { 
        palavra: "PENTA", 
        dicas: ["5 títulos do Brasil", "2002", "Ronaldo artilheiro"] 
    },
    { 
        palavra: "TETRA", 
        dicas: ["4 títulos do Brasil", "1994", "Romário artilheiro"] 
    },
    { 
        palavra: "MARACANAZO", 
        dicas: ["Brasil x Uruguai 1950", "Derrota do Brasil", "Jogo histórico"] 
    },
    { 
        palavra: "MINEIRAZO", 
        dicas: ["Brasil 1 x 7 Alemanha", "2014", "Belo Horizonte"] 
    },
    { 
        palavra: "MAO DE DEUS", 
        dicas: ["Gol de Maradona", "1986", "Contra a Inglaterra"] 
    },
    { 
        palavra: "NAZISMO", 
        dicas: ["Ditadura na Alemanha", "Copa de 1938", "Adolf Hitler"] 
    },
    { 
        palavra: "QUADRUPLO", 
        dicas: ["4 gols de Leônidas", "1938", "Brasil"] 
    },
    { 
        palavra: "ARTILHEIRO", 
        dicas: ["Maior goleador da copa", "Ronaldo", "15 gols"] 
    },
    { 
        palavra: "PENALTI", 
        dicas: ["Tiro de 11 metros", "Decisão em 1994", "Baggio errou"] 
    },
    { 
        palavra: "TRI", 
        dicas: ["3 títulos do Brasil", "1970", "Pelé"] 
    },

    // ===== COPA 2026 (10) =====
    { 
        palavra: "2026", 
        dicas: ["Próxima Copa", "Sede no México e EUA", "48 seleções"] 
    },
    { 
        palavra: "MEXICO", 
        dicas: ["Sede da Copa 2026", "Terceira copa no país", "América do Norte"] 
    },
    { 
        palavra: "CANADA", 
        dicas: ["Sede da Copa 2026", "Primeira copa no país", "América do Norte"] 
    },
    { 
        palavra: "EUA", 
        dicas: ["Sede da Copa 2026", "América do Norte", "País do futebol"] 
    },
    { 
        palavra: "VINI JR", 
        dicas: ["Brasileiro do Real Madrid", "Campeão da Champions", "Jovem talento"] 
    },
    { 
        palavra: "RODRYGO", 
        dicas: ["Brasileiro do Real Madrid", "Jovem talento", "Revelação"] 
    },
    { 
        palavra: "ENDRIK", 
        dicas: ["Jovem promessa brasileira", "Joga no Real Madrid", "Revelação do Palmeiras"] 
    },
    { 
        palavra: "BROBBEY", 
        dicas: ["Atacante holandês", "Joga no Ajax", "Jovem"] 
    },
    { 
        palavra: "MUSIALA", 
        dicas: ["Jogador da Alemanha", "Joga no Bayern", "Meia"] 
    },
    { 
        palavra: "BALON DOR", 
        dicas: ["Prêmio de melhor jogador", "Messi e Ronaldo", "Copa 2026"] 
    },

    // ===== JOGOS DE FUTEBOL (10) =====
    { 
        palavra: "FIFA", 
        dicas: ["Jogo de futebol", "World Cup", "Simulador"] 
    },
    { 
        palavra: "PES", 
        dicas: ["Jogo de futebol", "Pro Evolution", "Konami"] 
    },
    { 
        palavra: "GOL", 
        dicas: ["Objetivo do jogo", "Marcar ponto", "Comemorar"] 
    },
    { 
        palavra: "BOLA", 
        dicas: ["Usada no jogo", "Redonda", "Dribles"] 
    },
    { 
        palavra: "BICICLETA", 
        dicas: ["Chute de costas", "Gol de Pele", "Movimento"] 
    },
    { 
        palavra: "FALTA", 
        dicas: ["Infração no jogo", "Tiro direto", "Roberto Carlos"] 
    },
    { 
        palavra: "CARTÃO", 
        dicas: ["Amarelo ou vermelho", "Penalidade", "Juiz"] 
    },
    { 
        palavra: "VAR", 
        dicas: ["Tecnologia no futebol", "Revisão de lances", "Impedimento"] 
    },
    { 
        palavra: "CHUTEIRA", 
        dicas: ["Usada pelos jogadores", "Trava", "Craque"] 
    },
    { 
        palavra: "UNIFORME", 
        dicas: ["Camisa do time", "Jogador", "Time"] 
    }
];