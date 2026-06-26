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
        dicas: ["Artilheiro do Manchester City", "Ex-genro de Maradona", "Se aposentou por problemas no coração"] 
    },
    { 
        palavra: "BATISTUTA", 
        dicas: ["Segundo maior artilheiro da seleção", "Ídolo e gol de placa na Fiorentina", "Apelidado de 'Batigol'"] 
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
        dicas: ["Meia do Manchester City", "Melhor passador do mundo", "Belga"] 
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
        palavra: "INIESTA", // Substituto europeu para o Salah
        dicas: ["Autor do gol do título da Copa de 2010", "Ídolo do Barcelona", "Meia genial espanhol"] 
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
        dicas: ["Brasil tricampeão", "Esquadrão com Pelé e Jairzinho", "Sede no México"] 
    },
    { 
        palavra: "1994", 
        dicas: ["Brasil tetracampeão", "Romário eleito o craque do torneio", "Sede nos EUA"] 
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
        palavra: "LES BLEUS", // Substituiu a repetição da Amarelinha
        dicas: ["Apelido da seleção da França", "Camisa azul", "Bicampeã mundial (1998 e 2018)"] 
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
        palavra: "VELHO LOBO", // Corrigido o apelido do Zagallo
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
        palavra: "CENTENARIO", // Substituído para manter a lógica de nome próprio de estádio de Copa
        dicas: ["Estádio de Montevidéu", "Primeira final de Copa em 1930", "Uruguai"] 
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
        palavra: "ZAGALLO", // Corrigido de penta para tri
        dicas: ["Técnico do tri", "Campeão em 1970", "Único com 4 copas no currículo"] 
    },
    { 
        palavra: "PARREIRA", // Corrigido a nacionalidade
        dicas: ["Técnico do tetra", "Campeão em 1994", "Treinou a África do Sul em 2010"] 
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
        palavra: "TITE", // Atualizado para evitar erro temporal
        dicas: ["Comandou o Brasil nas Copas de 2018 e 2022", "Multi-campeão pelo Corinthians", "Gaúcho"] 
    },

