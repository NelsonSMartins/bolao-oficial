let dados = null;

function carregarAdmin() {
    const user = verificarLogin();
    if (!user || user.username !== 'admin') {
        window.location.href = 'index.html';
        return;
    }
    
    dados = lerDados();
    document.getElementById('userName').innerHTML = `👑 ${user.nome}`;
    
    carregarEstatisticas();
    carregarListaJogos();
    carregarFormularioPalpites();
    carregarResultados();
    carregarRankingAdmin();
}

function carregarEstatisticas() {
    const container = document.getElementById('stats');
    const totalJogos = dados.jogos.length;
    const totalPalpites = Object.keys(dados.palpites).length;
    const totalResultados = Object.keys(dados.resultados).length;
    
    container.innerHTML = `
        <div class="stat-card">📋 ${totalJogos} Jogos</div>
        <div class="stat-card">📝 ${totalPalpites} Palpites</div>
        <div class="stat-card">🏁 ${totalResultados} Resultados</div>
    `;
}

function carregarListaJogos() {
    const container = document.getElementById('listaJogos');
    container.innerHTML = '';
    
    if (dados.jogos.length === 0) {
        container.innerHTML = '<div class="alert">Nenhum jogo cadastrado</div>';
        return;
    }
    
    dados.jogos.forEach(jogo => {
        const div = document.createElement('div');
        div.className = 'jogo-item';
        div.innerHTML = `
            <div>
                <strong>${jogo.timeCasa} 🆚 ${jogo.timeFora}</strong>
                <div class="small">📅 ${jogo.data || 'Data não definida'}</div>
                ${dados.resultados[jogo.id] ? `<div class="small success">🏁 Resultado: ${dados.resultados[jogo.id].casa} x ${dados.resultados[jogo.id].fora}</div>` : ''}
            </div>
            <button class="btn-danger btn-sm" onclick="removerJogo(${jogo.id})">Remover</button>
        `;
        container.appendChild(div);
    });
}

function adicionarJogo() {
    const timeCasa = document.getElementById('timeCasa').value.trim();
    const timeFora = document.getElementById('timeFora').value.trim();
    const dataJogo = document.getElementById('dataJogo').value;
    
    if (!timeCasa || !timeFora) {
        showToast('Preencha os times', 'error');
        return;
    }
    
    dados.jogos.push({
        id: dados.proximoJogoId++,
        timeCasa: timeCasa,
        timeFora: timeFora,
        data: dataJogo || new Date().toISOString().split('T')[0]
    });
    
    salvarDados(dados);
    document.getElementById('timeCasa').value = '';
    document.getElementById('timeFora').value = '';
    carregarListaJogos();
    carregarFormularioPalpites();
    carregarResultados();
    carregarEstatisticas();
    showToast('Jogo adicionado!', 'success');
}

function removerJogo(id) {
    if (confirm('Remover este jogo? Todos os palpites serão perdidos.')) {
        dados.jogos = dados.jogos.filter(j => j.id !== id);
        // Remover palpites deste jogo
        Object.keys(dados.palpites).forEach(key => {
            if (key.startsWith(id + '_')) delete dados.palpites[key];
        });
        delete dados.resultados[id];
        salvarDados(dados);
        carregarListaJogos();
        carregarFormularioPalpites();
        carregarResultados();
        carregarEstatisticas();
        showToast('Jogo removido!', 'success');
    }
}

