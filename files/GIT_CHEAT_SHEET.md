# 📚 Git Cheat Sheet - Comandi Essenziali

## 🚀 Setup Iniziale

```bash
# Configura nome utente
git config --global user.name "Il Tuo Nome"

# Configura email
git config --global user.email "tua@email.com"

# Verifica configurazione
git config --list

# Inizializza repository
git init

# Aggiungi repository remoto
git remote add origin https://github.com/username/repo.git

# Verifica repository remoto
git remote -v
```

---

## 📁 Gestione File

```bash
# Aggiungi tutti i file
git add .

# Aggiungi file specifico
git add nome-file.html

# Aggiungi solo file modificati (non nuovi)
git add -u

# Aggiungi solo file nella cartella specifica
git add cartella/

# Rimuovi file dallo staging (annulla add)
git reset nome-file.html

# Rimuovi tutti i file dallo staging
git reset
```

---

## 💾 Commit

```bash
# Commit con messaggio
git commit -m "Descrizione modifiche"

# Commit di tutti i file modificati direttamente
git commit -am "Messaggio"

# Modifica ultimo commit (messaggio o file)
git commit --amend -m "Nuovo messaggio"

# Commit vuoto (senza modifiche)
git commit --allow-empty -m "Trigger deploy"
```

---

## 📊 Controllo Stato

```bash
# Vedi stato repository
git status

# Vedi stato in forma breve
git status -s

# Vedi cronologia commit
git log

# Cronologia compatta (una riga per commit)
git log --oneline

# Cronologia grafica
git log --graph --oneline --all

# Vedi ultime 5 commit
git log -5

# Vedi modifiche non ancora committate
git diff

# Vedi modifiche in staging
git diff --staged
```

---

## 🔄 Sincronizzazione con GitHub

```bash
# Scarica modifiche da GitHub
git pull

# Carica modifiche su GitHub
git push

# Prima volta: collega branch locale a remoto
git push -u origin main

# Forza push (ATTENZIONE: sovrascrive tutto)
git push --force  # Usare solo se sicuri!

# Scarica info da GitHub senza modificare file locali
git fetch
```

---

## 🌿 Branch (Ramificazioni)

```bash
# Vedi tutti i branch
git branch

# Crea nuovo branch
git branch nome-branch

# Passa a un branch
git checkout nome-branch

# Crea e passa a nuovo branch
git checkout -b nuovo-branch

# Torna al branch main
git checkout main

# Unisci branch al branch corrente
git merge nome-branch

# Elimina branch locale
git branch -d nome-branch

# Elimina branch remoto
git push origin --delete nome-branch

# Rinomina branch corrente
git branch -m nuovo-nome
```

---

## ⏮️ Annullare Modifiche

```bash
# Annulla modifiche a un file (non ancora in staging)
git checkout -- nome-file.html

# Annulla tutte le modifiche non committate
git checkout -- .

# Rimuovi file non tracciati
git clean -f

# Rimuovi anche directory non tracciate
git clean -fd

# Annulla ultimo commit (mantieni modifiche)
git reset --soft HEAD~1

# Annulla ultimo commit (elimina modifiche)
git reset --hard HEAD~1

# Annulla ultimi 3 commit
git reset --hard HEAD~3

# Torna a un commit specifico
git reset --hard abc1234  # usa hash del commit
```

---

## 💾 Stash (Salvare Lavoro Temporaneo)

```bash
# Salva modifiche correnti temporaneamente
git stash

# Salva con un messaggio
git stash save "Lavoro in corso su feature X"

# Vedi lista stash salvati
git stash list

# Recupera ultimo stash
git stash pop

# Recupera stash specifico
git stash apply stash@{0}

# Elimina ultimo stash
git stash drop

# Elimina tutti gli stash
git stash clear
```

---

## 🏷️ Tag (Versioni)

```bash
# Crea tag
git tag v1.0

# Crea tag con messaggio
git tag -a v1.0 -m "Prima versione"

# Vedi tutti i tag
git tag

# Vedi dettagli tag
git show v1.0

# Carica tag su GitHub
git push origin v1.0

# Carica tutti i tag
git push --tags

# Elimina tag locale
git tag -d v1.0

# Elimina tag remoto
git push origin --delete v1.0
```

---

## 🔍 Ricerca

```bash
# Cerca testo nei file committati
git grep "testo da cercare"

# Cerca in branch specifico
git grep "testo" nome-branch

# Cerca chi ha modificato una riga
git blame nome-file.html

# Cerca commit che contiene parola
git log --grep="parola"

# Cerca commit di un autore
git log --author="Nome"
```

---

## 📝 File .gitignore

```bash
# Crea file .gitignore
touch .gitignore

# Aggiungi pattern da ignorare:
echo "node_modules/" >> .gitignore
echo "*.log" >> .gitignore
echo ".DS_Store" >> .gitignore

# Aggiorna Git dopo aver modificato .gitignore
git rm -r --cached .
git add .
git commit -m "Aggiornato .gitignore"
```

