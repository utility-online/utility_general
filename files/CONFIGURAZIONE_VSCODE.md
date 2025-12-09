# 🔧 Configurazione Visual Studio Code - Guida Dettagliata

## 📦 Estensioni Essenziali

### 1. Live Server
**Cosa fa**: Crea un server locale per visualizzare il sito in tempo reale
**Come installare**:
1. Apri VS Code
2. Premi `Ctrl+Shift+X` (o clicca sull'icona Estensioni)
3. Cerca "Live Server"
4. Clicca "Install" sulla versione di Ritwick Dey

**Come usare**:
- Clicca destro su `index.html`
- Seleziona "Open with Live Server"
- Il browser si aprirà automaticamente su `http://127.0.0.1:5500`
- Ogni modifica al codice sarà visibile istantaneamente nel browser

### 2. Git Graph
**Cosa fa**: Visualizza la cronologia Git in modo grafico
**Come usare**:
- Clicca sull'icona "Git Graph" in basso nella barra di stato
- Vedrai tutti i commit rappresentati graficamente

### 3. GitLens
**Cosa fa**: Mostra chi ha modificato ogni riga di codice e quando
**Funzionalità utili**:
- Hover su una riga per vedere l'ultimo commit
- Confronta versioni diverse del codice
- Navigazione avanzata nella cronologia

### 4. HTML CSS Support
**Cosa fa**: Autocompletamento intelligente per HTML e CSS
**Benefici**:
- Suggerimenti mentre scrivi tag HTML
- Autocompletamento classi CSS
- Preview dei colori nel codice

### 5. Prettier - Code formatter
**Cosa fa**: Formatta automaticamente il codice
**Come configurare**:
1. Installa l'estensione
2. Vai in Settings (`Ctrl+,`)
3. Cerca "Format On Save"
4. Attiva la spunta

**Come usare**:
- Salva il file (`Ctrl+S`) e il codice sarà formattato automaticamente
- Oppure: `Shift+Alt+F` per formattare manualmente

### 6. Auto Rename Tag
**Cosa fa**: Rinomina automaticamente i tag HTML di chiusura
**Esempio**:
- Modifichi `<div>` in `<section>`
- Il tag di chiusura `</div>` diventa automaticamente `</section>`

### 7. JavaScript (ES6) code snippets
**Cosa fa**: Snippets veloci per JavaScript
**Esempi**:
- Digita `clg` + Tab = `console.log()`
- Digita `foreach` + Tab = `forEach()` completo

---

## ⚙️ Configurazioni Consigliate

### Impostazioni del file settings.json

Premi `Ctrl+Shift+P`, digita "settings json" e seleziona "Preferences: Open Settings (JSON)".

Aggiungi queste configurazioni:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "git.confirmSync": false,
  "git.autofetch": true
}
```

**Cosa fanno queste impostazioni**:
- `formatOnSave`: Formatta il codice quando salvi
- `tabSize`: Usa 2 spazi invece di 4
- `wordWrap`: Va a capo automaticamente
- `autoSave`: Salva automaticamente dopo 1 secondo
- `git.autofetch`: Aggiorna automaticamente lo stato Git

---

## 🎨 Temi Consigliati (Opzionale)

### Theme:
- **One Dark Pro** - tema scuro elegante
- **Material Theme** - tema moderno
- **Dracula Official** - tema con colori vivaci

### Icone:
- **Material Icon Theme** - icone colorate per i file
- **VSCode Icons** - alternative alle icone standard

---

## ⌨️ Scorciatoie da Tastiera Essenziali

### Generali:
- `Ctrl+S` - Salva file
- `Ctrl+P` - Apri file velocemente
- `Ctrl+Shift+P` - Command Palette
- `Ctrl+B` - Mostra/nascondi sidebar
- `Ctrl+ù` - Apri/chiudi terminale

### Editing:
- `Alt+↑/↓` - Sposta riga su/giù
- `Shift+Alt+↑/↓` - Duplica riga
- `Ctrl+D` - Seleziona prossima occorrenza
- `Ctrl+/` - Commenta/decommenta riga
- `Shift+Alt+F` - Formatta documento

### Navigazione:
- `Ctrl+G` - Vai alla riga
- `Ctrl+F` - Cerca nel file
- `Ctrl+H` - Cerca e sostituisci
- `Ctrl+Shift+F` - Cerca in tutti i file

### Git:
- `Ctrl+Shift+G` - Apri pannello Git
- `Ctrl+Enter` - Commit

---

## 🔌 Configurazione Git in VS Code

### 1. Verifica integrazione Git

1. Apri il pannello Source Control (`Ctrl+Shift+G`)
2. Dovresti vedere "Initialize Repository" se non è ancora inizializzato

### 2. Workflow Git in VS Code

**Primo commit**:
1. Pannello Source Control (`Ctrl+Shift+G`)
2. Clicca su "+"  accanto ai file per staging
3. Scrivi messaggio commit in alto
4. Clicca sulla spunta ✓

**Push su GitHub**:
1. Clicca sui tre puntini `...` nel pannello Git
2. Seleziona "Push"

**Pull da GitHub**:
1. Tre puntini `...` > "Pull"

### 3. Autenticazione GitHub

VS Code ti chiederà di autenticarti la prima volta:
1. Clicca "Sign in with GitHub"
2. Autorizza VS Code nel browser
3. Torna su VS Code

---

## 📝 Snippet Personalizzati (Opzionale)

### Creare snippet per HTML

1. `Ctrl+Shift+P` > "Configure User Snippets"
2. Seleziona "html.json"
3. Aggiungi:

```json
{
  "HTML Boilerplate": {
    "prefix": "html5",
    "body": [
      "<!DOCTYPE html>",
      "<html lang=\"it\">",
      "<head>",
      "  <meta charset=\"UTF-8\">",
      "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      "  <title>$1</title>",
      "  <link rel=\"stylesheet\" href=\"style.css\">",
      "</head>",
      "<body>",
      "  $2",
      "  <script src=\"script.js\"></script>",
      "</body>",
      "</html>"
    ],
    "description": "HTML5 boilerplate"
  }
}
```

Ora digita `html5` + Tab per creare uno scheletro HTML completo!

---

## 🐛 Debugging in VS Code

### Per JavaScript:

1. Aggiungi `debugger;` nel codice dove vuoi fermarti
2. Apri il file nel browser con DevTools aperti
3. Il codice si fermerà al debugger

### Console in VS Code:

- Usa l'estensione "Quokka.js" per vedere output JavaScript in tempo reale

---

## 📱 Testare il sito su mobile

### Con Live Server:

1. Trova l'indirizzo IP del tuo computer:
   - Windows: `ipconfig` nel cmd
   - Mac/Linux: `ifconfig` nel terminale
   
2. Sul telefono, collegato alla stessa rete WiFi:
   - Apri il browser
   - Vai su `http://TUO-IP:5500`
   - Esempio: `http://192.168.1.10:5500`

