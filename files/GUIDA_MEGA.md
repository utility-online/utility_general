# 📦 Usare Mega come Storage per Immagini

## 🌐 Perché usare Mega?

**Vantaggi**:
- ✅ 20 GB gratuiti
- ✅ Upload illimitati
- ✅ Nessun limite di dimensione file
- ✅ Crittografia end-to-end
- ✅ Link diretti condivisibili

**Svantaggi**:
- ❌ Link più lunghi rispetto a GitHub
- ❌ Necessita account Mega
- ❌ Meno integrazione con Git

---

## 🚀 Setup Mega

### 1. Crea Account

1. Vai su https://mega.nz/
2. Clicca "Create Account"
3. Inserisci email e password
4. Verifica l'email

### 2. Installa App (Opzionale)

**Desktop**:
- Windows/Mac/Linux: https://mega.nz/desktop
- Sincronizzazione automatica cartelle

**Mobile**:
- iOS: App Store
- Android: Google Play

---

## 📤 Caricare Immagini su Mega

### Metodo 1: Web Browser

1. Accedi a https://mega.nz/
2. Clicca "Cloud Drive"
3. Crea cartella "sito-web-images"
4. Trascina le immagini nella cartella
5. Aspetta completamento upload

### Metodo 2: Desktop App

1. Apri Mega Desktop
2. Sincronizza cartella locale con Mega
3. Copia immagini nella cartella sincronizzata
4. Upload automatico!

---

## 🔗 Ottenere Link Pubblici

### Passo 1: Ottieni link file

1. **Web**: Click destro su immagine > "Get link"
2. Vedrai un link tipo:
   ```
   https://mega.nz/file/ABC123XYZ#key-lunghissimo
   ```

### Passo 2: Converti in link diretto

Il link Mega standard non è un link diretto all'immagine.
Devi convertirlo in questo modo:

**Link Mega originale**:
```
https://mega.nz/file/ABC123XYZ#key-lunghissimo
```

**Conversione manuale** (metodo 1):
```
https://mega.nz/embed/ABC123XYZ#key-lunghissimo
```
Cambia `/file/` in `/embed/`

**Usa servizio di conversione** (metodo 2):
- https://megadownloader.net/link-converter
- Incolla link Mega
- Ottieni link diretto

**Link diretto finale**:
```
https://example.com/direct-image-link.jpg
```

---

## 💻 Usare Immagini Mega nel Sito

### In HTML:

```html
<!-- Metodo 1: Link embed Mega -->
<img src="https://mega.nz/embed/ABC123XYZ#key" alt="Mia foto">

<!-- Metodo 2: Link diretto (se ottenuto) -->
<img src="https://link-diretto-mega.jpg" alt="Mia foto">
```

### Esempio completo index.html:

```html
<div class="slider">
    <div class="slide active">
        <img src="https://mega.nz/embed/ABC123#key1" alt="Foto 1">
    </div>
    <div class="slide">
        <img src="https://mega.nz/embed/DEF456#key2" alt="Foto 2">
    </div>
    <div class="slide">
        <img src="https://mega.nz/embed/GHI789#key3" alt="Foto 3">
    </div>
</div>
```

---

## ⚠️ Limitazioni e Problemi

### Problema 1: Limite di banda

**Mega ha limite di trasferimento**:
- Account gratuito: ~5 GB al giorno
- Se superi, visitatori vedono messaggio errore

**Soluzione**:
- Usa Mega solo per immagini grandi
- Metti logo e icone piccole su GitHub
- Combina Mega + GitHub

### Problema 2: Velocità di caricamento

**Immagini Mega possono essere più lente**:
- Sono servite da server Mega
- Possibile latenza maggiore

**Soluzione**:
- Ottimizza immagini prima dell'upload
- Usa lazy loading nel codice
- Considera CDN per siti professionali

### Problema 3: Link lunghi

**I link Mega sono molto lunghi**:
```
https://mega.nz/file/ABC123XYZ#lunghissima-chiave-crittografica
```

**Soluzione**:
- Usa accorciatore URL (bit.ly, tinyurl)
- O crea file JSON con mapping:

```javascript
// images-config.js
const images = {
  foto1: "https://mega.nz/embed/ABC123#key1",
  foto2: "https://mega.nz/embed/DEF456#key2",
  foto3: "https://mega.nz/embed/GHI789#key3"
};
```

---

## 🎯 Strategia Ibrida GitHub + Mega

### Configurazione consigliata:

```
🗂️ GitHub (per file piccoli):
   ├── logo.png (< 100 KB)
   ├── favicon.ico
   ├── icone menu
   └── immagini UI

📦 Mega (per file grandi):
   ├── slider-1.jpg (2 MB)
   ├── slider-2.jpg (3 MB)
   ├── background-video.mp4 (50 MB)
   └── galleria-foto/ (100+ immagini)
```

### Implementazione:

```html
<!-- Immagini piccole da GitHub -->
<img src="images/logo.png" alt="Logo">
<img src="images/icon-menu.svg" alt="Menu">

<!-- Immagini grandi da Mega -->
<img src="https://mega.nz/embed/ABC#key" alt="Hero banner" loading="lazy">
```

---

## 🔧 Script Automatizzato per Mega

### upload-to-mega.sh (Bash script)

```bash
#!/bin/bash

# Installa MEGAcmd prima:
# https://mega.nz/cmd

# Login
mega-login tuaemail@example.com tuapassword

# Upload cartella immagini
mega-put -c images/ /sito-web-images/

# Ottieni link
mega-export -a /sito-web-images/

# Logout
mega-logout

echo "Upload completato!"
```

