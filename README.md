# Aserto Trzesn - MVP

Maly serwis informacyjny oparty o Next.js (React), bez backendu i bez bazy danych.

## Dlaczego Next.js + Vercel

- Prosty darmowy hosting z auto-deploy z GitHub.
- File-based routing i gotowe `sitemap`/`robots`/`404`.
- SEO i OpenGraph wbudowane przez `metadata`.
- Brak potrzeby utrzymywania API: dane sa z embedow/linkow lub z plikow statycznych.

## Struktura

- `app/` - routing i strony
- `components/` - sekcje UI
- `data/` - JSON (kadra)
- `content/` - Markdown (historia)
- `lib/` - helpery odczytu i renderowania Markdown

## Konfiguracja

- `NEXT_PUBLIC_SITE_URL=https://twoj-adres`
- motyw: bialy + czerwone akcenty
- aktualnosci: staly podglad z Facebook Page Plugin + przycisk "Wiecej na Facebooku"
- liga: iframe oficjalnego widoku LNP

## Lokalnie

```bash
npm install
npm run dev
```

Mozesz ustawic zmienne startowe przez `.env.example`.

## Deploy na Vercel (free) z GitHub

1. Wrzuc repozytorium na GitHub.
2. Zaloguj sie do https://vercel.com i wybierz `Add New -> Project`.
3. Wskaz repo `aserto-trzesn-site`.
4. Framework powinien wykryc sie automatycznie jako Next.js.
5. Dodaj zmienne:
   - `NEXT_PUBLIC_SITE_URL`
6. Kliknij `Deploy`.
7. Po deployu podlacz domene lub subdomena vercel.app.

## Notatka o danych ligowych

W MVP dziala osadzenie iframe oficjalnego widoku LNP. Jesli osadzanie zostanie zablokowane przez polityki przegladarki lub serwisu, pozostaje link bezposredni do strony LNP.
