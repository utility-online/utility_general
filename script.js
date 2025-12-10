// Elementi DOM
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;
let slideInterval;

// ==== MENU HAMBURGER ====

// Apri menu
hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
});

// Chiudi menu
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Chiudi menu quando si clicca su un link
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});

// Chiudi menu cliccando fuori
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

// ==== SLIDER IMMAGINI ====

// Funzione per mostrare una slide specifica
function showSlide(n) {
    // Rimuovi classe active da tutte le slides e dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Gestisci i limiti
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }
    
    // Aggiungi classe active alla slide e dot correnti
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Funzione per andare alla slide successiva
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Funzione per andare alla slide precedente
function prevSlide() {
    showSlide(currentSlide - 1);
}


// Event listeners per i dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        resetInterval();
    });
});

// Avvio automatico dello slider
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 4000); // Cambia ogni 4 secondi
}

// Reset dell'intervallo quando l'utente interagisce
function resetInterval() {
    clearInterval(slideInterval);
    startSlideShow();
}

// Pausa lo slider quando il mouse è sopra
document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Riprendi lo slider quando il mouse esce
document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    startSlideShow();
});

// Supporto per swipe su mobile
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.slider-container').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.slider-container').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // Swipe a sinistra
        nextSlide();
        resetInterval();
    }
    if (touchEndX > touchStartX + 50) {
        // Swipe a destra
        prevSlide();
        resetInterval();
    }
}

// Supporto per navigazione con tastiera
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
        resetInterval();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
        resetInterval();
    }
});

// Avvia lo slider all'avvio
startSlideShow();
