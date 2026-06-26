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
    },

    // ----- FLAMENGO (15) -----
    { palavra: "FLAMENGO", dicas: ["Clube carioca fundado em 1895", "Rubro-negro", "Maior torcida do Brasil"] },
    { palavra: "ZICO", dicas: ["Maior idolo da historia do Flamengo", "Galinho", "508 gols pelo clube"] },
    { palavra: "JUNIOR", dicas: ["Lateral esquerdo campeao de 1981", "Capitao", "Camisa 11"] },
    { palavra: "ADILIO", dicas: ["Meia campeao de 1981", "Maestro", "Camisa 8"] },
    { palavra: "NUNES", dicas: ["Atacante campeao do Mundial 1981", "Camisa 9", "Fez 2 gols na final contra o Liverpool"] },
    { palavra: "GABIGOL", dicas: ["Atacante artilheiro da Libertadores 2019", "Camisa 9", "Fez 2 gols na final contra o River Plate"] },
    { palavra: "ARRASCAETA", dicas: ["Meia uruguaio campeao da Libertadores 2019", "Camisa 14", "Revelacao do Penarol"] },
    { palavra: "BRUNO HENRIQUE", dicas: ["Atacante campeao da Libertadores 2019", "Camisa 27", "Revelacao do Goias"] },
    { palavra: "EVERTON RIBEIRO", dicas: ["Meia campeao da Libertadores 2019", "Camisa 7", "Revelacao do Coritiba"] },
    { palavra: "GERSON", dicas: ["Volante campeao da Libertadores 2019", "Camisa 8", "Revelacao do Fluminense"] },
    { palavra: "DAVID LUIZ", dicas: ["Zagueiro campeao da Libertadores 2019", "Camisa 23", "Revelacao do Benfica"] },
    { palavra: "PETKOVIC", dicas: ["Meia campeao da Libertadores 2019", "Sergio", "Camisa 43"] },
    { palavra: "ADRIANO", dicas: ["Atacante campeao da Libertadores 2019", "Imperador", "Camisa 10"] },
    { palavra: "1981", dicas: ["Ano do Mundial do Flamengo", "Venceu o Liverpool por 3 a 0 no Japao", "Nunes fez 2 gols"] },
    { palavra: "2019", dicas: ["Ano da Libertadores do Flamengo", "Venceu o River Plate por 2 a 1 no Peru", "Gabigol fez 2 gols"] },

    // ----- CORINTHIANS (15) -----
    { palavra: "CORINTHIANS", dicas: ["Clube paulista fundado em 1910", "Timao", "Maior campeao do Brasil"] },
    { palavra: "CASSIO", dicas: ["Goleiro idolo e capitao", "Camisa 12", "Campeao do mundo 2012"] },
    { palavra: "RONALDO", dicas: ["Atacante fenomeno no Corinthians", "Fenomeno", "Campeao da Copa do Brasil 2009"] },
    { palavra: "MARCELINHO", dicas: ["Meia idolo dos anos 90", "Camisa 10", "Campeao brasileiro de 1990 e 1998"] },
    { palavra: "SOCRATES", dicas: ["Meia idolo dos anos 80", "Medico formado", "Camisa 8"] },
    { palavra: "RIVELINO", dicas: ["Meia idolo dos anos 70", "Camisa 10", "Revelado no Corinthians"] },
    { palavra: "VAMPETA", dicas: ["Volante idolo dos anos 90", "Camisa 8", "Campeao brasileiro de 1990 e 1998"] },
    { palavra: "YURI ALBERTO", dicas: ["Atacante atual do Corinthians", "Camisa 9", "Revelacao do Santos"] },
    { palavra: "GARRO", dicas: ["Meia argentino atual", "Camisa 10", "Revelacao"] },
    { palavra: "ROGER GUEDES", dicas: ["Atacante atual do Corinthians", "Camisa 19", "Revelacao do Criciuma"] },
    { palavra: "PAULINHO", dicas: ["Volante idolo do Corinthians", "Camisa 8", "Campeao do mundo 2012"] },
    { palavra: "EDILSON", dicas: ["Atacante idolo do Corinthians", "Camisa 11", "Campeao do mundo 2000"] },
    { palavra: "2000", dicas: ["Ano do primeiro Mundial do Corinthians", "Venceu o Vasco nos penaltis (4x3) no Japao", "Dida pegou 2 penaltis"] },
    { palavra: "2012", dicas: ["Ano do segundo Mundial do Corinthians", "Venceu o Chelsea por 1 a 0 no Japao", "Guerrero fez o gol"] },
    { palavra: "1998", dicas: ["Ano do Brasileiro do Corinthians", "Artilheiro do time foi Marcelinho com 15 gols", "Vampeta e Rincon"] },

    // ----- PALMEIRAS (15) -----
    { palavra: "PALMEIRAS", dicas: ["Clube paulista fundado em 1914", "Verdão", "Maior campeao do Brasil"] },
    { palavra: "ADEMIR DA GUIA", dicas: ["Maior idolo da historia do Palmeiras", "Divino", "Meia classudo"] },
    { palavra: "DUDU", dicas: ["Atacante idolo atual", "Camisa 7", "Campeao da Libertadores 2020, 2021 e 2022"] },
    { palavra: "GUSTAVO SCARPA", dicas: ["Meia idolo atual", "Camisa 14", "Campeao da Libertadores 2020, 2021 e 2022"] },
    { palavra: "RAPHAEL VEIGA", dicas: ["Meia atual do Palmeiras", "Camisa 23", "Campeao da Libertadores 2020, 2021 e 2022"] },
    { palavra: "RONY", dicas: ["Atacante atual do Palmeiras", "Camisa 10", "Campeao da Libertadores 2020, 2021 e 2022"] },
    { palavra: "MARCOS", dicas: ["Goleiro idolo dos anos 90 e 2000", "Camisa 1", "Campeao da Libertadores 1999"] },
    { palavra: "ZE ROBERTO", dicas: ["Lateral idolo do Palmeiras", "Camisa 6", "Campeao brasileiro de 1993 e 1994"] },
    { palavra: "EDMUNDO", dicas: ["Atacante idolo do Palmeiras", "Animal", "Campeao brasileiro de 1993 e 1994"] },
    { palavra: "RIVELINO", dicas: ["Meia idolo do Palmeiras", "Camisa 10", "Campeao brasileiro de 1967"] },
    { palavra: "1999", dicas: ["Ano da Libertadores do Palmeiras", "Venceu o Deportivo Cali por 2 a 1 no Uruguai", "Marcos defendeu penalti na final"] },
    { palavra: "2020", dicas: ["Ano da Libertadores do Palmeiras", "Venceu o Santos por 1 a 0 no Uruguai", "Breno Lopes fez o gol"] },
    { palavra: "2021", dicas: ["Ano da Libertadores do Palmeiras", "Venceu o Flamengo por 2 a 1 no Uruguai", "Dudu e Veiga marcaram"] },
    { palavra: "2022", dicas: ["Ano da Libertadores do Palmeiras", "Venceu o Athletico-PR por 1 a 0 no Equador", "Raphael Veiga fez o gol"] },
    { palavra: "2018", dicas: ["Ano do Brasileiro do Palmeiras", "Artilheiro do time foi Dudu com 15 gols", "Time comandado por Felipao"] },

    // ----- SANTOS (15) -----
    { palavra: "SANTOS", dicas: ["Clube paulista fundado em 1912", "Peixe", "Time de Pele"] },
    { palavra: "PELE", dicas: ["Maior jogador da historia do Santos", "Rei do futebol", "3 titulos mundiais"] },
    { palavra: "COUTO", dicas: ["Goleiro idolo dos anos 60", "Camisa 1", "Campeao do mundo 1962"] },
    { palavra: "PEPE", dicas: ["Atacante idolo dos anos 60", "Camisa 10", "Campeao do mundo 1962"] },
    { palavra: "MENGALVIO", dicas: ["Meia idolo dos anos 60", "Camisa 8", "Campeao do mundo 1962"] },
    { palavra: "ZITO", dicas: ["Volante idolo dos anos 60", "Camisa 5", "Campeao do mundo 1962"] },
    { palavra: "ORLANDO", dicas: ["Atacante idolo dos anos 60", "Camisa 9", "Campeao do mundo 1962"] },
    { palavra: "CLODOALDO", dicas: ["Zagueiro idolo dos anos 60", "Camisa 3", "Campeao do mundo 1962"] },
    { palavra: "NEYMAR", dicas: ["Atacante revelacao do Santos", "Camisa 10", "Artilheiro da Libertadores 2011"] },
    { palavra: "ROBINHO", dicas: ["Atacante revelacao do Santos", "Camisa 7", "Campeao brasileiro de 2002 e 2004"] },
    { palavra: "GANSO", dicas: ["Meia da base do Santos", "Camisa 10", "Campeao da Libertadores 2011"] },
    { palavra: "1962", dicas: ["Ano do Mundial do Santos", "Venceu o Benfica por 5 a 2 no Brasil", "Pele fez 3 gols"] },
    { palavra: "1963", dicas: ["Ano do Mundial do Santos", "Venceu o Milan por 4 a 2 no Brasil", "Pele fez 2 gols"] },
    { palavra: "2002", dicas: ["Ano do Brasileiro do Santos", "Artilheiro do time foi Robinho com 18 gols", "Diego e Elano"] },
    { palavra: "2011", dicas: ["Ano da Libertadores do Santos", "Venceu o Penarol na Argentina", "Neymar fez 3 gols na final"] },

    // ----- SAO PAULO (15) -----
    { palavra: "SAO PAULO", dicas: ["Clube paulista fundado em 1930", "Tricolor", "Maior campeao do Brasil"] },
    { palavra: "ROGERIO CENI", dicas: ["Maior idolo da historia do Sao Paulo", "Goleiro-artilheiro", "131 gols na carreira"] },
    { palavra: "RAI", dicas: ["Meia idolo dos anos 90", "Camisa 10", "Campeao do mundo 1992 e 1993"] },
    { palavra: "MULLER", dicas: ["Atacante idolo dos anos 80 e 90", "Camisa 9", "Campeao brasileiro de 1986"] },
    { palavra: "CAREACA", dicas: ["Atacante idolo dos anos 80", "Camisa 9", "Campeao brasileiro de 1986"] },
    { palavra: "TELE", dicas: ["Meia idolo dos anos 80", "Camisa 8", "Campeao brasileiro de 1986"] },
    { palavra: "SERGINHO", dicas: ["Zagueiro idolo dos anos 80", "Camisa 3", "Campeao brasileiro de 1986"] },
    { palavra: "PALHINHA", dicas: ["Volante idolo dos anos 80", "Camisa 5", "Campeao brasileiro de 1986"] },
    { palavra: "LUCAS", dicas: ["Atacante atual do Sao Paulo", "Camisa 7", "Revelacao da base"] },
    { palavra: "OSCAR", dicas: ["Meia atual do Sao Paulo", "Camisa 10", "Revelacao da base"] },
    { palavra: "CASEMIRO", dicas: ["Volante revelacao do Sao Paulo", "Camisa 5", "Revelacao da base"] },
    { palavra: "1992", dicas: ["Ano do Mundial do Sao Paulo", "Venceu o Barcelona por 2 a 1 no Brasil", "Rai e Muller marcaram"] },
    { palavra: "1993", dicas: ["Ano do Mundial do Sao Paulo", "Venceu o Milan por 3 a 2 no Brasil", "Rai e Cerezo marcaram"] },
    { palavra: "2005", dicas: ["Ano da Libertadores do Sao Paulo", "Venceu o Atletico Paranaense por 3 a 1 no Brasil", "Rogerio Ceni capitao"] },
    { palavra: "2006", dicas: ["Ano do Brasileiro do Sao Paulo", "Artilheiro do time foi Aloisio com 14 gols", "Rogerio Ceni capitao"] },

    // ----- FLUMINENSE (15) -----
    { palavra: "FLUMINENSE", dicas: ["Clube carioca fundado em 1902", "Tricolor", "Time de Fred"] },
    { palavra: "FRED", dicas: ["Maior idolo da historia do Fluminense", "Atacante", "Artilheiro da historia do clube"] },
    { palavra: "CONCA", dicas: ["Meia idolo argentino", "Camisa 10", "Campeao brasileiro de 2010 e 2012"] },
    { palavra: "THIAGO NEVES", dicas: ["Meia idolo dos anos 2010", "Camisa 10", "Campeao brasileiro de 2010"] },
    { palavra: "GUM", dicas: ["Zagueiro idolo dos anos 2010", "Camisa 3", "Campeao brasileiro de 2010 e 2012"] },
    { palavra: "DIGUINHO", dicas: ["Volante idolo dos anos 2010", "Camisa 5", "Campeao brasileiro de 2010 e 2012"] },
    { palavra: "WASHINGTON", dicas: ["Atacante idolo dos anos 2000", "Camisa 9", "Artilheiro do clube"] },
    { palavra: "CANO", dicas: ["Atacante argentino atual", "Camisa 14", "Artilheiro da Libertadores 2023"] },
    { palavra: "ARIAS", dicas: ["Meia colombiano atual", "Camisa 21", "Campeao da Libertadores 2023"] },
    { palavra: "NINO", dicas: ["Zagueiro atual do Fluminense", "Camisa 33", "Campeao da Libertadores 2023"] },
    { palavra: "JOHN", dicas: ["Goleiro atual do Fluminense", "Camisa 1", "Campeao da Libertadores 2023"] },
    { palavra: "GANSO", dicas: ["Meia atual do Fluminense", "Camisa 10", "Campeao da Libertadores 2023"] },
    { palavra: "2010", dicas: ["Ano do Brasileiro do Fluminense", "Artilheiro do time foi Fred com 23 gols", "Conca foi eleito o craque"] },
    { palavra: "2012", dicas: ["Ano do Brasileiro do Fluminense", "Artilheiro do time foi Fred com 20 gols", "Conca e Thiago Neves"] },
    { palavra: "2023", dicas: ["Ano da Libertadores do Fluminense", "Venceu o Boca Juniors por 2 a 1 no Brasil", "John Kennedy fez o gol"] },

    // ----- BOTAFOGO (15) -----
    { palavra: "BOTAFOGO", dicas: ["Clube carioca fundado em 1904", "Fogao", "Time de Garrincha"] },
    { palavra: "GARRINCHA", dicas: ["Maior idolo da historia do Botafogo", "Anjo das pernas tortas", "Campeao do mundo 1958 e 1962"] },
    { palavra: "NILTON SANTOS", dicas: ["Lateral idolo dos anos 60", "Camisa 6", "Campeao do mundo 1958 e 1962"] },
    { palavra: "DIDI", dicas: ["Meia idolo dos anos 60", "Folha seca", "Campeao do mundo 1958 e 1962"] },
    { palavra: "ZAGALLO", dicas: ["Atacante idolo dos anos 60", "Camisa 11", "Campeao do mundo 1958 e 1962"] },
    { palavra: "AMARILDO", dicas: ["Atacante idolo dos anos 60", "Camisa 9", "Campeao do mundo 1962"] },
    { palavra: "TIQUINHO", dicas: ["Atacante atual do Botafogo", "Camisa 9", "Campeao do Brasileiro 2024"] },
    { palavra: "1995", dicas: ["Ano do Brasileiro do Botafogo", "Artilheiro do time foi Tulio com 25 gols", "Campeao invicto"] },
    { palavra: "2024", dicas: ["Ano do Brasileiro do Botafogo", "Artilheiro do time foi Tiquinho com 18 gols", "Campeao"] },
    { palavra: "2024", dicas: ["Ano da Libertadores do Botafogo", "Venceu o Atletico por 2 a 0 no Uruguai", "Tiquinho fez o gol"] },
    { palavra: "1993", dicas: ["Ano da Copa Conmebol do Botafogo", "Venceu o Penarol por 2 a 0 na Argentina", "Tulio fez os gols"] },
    { palavra: "1968", dicas: ["Ano do Brasileiro do Botafogo", "Artilheiro do time foi Garrincha com 15 gols", "Nilton Santos"] },
    { palavra: "1989", dicas: ["Ano do Brasileiro do Botafogo", "Artilheiro do time foi Tita com 12 gols", "Campeao"] },
    { palavra: "1997", dicas: ["Ano do Brasileiro do Botafogo", "Artilheiro do time foi Tulio com 20 gols", "Campeao"] },
    { palavra: "2025", dicas: ["Ano da Recopa do Botafogo", "Venceu o Racing por 1 a 0 no Brasil", "Vitor fez o gol"] },

    // ----- VASCO (15) -----
    { palavra: "VASCO", dicas: ["Clube carioca fundado em 1898", "Gigante da Colina", "Resposta Histórica contra o racismo e o elitismo"] },
    { palavra: "DINAMITE", dicas: ["Maior idolo da historia do Vasco", "Atacante", "Maior artilheiro da historia do Brasileirão"] },
    { palavra: "ROMARIO", dicas: ["Atacante idolo do Vasco", "Camisa 11", "Revelado na base do Vasco"] },
    { palavra: "EDMUNDO", dicas: ["Atacante idolo dos anos 90", "Animal", "Campeao brasileiro de 1997 com 25 gols"] },
    { palavra: "PEDRINHO", dicas: ["Meia idolo dos anos 90", "Camisa 10", "Campeao brasileiro de 1997"] },
    { palavra: "FELIPE", dicas: ["Volante idolo dos anos 90", "Camisa 5", "Campeao brasileiro de 1997"] },
    { palavra: "DONIZETE", dicas: ["Zagueiro idolo dos anos 90", "Camisa 3", "Campeao brasileiro de 1997"] },
    { palavra: "MAURO", dicas: ["Goleiro idolo dos anos 90", "Camisa 1", "Campeao brasileiro de 1997"] },
    { palavra: "VALDIR", dicas: ["Zagueiro idolo dos anos 90", "Camisa 4", "Campeao brasileiro de 1997"] },
    { palavra: "VEGETTI", dicas: ["Atacante atual do Vasco", "Camisa 9", "Artilheiro do clube"] },
    { palavra: "1974", dicas: ["Ano do Brasileiro do Vasco", "Artilheiro do time foi Dinamite com 15 gols", "Campeao invicto"] },
    { palavra: "1989", dicas: ["Ano do Brasileiro do Vasco", "Artilheiro do time foi Romario com 18 gols", "Campeao"] },
    { palavra: "1997", dicas: ["Ano do Brasileiro do Vasco", "Artilheiro do time foi Edmundo com 25 gols", "Campeao"] },
    { palavra: "2000", dicas: ["Ano do Brasileiro do Vasco", "Artilheiro do time foi Romario com 23 gols", "Campeao"] },
    { palavra: "1998", dicas: ["Ano da Libertadores do Vasco", "Venceu o Barcelona por 2 a 1 no Equador", "Edmundo e Donizete marcaram"] },

    // ==========================================
    // JOGADORES LENDARIOS BRASILEIROS (50)
    // ==========================================
    { palavra: "PELE", dicas: ["Maior jogador da historia", "Rei do futebol", "3 titulos mundiais (1958, 1962, 1970)"] },
    { palavra: "MARADONA", dicas: ["Maior idolo argentino", "Mao de Deus", "Campeao do mundo 1986"] },
    { palavra: "RONALDO", dicas: ["Fenomeno", "Campeao do mundo 1994 e 2002", "Artilheiro da Copa 2002 com 8 gols"] },
    { palavra: "RONALDINHO", dicas: ["Bruxo", "Campeao do mundo 2002", "Melhor do mundo 2004 e 2005"] },
    { palavra: "ROMARIO", dicas: ["Baixinho", "Campeao do mundo 1994", "Artilheiro da Copa 1994 com 5 gols"] },
    { palavra: "RIVALDO", dicas: ["Pernambucano", "Campeao do mundo 2002", "Melhor do mundo 1999"] },
    { palavra: "GARRINCHA", dicas: ["Anjo das pernas tortas", "Campeao do mundo 1958 e 1962", "Idolo do Botafogo"] },
    { palavra: "ZICO", dicas: ["Galinho", "Maior idolo do Flamengo", "Artilheiro do clube com 508 gols"] },
    { palavra: "ROBERTO DINAMITE", dicas: ["Maior idolo do Vasco", "Artilheiro da historia do clube", "Campeao brasileiro de 1974"] },
    { palavra: "CAFU", dicas: ["Lateral direito", "Campeao do mundo 1994 e 2002", "Capitao do penta"] },
    { palavra: "ROBERTO CARLOS", dicas: ["Lateral esquerdo", "Campeao do mundo 2002", "Famoso pela falta"] },
    { palavra: "TOSTAO", dicas: ["Campeao do mundo 1970", "Meia do Cruzeiro", "Jogou no Vasco"] },
    { palavra: "GERSON", dicas: ["Canhotinha de ouro", "Campeao do mundo 1970", "Meia do Flamengo"] },
    { palavra: "FALCAO", dicas: ["Rei de Roma", "Jogou no Internacional", "Melhor do mundo em 1982"] },
    { palavra: "SOCRATES", dicas: ["Medico e jogador", "Capitao da selecao de 1982", "Jogou no Corinthians"] },
    { palavra: "DIDI", dicas: ["Folha seca", "Campeao do mundo 1958 e 1962", "Meia do Botafogo"] },
    { palavra: "NILTON SANTOS", dicas: ["Lateral esquerdo", "Campeao do mundo 1958 e 1962", "Idolo do Botafogo"] },
    { palavra: "ZAGALLO", dicas: ["Atacante", "Campeao do mundo 1958 e 1962", "Unico com 4 copas"] },
    { palavra: "LEAO", dicas: ["Goleiro", "Campeao do mundo 1970", "Idolo do Flamengo"] },
    { palavra: "JARZINHO", dicas: ["Ponta", "Campeao do mundo 1970", "Jogou no Flamengo"] },
    { palavra: "DIRCEU", dicas: ["Atacante", "Campeao do mundo 1970", "Jogou no Atletico"] },
    { palavra: "BEBETO", dicas: ["Atacante", "Campeao do mundo 1994", "Famoso por chutar a musa"] },
    { palavra: "BRANCO", dicas: ["Lateral esquerdo", "Campeao do mundo 1994", "Famoso por falta"] },
    { palavra: "DUNGA", dicas: ["Volante", "Campeao do mundo 1994", "Capitao do tetra"] },
    { palavra: "TAFFAREL", dicas: ["Goleiro", "Campeao do mundo 1994", "Idolo do Internacional"] },
    { palavra: "CLODOALDO", dicas: ["Zagueiro", "Campeao do mundo 1962", "Idolo do Santos"] },
    { palavra: "PEPE", dicas: ["Atacante", "Campeao do mundo 1962", "Idolo do Santos"] },
    { palavra: "COUTO", dicas: ["Goleiro", "Campeao do mundo 1962", "Idolo do Santos"] },
    { palavra: "MENGALVIO", dicas: ["Meia", "Campeao do mundo 1962", "Idolo do Santos"] },
    { palavra: "ZITO", dicas: ["Volante", "Campeao do mundo 1962", "Idolo do Santos"] },
    { palavra: "ORLANDO", dicas: ["Atacante", "Campeao do mundo 1962", "Idolo do Santos"] },
    { palavra: "AMARILDO", dicas: ["Atacante", "Campeao do mundo 1962", "Idolo do Botafogo"] },
    { palavra: "JUNIOR", dicas: ["Lateral", "Campeao do mundo 1982", "Idolo do Flamengo"] },
    { palavra: "LEANDRO", dicas: ["Lateral", "Campeao do mundo 1982", "Idolo do Flamengo"] },
    { palavra: "ADILIO", dicas: ["Meia", "Campeao do mundo 1982", "Idolo do Flamengo"] },
    { palavra: "NEYMAR", dicas: ["Camisa 10 do Brasil", "Maior artilheiro da selecao", "Joga no Santos"] },
    { palavra: "VINI JR", dicas: ["Atacante do Real Madrid", "Campeao da Champions", "Brasileiro"] },
    { palavra: "MESSI", dicas: ["Maior jogador argentino", "8 Bolas de Ouro", "Campeao do mundo 2022"] },
    { palavra: "CRISTIANO RONALDO", dicas: ["Maior jogador portugues", "5 Champions", "Maior artilheiro da historia"] },
    { palavra: "ENDERICK", dicas: ["Jovem promessa brasileira", "Joga no Real Madrid", "Revelacao do Palmeiras"] },
    { palavra: "ESTEVAO", dicas: ["Jovem promessa brasileira", "Joga no Palmeiras", "Revelacao"] },
    { palavra: "LUIS SUAREZ", dicas: ["Atacante uruguaio", "Jogou no Barcelona", "Artilheiro"] },
    { palavra: "CAVANI", dicas: ["Atacante uruguaio", "Jogou no PSG", "Artilheiro"] },
    { palavra: "GIROUD", dicas: ["Atacante frances", "Campeao do mundo 2018", "Artilheiro da Franca"] },
    { palavra: "VARDY", dicas: ["Atacante ingles", "Jogou no Leicester", "Campeao da Premier 2016"] },
    { palavra: "STERLING", dicas: ["Atacante ingles", "Jogou no Manchester City", "Velocidade"] },
    { palavra: "MADDISON", dicas: ["Meia ingles", "Jogou no Leicester", "Cria"] },
    { palavra: "RASHFORD", dicas: ["Atacante ingles", "Jogou no Manchester United", "Velocidade"] },
    { palavra: "SALAH", dicas: ["Atacante do Liverpool", "Egipcio", "Campeao da Champions 2019"] },
    { palavra: "KANE", dicas: ["Atacante do Bayern", "Ingles", "Artilheiro da selecao"] },

    // ==========================================
    // ANOS DAS COPAS (8)
    // ==========================================
    { palavra: "1930", dicas: ["Primeira Copa do Mundo", "Uruguai campeao", "Sede no Uruguai"] },
    { palavra: "1958", dicas: ["Brasil campeao", "Pele estreou com 17 anos", "Sede na Suecia"] },
    { palavra: "1970", dicas: ["Brasil tricampeao", "Pele e Garrincha", "Sede no Mexico"] },
    { palavra: "1994", dicas: ["Brasil tetracampeao", "Romario artilheiro", "Sede nos EUA"] },
    { palavra: "2002", dicas: ["Brasil pentacampeao", "Ronaldo artilheiro", "Sede na Coreia/Japao"] },
    { palavra: "2010", dicas: ["Espanha campea", "Iniesta heroi", "Sede na Africa do Sul"] },
    { palavra: "2018", dicas: ["Franca campea", "Mbappe revelacao", "Sede na Russia"] },
    { palavra: "2022", dicas: ["Argentina campea", "Messi campeao", "Sede no Catar"] },

    // ==========================================
    // JOGADORES INTERNACIONAIS (50)
    // ==========================================
    { palavra: "MBAPPE", dicas: ["Atacante do Real Madrid", "Campeao do mundo 2018", "Velocidade"] },
    { palavra: "DE BRUYNE", dicas: ["Meia do Manchester City", "Belga", "Melhor passes do mundo"] },
    { palavra: "HAALAND", dicas: ["Atacante do Manchester City", "Noruegues", "Artilheiro da Premier 2023"] },
    { palavra: "BENZEMA", dicas: ["Atacante", "Bola de Ouro 2022", "Frances"] },
    { palavra: "MODRIC", dicas: ["Meia do Real Madrid", "Bola de Ouro 2018", "Croata"] },
    { palavra: "LEWANDOWSKI", dicas: ["Atacante do Barcelona", "Polones", "Artilheiro do Bayern"] },
    { palavra: "NEUER", dicas: ["Goleiro da Alemanha", "Campeao do mundo 2014", "Goleiro libero"] },
    { palavra: "VAN DIJK", dicas: ["Zagueiro do Liverpool", "Holandes", "Melhor zagueiro do mundo"] },
    { palavra: "DE JONG", dicas: ["Meia do Barcelona", "Holandes", "Passagem pelo Ajax"] },
    { palavra: "GRIEZMANN", dicas: ["Atacante do Atletico", "Campeao do mundo 2018", "Frances"] },
    { palavra: "POGBA", dicas: ["Meia da Franca", "Campeao do mundo 2018", "Jogou no Manchester United"] },
    { palavra: "KANTE", dicas: ["Volante da Franca", "Campeao do mundo 2018", "Jogou no Leicester"] },
    { palavra: "RUDIGER", dicas: ["Zagueiro da Alemanha", "Joga no Real Madrid", "Defensor"] },
    { palavra: "MULLER", dicas: ["Atacante da Alemanha", "Campeao do mundo 2014", "Joga no Bayern"] },
    { palavra: "KROOS", dicas: ["Meia da Alemanha", "Campeao do mundo 2014", "Jogou no Real Madrid"] },
    { palavra: "GNABRY", dicas: ["Atacante da Alemanha", "Joga no Bayern", "Campeao"] },
    { palavra: "SANCHO", dicas: ["Atacante ingles", "Joga no Manchester United", "Velocidade"] },
    { palavra: "MOUNT", dicas: ["Meia ingles", "Jogou no Chelsea", "Cria"] },
    { palavra: "FODEN", dicas: ["Meia do Manchester City", "Ingles", "Campeao da Premier"] },
    { palavra: "SAKA", dicas: ["Atacante do Arsenal", "Ingles", "Revelacao"] },
    { palavra: "BELLINGHAM", dicas: ["Meia do Real Madrid", "Ingles", "Jovem talento"] },
    { palavra: "RICE", dicas: ["Volante do Arsenal", "Ingles", "Capitao"] },
    { palavra: "WALKER", dicas: ["Lateral ingles", "Joga no Manchester City", "Velocidade"] },
    { palavra: "STONES", dicas: ["Zagueiro ingles", "Joga no Manchester City", "Capitao"] },
    { palavra: "PHILLIPS", dicas: ["Volante ingles", "Jogou no Leeds", "Revelacao"] },
    { palavra: "GREALISH", dicas: ["Meia ingles", "Joga no Manchester City", "Drible"] },
    { palavra: "JAMES", dicas: ["Lateral ingles", "Joga no Chelsea", "Revelacao"] },
    { palavra: "CHILWELL", dicas: ["Lateral ingles", "Joga no Chelsea", "Revelacao"] },
    { palavra: "HENDERSON", dicas: ["Volante ingles", "Jogou no Liverpool", "Capitao"] },
    { palavra: "MILNER", dicas: ["Volante ingles", "Jogou no Liverpool", "Experiencia"] },
    { palavra: "DONNARUMMA", dicas: ["Goleiro do PSG", "Italiano", "Campeao da Euro 2020"] },
    { palavra: "BARELLA", dicas: ["Meia da Inter", "Italiano", "Campeao da Euro 2020"] },
    { palavra: "CHIESA", dicas: ["Atacante da Italia", "Joga na Juventus", "Campeao da Euro 2020"] },
    { palavra: "VERRATTI", dicas: ["Volante do PSG", "Italiano", "Campeao da Euro 2020"] },
    { palavra: "SPINAZZOLA", dicas: ["Lateral italiano", "Joga no Napoli", "Campeao da Euro 2020"] },
    { palavra: "BONUCCI", dicas: ["Zagueiro italiano", "Jogou na Juventus", "Campeao da Euro 2020"] },
    { palavra: "CHIELLINI", dicas: ["Zagueiro italiano", "Jogou na Juventus", "Campeao da Euro 2020"] },
    { palavra: "IMMOBILE", dicas: ["Atacante italiano", "Joga na Lazio", "Campeao da Euro 2020"] },
    { palavra: "INSIGNE", dicas: ["Atacante italiano", "Jogou no Napoli", "Campeao da Euro 2020"] },
    { palavra: "PEDRO", dicas: ["Atacante espanhol", "Jogou no Barcelona", "Campeao do mundo 2010"] },
    { palavra: "INIESTA", dicas: ["Meia espanhol", "Jogou no Barcelona", "Fez o gol da final de 2010"] },
    { palavra: "XAVI", dicas: ["Meia espanhol", "Jogou no Barcelona", "Campeao do mundo 2010"] },
    { palavra: "CASILLAS", dicas: ["Goleiro espanhol", "Jogou no Real Madrid", "Campeao do mundo 2010"] },
    { palavra: "RAMOS", dicas: ["Zagueiro espanhol", "Jogou no Real Madrid", "Campeao do mundo 2010"] },
    { palavra: "PIQUE", dicas: ["Zagueiro espanhol", "Jogou no Barcelona", "Campeao do mundo 2010"] },
    { palavra: "BUSQUETS", dicas: ["Volante espanhol", "Joga no Barcelona", "Campeao do mundo 2010"] },
    { palavra: "ALBA", dicas: ["Lateral espanhol", "Joga no Barcelona", "Campeao do mundo 2010"] },
    { palavra: "AZPILICUETA", dicas: ["Lateral espanhol", "Jogou no Chelsea", "Campeao do mundo 2010"] },
    { palavra: "MATA", dicas: ["Meia espanhol", "Jogou no Chelsea", "Campeao do mundo 2010"] },

    // ==========================================
    // CLUBES INTERNACIONAIS (20)
    // ==========================================
    { palavra: "REAL MADRID", dicas: ["Clube espanhol", "14 Champions", "Time de Cristiano Ronaldo"] },
    { palavra: "BARCELONA", dicas: ["Clube espanhol", "5 Champions", "Time de Messi"] },
    { palavra: "MANCHESTER CITY", dicas: ["Clube ingles", "Campeao da Champions 2023", "Time de Haaland"] },
    { palavra: "BAYERN", dicas: ["Clube alemao", "6 Champions", "Time da Alemanha"] },
    { palavra: "MILAN", dicas: ["Clube italiano", "7 Champions", "Time da Italia"] },
    { palavra: "LIVERPOOL", dicas: ["Clube ingles", "6 Champions", "Time de Salah"] },
    { palavra: "PSG", dicas: ["Clube frances", "Time de Mbappe", "Paris"] },
    { palavra: "JUVENTUS", dicas: ["Clube italiano", "Time de Cristiano Ronaldo", "Turim"] },
    { palavra: "INTER", dicas: ["Clube italiano", "Time de Milao", "Inter de Milao"] },
    { palavra: "CHELSEA", dicas: ["Clube ingles", "2 Champions", "Time de Londres"] },
    { palavra: "ARSENAL", dicas: ["Clube ingles", "Time de Londres", "Invicto 2004"] },
    { palavra: "MANCHESTER UNITED", dicas: ["Clube ingles", "3 Champions", "Time de Cristiano Ronaldo"] },
    { palavra: "ATLETICO MADRID", dicas: ["Clube espanhol", "Time de Griezmann", "Espanha"] },
    { palavra: "DORTMUND", dicas: ["Clube alemao", "Time de Haaland", "Alemanha"] },
    { palavra: "AJAX", dicas: ["Clube holandes", "4 Champions", "Time de Cruyff"] },
    { palavra: "PSV", dicas: ["Clube holandes", "1 Champions", "Time de Van Nistelrooy"] },
    { palavra: "BENFICA", dicas: ["Clube portugues", "2 Champions", "Time de Eusebio"] },
    { palavra: "PORTO", dicas: ["Clube portugues", "2 Champions", "Time de Deco"] },
    { palavra: "NAPOLI", dicas: ["Clube italiano", "Time de Maradona", "Napoli"] },
    { palavra: "ROMA", dicas: ["Clube italiano", "Time de Totti", "Roma"] },

    // ==========================================
    // PERGUNTAS EXTRAS (69 PARA COMPLETAR 1000)
    // ==========================================
    { palavra: "FIFA", dicas: ["Jogo de futebol", "World Cup", "Simulador"] },
    { palavra: "BOLA", dicas: ["Usada no jogo", "Redonda", "Dribles"] },
    { palavra: "GOL", dicas: ["Objetivo do jogo", "Marcar ponto", "Comemorar"] },
    { palavra: "FALTA", dicas: ["Infracao no jogo", "Tiro direto", "Roberto Carlos"] },
    { palavra: "CARTAO", dicas: ["Amarelo ou vermelho", "Penalidade", "Juiz"] },
    { palavra: "VAR", dicas: ["Tecnologia no futebol", "Revisao de lances", "Impedimento"] },
    { palavra: "CHUTEIRA", dicas: ["Usada pelos jogadores", "Trava", "Craque"] },
    { palavra: "UNIFORME", dicas: ["Camisa do time", "Jogador", "Time"] },
    { palavra: "BICICLETA", dicas: ["Chute de costas", "Gol de Pele", "Movimento"] },
    { palavra: "PENALTI", dicas: ["Tiro de 11 metros", "Decisao em 1994", "Baggio errou"] },
    { palavra: "ESCANTEIO", dicas: ["Cobranca de canto", "Lateral", "Gol de cabeça"] },
    { palavra: "IMPEDIMENTO", dicas: ["Regra do futebol", "Atacante adiantado", "Bandeira"] },
    { palavra: "GOLEIRO", dicas: ["Posicao no futebol", "Defende gols", "Camisa 1"] },
    { palavra: "ZAGUEIRO", dicas: ["Posicao no futebol", "Defende", "Camisa 3"] },
    { palavra: "VOLANTE", dicas: ["Posicao no futebol", "Marca", "Camisa 5"] },
    { palavra: "MEIA", dicas: ["Posicao no futebol", "Cria jogadas", "Camisa 10"] },
    { palavra: "ATACANTE", dicas: ["Posicao no futebol", "Faz gols", "Camisa 9"] },
    { palavra: "TECNICO", dicas: ["Treinador do time", "Comanda", "Estrategia"] },
    { palavra: "JUIZ", dicas: ["Arbitro do jogo", "Apita", "Aplica cartoes"] },
    { palavra: "BANDEIRA", dicas: ["Auxiliar do juiz", "Levanta", "Indica impedimento"] },
    { palavra: "ESTADIO", dicas: ["Local do jogo", "Torcida", "Gramado"] },
    { palavra: "TORCIDA", dicas: ["Fas do time", "Apoio", "Canta"] },
    { palavra: "FUTEBOL", dicas: ["Esporte mais popular", "11 jogadores", "Bola"] },
    { palavra: "COPA", dicas: ["Torneio mundial", "A cada 4 anos", "Melhor selecao"] },
    { palavra: "MUNDIAL", dicas: ["Torneio de clubes", "Melhor do mundo", "Fifa"] },
    { palavra: "LIBERTADORES", dicas: ["Maior torneio da America", "Clubes", "Conmebol"] },
    { palavra: "CHAMPIONS", dicas: ["Maior torneio da Europa", "Clubes", "Uefa"] },
    { palavra: "PREMIER", dicas: ["Campeonato ingles", "20 times", "Manchester City"] },
    { palavra: "BRASILEIRAO", dicas: ["Campeonato brasileiro", "20 times", "Palmeiras"] },
    { palavra: "SELEÇAO", dicas: ["Time nacional", "Pais", "Copa"] },
    { palavra: "AMARELINHA", dicas: ["Camisa do Brasil", "Pentacampeao", "Selecao"] },
    { palavra: "CANARINHO", dicas: ["Apelido do Brasil", "Selecao", "5 titulos"] },
    { palavra: "ALBICELESTE", dicas: ["Apelido da Argentina", "Messi", "Campea 2022"] },
    { palavra: "TIKI TAKA", dicas: ["Estilo espanhol", "Muitos passes", "Campea 2010"] },
    { palavra: "FENOMENO", dicas: ["Apelido de Ronaldo", "Campeao 2002", "Atacante"] },
    { palavra: "BRUXO", dicas: ["Apelido de Ronaldinho", "Campeao 2002", "Sorriso"] },
    { palavra: "REI", dicas: ["Apelido de Pele", "Maior da historia", "3 titulos"] },
    { palavra: "GALINHO", dicas: ["Apelido de Zico", "Idolo do Flamengo", "Artilheiro"] },
    { palavra: "ANIMAL", dicas: ["Apelido de Edmundo", "Atacante", "Vasco"] },
    { palavra: "DIVINO", dicas: ["Apelido de Ademir da Guia", "Palmeiras", "Meia"] },
    { palavra: "MARACANA", dicas: ["Estadio do Rio", "Final de 1950", "Brasil"] },
    { palavra: "WEMBLEY", dicas: ["Estadio de Londres", "Final de 1966", "Inglaterra"] },
    { palavra: "BERNABEU", dicas: ["Estadio do Real Madrid", "Espanha", "Famoso"] },
    { palavra: "CAMP NOU", dicas: ["Estadio do Barcelona", "Espanha", "Maior da Europa"] },
    { palavra: "AZTECA", dicas: ["Estadio do Mexico", "Final de 1970", "Final de 1986"] },
    { palavra: "MINEIRAO", dicas: ["Estadio de BH", "7 a 1 da Alemanha", "Brasil"] },
    { palavra: "MORUMBI", dicas: ["Estadio do Sao Paulo", "Sao Paulo", "Brasil"] },
    { palavra: "ALLIANZ", dicas: ["Estadio do Bayern", "Alemanha", "Moderno"] },
    { palavra: "SAN SIRO", dicas: ["Estadio de Milao", "Italia", "Inter e Milan"] },
    { palavra: "LUZ", dicas: ["Estadio do Benfica", "Portugal", "Historico"] },
    { palavra: "DRAGAO", dicas: ["Estadio do Porto", "Portugal", "Moderno"] },
    { palavra: "FONTENOVA", dicas: ["Estadio de Salvador", "Copa 2014", "Brasil"] },
    { palavra: "BEIRA RIO", dicas: ["Estadio do Inter", "Porto Alegre", "Brasil"] },
    { palavra: "OLIMPICO", dicas: ["Estadio de Berlim", "Alemanha", "Historico"] },
    { palavra: "JUVENTUS", dicas: ["Clube italiano", "Allianz Stadium", "Turim"] },
    { palavra: "NAPOLI", dicas: ["Clube italiano", "Estadio San Paolo", "Maradona"] },
    { palavra: "ROMA", dicas: ["Clube italiano", "Estadio Olimpico", "Totti"] },
    { palavra: "LAZIO", dicas: ["Clube italiano", "Estadio Olimpico", "Roma"] },
    { palavra: "FIORENTINA", dicas: ["Clube italiano", "Estadio Artemio Franchi", "Batistuta"] },
    { palavra: "SAMPDORIA", dicas: ["Clube italiano", "Estadio Luigi Ferraris", "Génova"] },
    { palavra: "TORINO", dicas: ["Clube italiano", "Estadio Olimpico", "Turim"] },
    { palavra: "ATALANTA", dicas: ["Clube italiano", "Estadio Gewiss", "Bergamo"] },
    { palavra: "BOLOGNA", dicas: ["Clube italiano", "Estadio Renato Dall'Ara", "Bologna"] },
    { palavra: "VERONA", dicas: ["Clube italiano", "Estadio Marcantonio Bentegodi", "Verona"] },
    { palavra: "PALERMO", dicas: ["Clube italiano", "Estadio Renzo Barbera", "Palermo"] },
    { palavra: "CAGLIARI", dicas: ["Clube italiano", "Estadio Sardegna", "Cagliari"] },
    { palavra: "UDINESE", dicas: ["Clube italiano", "Estadio Friuli", "Udine"] }

];