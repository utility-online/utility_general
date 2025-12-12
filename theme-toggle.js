/* ===== DARK MODE TOGGLE - VERSIONE MIGLIORATA ===== */

// Funzione per inizializzare il tema
function initTheme() {
    console.log('🔄 Inizializzazione tema...');
    
    // Leggi preferenza salvata in localStorage
    const savedTheme = localStorage.getItem('theme');
    console.log('💾 Tema salvato:', savedTheme);
    
    // Se c'è una preferenza salvata, applicala
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        console.log('🌙 Tema scuro attivato da localStorage');
    } else {
        console.log('☀️ Tema chiaro (default)');
    }
    
    updateThemeIcon();
}

// Funzione per cambiare tema
function toggleTheme() {
    console.log('🔄 Toggle tema chiamato!');
    
    document.body.classList.toggle('dark-mode');
    
    // Salva preferenza in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        console.log('🌙 Salvato tema SCURO');
    } else {
        localStorage.setItem('theme', 'light');
        console.log('☀️ Salvato tema CHIARO');
    }
    
    updateThemeIcon();
}

// Funzione per aggiornare l'icona del pulsante
function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) {
        console.error('❌ Pulsante themeToggle non trovato!');
        return;
    }
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '☀️'; // Sole per tornare a chiaro
        console.log('🔄 Icona aggiornata: ☀️');
    } else {
        themeToggle.innerHTML = '🌙'; // Luna per passare a scuro
        console.log('🔄 Icona aggiornata: 🌙');
    }
}

// Inizializza tema quando il DOM è pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('✅ DOM caricato');
        initTheme();
    });
} else {
    // DOM già caricato
    console.log('✅ DOM già pronto');
    initTheme();
}

// Log di caricamento script
console.log('✅ theme-toggle.js caricato!');
