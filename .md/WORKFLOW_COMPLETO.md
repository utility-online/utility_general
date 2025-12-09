# 🔄 Workflow Completo - Dal Codice alla Pubblicazione

## 📅 Workflow Quotidiano

### Scenario 1: Inizio della giornata

```bash
# 1. Apri VS Code nella cartella del progetto

# 2. Scarica eventuali modifiche da GitHub
git pull

# 3. Verifica lo stato
git status
```

### Scenario 2: Modifiche al codice

```bash
# Durante il lavoro...

# 1. Testa le modifiche con Live Server
#    (Click destro su index.html > Open with Live Server)

# 2. Quando sei soddisfatto, aggiungi i file modificati
git add .

# 3. Crea un commit con messaggio descrittivo
git commit -m "Aggiunto nuovo slider e migliorato menu"

# 4. Carica su GitHub
git push
```

### Scenario 3: Fine giornata

```bash
# Prima di chiudere VS Code

# 1. Salva tutto (Ctrl+K S)

# 2. Verifica cosa hai modificato
git status

# 3. Se ci sono modifiche non committate
git add .
git commit -m "Modifiche fine giornata"
git push

# 4. Chiudi VS Code con la coscienza pulita! 😊
```

---

## 🎯 Workflow per Nuove Funzionalità

### Esempio: Aggiungere una nuova sezione "Chi Siamo"

#### 1. Pianifica
- Decidi cosa inserire nella sezione
- Prepara testo e immagini

#### 2. Crea un commit iniziale
```bash
git add .
git commit -m "Inizio lavoro su sezione Chi Siamo"
```

#### 3. Modifica index.html
```html
<!-- Aggiungi dopo lo slider -->
<section id="about" class="about-section">
    <div class="container">
        <h2>Chi Siamo</h2>
        <p>Descrizione dell'azienda...</p>
        <img src="images/team.jpg" alt="Il nostro team">
    </div>
</section>
```

#### 4. Aggiungi stili in style.css
```css
.about-section {
    padding: 60px 20px;
    background-color: #f5f5f5;
}

.about-section .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}

.about-section h2 {
    font-size: 2.5em;
    margin-bottom: 30px;
    color: #2c3e50;
}

.about-section img {
    max-width: 600px;
    width: 100%;
    border-radius: 10px;
    margin-top: 30px;
}
```

#### 5. Testa con Live Server
- Verifica che tutto funzioni
- Controlla su mobile con Device Toolbar (F12 > Ctrl+Shift+M)

#### 6. Commit e push
```bash
git add .
git commit -m "Aggiunta sezione Chi Siamo con testo e immagini"
git push
```

---

## 🐛 Workflow per Correggere Bug

### Esempio: Lo slider non cambia immagine

#### 1. Identifica il problema
```bash
# Controlla la console del browser (F12)
# Vedi errori JavaScript?
```

#### 2. Crea un branch per il fix (opzionale ma consigliato)
```bash
git checkout -b fix-slider
```

#### 3. Correggi il codice
- Modifica `script.js`
- Testa con Live Server

#### 4. Commit del fix
```bash
git add script.js
git commit -m "Fix: Risolto problema slider che non cambiava automaticamente"
```

#### 5. Torna al branch main e unisci
```bash
git checkout main
git merge fix-slider
git push
```

#### 6. Elimina il branch (opzionale)
```bash
git branch -d fix-slider
```

---

## 📸 Workflow per Aggiungere Nuove Immagini

### 1. Ottimizza le immagini PRIMA di aggiungerle

**Strumenti online gratuiti**:
- TinyPNG.com - comprime PNG e JPG
- Squoosh.app - ottimizzazione avanzata
- ImageOptim (Mac) - app desktop

**Obiettivo**: Max 500KB per immagine

### 2. Rinomina correttamente
```
❌ Male:
- IMG_20231215_143522.jpg
- foto mia vacanza estate.jpg

✅ Bene:
- hero-banner.jpg
- team-foto-2024.jpg
- prodotto-laptop.jpg
```

### 3. Aggiungi al progetto
```bash
# Copia le immagini nella cartella images/
cp ~/Downloads/nuova-foto.jpg ./images/

# Aggiungi a Git
git add images/nuova-foto.jpg
git commit -m "Aggiunta foto prodotto laptop"
git push
```

### 4. Usa nell'HTML
```html
<img src="images/nuova-foto.jpg" alt="Descrizione accessibile" loading="lazy">
```

**Nota**: `loading="lazy"` carica l'immagine solo quando è visibile (performance!)

---

## 🔀 Workflow con Collaboratori

### Se lavori in team

#### 1. Prima di iniziare a lavorare
```bash
# SEMPRE fai pull per avere l'ultima versione
git pull
```

#### 2. Durante il lavoro
```bash
# Commit frequenti con messaggi chiari
git add .
git commit -m "Modificato colore header"
```

#### 3. Prima di fare push
```bash
# Pull di nuovo per evitare conflitti
git pull

# Se ci sono conflitti, risolvili
# Poi push
git push
```

### In caso di conflitti

