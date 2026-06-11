// Ler dados do localStorage
function lerDados() {
    const dadosStr = localStorage.getItem(STORAGE_KEY);
    if (dadosStr) {
        return JSON.parse(dadosStr);
    }
    // Inicializar dados padrão
    const dados = JSON.parse(JSON.stringify(DADOS_PADRAO));
    salvarDados(dados);
    return dados;
}

// Salvar dados no localStorage
function salvarDados(dados) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

// Exportar backup (para você salvar no PC)
function exportarBackup() {
    const dados = lerDados();
    const blob = new Blob([JSON.stringify(dados, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bolao_backup_${new Date().toISOString().slice(0,19)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Backup exportado!', 'success');
}

// Importar backup
function importarBackup(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const dados = JSON.parse(e.target.result);
            salvarDados(dados);
            showToast('Backup importado! Recarregue a página.', 'success');
            setTimeout(() => location.reload(), 1500);
        } catch (err) {
            showToast('Erro ao importar arquivo', 'error');
        }
    };
    reader.readAsText(file);
}