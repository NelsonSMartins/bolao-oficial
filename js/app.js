// URLs dos arquivos Excel na pasta
const APOSTAS_URL = 'dados/apostas.xlsx';
const RESULTADOS_URL = 'dados/resultados.xlsx';

async function carregarDados() {
    // Tentar ler do cache primeiro
    const cache = localStorage.getItem(STORAGE_KEY);
    if (cache) {
        dadosCache = JSON.parse(cache);
    }
    
    // Tentar carregar apostas.xlsx
    try {
        const apostasResponse = await fetch(APOSTAS_URL);
        if (apostasResponse.ok) {
            const arrayBuffer = await apostasResponse.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            
            processarApostas(rows);
            console.log('✅ Apostas carregadas do arquivo');
        } else {
            console.log('⚠️ Arquivo apostas.xlsx não encontrado');
        }
    } catch (error) {
        console.log('⚠️ Erro ao carregar apostas.xlsx:', error);
    }
    
    // Tentar carregar resultados.xlsx
    try {
        const resultadosResponse = await fetch(RESULTADOS_URL);
        if (resultadosResponse.ok) {
            const arrayBuffer = await resultadosResponse.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            
            processarResultados(rows);
            console.log('✅ Resultados carregados do arquivo');
        } else {
            console.log('⚠️ Arquivo resultados.xlsx não encontrado');
        }
    } catch (error) {
        console.log('⚠️ Erro ao carregar resultados.xlsx:', error);
    }
    
    // Se não tem cache e não conseguiu carregar arquivos, criar dados vazios
    if (!dadosCache) {
        dadosCache = {
            jogos: [],
            palpites: {},
            resultados: {},
            proximoJogoId: 1
        };
    }
    
    // Salvar no cache
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dadosCache));
    
    return dadosCache;
}

function processarApostas(rows) {
    if (!rows || rows.length === 0) return;
    
    if (!dadosCache) {
        dadosCache = {
            jogos: [],
            palpites: {},
            resultados: {},
            proximoJogoId: 1
        };
    }
    
    // Determinar se tem cabeçalho
    let startRow = 0;
    const primeiraLinha = rows[0];
    if (primeiraLinha && (primeiraLinha[0] === 'Nome' || primeiraLinha[0] === 'nome')) {
        startRow = 1;
    }
    
    for (let i = startRow; i < rows.length; i++) {
        const row = rows[i];
        if (!row || row.length < 6) continue;
        
        const nome = row[0]?.toString().trim();
        const timeCasa = row[1]?.toString().trim();
        const golsCasa = parseInt(row[2]);
        const timeFora = row[3]?.toString().trim();
        const golsFora = parseInt(row[4]);
        let dataStr = row[5]?.toString().trim();
        
        if (!nome || !timeCasa || !timeFora) continue;
        if (isNaN(golsCasa) || isNaN(golsFora)) continue;
        
        // Verificar se jogador existe
        if (!USUARIOS[nome]) {
            console.warn(`Jogador não encontrado: ${nome}`);
            continue;
        }
        
        // Procurar ou criar jogo
        let jogo = dadosCache.jogos.find(j => j.timeCasa === timeCasa && j.timeFora === timeFora);
        if (!jogo) {
            // Converter data
            let dataFormatada = '';
            if (dataStr) {
                const partes = dataStr.split('/');
                if (partes.length === 3) {
                    dataFormatada = `${partes[2]}-${partes[1]}-${partes[0]}`;
                } else {
                    dataFormatada = dataStr;
                }
            }
            
            jogo = {
                id: dadosCache.proximoJogoId++,
                timeCasa: timeCasa,
                timeFora: timeFora,
                data: dataFormatada
            };
            dadosCache.jogos.push(jogo);
        }
        
        // Salvar palpite
        const palpiteKey = `${jogo.id}_${nome}`;
        dadosCache.palpites[palpiteKey] = {
            casa: golsCasa,
            fora: golsFora
        };
    }
}

function processarResultados(rows) {
    if (!rows || rows.length === 0) return;
    
    if (!dadosCache) {
        dadosCache = {
            jogos: [],
            palpites: {},
            resultados: {},
            proximoJogoId: 1
        };
    }
    
    // Determinar se tem cabeçalho
    let startRow = 0;
    const primeiraLinha = rows[0];
    if (primeiraLinha && (primeiraLinha[0] === 'Time Casa' || primeiraLinha[0] === 'time casa')) {
        startRow = 1;
    }
    
    for (let i = startRow; i < rows.length; i++) {
        const row = rows[i];
        if (!row || row.length < 5) continue;
        
        const timeCasa = row[0]?.toString().trim();
        const golsCasa = parseInt(row[1]);
        const timeFora = row[2]?.toString().trim();
        const golsFora = parseInt(row[3]);
        let dataStr = row[4]?.toString().trim();
        
        if (!timeCasa || !timeFora) continue;
        if (isNaN(golsCasa) || isNaN(golsFora)) continue;
        
        // Procurar ou criar jogo
        let jogo = dadosCache.jogos.find(j => j.timeCasa === timeCasa && j.timeFora === timeFora);
        if (!jogo) {
            // Converter data
            let dataFormatada = '';
            if (dataStr) {
                const partes = dataStr.split('/');
                if (partes.length === 3) {
                    dataFormatada = `${partes[2]}-${partes[1]}-${partes[0]}`;
                } else {
                    dataFormatada = dataStr;
                }
            }
            
            jogo = {
                id: dadosCache.proximoJogoId++,
                timeCasa: timeCasa,
                timeFora: timeFora,
                data: dataFormatada
            };
            dadosCache.jogos.push(jogo);
        }
        
        // Salvar resultado
        dadosCache.resultados[jogo.id] = {
            casa: golsCasa,
            fora: golsFora
        };
    }
}

function lerDados() {
    return dadosCache || { jogos: [], palpites: {}, resultados: {} };
}

// Inicializar carregamento
carregarDados();