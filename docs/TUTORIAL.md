# KJV Words — Tutorial

Step-by-step guide from zero to a running app and your first topic.

---

## Part 1: Get the project and run it

### Step 1.1 — Open the project folder

Open a terminal and go to the project:

```bash
cd path/to/kjv-words
```

(Replace `path/to/kjv-words` with your actual folder path.)

### Step 1.2 — Install dependencies

```bash
npm install
```

Wait until it finishes. You only need to do this once (or after pulling new changes).

### Step 1.3 — Start the dev server

```bash
npm run dev
```

You should see something like:

```
▲ Next.js 15.x.x
- Local: http://localhost:3000
```

### Step 1.4 — Open in the browser

1. Open a browser.
2. Go to **http://localhost:3000**.
3. You should see the home page: “Rightly Dividing the Word of Truth” and a list of topics.

---

## Part 2: Use the app

### Step 2.1 — Browse topics

On the home page you’ll see 8 topic cards, for example:

- Creation & Redemption  
- Faith, Belief & Holy Spirit  
- Tradition, Law & True Worship  
- … and more  

Each card shows a short description and how many verses it has.

### Step 2.2 — Open a topic

1. Click **“Creation & Redemption”** (or any topic).
2. The URL will change to something like `/topic/creation-redemption`.
3. You’ll see the topic title, description, and a list of verse cards.

### Step 2.3 — Read a verse card

Each card has:

- **Theme** — e.g. “Creation through Him”
- **Korean** — e.g. “이 세상 모든 것은 그가 없이는 창조된 것이 없다”
- **Reference** — e.g. “John 1:3”
- **KJV text** — full verse in quotes

Use these to choose verses for different people and situations.

### Step 2.4 — Go back to all topics

Click **“All topics”** at the top of the topic page to return to the home page.

---

## Part 3: Try another topic (optional)

1. From the home page, click **“Daily Walk & Provision”**.
2. You’ll see verses about the narrow way, seeking the kingdom, thanksgiving, and walking in the Spirit.
3. Click **“All topics”** again to return.

---

## Part 4: Build for production (optional)

When you’re ready to deploy or run a production build:

```bash
npm run build
npm start
```

Then open **http://localhost:3000** again. The app will run in production mode.

---

## What you’ve learned

- You installed dependencies and started the dev server.
- You opened the app and saw the topic list.
- You opened a topic and read verses (theme, Korean, reference, KJV).
- You navigated back to the topic list.
- Optionally, you ran a production build.

---

## Next steps

- **Manual** — [MANUAL.md](MANUAL.md): full description of topics, pages, and project structure.
- **Quick start** — [QUICKSTART.md](QUICKSTART.md): minimal steps to run the app.
- **Promo copy** — [ADS.md](ADS.md): ready-made text for Facebook, Instagram, blogs, newsletter, and email.