VS Code ti mostrerà i conflitti direttamente nel file:

```
<<<<<<< HEAD
<h1>Il Mio Titolo</h1>
=======
<h1>Titolo Modificato</h1>
>>>>>>> branch-altro
```

**Come risolvere**:
1. Scegli quale versione tenere
2. Rimuovi i marcatori `<<<<`, `====`, `>>>>`
3. Salva il file
4. Commit e push

---

## 🚀 Workflow per Pubblicazione su GitHub Pages

### Prima pubblicazione

```bash
# 1. Assicurati che tutto sia su GitHub
git push

# 2. Vai su GitHub.com
# 3. Repository > Settings > Pages
# 4. Source: main branch
# 5. Save

# 6. Aspetta 2-5 minuti
# 7. Il sito sarà su: https://username.github.io/mio-sito-web/
```

### Aggiornamento del sito pubblico

```bash
# Ogni volta che fai push, il sito si aggiorna automaticamente!
git add .
git commit -m "Aggiornato contenuto homepage"
git push

# Attendi 1-2 minuti e ricarica il sito pubblico
```

---

## 📊 Workflow per Testing

### Checklist prima di fare push

- [ ] Testato su Chrome
- [ ] Testato su Firefox
- [ ] Testato su Safari (se possibile)
- [ ] Testato su mobile (Device Toolbar)
- [ ] Nessun errore nella console (F12)
- [ ] Tutte le immagini si caricano
- [ ] Tutti i link funzionano
- [ ] Menu si apre e chiude correttamente
- [ ] Slider cambia automaticamente
- [ ] Design responsive funziona

### Strumenti di testing online

**Dopo la pubblicazione**:
1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Analizza performance
   
2. **W3C Validator**
   - https://validator.w3.org/
   - Valida HTML
   
3. **CSS Validator**
   - https://jigsaw.w3.org/css-validator/
   - Valida CSS

---

## 📝 Best Practices per i Commit

### Messaggi di commit efficaci

```bash
✅ BUONI:
git commit -m "Aggiunto form contatti con validazione"
git commit -m "Fix: Risolto bug menu su mobile"
git commit -m "Migliorata performance caricamento immagini"
git commit -m "Aggiornato testo sezione about"

❌ CATTIVI:
git commit -m "fix"
git commit -m "aggiornamento"
git commit -m "modifiche varie"
git commit -m "asdasd"
```

### Frequenza dei commit

**Troppo poco**:
```bash
# ❌ Un commit al giorno con tutto
git commit -m "Modifiche varie giornata"
```

**Giusto**:
```bash
# ✅ Commit logici e frequenti
git commit -m "Aggiunto header"
git commit -m "Aggiunto footer"
git commit -m "Collegati header e footer"
git commit -m "Fix margini header"
```

---

## 🔧 Workflow per Modifiche Urgenti

### Hotfix veloce

```bash
# 1. Salva tutto quello che stai facendo
git add .
git stash  # Mette da parte le modifiche temporaneamente

# 2. Fai il fix urgente
# ... modifica file ...

# 3. Commit e push del fix
git add .
git commit -m "Hotfix: Corretto link rotto homepage"
git push

# 4. Recupera il lavoro in corso
git stash pop
```

---

## 📈 Workflow per Versioning

### Quando rilasciare una versione

```bash
# Hai completato una milestone importante?
git tag -a v1.0 -m "Prima versione pubblica"
git push --tags

# Versioni successive
git tag -a v1.1 -m "Aggiunto modulo contatti"
git push --tags

# Versioni minori (bug fix)
git tag -a v1.1.1 -m "Fix bug form"
git push --tags
```

### Vedere tutte le versioni
```bash
git tag
```

---

## 💡 Tips Avanzati

### 1. Alias Git (scorciatoie)

Aggiungi al file `.gitconfig`:

```bash
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    pl = pull
    ps = push
```

Ora puoi usare:
```bash
git st    # invece di git status
git co main  # invece di git checkout main
```

### 2. VS Code Workspace

Salva la configurazione del progetto:
1. File > Save Workspace As
2. Crea `mio-sito.code-workspace`
3. Prossima volta: apri direttamente il workspace!

### 3. Task automatizzati

Crea `.vscode/tasks.json` per automatizzare operazioni:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Deploy",
      "type": "shell",
      "command": "git add . && git commit -m 'Auto deploy' && git push"
    }
  ]
}
```

Ora: `Ctrl+Shift+P` > "Run Task" > "Deploy"

---

## 🎯 Workflow Completo - Riepilogo

```
1. git pull              → Scarica ultime modifiche
2. Lavora sul codice     → Modifica, testa con Live Server
3. git add .            → Prepara file per commit
4. git commit -m "..."  → Salva modifiche localmente
5. git push             → Carica su GitHub
6. Verifica sito online → Controlla su GitHub Pages
```

**Ripeti questo ciclo continuamente durante lo sviluppo!**

---

🎉 **Seguendo questo workflow, il tuo progetto sarà sempre organizzato, tracciato e pronto per essere condiviso!**
