# 🚀 Guida Rapida - Setup in 5 minuti

## Passo 1: Installa i requisiti
- Visual Studio Code: https://code.visualstudio.com/
- Git: https://git-scm.com/
- Account GitHub: https://github.com/

## Passo 2: Configura Git
```bash
git config --global user.name "Il Tuo Nome"
git config --global user.email "tuaemail@example.com"
```

## Passo 3: Crea il repository su GitHub
1. Vai su GitHub.com
2. Clicca "New repository"
3. Nome: `mio-sito-web`
4. Clicca "Create repository"
5. Copia l'URL (es: `https://github.com/username/mio-sito-web.git`)

## Passo 4: Prepara il progetto
1. Crea una cartella sul tuo PC (es: `C:\Progetti\mio-sito-web`)
2. Copia dentro tutti i file che hai scaricato
3. Nella cartella `images/` metti le tue 4 foto e rinominale:
   - foto1.jpg
   - foto2.jpg
   - foto3.jpg
   - foto4.jpg

## Passo 5: Apri in VS Code
1. Apri VS Code
2. File > Apri Cartella > seleziona la tua cartella progetto

## Passo 6: Pubblica su GitHub
Apri il terminale in VS Code (Ctrl+ù) e digita:

```bash
git init
git add .
git commit -m "Prima versione"
git remote add origin https://github.com/TUO-USERNAME/mio-sito-web.git
git branch -M main
git push -u origin main
```

## Passo 7: Testa il sito
1. Installa l'estensione "Live Server" in VS Code
2. Clicca destro su `index.html`
3. Seleziona "Open with Live Server"

## 🎉 Fatto!

### Comandi futuri (quando modifichi il codice):
```bash
git add .
git commit -m "Descrizione modifiche"
git push
```

### Pubblicare online GRATIS con GitHub Pages:
1. Vai sul tuo repository GitHub
2. Settings > Pages
3. Source: main branch
4. Save
5. Il tuo sito sarà su: `https://username.github.io/mio-sito-web/`

---

Per la guida completa, leggi il file README.md
