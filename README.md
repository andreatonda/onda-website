# Bob — sito statico

Sito statico per [Bob](https://bob.meetonda.com), marketplace italiano che mette in contatto privati e professionisti locali.

## Stack

- HTML / CSS / JS statico (zero build step richiesto).
- Hostato su GitHub Pages con dominio custom `bob.meetonda.com`.

## Struttura

```
/
├── index.html                  Home
├── come-funziona.html
├── professionisti.html
├── faq.html
├── contatti.html
├── 404.html
├── servizi/                    pagine categoria
│   ├── dj-per-eventi.html
│   ├── fotografi.html
│   ├── ripetizioni.html
│   └── supporto-excel.html
├── citta/                      pagine città
│   ├── milano.html
│   ├── roma.html
│   └── torino.html
├── assets/
│   ├── styles.css
│   └── main.js
├── robots.txt
├── sitemap.xml
├── CNAME                       bob.meetonda.com
├── .nojekyll                   disabilita Jekyll su Pages
└── .github/workflows/pages.yml deploy automatico
```

## Sviluppo locale

Apri `index.html` nel browser, oppure servi la cartella con un piccolo server:

```bash
python3 -m http.server 8000
# poi http://localhost:8000
```

Tutti i link sono relativi, quindi il sito funziona anche in locale.

## Deploy

Il deploy è automatico su `main`:

1. Push o merge su `main`.
2. Il workflow `.github/workflows/pages.yml` carica tutta la cartella su GitHub Pages.
3. Il file `CNAME` punta GitHub Pages a `bob.meetonda.com`.

Per il primo deploy, in **Settings → Pages**:

- **Source**: GitHub Actions.
- **Custom domain**: `bob.meetonda.com` (già impostato via `CNAME`).
- **Enforce HTTPS**: attivo.

DNS sul dominio `meetonda.com`:

```
CNAME    bob    andreatonda.github.io.
```

## Aggiungere una nuova pagina

1. Crea il file HTML usando come riferimento una pagina esistente (intestazione + footer condivisi).
2. Aggiungi titolo + meta description unici.
3. Aggiungi la nuova URL a `sitemap.xml`.
4. Linka la pagina dalla home, dal footer e dalle pagine correlate (categoria ↔ città).
