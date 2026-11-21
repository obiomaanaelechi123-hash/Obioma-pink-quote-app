# OBIOMA — Daily Quotes and Inspiration

## Install as an app

Open OBIOMA in a browser and use the **Install app** button. Where the browser does not show an install prompt:

Use **Copy install link** to copy the app address and send it to another phone or device.

- On iPhone or iPad: open in Safari, tap **Share**, then **Add to Home Screen**.
- On Android: open the browser menu and choose **Install app** or **Add to Home screen**.
- On desktop: use the install icon in the browser address bar or the browser menu.

The app can also work offline after it has been opened once.

A calm, mobile-friendly quotes app built with plain HTML, CSS, and JavaScript. Browse 54 original starter quotes plus 1,000,000 generated quote combinations across 12 moods, watch licensed interview clips, get instant offline reflections, write private notes, save favorites in your browser, and share quotes with friends.

## Preview

Open `index.html` in a browser, or start a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000). Keeping the files on a local server also enables the browser's native share and clipboard features where supported.

## Publish with GitHub Pages

Push this project to GitHub, then open the repository's **Settings → Pages**. Select **Deploy from a branch**, choose the `main` branch and `/ (root)` folder, and save. GitHub Pages will publish `index.html` and its accompanying assets.

## Features

- Daily inspiration and a button to discover another quote.
- Favorites stored locally in the browser, with a dedicated favorites page.
- Quote search and Success, Love, Life, Happiness, Faith, and Motivation categories.
- Mood filters for calm, happy, hopeful, grateful, confident, motivated, loving, lonely, sad, anxious, tired, and reflective.
- More than one million quotes generated offline as you browse, without downloading or storing a million records. Search and reveal them a page at a time.
- Offline animated lessons with a reflection question for each quote. These are illustrated animations made by the app, not filmed videos.
- Real interview clips matched to quote categories: Malala Yousafzai on equality (Success, Motivation, and Faith) and Nelson Mandela on Ubuntu (Life, Love, and Happiness). Stream them online or save each clip on this device for offline playback. The same topic-matched clips serve the generated quotes; the app does not download one separate video for every generated quote.
- A story-notes section and source/license credits accompany each video. The included clips are redistributed under their Creative Commons licenses.
- An instant, offline question guide that matches common themes to thoughtful prompts. It is not a live AI service, does not send or save questions, and is not professional advice.
- Answers to reflection questions are saved in local browser storage on this device. They are not uploaded or synchronized and are not encrypted.
- "New thought" suggestions learn which moods you tend to save and favor those moods.
- Native sharing when available, with a clipboard fallback.
- Responsive layouts for phones, tablets, and desktop screens.

## Growing the offline library

The app includes 54 hand-written starter quotes and can compose one million additional unique quote variations from the phrase lists in `app.js`. These generated variations appear in pages of 24, so they do not all need to be kept in memory at once. Add more quote entries to the `quotes` array or extend the phrase lists to customize the library. Every quote is assigned a mood and gets that mood's offline animated lesson and reflection question. Interview video files are in `media/`; they are not added to the initial service-worker cache. Use **Save video for offline** in the story player to store a clip on the device.

## Video credits and licenses

- “Malala: Feminism Is Not Complicated” — World Economic Forum, via Wikimedia Commons, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). [Source file](https://commons.wikimedia.org/wiki/File:Malala-_Feminism_Is_Not_Complicated.webm). Included unchanged.
- “Experience Ubuntu” — Canonical Ltd., via Wikimedia Commons, [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/). [Source file](https://commons.wikimedia.org/wiki/File:Experience_ubuntu.ogv). Included unchanged.
