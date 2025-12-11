// ===== FUNZIONI PER RICERCA E FILTRI APPUNTI =====

// Ricerca negli appunti
function searchNotes() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const cards = document.getElementsByClassName('appunto-card');
    
    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].querySelector('.card-title').textContent.toLowerCase();
        const description = cards[i].querySelector('.card-description').textContent.toLowerCase();
        const tags = cards[i].querySelector('.card-tags').textContent.toLowerCase();
        
        if (title.includes(filter) || description.includes(filter) || tags.includes(filter)) {
            cards[i].style.display = '';
        } else {
            cards[i].style.display = 'none';
        }
    }
}

// Filtro per categoria
function filterCategory(category) {
    const cards = document.getElementsByClassName('appunto-card');
    const buttons = document.getElementsByClassName('filter-btn');
    
    // Aggiorna stato pulsanti
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    event.target.classList.add('active');
    
    // Filtra card
    for (let i = 0; i < cards.length; i++) {
        if (category === 'all') {
            cards[i].style.display = '';
        } else {
            const cardCategory = cards[i].getAttribute('data-category');
            if (cardCategory === category) {
                cards[i].style.display = '';
            } else {
                cards[i].style.display = 'none';
            }
        }
    }
    
    // Reset ricerca
    document.getElementById('searchInput').value = '';
}

// Copia codice negli appunti
function copyCode(button) {
    const codeBlock = button.closest('.code-block').querySelector('pre code');
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = '✓ Copiato!';
        button.style.background = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#667eea';
        }, 2000);
    });
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', function() {
    // Aggiungi listener per reset ricerca con ESC
    document.getElementById('searchInput')?.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            this.value = '';
            searchNotes();
        }
    });
});
