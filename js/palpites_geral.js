let dados = null;
let usuarioAtual = null;
let filtroGeralAtual = 'todos';

async function carregarPalpitesGeral() {
    usuarioAtual = verificarLogin();
    if (!usuarioAtual) return;
    
    document.getElementById('userName').textContent = usuarioAtual.nome;
    
    dados = await lerDadosGitHub();
    if (!dados) {
        alert('Erro ao carregar dados');
        return;
    }
    
    carregarFiltroDatasGeral();
    renderizarPalpitesGeral();
}

function carregarFiltroDatasGeral() {
    const filtroContainer = document.getElementById('filtroDatas');
    if (!filtroContainer) return;
    
    const datasUnicas = [...new Set(dados.jogos.map(j => j.data).filter(d => d))];
    datasUnicas.sort();
    
    filtroContainer.innerHTML = `
        <div class="btn-group flex-wrap mb-3" style="gap: 5px;">
            <button class="btn ${filtroGeralAtual === 'todos' ? 'btn-primary' : 'btn-outline-primary'}" 
                    onclick="setFiltroGeral('todos')">📋 Todos</button>
            ${datasUnicas.map(data => `
                <button class="btn ${filtroGeralAtual === data ? 'btn-primary' : 'btn-outline-primary'}" 
                        onclick="setFiltroGeral('${data}')">📅 ${formatarDataCurtaGeral(data)}</button>
            `).join('')}
        </div>
    `;
}

function setFiltroGeral(filtro) {
    filtroGeralAtual = filtro;
    carregarFiltroDatasGeral();
    renderizarPalpitesGeral();
}

function formatarDataCurtaGeral(dataStr) {
    const datas = {
        '2026-06-11': '11/06',
        '2026-06-12': '12/06',
        '2026-06-13': '13/06',
        '2026-06-14': '14/06',
        '2026-06-15': '15/06',
        '2026-06-16': '16/06',
        '2026-06-17': '17/06',
        '2026-06-18': '18/06',
        '2026-06-19': '19/06',
        '2026-06-20': '20/06',
        '2026-06-21': '21/06',
        '2026-06-22': '22/06',
        '2026-06-23': '23/06'
    };
    return datas[dataStr] || dataStr;
}

function formatarDataLongaGeral(dataStr) {
    const datas = {
        '2026-06-11': '11 de Junho',
        '2026-06-12': '12 de Junho',
        '2026-06-13': '13 de Junho',
        '2026-06-14': '14 de Junho',
        '2026-06-15': '15 de Junho',
        '2026-06-16': '16 de Junho',
        '2026-06-17': '17 de Junho',
        '2026-06-18': '18 de Junho',
        '2026-06-19': '19 de Junho',
        '2026-06-20': '20 de Junho',
        '2026-06-21': '21 de Junho',
        '2026-06-22': '22 de Junho',
        '2026-06-23': '23 de Junho'
    };
    return datas[dataStr] || dataStr;
}

function renderizarPalpitesGeral() {
    const container = document.getElementById('palpitesContainer');
    container.innerHTML = '';
    
    // Filtrar jogos
    let jogosFiltrados = dados.jogos;
    if (filtroGeralAtual !== 'todos') {
        jogosFiltrados = dados.jogos.filter(j => j.data === filtroGeralAtual);
    }
    
    if (jogosFiltrados.length === 0) {
        container.innerHTML = '<div class="alert alert-info">Nenhum jogo nesta data.</div>';
        return;
    }
    
    // Agrupar por data
    const jogosPorData = {};
    jogosFiltrados.forEach(jogo => {
        const data = jogo.data || '2026-06';
        if (!jogosPorData[data]) {
            jogosPorData[data] = [];
        }
        jogosPorData[data].push(jogo);
    });
    
    const datasOrdenadas = Object.keys(jogosPorData).sort();
    
    datasOrdenadas.forEach(data => {
        const dataGroup = document.createElement('div');
        dataGroup.className = 'card mb-4';
        dataGroup.innerHTML = `<div class="card-header bg-dark text-white">📅 ${formatarDataLongaGeral(data)}</div>`;
        
        const table = document.createElement('table');
        table.className = 'table table-striped table-hover mb-0';
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Jogo</th>
                    ${Object.entries(USUARIOS).filter(([u]) => u !== 'admin').map(([_, info]) => `<th class="text-center">${info.nome}</th>`).join('')}
                </tr>
            </thead>
            <tbody id="tbody_${data}"></tbody>
        `;
        
        dataGroup.appendChild(table);
        container.appendChild(dataGroup);
        
        const tbody = document.getElementById(`tbody_${data}`);
        
        jogosPorData[data].forEach(jogo => {
            const row = tbody.insertRow();
            const resultado = dados.resultados[jogo.id];
            
            // Coluna do jogo
            let jogoCell = row.insertCell(0);
            jogoCell.innerHTML = `<strong>${jogo.timeCasa}<br>vs<br>${jogo.timeFora}</strong>`;
            if (resultado) {
                jogoCell.innerHTML += `<br><span class="badge bg-secondary">${resultado.casa} x ${resultado.fora}</span>`;
            }
            
            // Colunas dos participantes
            for (const [username, userInfo] of Object.entries(USUARIOS)) {
                if (username === 'admin') continue;
                
                const palpite = dados.palpites.find(p => p.usuario === username && p.jogoId === jogo.id);
                const cell = row.insertCell();
                cell.className = 'text-center';
                
                if (palpite) {
                    let pontosHtml = '';
                    if (resultado) {
                        const pontos = calcularPontuacaoGeral(palpite, resultado);
                        pontosHtml = `<br><span class="badge ${pontos > 0 ? 'bg-success' : 'bg-danger'}">${pontos} pts</span>`;
                    }
                    cell.innerHTML = `<span class="badge bg-primary fs-6">${palpite.casa} x ${palpite.fora}</span>${pontosHtml}`;
                } else {
                    cell.innerHTML = '<span class="text-muted">-</span>';
                }
            }
        });
    });
}

function calcularPontuacaoGeral(palpite, resultado) {
    if (!resultado) return 0;
    
    const acertouPlacar = (palpite.casa === resultado.casa && palpite.fora === resultado.fora);
    if (acertouPlacar) return 3;
    
    const palpiteVencedor = palpite.casa > palpite.fora ? 'casa' : (palpite.casa < palpite.fora ? 'fora' : 'empate');
    const resultadoVencedor = resultado.casa > resultado.fora ? 'casa' : (resultado.casa < resultado.fora ? 'fora' : 'empate');
    
    if (palpiteVencedor === resultadoVencedor) return 1;
    
    return 0;
}

window.setFiltroGeral = setFiltroGeral;

document.addEventListener('DOMContentLoaded', carregarPalpitesGeral);