function carregarFormularioPalpites() {
    const container = document.getElementById('formPalpites');
    container.innerHTML = '';
    
    if (dados.jogos.length === 0) {
        container.innerHTML = '<div class="alert">Cadastre jogos primeiro</div>';
        return;
    }
    
    // Selecionar jogador
    const selectJogador = document.createElement('select');
    selectJogador.id = 'selectJogador';
    selectJogador.className = 'select-full';
    selectJogador.innerHTML = '<option value="">Selecione o jogador...</option>';
    
    for (const [username, user] of Object.entries(USUARIOS)) {
        if (username !== 'admin') {
            selectJogador.innerHTML += `<option value="${username}">${user.nome}</option>`;
        }
    }
    container.appendChild(selectJogador);
    
    // Container dos palpites
    const palpitesContainer = document.createElement('div');
    palpitesContainer.id = 'palpitesContainer';
    palpitesContainer.style.marginTop = '20px';
    container.appendChild(palpitesContainer);
    
    selectJogador.onchange = () => {
        const jogador = selectJogador.value;
        if (!jogador) {
            palpitesContainer.innerHTML = '';
            return;
        }
        
        palpitesContainer.innerHTML = '<h4>Palpites do jogador</h4>';
        
        dados.jogos.forEach(jogo => {
            const palpiteKey = `${jogo.id}_${jogador}`;
            const palpite = dados.palpites[palpiteKey] || {};
            const resultado = dados.resultados[jogo.id];
            
            const div = document.createElement('div');
            div.className = 'palpite-form-item';
            div.innerHTML = `
                <div class="palpite-form-jogo">${jogo.timeCasa} x ${jogo.timeFora}</div>
                <div class="palpite-form-inputs">
                    <input type="number" id="palpite_casa_${jogo.id}" class="bet-input" 
                           value="${palpite.casa || ''}" placeholder="0" min="0" max="30">
                    <span>x</span>
                    <input type="number" id="palpite_fora_${jogo.id}" class="bet-input" 
                           value="${palpite.fora || ''}" placeholder="0" min="0" max="30">
                    ${resultado ? `<span class="badge-info">🏁 ${resultado.casa}x${resultado.fora}</span>` : ''}
                </div>
            `;
            palpitesContainer.appendChild(div);
        });
        
        const saveBtn = document.createElement('button');
        saveBtn.className = 'btn-success btn-block';
        saveBtn.style.marginTop = '20px';
        saveBtn.innerHTML = '💾 Salvar Palpites deste Jogador';
        saveBtn.onclick = () => salvarPalpitesJogador(jogador);
        palpitesContainer.appendChild(saveBtn);
    };
}

function salvarPalpitesJogador(jogador) {
    let salvos = 0;
    
    dados.jogos.forEach(jogo => {
        const casaInput = document.getElementById(`palpite_casa_${jogo.id}`);
        const foraInput = document.getElementById(`palpite_fora_${jogo.id}`);
        
        if (casaInput && foraInput && casaInput.value && foraInput.value) {
            const casa = parseInt(casaInput.value);
            const fora = parseInt(foraInput.value);
            
            if (casa >= 0 && casa <= 30 && fora >= 0 && fora <= 30) {
                const palpiteKey = `${jogo.id}_${jogador}`;
                dados.palpites[palpiteKey] = { casa, fora };
                salvos++;
            }
        }
    });
    
    salvarDados(dados);
    showToast(`${salvos} palpites salvos para ${USUARIOS[jogador].nome}!`, 'success');
    carregarRankingAdmin(); // Atualizar ranking
}

function carregarResultados() {
    const container = document.getElementById('formResultados');
    container.innerHTML = '';
    
    if (dados.jogos.length === 0) {
        container.innerHTML = '<div class="alert">Cadastre jogos primeiro</div>';
        return;
    }
    
    dados.jogos.forEach(jogo => {
        const resultado = dados.resultados[jogo.id] || {};
        
        const div = document.createElement('div');
        div.className = 'resultado-item';
        div.innerHTML = `
            <div class="resultado-jogo">${jogo.timeCasa} x ${jogo.timeFora}</div>
            <div class="resultado-inputs">
                <input type="number" id="res_casa_${jogo.id}" class="bet-input" 
                       value="${resultado.casa || ''}" placeholder="0" min="0" max="30">
                <span>x</span>
                <input type="number" id="res_fora_${jogo.id}" class="bet-input" 
                       value="${resultado.fora || ''}" placeholder="0" min="0" max="30">
            </div>
        `;
        container.appendChild(div);
    });
    
    const saveBtn = document.createElement('button');
    saveBtn.className = 'btn-success btn-block';
    saveBtn.style.marginTop = '20px';
    saveBtn.innerHTML = '💾 Salvar Resultados';
    saveBtn.onclick = salvarResultados;
    container.appendChild(saveBtn);
}

