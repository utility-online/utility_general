# 📁 Struttura del Progetto

Questa è la struttura completa del tuo progetto web:

```
mio-sito-web/
│
├── index.html          ← Pagina principale HTML
├── style.css           ← File di stile CSS
├── script.js           ← File JavaScript per le funzionalità
├── .gitignore          ← File per escludere file dal repository
├── README.md           ← Guida completa del progetto
├── GUIDA_RAPIDA.md     ← Guida rapida per iniziare
│
└── images/             ← Cartella per le immagini
    ├── foto1.jpg       ← Prima immagine dello slider
    ├── foto2.jpg       ← Seconda immagine
    ├── foto3.jpg       ← Terza immagine
    └── foto4.jpg       ← Quarta immagine
```

## 📝 Descrizione dei file

### index.html
Contiene la struttura HTML della pagina web con:
- Menu hamburger (tre linee in alto a sinistra)
- Slider di immagini al centro
- Contenuto principale

### style.css
Contiene tutti gli stili CSS per:
- Layout del menu
- Animazioni dello slider
- Design responsive
- Colori e spaziature

### script.js
Contiene il codice JavaScript per:
- Apertura/chiusura del menu
- Cambio automatico delle immagini nello slider
- Navigazione manuale dello slider
- Supporto touch per dispositivi mobili

### .gitignore
File che dice a Git quali file NON caricare su GitHub
(file temporanei, cache, ecc.)

### images/
Cartella dove inserire le tue foto.
Le immagini devono essere rinominate esattamente:
- foto1.jpg
- foto2.jpg
- foto3.jpg
- foto4.jpg

## ✨ Funzionalità implementate

✅ Menu hamburger responsive
✅ Slider automatico di immagini (cambia ogni 4 secondi)
✅ Navigazione manuale con frecce
✅ Indicatori (pallini) per vedere quale foto è attiva
✅ Supporto swipe su mobile
✅ Navigazione con tastiera (frecce)
✅ Pausa dello slider quando il mouse è sopra
✅ Design responsive per mobile e tablet
✅ Menu laterale animato

## 🎨 Personalizzazioni possibili

### Cambiare i colori:
Modifica in `style.css` le variabili colore:
- Menu: `#2c3e50` (grigio scuro)
- Hover menu: `#34495e`
- Link hover: `#007bff` (blu)

### Cambiare velocità slider:
In `script.js`, modifica:
```javascript
slideInterval = setInterval(nextSlide, 4000); // 4000 = 4 secondi
```

### Aggiungere più foto:
1. Aggiungi le foto nella cartella `images/`
2. Aggiungi le slide in `index.html`
3. Aggiungi i dot corrispondenti

### Modificare il menu:
In `index.html`, modifica le voci del menu:
```html
<li><a href="#home">Home</a></li>
<li><a href="#about">Chi Siamo</a></li>
<!-- Aggiungi altre voci qui -->
```

## 📱 Compatibilità

Il sito è compatibile con:
- ✅ Chrome, Firefox, Safari, Edge (versioni moderne)
- ✅ iPhone e iPad
- ✅ Smartphone e tablet Android
- ✅ Desktop Windows, Mac, Linux

## 🚀 Prossimi passi

Dopo aver configurato il progetto base, puoi:
1. Aggiungere più pagine HTML
2. Creare sezioni per "Chi Siamo", "Servizi", ecc.
3. Integrare form di contatto
4. Aggiungere Google Maps
5. Implementare animazioni avanzate
6. Collegare un database per contenuti dinamici

## 💡 Suggerimenti

- Usa immagini ottimizzate (non più di 500KB ciascuna)
- Testa sempre il sito su dispositivi mobili
- Fai commit frequenti su Git con messaggi chiari
- Tieni backup delle tue immagini originali

---

Buon lavoro con il tuo sito web! 🎉