---

## 🔍 Strumenti di Debug Browser

### Chrome DevTools:

1. Apri il sito con Live Server
2. Premi `F12` o `Ctrl+Shift+I`
3. **Console**: vedi errori JavaScript
4. **Elements**: ispeziona e modifica HTML/CSS live
5. **Network**: vedi caricamento risorse
6. **Application**: vedi storage, cache

### Device Toolbar:

- In Chrome DevTools, premi `Ctrl+Shift+M`
- Simula diversi dispositivi mobile

---

## ✅ Checklist Setup Completo VS Code

- [ ] VS Code installato
- [ ] Estensione Live Server installata
- [ ] Estensione Git Graph installata
- [ ] Estensione GitLens installata
- [ ] Estensione Prettier installata
- [ ] Estensione HTML CSS Support installata
- [ ] Formato automatico su salvataggio attivato
- [ ] Git configurato e funzionante
- [ ] Autenticazione GitHub completata
- [ ] Tema e icone personalizzati (opzionale)
- [ ] Snippet personalizzati creati (opzionale)

---

## 💡 Tips & Tricks

1. **Multi-cursor**: `Alt+Click` per aggiungere più cursori
2. **Seleziona occorrenze**: `Ctrl+D` ripetutamente
3. **Duplica riga**: `Shift+Alt+↓`
4. **Commenta**: `Ctrl+/`
5. **Zen Mode**: `Ctrl+K Z` per concentrarti sul codice
6. **Side by side**: Trascina un file a lato per vederlo affiancato

---

## 🆘 Problemi Comuni

### Live Server non funziona:
- Verifica che sia installato
- Riavvia VS Code
- Controlla che non ci siano altri server sulla porta 5500

### Git non riconosce i cambiamenti:
- Controlla di essere nella cartella giusta
- Verifica con `git status` nel terminale

### Prettier non formatta:
- Verifica che sia impostato come formatter predefinito
- Controlla che "Format On Save" sia attivo

---

🎉 **Con questa configurazione sei pronto per sviluppare come un professionista!**
