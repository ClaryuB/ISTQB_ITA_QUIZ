# 📚 ISTQB Quiz App

Una web app realizzata con **Expo + React Native Web**, disponibile online su Vercel.

---

## 🇮🇹 Istruzioni in Italiano

### 🔹 1. Clonare il progetto
```bash
git clone https://github.com/ClaryuB/ISTQB_ITA_QUIZ.git
cd ISTQB_ITA_QUIZ
```

### 🔹 2. Installare le dipendenze
Con **npm**:
```bash
npm install
```
oppure con **Yarn**:
```bash
yarn install
```

### 🔹 3. Avviare il progetto in locale
- **Versione web**
```bash
npx expo start --web
```
- **Versione mobile (su device o emulatore)**
```bash
npx expo start
```

### 🔹 4. Creare la build per il web
```bash
npx expo export
```
I file pronti per la produzione saranno generati nella cartella **`dist/`**.

### 🔹 5. Deploy su Vercel
1. Collega il repository a [Vercel](https://vercel.com).
2. Imposta i parametri:
   - **Build Command** → `npx expo export`
   - **Output Directory** → `dist`
3. Aggiungi un file `vercel.json` nella root del progetto con questo contenuto:
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```
4. Fai **Deploy** dalla dashboard di Vercel.

### 🔹 6. App online
👉 La versione pubblica è disponibile qui:
[https://istqb-ita-quiz.vercel.app](https://istqb-ita-quiz.vercel.app)

---

## 🇬🇧 Instructions in English

### 🔹 1. Clone the project
```bash
git clone https://github.com/ClaryuB/ISTQB_ITA_QUIZ.git
cd ISTQB_ITA_QUIZ
```

### 🔹 2. Install dependencies
With **npm**:
```bash
npm install
```
or with **Yarn**:
```bash
yarn install
```

### 🔹 3. Run locally
- **Web version**
```bash
npx expo start --web
```
- **Mobile version (on device or emulator)**
```bash
npx expo start
```

### 🔹 4. Build for the web
```bash
npx expo export
```
Production-ready files will be generated inside the **`dist/`** folder.

### 🔹 5. Deploy on Vercel
1. Link the repository to [Vercel](https://vercel.com).
2. Configure the settings:
   - **Build Command** → `npx expo export`
   - **Output Directory** → `dist`
3. Add a `vercel.json` file at the root of the project with this content:
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```
4. Deploy from the Vercel dashboard.

### 🔹 6. Online app
👉 The public version is available here:
[https://istqb-ita-quiz.vercel.app](https://istqb-ita-quiz.vercel.app)

