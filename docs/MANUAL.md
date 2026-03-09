# KJV Words — User Manual

Guide to using and understanding the KJV Words project.

---

## 1. What is KJV Words?

**KJV Words** is a web app that organizes King James Version (KJV) Bible verses by **topic**, each with a **Korean summary**. It is for:

- Discussing and spreading words of truth
- Choosing verses by **audience**, **situation**, and **level of Bible knowledge**
- Personal study and teaching

The app is built in the style of [kjv-faith-ai](https://github.com/henrynkoh/kjv-faith-ai) and centers on *rightly dividing the word of truth* (2 Timothy 2:15 KJV).

---

## 2. Topics (categories)

| Topic | What it covers |
|-------|----------------|
| **Creation & Redemption** | Creation through Him, light vs darkness, one blood, judgment, righteousness, the Lamb |
| **Faith, Belief & Holy Spirit** | Dying in sin, miracles for belief, sending of disciples, Comforter, work of God |
| **Tradition, Law & True Worship** | God’s will vs tradition, lips vs heart, vain worship, law and justification |
| **Religious Leaders & Hypocrisy** | Whited sepulchres, shutting the kingdom, plots, purpose of miracles |
| **Israel, Gentiles & Gospel** | Turning to the Gentiles, Jerusalem Council, apostles, God’s wisdom |
| **Study & Christian Living** | Rightly dividing, Bereans, persecution, maturity, Adam vs Christ |
| **Kingdom & New Creation** | Thy will be done, new heaven and earth, no temple, no more pain |
| **Daily Walk & Provision** | Narrow way, seek first the kingdom, thanksgiving, walk in the Spirit |

---

## 3. Using the app

### Home page (`/`)

- Title and 2 Timothy 2:15 quote
- List of topic cards: title, short description, verse count
- Click a card to open that topic

### Topic page (`/topic/[id]`)

- Topic title and description
- List of verses. Each card shows:
  - **Theme** (short title)
  - **Korean** summary
  - **Reference** (e.g. John 1:3)
  - **KJV text** in quotes

Use these cards to pick verses for different audiences and situations.

### Navigation

- **Header**: “KJV Words” links back to home
- **Topic page**: “All topics” link returns to home
- **Footer**: Short tagline and 2 Timothy 2:15

---

## 4. Running the project (developer)

### Commands

| Command | Purpose |
|--------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Run ESLint |

### Project layout

- `src/app/` — Next.js App Router (layout, pages)
- `src/components/` — React components (e.g. VerseCard)
- `src/lib/verses.ts` — All topic and verse data
- `docs/` — Manual, tutorial, quick start, ads

### Changing verses or topics

Edit **`src/lib/verses.ts`**:

- `topics` — array of `TopicCategory` (id, title, description, verses)
- Each verse: `id`, `theme`, `korean`, `ref`, `text`

Save; the dev server will reload.

---

## 5. Technical stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**
- **Geist** font, **lucide-react** icons

No database or API keys required; all content is in `verses.ts`.

---

## 6. License

MIT. See repository for details.

---

For a short setup guide, see [QUICKSTART.md](QUICKSTART.md).  
For a walkthrough from zero, see [TUTORIAL.md](TUTORIAL.md).
