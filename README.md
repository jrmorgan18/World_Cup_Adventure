# World Cup Adventure

A tablet-first, dependency-free World Cup learning game for young soccer fans.

## Included activities

- Team USA player cards with real player photos loaded from Wikipedia/Wikimedia
- Tap-to-place Team USA formation challenge
- Three leveled World Cup history challenges with badges
- 48-team World Cup explorer plus Italy as a bonus non-qualified country, with flags, country outlines, foods, facts, and passport quizzes
- Team USA quiz, soccer-smarts quiz, and penalty-kick game
- Team USA chant coach with real supporter-video embeds, including American Outlaws chant-page clips, plus clap/drum practice fallback

## Run locally

Open `index.html` directly, or serve the folder:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages

1. Push these files to a GitHub repository.
2. In **Settings → Pages**, select **Deploy from a branch**.
3. Select the main branch and `/ (root)`.

Progress is stored only in the browser with `localStorage`.

## Content notes

- Match dates and opponents reflect the 2026 Group D schedule as of June 11, 2026.
- The Team USA player guide focuses on recognizable core players; tournament rosters and availability can change.
- The illustrated hero was generated for this project and does not use official team marks.
- Flags load from FlagCDN, country outlines from the Mapsicon project, and player/food photos from Wikipedia/Wikimedia.
- External images require an internet connection.
- Chant clips are embedded from YouTube/no-cookie supporter videos, with several sourced from the American Outlaws chants page; no recordings are downloaded or rehosted.