function salvarResultados() {
    const novosResultados = {};
    
    dados.jogos.forEach(jogo => {
        const casaInput = document.getElementById(`res_casa_${jogo.id}`);
        const foraInput = document.getElementById(`res_fora_${jogo.id}`);
        
        if (casaInput && foraInput && casaInput.value && foraInput.value) {
            const casa = parseInt(casaInput.value);
            const fora = parseInt(foraInput.value);
            
            if (casa >= 0 && casa <= 30 && fora >= 0 && fora <= 30) {
                novosResultados[jogo.id] = { casa, fora };
            }
        }
    });
    
    dados.resultados = novosResultados;
    salvarDados(dados);
    carregarRankingAdmin();
    carregarListaJogos();
    showToast('Resultados salvos! Ranking atualizado.', 'success');
}

function carregarRankingAdmin() {
    const container = document.getElementById('rankingAdmin');
    const ranking = calcularRanking();
    
    if (ranking.length === 0) {
        container.innerHTML = '<div class="alert">Aguardando palpites e resultados...</div>';
        return;
    }
    
    let html = '<table class="ranking-table"><tr><th>Pos</th><th>Jogador</th><th>Pontos</th><th>Placar Exato</th><th>Resultado</th></tr>';
    
    ranking.forEach((item, idx) => {
        const medalha = idx === 0 ? '🥇' : (idx === 1 ? '🥈' : (idx === 2 ? '🥉' : `${idx+1}º`));
        html += `
            <tr class="${idx === 0 ? 'ranking-pos-1' : (idx === 1 ? 'ranking-pos-2' : (idx === 2 ? 'ranking-pos-3' : ''))}">
                <td>${medalha}</td>
                <td><strong>${item.nome}</strong></td>
                <td class="pontos">${item.pontos}</td>
                <td>${item.placaresExatos}</td>
                <td>${item.resultadosCorretos}</td>
            </tr>
        `;
    });
    
    html += '</table>';
    container.innerHTML = html;
}

function calcularRanking() {
    const ranking = [];
    
    for (const [username, user] of Object.entries(USUARIOS)) {
        if (username === 'admin') continue;
        
        let pontos = 0;
        let placaresExatos = 0;
        let resultadosCorretos = 0;
        
        for (const jogo of dados.jogos) {
            const palpiteKey = `${jogo.id}_${username}`;
            const palpite = dados.palpites[palpiteKey];
            const resultado = dados.resultados[jogo.id];
            
            if (palpite && resultado) {
                if (palpite.casa === resultado.casa && palpite.fora === resultado.fora) {
                    pontos += 3;
                    placaresExatos++;
                } else {
                    const palpiteVencedor = palpite.casa > palpite.fora ? 'casa' : (palpite.casa < palpite.fora ? 'fora' : 'empate');
                    const resultadoVencedor = resultado.casa > resultado.fora ? 'casa' : (resultado.casa < resultado.fora ? 'fora' : 'empate');
                    if (palpiteVencedor === resultadoVencedor) {
                        pontos += 1;
                        resultadosCorretos++;
                    }
                }
            }
        }
        
        ranking.push({
            username,
            nome: user.nome,
            pontos,
            placaresExatos,
            resultadosCorretos
        });
    }
    
    ranking.sort((a, b) => {
        if (a.pontos !== b.pontos) return b.pontos - a.pontos;
        return b.placaresExatos - a.placaresExatos;
    });
    
    return ranking;
}

// Exportar funções
window.adicionarJogo = adicionarJogo;
window.removerJogo = removerJogo;
window.exportarBackup = exportarBackup;
window.importarBackup = importarBackup;
window.importarArquivo = (file) => importarBackup(file);

document.addEventListener('DOMContentLoaded', carregarAdmin);