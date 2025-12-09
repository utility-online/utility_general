# Guida alla Configurazione - Progetto Web con VS Code e GitHub

## 📋 Prerequisiti

Prima di iniziare, assicurati di avere installato:
- **Visual Studio Code** (scarica da: https://code.visualstudio.com/)
- **Git** (scarica da: https://git-scm.com/)
- Un account **GitHub** (registrati su: https://github.com/)

---

## 🔧 PARTE 1: Configurazione iniziale di Git

### 1.1 Configurare Git sul tuo computer

Apri il terminale (o Git Bash su Windows) e configura il tuo nome e email:

```bash
git config --global user.name "Il Tuo Nome"
git config --global user.email "tuaemail@example.com"
```

### 1.2 Verifica la configurazione

```bash
git config --list
```

---

## 🎨 PARTE 2: Configurazione Visual Studio Code

### 2.1 Installare le estensioni utili

Apri VS Code e installa queste estensioni (Ctrl+Shift+X):
1. **Git Graph** - per visualizzare la cronologia dei commit
2. **GitLens** - informazioni Git avanzate
3. **Live Server** - per testare il sito in locale
4. **HTML CSS Support** - autocompletamento HTML/CSS
5. **JavaScript (ES6) code snippets** - snippets per JavaScript
6. **Prettier** - formattazione automatica del codice

### 2.2 Configurare VS Code per Git

VS Code ha Git integrato, ma verifica che sia attivo:
- Vai su `File > Preferenze > Impostazioni`
- Cerca "git.enabled" e assicurati sia su `true`

---

## 🚀 PARTE 3: Creare il repository su GitHub

### 3.1 Crea un nuovo repository su GitHub

1. Vai su https://github.com
2. Clicca su **"New"** o **"+"** in alto a destra
3. Compila i dettagli:
   - **Repository name**: `mio-sito-web` (o il nome che preferisci)
   - **Description**: (opzionale) "Il mio primo sito web"
   - Seleziona **Public** o **Private**
   - ✅ **NON** selezionare "Add a README file" (lo creeremo noi)
4. Clicca su **"Create repository"**

### 3.2 Copia l'URL del repository

Dopo la creazione, vedrai un URL simile a:
```
https://github.com/tuo-username/mio-sito-web.git
```
**Copialo** (lo userai tra poco)

---

## 💻 PARTE 4: Configurare il progetto in VS Code

### 4.1 Creare la struttura del progetto

1. Crea una cartella sul tuo computer (es: `C:\Progetti\mio-sito-web`)
2. Apri VS Code
3. Vai su `File > Apri Cartella` e seleziona la cartella creata
4. Crea la seguente struttura:

```
mio-sito-web/
│
├── index.html
├── style.css
├── script.js
├── images/
│   ├── foto1.jpg
│   ├── foto2.jpg
│   ├── foto3.jpg
│   └── foto4.jpg
└── README.md
```

### 4.2 Aggiungere le tue immagini

Nella cartella `images/`, inserisci 4 foto che vuoi mostrare nello slider.
Rinominale come: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`, `foto4.jpg`

---

## 📤 PARTE 5: Pubblicare su GitHub

### 5.1 Inizializzare Git nel progetto

Apri il terminale integrato in VS Code (`Ctrl+ù` o `View > Terminal`) e esegui:

```bash
# Inizializza Git
git init

# Aggiungi tutti i file
git add .

# Crea il primo commit
git commit -m "Prima versione del sito web"
```

### 5.2 Collegare il repository remoto

Sostituisci l'URL con quello del tuo repository GitHub:

```bash
# Aggiungi il repository remoto
git remote add origin https://github.com/tuo-username/mio-sito-web.git

# Verifica che sia stato aggiunto
git remote -v
```

### 5.3 Inviare i file su GitHub

```bash
# Crea il branch main (se necessario)
git branch -M main

# Carica i file su GitHub
git push -u origin main
```

**Nota**: Ti verrà chiesto di autenticarti con GitHub. Usa il tuo username e password/token.

---

## 🔄 PARTE 6: Workflow quotidiano

Ogni volta che modifichi il codice:

```bash
# 1. Aggiungi i file modificati
git add .

# 2. Crea un commit con un messaggio descrittivo
git commit -m "Descrizione delle modifiche"

# 3. Carica su GitHub
git push
```

### Comandi utili:

```bash
# Vedere lo stato dei file
git status

# Vedere la cronologia dei commit
git log --oneline

# Scaricare modifiche da GitHub
git pull
```

---

## 🌐 PARTE 7: Testare il sito localmente

### Con Live Server (consigliato):

1. Installa l'estensione "Live Server" in VS Code
2. Clicca destro su `index.html`
3. Seleziona **"Open with Live Server"**
4. Il sito si aprirà automaticamente nel browser

### Manualmente:

- Apri semplicemente il file `index.html` nel browser

---

## 📁 PARTE 8: Integrare Mega (opzionale)

Se vuoi usare Mega per ospitare le immagini invece di GitHub:

1. Carica le immagini su Mega
2. Ottieni i link pubblici per ogni immagine
3. Sostituisci i path in `index.html`:

```html
<!-- Da questo -->
<img src="images/foto1.jpg" alt="Foto 1">

<!-- A questo -->
<img src="https://mega.nz/file/tuolink" alt="Foto 1">
```

**Nota**: GitHub supporta file fino a 100MB, quindi per immagini normali va benissimo GitHub stesso.

---

## 🎯 PARTE 9: Pubblicare il sito online (GitHub Pages)

Per rendere il sito accessibile online gratuitamente:

1. Vai sul tuo repository su GitHub
2. Clicca su **Settings**
3. Nel menu laterale, clicca su **Pages**
4. In "Source", seleziona **main** e la cartella **/ (root)**
5. Clicca su **Save**
6. Dopo qualche minuto, il sito sarà disponibile su:
   ```
   https://tuo-username.github.io/mio-sito-web/
   ```

---

## ✅ Checklist finale

- [ ] Git installato e configurato
- [ ] VS Code installato con le estensioni
- [ ] Repository creato su GitHub
- [ ] Progetto locale connesso a GitHub
- [ ] File HTML, CSS, JS creati
- [ ] Immagini aggiunte nella cartella images/
- [ ] Primo commit e push completati
- [ ] Sito testato localmente con Live Server
- [ ] (Opzionale) Sito pubblicato su GitHub Pages

---

## 🆘 Risoluzione problemi comuni

### Errore "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/tuo-username/mio-sito-web.git
```

### Errore di autenticazione GitHub
Dal 2021, GitHub richiede un **Personal Access Token** invece della password:
1. Vai su GitHub > Settings > Developer settings > Personal access tokens
2. Genera un nuovo token
3. Usa il token come password quando Git te lo chiede

### Le immagini non si vedono
- Verifica che i nomi dei file corrispondano esattamente (es: `foto1.jpg`)
- Controlla che le immagini siano nella cartella `images/`
- Verifica i path nel file HTML

---

## 📚 Risorse utili

- Documentazione Git: https://git-scm.com/doc
- Guida GitHub: https://docs.github.com/
- HTML Reference: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS Reference: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

## 🎉 Congratulazioni!

Hai configurato con successo il tuo ambiente di sviluppo web con VS Code e GitHub!