// ===== RECORDES E CURIOSIDADES (10) =====
    { 
        palavra: "PENTA", 
        dicas: ["5 títulos do Brasil", "Conquistado em 2002", "Ronaldo foi o artilheiro do torneio"] 
    },
    { 
        palavra: "TETRA", 
        dicas: ["4 títulos do Brasil", "Conquistado em 1994", "Romário foi o craque do torneio"] 
    },
    { 
        palavra: "MARACANAZO", 
        dicas: ["Brasil x Uruguai 1950", "Trágica derrota do Brasil em casa", "Jogo histórico"] 
    },
    { 
        palavra: "MINEIRAZO", 
        dicas: ["Brasil 1 x 7 Alemanha", "Ocorrido em 2014", "Belo Horizonte"] 
    },
    { 
        palavra: "MAO DE DEUS", 
        dicas: ["Gol de mão de Maradona", "Copa de 1986", "Contra a Inglaterra"] 
    },
    { 
        palavra: "NAZISMO", 
        dicas: ["Regime político que impactou o esporte", "Copa de 1938", "Alemanha de Adolf Hitler"] 
    },
    { 
        palavra: "HAT TRICK", // Substituído o erro do "Quádruplo" pelo termo correto de 3 gols
        dicas: ["Termo para quando um jogador faz 3 gols", "Leônidas fez um em 1938", "Expressão de origem inglesa"] 
    },
    { 
        palavra: "KLOSE", // Corrigido para o verdadeiro maior artilheiro das Copas
        dicas: ["Maior artilheiro da história das Copas", "Alemão", "Marcou 16 gols no total"] 
    },
    { 
        palavra: "PENALTI", 
        dicas: ["Tiro livre da marca de 11 metros", "Decisão na final de 1994", "Baggio isolou a bola"] 
    },
    { 
        palavra: "TRI", 
        dicas: ["3 títulos do Brasil", "Conquistado em 1970", "Esquadrão liderado por Pelé"] 
    },

    // ===== COPA 2026 (10) =====
    { 
        palavra: "2026", 
        dicas: ["Ano da Copa atual", "Sede dividida na América do Norte", "Primeira com 48 seleções"] 
    },
    { 
        palavra: "MEXICO", 
        dicas: ["Sede da Copa 2026", "Primeiro país a sediar três Copas", "Estádio Azteca"] 
    },
    { 
        palavra: "CANADA", 
        dicas: ["Sede da Copa 2026", "Primeira Copa masculina no país", "Cidades como Toronto e Vancouver"] 
    },
    { 
        palavra: "EUA", 
        dicas: ["Sede da Copa 2026", "Teve a Copa de 1994", "Onde será a grande final"] 
    },
    { 
        palavra: "VINI JR", 
        dicas: ["Destaque brasileiro do Real Madrid", "Campeão e gol na final da Champions", "Protagonista da seleção"] 
    },
    { 
        palavra: "RODRYGO", 
        dicas: ["Atacante brasileiro do Real Madrid", "Conhecido como 'Raio'", "Menino da Vila"] 
    },
    { 
        palavra: "ENDRICK", // Nome corrigido
        dicas: ["Jovem promessa que foi para o Real Madrid", "Canhoto", "Revelação da base do Palmeiras"] 
    },
    { 
        palavra: "BROBBEY", 
        dicas: ["Atacante holandês de muita força física", "Cria da base do Ajax", "Nova geração da Holanda"] 
    },
    { 
        palavra: "MUSIALA", 
        dicas: ["Camisa 10 e joia da Alemanha", "Meia-atacante do Bayern de Munique", "Dribles curtos"] 
    },
    { 
        palavra: "BALON DOR", 
        dicas: ["Prêmio da revista France Football", "Sonho dos craques da Copa", "Melhor jogador do mundo"] 
    },

    // ===== JOGOS DE FUTEBOL (10) =====
    { 
        palavra: "FIFA", 
        dicas: ["Antigo nome da famosa franquia de videogame da EA Sports", "Entidade máxima do futebol", "Simulador virtual"] 
    },
    { 
        palavra: "PES", 
        dicas: ["Franquia Pro Evolution Soccer", "Antigo rival do FIFA", "Criado pela Konami"] 
    },
    { 
        palavra: "GOL", 
        dicas: ["Momento supremo do futebol", "Balançar a rede", "Ponto máximo da partida"] 
    },
    { 
        palavra: "BOLA", 
        dicas: ["O objeto principal do esporte", "Formato esférico", "A Al Rihla e a Jabulani foram exemplos"] 
    },
    { 
        palavra: "BICICLETA", 
        dicas: ["Chute acrobático no ar de costas para o gol", "Leônidas da Silva popularizou", "Plástica perfeita"] 
    },
    { 
        palavra: "FALTA", 
        dicas: ["Infração cometida sobre o adversário", "Pode ser cobrada direto para o gol", "Barreira tenta bloquear"] 
    },
    { 
        palavra: "CARTAO", 
        dicas: ["Item de advertência do árbitro", "Pode ser amarelo ou vermelho", "Exclui o jogador se for repetido"] 
    },
    { 
        palavra: "VAR", 
        dicas: ["Árbitro de vídeo", "Tecnologia para revisar lances capitais", "Checa gols, cartões e impedimentos"] 
    },
    { 
        palavra: "CHUTEIRA", 
        dicas: ["Calçado específico para o gramado", "Possui travas na sola", "Modelos famosos da Nike, Adidas e Puma"] 
    },
    { 
        palavra: "UNIFORME", 
        dicas: ["Conjunto de camisa, calção e meiões", "Identidade visual do time em campo", "Manto sagrado"] 
    },

    // ----- FLAMENGO (15) -----
    { palavra: "FLAMENGO", dicas: ["Clube carioca fundado em 1895", "Rubro-Negro", "Maior torcida do Brasil"] },
    { palavra: "ZICO", dicas: ["Maior ídolo da história do Flamengo", "Galinho de Quintino", "Maior artilheiro da história do clube"] },
    { palavra: "JUNIOR", dicas: ["Lateral-esquerdo campeão mundial em 1981", "Capitão do time histórico", "Também atuou como meio-campista"] },
    { palavra: "ADILIO", dicas: ["Meia campeão mundial em 1981", "Cria da Gávea", "Camisa 8 do time histórico"] },
    { palavra: "NUNES", dicas: ["Centroavante campeão mundial em 1981", "Conhecido como João Danado", "Fez 2 gols na final contra o Liverpool"] },
    { palavra: "GABIGOL", dicas: ["Autor dos 2 gols da virada na final da Libertadores de 2019", "Um dos maiores artilheiros do Flamengo no século XXI", "Ídolo da torcida rubro-negra"] },
    { palavra: "ARRASCAETA", dicas: ["Meia uruguaio", "Campeão da Libertadores pelo Flamengo", "Revelado pelo Defensor Sporting"] },
    { palavra: "BRUNO HENRIQUE", dicas: ["Atacante conhecido pela velocidade", "Campeão da Libertadores pelo Flamengo", "Revelado pelo Goiás"] },
    { palavra: "EVERTON RIBEIRO", dicas: ["Meia campeão da Libertadores pelo Flamengo", "Vestiu a camisa 7", "Revelado pelo Coritiba"] },
    { palavra: "GERSON", dicas: ["Volante revelado pelo Fluminense", "Conhecido como Coringa", "Campeão da Libertadores pelo Flamengo"] },
    { palavra: "DAVID LUIZ", dicas: ["Zagueiro campeão da Libertadores pelo Flamengo", "Revelado pelo Vitória", "Também defendeu Chelsea, PSG e Arsenal"] },
    { palavra: "PETKOVIC", dicas: ["Meia sérvio", "Autor do histórico gol de falta de 2001", "Ídolo do título brasileiro de 2009"] },
    { palavra: "ADRIANO", dicas: ["Conhecido como Imperador", "Artilheiro do Campeonato Brasileiro de 2009", "Revelado pelo Flamengo"] },
    { palavra: "1981", dicas: ["Ano do Mundial do Flamengo", "Vitória por 3 a 0 sobre o Liverpool no Japão", "Nunes marcou 2 gols na decisão"] },
    { palavra: "2019", dicas: ["Ano da Libertadores do Flamengo", "Virada por 2 a 1 sobre o River Plate", "Final disputada em Lima, no Peru"] },

    // ----- CORINTHIANS (15) -----
    { palavra: "CORINTHIANS", dicas: ["Clube paulista fundado em 1910", "Conhecido como Timão", "Maior campeão paulista"] },
    { palavra: "CASSIO", dicas: ["Goleiro histórico do Corinthians", "Herói do Mundial de 2012", "Defendeu o pênalti de Diego Souza na Libertadores"] },
    { palavra: "RONALDO", dicas: ["Conhecido como Fenômeno", "Conquistou a Copa do Brasil de 2009", "Encerrou a carreira no Corinthians"] },
    { palavra: "MARCELINHO", dicas: ["Maior cobrador de faltas da história do Corinthians", "Conhecido como Pé de Anjo", "Ídolo dos títulos dos anos 90"] },
    { palavra: "SOCRATES", dicas: ["Líder da Democracia Corinthiana", "Médico formado", "Um dos maiores ídolos da história do clube"] },
    { palavra: "RIVELINO", dicas: ["Revelado pelo Corinthians", "Conhecido como Reizinho do Parque", "Craque da Copa de 1970"] },
    { palavra: "VAMPETA", dicas: ["Volante campeão mundial em 2000", "Campeão brasileiro pelo Corinthians", "Fez parte de uma das gerações mais vitoriosas do clube"] },
    { palavra: "YURI ALBERTO", dicas: ["Centroavante", "Revelado pelo Santos", "Artilheiro do Corinthians na década de 2020"] },
    { palavra: "GARRO", dicas: ["Meia argentino", "Especialista em assistências", "Vestiu a camisa 8 no Corinthians"] },
    { palavra: "ROGER GUEDES", dicas: ["Atacante que se destacou pelo Corinthians", "Revelado pelo Criciúma", "Foi um dos artilheiros da equipe na década de 2020"] },
    { palavra: "PAULINHO", dicas: ["Volante campeão da Libertadores e do Mundial de 2012", "Revelado pelo Pão de Açúcar", "Ídolo da torcida corintiana"] },
    { palavra: "EDILSON", dicas: ["Atacante conhecido como Capetinha", "Campeão mundial em 2000", "Ídolo do Corinthians no fim dos anos 90"] },
    { palavra: "2000", dicas: ["Ano do primeiro Mundial do Corinthians", "Título conquistado sobre o Vasco nos pênaltis", "Disputado no Brasil"] },
    { palavra: "2012", dicas: ["Ano do segundo Mundial do Corinthians", "Vitória por 1 a 0 sobre o Chelsea", "Guerrero marcou o gol do título"] },
    { palavra: "1998", dicas: ["Ano do segundo Campeonato Brasileiro do Corinthians", "Marcelinho Carioca foi um dos destaques", "Vampeta e Rincón eram titulares"] },
    
    // ----- PALMEIRAS (15) -----
    { palavra: "PALMEIRAS", dicas: ["Clube paulista fundado em 1914", "Conhecido como Verdão", "Maior campeão brasileiro"] },
    { palavra: "ADEMIR DA GUIA", dicas: ["Maior ídolo da história do Palmeiras", "Conhecido como Divino", "Um dos maiores meias do futebol brasileiro"] },
    { palavra: "DUDU", dicas: ["Um dos maiores ídolos recentes do Palmeiras", "Atacante campeão da Libertadores", "Vestiu a camisa 7 por muitos anos"] },
    { palavra: "GUSTAVO SCARPA", dicas: ["Meia campeão da Libertadores pelo Palmeiras", "Eleito o melhor jogador do Brasileirão de 2022", "Revelado pelo Fluminense"] },
    { palavra: "RAPHAEL VEIGA", dicas: ["Meia do Palmeiras", "Especialista em cobranças de pênalti", "Destaque nas Libertadores de 2020 e 2021"] },
    { palavra: "RONY", dicas: ["Atacante do Palmeiras", "Destaque nas campanhas da Libertadores", "Conhecido pelas bicicletas"] },
    { palavra: "MARCOS", dicas: ["Goleiro campeão da Libertadores de 1999", "Conhecido como São Marcos", "Ídolo da torcida palmeirense"] },
    { palavra: "ZE ROBERTO", dicas: ["Volante e lateral-esquerdo", "Jogou no Palmeiras já veterano", "Destacou-se pela excelente condição física"] },
    { palavra: "EDMUNDO", dicas: ["Conhecido como Animal", "Ídolo do Palmeiras nos anos 90", "Campeão brasileiro de 1993 e 1994"] },
    { palavra: "EVAIR", dicas: ["Centroavante histórico do Palmeiras", "Artilheiro da Libertadores de 1999", "Ídolo da década de 90"] },
    { palavra: "1999", dicas: ["Ano da primeira Libertadores do Palmeiras", "Título conquistado sobre o Deportivo Cali", "Marcos defendeu pênalti decisivo"] },
    { palavra: "2020", dicas: ["Ano da segunda Libertadores do Palmeiras", "Vitória sobre o Santos por 1 a 0", "Breno Lopes marcou o gol do título"] },
    { palavra: "2021", dicas: ["Ano da terceira Libertadores do Palmeiras", "Vitória sobre o Flamengo na prorrogação", "Deyverson marcou o gol do título"] },
    { palavra: "2022", dicas: ["Ano do 11º Campeonato Brasileiro do Palmeiras", "Time comandado por Abel Ferreira", "Gustavo Scarpa foi um dos destaques"] },
    { palavra: "2018", dicas: ["Ano do Campeonato Brasileiro do Palmeiras", "Time comandado por Felipão", "Dudu foi um dos principais destaques"] },

    // ----- SANTOS (15) -----
    { palavra: "SANTOS", dicas: ["Clube paulista fundado em 1912", "Conhecido como Peixe", "Clube onde Pelé fez história"] },
    { palavra: "PELE", dicas: ["Maior jogador da história do Santos", "Rei do Futebol", "Bicampeão mundial pelo clube"] },
    { palavra: "GILMAR", dicas: ["Goleiro histórico do Santos", "Campeão mundial pelo clube", "Também foi campeão do mundo pela Seleção"] },
    { palavra: "PEPE", dicas: ["Maior artilheiro do Santos depois de Pelé", "Conhecido como Canhão da Vila", "Bicampeão mundial pelo clube"] },
    { palavra: "MENGALVIO", dicas: ["Meia do histórico ataque santista", "Campeão mundial pelo Santos", "Fez parte do time de Pelé"] },
    { palavra: "ZITO", dicas: ["Volante histórico do Santos", "Conhecido como Gerente", "Bicampeão mundial pelo clube"] },
    { palavra: "ORLANDO", dicas: ["Zagueiro histórico do Santos", "Capitão do time de Pelé", "Bicampeão mundial pelo clube"] },
    { palavra: "CLODOALDO", dicas: ["Volante histórico do Santos", "Campeão do mundo com o Brasil em 1970", "Fez parte do time campeão de 1968"] },
    { palavra: "NEYMAR", dicas: ["Revelado pelo Santos", "Campeão da Libertadores de 2011", "Maior ídolo recente do clube"] },
    { palavra: "ROBINHO", dicas: ["Revelado pelo Santos", "Campeão brasileiro de 2002", "Conhecido pelas pedaladas"] },
    { palavra: "GANSO", dicas: ["Meia revelado na base do Santos", "Campeão da Libertadores de 2011", "Formou dupla com Neymar"] },
    { palavra: "1962", dicas: ["Ano do primeiro Mundial do Santos", "Título conquistado sobre o Benfica", "Pelé brilhou na decisão"] },
    { palavra: "1963", dicas: ["Ano do segundo Mundial do Santos", "Título conquistado sobre o Milan", "O Santos venceu a decisão em três partidas"] },
    { palavra: "2002", dicas: ["Ano do Campeonato Brasileiro do Santos", "Time comandado por Emerson Leão", "Robinho e Diego eram os principais destaques"] },
    { palavra: "2011", dicas: ["Ano da terceira Libertadores do Santos", "Vitória sobre o Peñarol", "Neymar foi o principal destaque da campanha"] },
    
    // ----- SAO PAULO (15) -----
    { palavra: "SAO PAULO", dicas: ["Clube paulista fundado em 1930", "Conhecido como Tricolor Paulista", "Único brasileiro tricampeão mundial"] },
    { palavra: "ROGERIO CENI", dicas: ["Maior ídolo da história do São Paulo", "Goleiro-artilheiro", "Maior goleador entre os goleiros"] },
    { palavra: "RAI", dicas: ["Meia e camisa 10 histórico", "Capitão dos Mundiais de 1992 e 1993", "Ídolo do São Paulo"] },
    { palavra: "MULLER", dicas: ["Atacante revelado pelo São Paulo", "Campeão mundial em 1992 e 1993", "Fez dupla histórica com Raí"] },
    { palavra: "CARECA", dicas: ["Centroavante campeão brasileiro de 1986", "Revelado pelo Guarani", "Um dos maiores atacantes da história do São Paulo"] },
    { palavra: "TELE", dicas: ["Treinador histórico do São Paulo", "Comandou os títulos mundiais de 1992 e 1993", "Conhecido pela disciplina e pelo futebol ofensivo"] },
    { palavra: "SERGINHO", dicas: ["Lateral-esquerdo revelado pelo São Paulo", "Conhecido como Serginho Chulapa", "Maior artilheiro da história do clube"] },
    { palavra: "PALHINHA", dicas: ["Atacante campeão brasileiro de 1977", "Ídolo da torcida são-paulina", "Conhecido pelos gols decisivos"] },
    { palavra: "LUCAS", dicas: ["Revelado pelo São Paulo", "Campeão da Copa Sul-Americana de 2012", "Conhecido pela velocidade"] },
    { palavra: "OSCAR", dicas: ["Meia revelado na base do São Paulo", "Também atuou na Seleção Brasileira", "Retornou ao clube anos depois"] },
    { palavra: "CASEMIRO", dicas: ["Volante revelado pelo São Paulo", "Construiu carreira de sucesso na Europa", "Campeão de várias Champions League"] },
    { palavra: "1992", dicas: ["Ano do primeiro Mundial do São Paulo", "Vitória por 2 a 1 sobre o Barcelona", "Final disputada em Tóquio"] },
    { palavra: "1993", dicas: ["Ano do bicampeonato mundial do São Paulo", "Vitória por 3 a 2 sobre o Milan", "Final disputada em Tóquio"] },
    { palavra: "2005", dicas: ["Ano da terceira Libertadores do São Paulo", "Vitória sobre o Athletico Paranaense", "Rogério Ceni era o capitão"] },
    { palavra: "2006", dicas: ["Ano do Campeonato Brasileiro", "Primeiro de três títulos consecutivos", "Muricy Ramalho era o treinador"] },

    // ----- FLUMINENSE (15) -----
    { palavra: "FLUMINENSE", dicas: ["Clube carioca fundado em 1902", "Conhecido como Tricolor das Laranjeiras", "Campeão da Libertadores de 2023"] },
    { palavra: "FRED", dicas: ["Maior ídolo da história recente do Fluminense", "Maior artilheiro do clube no século XXI", "Centroavante"] },
    { palavra: "CONCA", dicas: ["Meia argentino", "Craque do Brasileirão de 2010", "Ídolo da torcida tricolor"] },
    { palavra: "THIAGO NEVES", dicas: ["Meia habilidoso", "Campeão brasileiro de 2010", "Também atuou pelo Cruzeiro"] },
    { palavra: "GUM", dicas: ["Zagueiro capitão", "Campeão brasileiro de 2010 e 2012", "Ídolo da torcida"] },
    { palavra: "DIGUINHO", dicas: ["Volante marcador", "Campeão brasileiro de 2010 e 2012", "Formou dupla com Edinho"] },
    { palavra: "WASHINGTON", dicas: ["Conhecido como Coração Valente", "Artilheiro do Fluminense", "Vice-campeão da Libertadores de 2008"] },
    { palavra: "CANO", dicas: ["Centroavante argentino", "Artilheiro da Libertadores de 2023", "Ídolo da conquista continental"] },
    { palavra: "ARIAS", dicas: ["Atacante colombiano", "Destaque da Libertadores de 2023", "Conhecido pelos dribles"] },
    { palavra: "NINO", dicas: ["Zagueiro capitão do título da Libertadores", "Revelado pelo Criciúma", "Também atuou na Seleção Brasileira"] },
    { palavra: "FABIO", dicas: ["Goleiro campeão da Libertadores de 2023", "Ídolo também do Cruzeiro", "Um dos jogadores com mais partidas na história do futebol brasileiro"] },
    { palavra: "GANSO", dicas: ["Meia revelado pelo Santos", "Campeão da Libertadores de 2023", "Conhecido pela visão de jogo"] },
    { palavra: "2010", dicas: ["Ano do terceiro Campeonato Brasileiro do Fluminense", "Conca foi eleito o craque da competição", "Fred foi o principal artilheiro da equipe"] },
    { palavra: "2012", dicas: ["Ano do tetracampeonato brasileiro", "Fred foi o artilheiro da equipe", "Abel Braga era o treinador"] },
    { palavra: "2023", dicas: ["Ano da primeira Libertadores do Fluminense", "Vitória sobre o Boca Juniors", "John Kennedy marcou o gol decisivo da prorrogação"] },

    // ----- BOTAFOGO (15) -----
    { palavra: "BOTAFOGO", dicas: ["Clube carioca fundado em 1904", "Conhecido como Fogão", "Clube de Garrincha e Nilton Santos"] },
    { palavra: "GARRINCHA", dicas: ["Maior ídolo da história do Botafogo", "Anjo das Pernas Tortas", "Bicampeão mundial pela Seleção"] },
    { palavra: "NILTON SANTOS", dicas: ["Conhecido como Enciclopédia do Futebol", "Lateral-esquerdo histórico", "Bicampeão mundial pela Seleção"] },
    { palavra: "DIDI", dicas: ["Inventou a folha seca", "Craque da Copa de 1958", "Ídolo do Botafogo"] },
    { palavra: "ZAGALLO", dicas: ["Ponta-esquerda do Botafogo", "Único tetracampeão mundial", "Bicampeão como jogador"] },
    { palavra: "AMARILDO", dicas: ["Substituiu Pelé na Copa de 1962", "Atacante histórico do Botafogo", "Campeão do mundo"] },
    { palavra: "TIQUINHO", dicas: ["Centroavante", "Destaque do Botafogo na década de 2020", "Conhecido pelo faro de gol"] },
    { palavra: "1995", dicas: ["Ano do Campeonato Brasileiro do Botafogo", "Túlio Maravilha foi o artilheiro", "Vitória sobre o Santos na final"] },
    { palavra: "2024", dicas: ["Ano da primeira Libertadores do Botafogo", "Também conquistou o Campeonato Brasileiro", "Venceu o Atlético-MG na final continental"] },
    { palavra: "TULIO", dicas: ["Conhecido como Túlio Maravilha", "Artilheiro do título brasileiro de 1995", "Um dos maiores goleadores da história do Botafogo"] },
    { palavra: "1993", dicas: ["Ano da conquista da Copa Conmebol", "Primeiro título internacional do Botafogo", "Vitória sobre o Peñarol"] },
    { palavra: "1968", dicas: ["Ano da conquista da Taça Brasil", "Botafogo tinha Gérson, Jairzinho e Paulo César", "Um dos grandes times da história do clube"] },
    { palavra: "JAIRZINHO", dicas: ["Conhecido como Furacão da Copa", "Ídolo do Botafogo", "Marcou gols em todos os jogos da Copa de 1970"] },
    { palavra: "NILTON", dicas: ["Apelido de um dos maiores laterais da história", "Conhecido como Enciclopédia do Futebol", "Ídolo eterno do Botafogo"] },
    { palavra: "2025", dicas: ["Ano da conquista da Recopa Sul-Americana", "Título internacional do Botafogo", "Disputada contra o Racing"] },
    
    // ----- VASCO (15) -----
    { palavra: "VASCO", dicas: ["Clube carioca fundado em 1898", "Gigante da Colina", "Resposta histórica contra o racismo e o elitismo"] },
    { palavra: "DINAMITE", dicas: ["Maior ídolo da história do Vasco", "Atacante", "Maior artilheiro da história do Brasileirão"] },
    { palavra: "ROMARIO", dicas: ["Atacante ídolo do Vasco", "Camisa 11", "Revelado na base do Vasco"] },
    { palavra: "EDMUNDO", dicas: ["Atacante ídolo dos anos 90", "Animal", "Campeão brasileiro de 1997 com grande destaque"] },
    { palavra: "PEDRINHO", dicas: ["Meia ídolo dos anos 90", "Camisa 10", "Campeão brasileiro de 1997"] },
    { palavra: "FELIPE", dicas: ["Meia ídolo dos anos 90", "Camisa 5", "Campeão brasileiro de 1997"] },
    { palavra: "DONIZETE", dicas: ["Atacante do Vasco nos anos 90", "Camisa 9", "Destaque no título brasileiro de 1997"] },
    { palavra: "MAURO GALVAO", dicas: ["Zagueiro ídolo dos anos 90", "Capitão", "Campeão brasileiro de 1997"] },
    { palavra: "VALDIR", dicas: ["Atacante conhecido como Valdir Bigode", "Goleador", "Destaque no Vasco nos anos 90"] },
    { palavra: "VEGETTI", dicas: ["Atacante atual do Vasco", "Camisa 9", "Artilheiro do clube"] },
    { palavra: "1974", dicas: ["Ano do Brasileiro do Vasco", "Destaque com Roberto Dinamite", "Campeão brasileiro"] },
    { palavra: "1989", dicas: ["Ano do Brasileiro do Vasco", "Time campeão com Romário", "Título nacional"] },
    { palavra: "1997", dicas: ["Ano do Brasileiro do Vasco", "Grande campanha com Edmundo", "Campeão brasileiro"] },
    { palavra: "2000", dicas: ["Ano do Brasileiro do Vasco", "Romário em grande fase", "Campeão da Copa João Havelange"] },
    { palavra: "1998", dicas: ["Ano da Libertadores do Vasco", "Venceu o Barcelona SC na final", "Título continental"] },


    // ==========================================
    // JOGADORES LENDÁRIOS BRASILEIROS (50)
    // ==========================================
    { palavra: "PELE", dicas: ["Maior jogador da história", "Rei do futebol", "3 títulos mundiais (1958, 1962, 1970)"] },
    { palavra: "MARADONA", dicas: ["Maior ídolo argentino", "Mão de Deus", "Campeão do mundo 1986"] },
    { palavra: "RONALDO", dicas: ["Fenômeno", "Campeão do mundo 1994 e 2002", "Artilheiro da Copa 2002"] },
    { palavra: "RONALDINHO", dicas: ["Bruxo", "Campeão do mundo 2002", "Melhor do mundo 2004 e 2005"] },
    { palavra: "ROMARIO", dicas: ["Baixinho", "Campeão do mundo 1994", "Artilheiro da Copa 1994"] },
    { palavra: "RIVALDO", dicas: ["Pernambucano", "Campeão do mundo 2002", "Melhor do mundo 1999"] },
    { palavra: "GARRINCHA", dicas: ["Anjo das pernas tortas", "Campeão do mundo 1958 e 1962", "Ídolo do Botafogo"] },
    { palavra: "ZICO", dicas: ["Galinho", "Maior ídolo do Flamengo", "Grande artilheiro do clube"] },
    { palavra: "ROBERTO DINAMITE", dicas: ["Maior ídolo do Vasco", "Artilheiro histórico do clube", "Campeão brasileiro de 1974"] },
    { palavra: "CAFU", dicas: ["Lateral direito", "Campeão do mundo 1994 e 2002", "Capitão do penta"] },
    { palavra: "ROBERTO CARLOS", dicas: ["Lateral esquerdo", "Campeão do mundo 2002", "Famoso pelas cobranças de falta"] },
    { palavra: "TOSTAO", dicas: ["Campeão do mundo 1970", "Meia do Cruzeiro", "Grande jogador da seleção"] },
    { palavra: "GERSON", dicas: ["Canhotinha de ouro", "Campeão do mundo 1970", "Meia do Flamengo"] },
    { palavra: "FALCAO", dicas: ["Rei de Roma", "Jogou no Internacional", "Grande meio-campista"] },
    { palavra: "SOCRATES", dicas: ["Médico e jogador", "Capitão da seleção de 1982", "Ídolo do Corinthians"] },
    { palavra: "DIDI", dicas: ["Folha seca", "Campeão do mundo 1958 e 1962", "Meia do Botafogo"] },
    { palavra: "NILTON SANTOS", dicas: ["Lateral esquerdo", "Campeão do mundo 1958 e 1962", "Ídolo do Botafogo"] },
    { palavra: "ZAGALLO", dicas: ["Ponta-esquerda", "Campeão do mundo 1958 e 1962", "Único com 4 Copas no currículo"] },
    { palavra: "LEAO", dicas: ["Goleiro", "Campeão do mundo 1970", "Ídolo do Palmeiras e Flamengo"] },
    { palavra: "JAIRZINHO", dicas: ["Ponta-direita", "Campeão do mundo 1970", "Fez gols em todos os jogos da Copa"] },
    { palavra: "RIVELINO", dicas: ["Meia", "Campeão do mundo 1970", "Destaque da seleção brasileira"] },
    { palavra: "BEBETO", dicas: ["Atacante", "Campeão do mundo 1994", "Famoso pela comemoração do bebê"] },
    { palavra: "BRANCO", dicas: ["Lateral esquerdo", "Campeão do mundo 1994", "Famoso pelas faltas decisivas"] },
    { palavra: "DUNGA", dicas: ["Volante", "Campeão do mundo 1994", "Capitão do tetra"] },
    { palavra: "TAFFAREL", dicas: ["Goleiro", "Campeão do mundo 1994", "Ídolo do Internacional"] },
    { palavra: "CLODOALDO", dicas: ["Volante", "Campeão do mundo 1970", "Ídolo do Santos"] },
    { palavra: "PEPE", dicas: ["Atacante", "Campeão do mundo 1962", "Ídolo do Santos"] },
    { palavra: "GILMAR", dicas: ["Goleiro", "Campeão do mundo 1958 e 1962", "Ídolo do Santos"] },
    { palavra: "MENGALVIO", dicas: ["Meia", "Campeão do mundo 1962", "Ídolo do Santos"] },
    { palavra: "ZITO", dicas: ["Volante", "Campeão do mundo 1962", "Ídolo do Santos"] },
    { palavra: "ORLANDO", dicas: ["Zagueiro", "Campeão do mundo 1962", "Ídolo do Santos"] },
    { palavra: "AMARILDO", dicas: ["Atacante", "Campeão do mundo 1962", "Ídolo do Botafogo"] },
    { palavra: "JUNIOR", dicas: ["Lateral esquerdo", "Campeão do mundo 1982", "Ídolo do Flamengo"] },
    { palavra: "LEANDRO", dicas: ["Lateral direito", "Campeão do mundo 1982", "Ídolo do Flamengo"] },
    { palavra: "ADILIO", dicas: ["Meia", "Campeão do mundo 1982", "Ídolo do Flamengo"] },
    { palavra: "NEYMAR", dicas: ["Camisa 10 do Brasil", "Um dos maiores artilheiros da seleção", "Jogou no Santos"] },
    { palavra: "VINI JR", dicas: ["Atacante do Real Madrid", "Campeão da Champions League", "Brasileiro"] },
    { palavra: "MESSI", dicas: ["Maior jogador argentino", "8 Bolas de Ouro", "Campeão do mundo 2022"] },
    { palavra: "CRISTIANO RONALDO", dicas: ["Maior jogador português", "5 Champions League", "Maior artilheiro da história"] },
    { palavra: "ENDRICK", dicas: ["Jovem promessa brasileira", "Joga no Real Madrid", "Revelação do Palmeiras"] },
    { palavra: "ESTEVAO", dicas: ["Jovem promessa brasileira", "Joga no Palmeiras", "Grande destaque"] },
    { palavra: "LUIS SUAREZ", dicas: ["Atacante uruguaio", "Jogou no Barcelona", "Artilheiro"] },
    { palavra: "CAVANI", dicas: ["Atacante uruguaio", "Jogou no PSG", "Artilheiro"] },
    { palavra: "GIROUD", dicas: ["Atacante francês", "Campeão do mundo 2018", "Artilheiro da França"] },
    { palavra: "VARDY", dicas: ["Atacante inglês", "Jogou no Leicester", "Campeão da Premier League 2016"] },
    { palavra: "STERLING", dicas: ["Atacante inglês", "Jogou no Manchester City", "Velocidade"] },
    { palavra: "MADDISON", dicas: ["Meia inglês", "Jogou no Leicester", "Criativo"] },
    { palavra: "RASHFORD", dicas: ["Atacante inglês", "Jogou no Manchester United", "Velocidade"] },
    { palavra: "SALAH", dicas: ["Atacante do Liverpool", "Egípcio", "Campeão da Champions League 2019"] },
    { palavra: "KANE", dicas: ["Atacante do Bayern", "Inglês", "Artilheiro da seleção inglesa"] },

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
