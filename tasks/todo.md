# KJV Words – Task Log

## Goal
New Next.js project to fully execute: KJV Bible verses by topic/category with Korean summaries, in the format and style of [kjv-faith-ai](https://github.com/henrynkoh/kjv-faith-ai), for discussing and spreading words of truth depending on audiences, situations, and level of Bible knowledge.

## Completed

1. **Scaffold Next.js project**
   - package.json (Next 15, React 19, Tailwind 4, lucide-react)
   - next.config.ts, tsconfig.json, postcss.config.mjs, .gitignore, eslint.config.mjs
   - src/app/globals.css (same theme as kjv-faith-ai: --background, --foreground, dark mode)

2. **Verse data (src/lib/verses.ts)**
   - All verses from the three Gemini lists grouped into 7 topics:
     - Creation & Redemption
     - Faith, Belief & Holy Spirit
     - Tradition, Law & True Worship
     - Religious Leaders & Hypocrisy
     - Israel, Gentiles & Gospel
     - Study & Christian Living
     - Kingdom & New Creation
     - Daily Walk & Provision
   - Each entry: id, theme, korean, ref, text. Helpers: getTopic, getAllVerses, getVerseById.

3. **Layout and home**
   - Layout: Geist fonts, header with BookOpen + “KJV Words”, footer with 2 Timothy 2:15
   - Home: “Rightly Dividing the Word of Truth”, 2 Timothy 2:15 quote, list of topic cards with description and verse count

4. **Topic pages and verse cards**
   - Dynamic route /topic/[id] with getTopic(id), 404 when missing
   - VerseCard: theme, Korean, ref, KJV quote

5. **tasks/todo.md and README**
   - This file and README with run instructions and project purpose.

## Review
- Style matches kjv-faith-ai: Geist, soft background, BookOpen, “Rightly dividing” / 2 Timothy 2:15.
- No Supabase/OpenAI; static data only. Optional later: filters by audience/situation/level (can add as tags to verses and filter UI).