### Esempi di pattern .gitignore:

```
# File di sistema
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/

# Logs
*.log
logs/

# Dipendenze
node_modules/

# Build
dist/
build/

# File temporanei
*.tmp
*.swp
*~
```

---

## 🆘 Risoluzione Problemi

```bash
# Hai committato sulla branch sbagliata?
git checkout branch-corretta
git cherry-pick abc1234  # hash del commit da copiare

# Conflitti durante merge?
# 1. Apri file in conflitto
# 2. Risolvi manualmente
# 3. Poi:
git add .
git commit -m "Risolto conflitto"

# Hai pushato dati sensibili per errore?
# 1. Rimuovi dal repository
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch file-sensibile" \
  --prune-empty --tag-name-filter cat -- --all

# 2. Forza push
git push --force

# Repository corrotto?
git fsck
git gc
```

---

## 🔐 Autenticazione GitHub

### Token di Accesso Personale (da agosto 2021)

```bash
# 1. Vai su GitHub.com
# 2. Settings > Developer settings > Personal access tokens
# 3. Generate new token (classic)
# 4. Seleziona scopes: repo, workflow
# 5. Copia il token generato
# 6. Quando Git chiede password, usa il TOKEN

# Salva credenziali (evita di inserirle ogni volta)
git config --global credential.helper store

# O per Mac:
git config --global credential.helper osxkeychain

# O per Windows:
git config --global credential.helper wincred
```

---

## 📈 Statistiche e Info

```bash
# Vedi numero di commit per autore
git shortlog -sn

# Vedi statistiche modifiche
git log --stat

# Vedi chi ha contribuito di più
git log --format='%aN' | sort | uniq -c | sort -rn

# Vedi dimensione repository
git count-objects -vH

# Vedi file più modificati
git log --pretty=format: --name-only | sort | uniq -c | sort -rg | head -10
```

---

## 🌐 Clonare Repository Esistente

```bash
# Clona repository da GitHub
git clone https://github.com/username/repo.git

# Clona in cartella specifica
git clone https://github.com/username/repo.git mia-cartella

# Clona solo ultimo commit (più veloce)
git clone --depth 1 https://github.com/username/repo.git
```

---

## 🔄 Aggiornare Fork

```bash
# Aggiungi repository originale come upstream
git remote add upstream https://github.com/originale/repo.git

# Scarica modifiche da upstream
git fetch upstream

# Unisci con il tuo branch
git merge upstream/main

# Carica sul tuo fork
git push origin main
```

---

## ⚡ Comandi Avanzati

```bash
# Vedi contenuto file in commit specifico
git show abc1234:nome-file.html

# Confronta due branch
git diff branch1..branch2

# Crea patch da commit
git format-patch -1 abc1234

# Applica patch
git apply nome-patch.patch

# Interattivo rebase (riordina/modifica commit)
git rebase -i HEAD~3

# Salva modifiche in patch temporaneo
git diff > mie-modifiche.patch

# Applica patch salvato
git apply mie-modifiche.patch
```

---

## 📋 Alias Utili

Aggiungi questi al `.gitconfig`:

```bash
[alias]
    st = status -s
    co = checkout
    br = branch
    ci = commit
    last = log -1 HEAD
    unstage = reset HEAD --
    visual = log --graph --oneline --all
    amend = commit --amend --no-edit
```

Uso:
```bash
git st       # invece di git status -s
git visual   # log grafico
git last     # vedi ultimo commit
```

---

## 🎯 Workflow Tipico Riepilogo

```bash
# Inizio giornata
git pull

# Lavora sul codice...

# Fine modifica
git status           # Vedi cosa hai cambiato
git add .           # Aggiungi tutto
git commit -m "Messaggio"  # Commit
git push            # Carica su GitHub

# Oppure tutto in uno (solo file già tracciati):
git commit -am "Messaggio" && git push
```

---

## 💡 Tips Finali

1. **Commit spesso**: Piccoli commit sono meglio di uno grande
2. **Messaggi chiari**: "Fix menu" è meglio di "fix"
3. **Pull prima di push**: Evita conflitti
4. **Branch per feature**: Una branch per ogni nuova funzionalità
5. **Non committare file sensibili**: Usa .gitignore
6. **Backup regolari**: Git non sostituisce i backup

---

## 📱 Git su Mobile

### Working Copy (iOS):
- App completa per Git
- Commit, push, pull da iPhone/iPad

### Termux (Android):
- Terminale Linux su Android
- Installa git: `pkg install git`

---

## 🔗 Risorse Utili

- **GitHub Docs**: https://docs.github.com/
- **Git Book**: https://git-scm.com/book/it/v2
- **Git Visualizer**: https://git-school.github.io/visualizing-git/
- **Oh Shit, Git!?!**: https://ohshitgit.com/ (risolvi errori comuni)

---

🎉 **Salva questo cheat sheet e consultalo ogni volta che ne hai bisogno!**