### Uso:
```bash
chmod +x upload-to-mega.sh
./upload-to-mega.sh
```

---

## 📊 Organizzazione File su Mega

### Struttura consigliata:

```
Mega Cloud Drive/
│
└── progetti-web/
    └── mio-sito-web/
        ├── slider/
        │   ├── foto1.jpg
        │   ├── foto2.jpg
        │   └── foto3.jpg
        │
        ├── galleria/
        │   ├── prodotto-1.jpg
        │   ├── prodotto-2.jpg
        │   └── ...
        │
        └── video/
            └── presentazione.mp4
```

### Nomenclatura file:

```
✅ Buona:
- hero-banner-homepage.jpg
- prodotto-laptop-2024.jpg
- team-ufficio-principale.jpg

❌ Cattiva:
- IMG_20240115.jpg
- foto.jpg
- DSC_1234.JPG
```

---

## 🎨 Ottimizzazione Immagini per Mega

### Prima di caricare:

1. **Riduci dimensioni**:
   ```
   Strumenti online:
   - TinyPNG.com
   - Squoosh.app
   - Compressor.io
   ```

2. **Converti formato**:
   ```
   JPG → per foto (dimensioni minori)
   PNG → per grafica con trasparenza
   WebP → formato moderno (supporto browser 95%)
   ```

3. **Ridimensiona**:
   ```
   Slider web: max 1920x1080px
   Galleria: max 1200x800px
   Thumbnail: max 400x300px
   ```

### Esempio con ImageMagick:

```bash
# Installa: https://imagemagick.org/

# Ridimensiona
convert foto.jpg -resize 1920x1080 foto-ottimizzata.jpg

# Comprimi
convert foto.jpg -quality 85 foto-compressa.jpg

# Converti in WebP
convert foto.jpg foto.webp
```

---

## 🌐 Hosting Alternativo a Mega

### Se Mega non ti convince:

1. **Cloudinary** (2500 immagini gratis/mese)
   - https://cloudinary.com/
   - CDN veloce
   - Trasformazioni automatiche

2. **ImgBB** (illimitato gratis)
   - https://imgbb.com/
   - Upload senza account
   - API disponibile

3. **GitHub Large File Storage**
   - https://git-lfs.github.com/
   - Integrato con Git
   - 1 GB gratis/mese

4. **Imgur** (immagini illimitate)
   - https://imgur.com/
   - Popolare per forum/blog
   - API disponibile

---

## 📝 Template HTML con Mega

### File: mega-images.html

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Galleria Mega</title>
    <style>
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            padding: 20px;
        }
        .gallery img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: transform 0.3s;
        }
        .gallery img:hover {
            transform: scale(1.05);
        }
        /* Lazy loading placeholder */
        img[loading="lazy"] {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
        }
        @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
    </style>
</head>
<body>
    <h1>Galleria Immagini</h1>
    
    <div class="gallery">
        <!-- Sostituisci con i tuoi link Mega -->
        <img src="https://mega.nz/embed/ABC#key1" 
             alt="Foto 1" 
             loading="lazy">
        <img src="https://mega.nz/embed/DEF#key2" 
             alt="Foto 2" 
             loading="lazy">
        <img src="https://mega.nz/embed/GHI#key3" 
             alt="Foto 3" 
             loading="lazy">
    </div>

    <script>
        // Gestione errori caricamento
        document.querySelectorAll('img').forEach(img => {
            img.onerror = function() {
                this.src = 'placeholder.jpg'; // immagine fallback
                this.alt = 'Immagine non disponibile';
            };
        });
    </script>
</body>
</html>
```

---

## 🛡️ Sicurezza e Privacy

### Impostazioni Mega:

1. **Link con password**:
   - Proteggi link con password
   - Solo chi ha password può vedere

2. **Scadenza link**:
   - Imposta data scadenza
   - Link si disattiva automaticamente

3. **Cartelle private**:
   - Non condividere tutto
   - Solo cartelle specifiche pubbliche

### Nel codice:

```javascript
// Non esporre chiavi API nel codice pubblico
// Usa variabili d'ambiente
const MEGA_API_KEY = process.env.MEGA_API_KEY;
```

---

## 📈 Monitoraggio Uso Mega

### Dashboard Mega:

1. Vai su Settings > Account
2. Vedi:
   - Spazio usato
   - Traffico giornaliero
   - Link condivisi

### Alert quando vicino al limite:

```javascript
// Aggiungi al tuo sito
function checkMegaQuota() {
    // Implementa chiamata API Mega
    // Avvisa se vicino al limite
}
```

---

## ✅ Checklist Finale

Prima di andare online con Mega:

- [ ] Account Mega creato
- [ ] Immagini ottimizzate (< 500KB ciascuna)
- [ ] Upload completato
- [ ] Link ottenuti e testati
- [ ] Link inseriti nel codice HTML
- [ ] Testato caricamento immagini
- [ ] Verificato limite banda non superato
- [ ] Backup locale delle immagini
- [ ] Documentato quali immagini sono su Mega

---

## 🆘 Troubleshooting

### Immagini non si caricano:

1. Verifica link Mega valido
2. Controlla limite banda
3. Testa link in incognito
4. Verifica CORS (Cross-Origin)

### Caricamento lento:

1. Ottimizza immagini
2. Usa `loading="lazy"`
3. Implementa placeholder
4. Considera CDN alternativo

### Mega quota superata:

1. Aspetta 24 ore (reset giornaliero)
2. Upgrade a piano Pro
3. Usa account multipli
4. Passa a servizio alternativo

---

🎉 **Ora sai tutto su come integrare Mega nel tuo sito web!**
