"use client";

import Link from "next/link";
import type { TopicCategory } from "@/lib/verses";
import {
  BookOpen,
  ChevronRight,
  Github,
  Sparkles,
  Layers,
  Globe,
  Heart,
  Quote,
} from "lucide-react";

const NAV_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "topics", label: "Topics" },
  { id: "features", label: "Features" },
  { id: "verse-sample", label: "Verse sample" },
  { id: "footer", label: "Footer" },
];

const FEATURES = [
  {
    icon: Layers,
    title: "By topic",
    desc: "8 categories from Creation & Redemption to Daily Walk.",
  },
  {
    icon: Globe,
    title: "KJV + Korean",
    desc: "Each verse has a Korean summary for bilingual sharing.",
  },
  {
    icon: Sparkles,
    title: "Right verse, right moment",
    desc: "Pick by audience, situation, and level of Bible knowledge.",
  },
  {
    icon: Heart,
    title: "Free & simple",
    desc: "No sign-up. Use for study, teaching, or sharing truth.",
  },
];

const GITHUB_URL =
  typeof process !== "undefined" && process.env?.NEXT_PUBLIC_GITHUB_URL
    ? process.env.NEXT_PUBLIC_GITHUB_URL
    : "https://github.com";

interface Props {
  topics: TopicCategory[];
}

export default function LandingPage({ topics }: Props) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Left sidebar - scrollable nav */}
      <aside
        className="sticky top-0 h-screen w-64 shrink-0 border-r border-foreground/10 bg-background/95 backdrop-blur flex flex-col"
        aria-label="Page navigation"
      >
        <div className="p-4 border-b border-foreground/10">
          <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
            <BookOpen className="h-6 w-6 text-[var(--accent)]" />
            KJV Words
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-0.5">
            {NAV_SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-foreground/10 hover:text-foreground transition-colors"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content - page scrolls, sidebar stays sticky */}
      <div className="flex-1 min-w-0">
        {/* Hero */}
        <section
          id="hero"
          className="relative px-8 py-20 sm:py-28 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-from)]/15 via-transparent to-[var(--gradient-to)]/15 pointer-events-none" />
          <div className="relative max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Rightly Dividing the{" "}
              <span className="text-[var(--accent)]">Word of Truth</span>
            </h1>
            <p className="mt-4 text-xl text-foreground/80 italic">
              &ldquo;Study to shew thyself approved unto God, a workman that
              needeth not to be ashamed, rightly dividing the word of truth.&rdquo;
            </p>
            <p className="mt-2 text-sm text-foreground/60">— 2 Timothy 2:15 KJV</p>
            <p className="mt-6 text-foreground/80 max-w-2xl">
              KJV verses by topic with Korean summaries. Share the right verse for
              the right person and moment — by audience, situation, and level of
              Bible knowledge.
            </p>
            <Link
              href="#topics"
              className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-xl bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Browse topics
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* About */}
        <section id="about" className="px-8 py-16 bg-foreground/[0.03]">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <BookOpen className="h-7 w-7 text-[var(--accent)]" />
              About KJV Words
            </h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              A simple, free resource that organizes King James Version (KJV)
              Bible verses by topic. Each verse includes a Korean summary so you
              can discuss and spread words of truth in a way that fits your
              audience, situation, and their level of Bible knowledge.
            </p>
          </div>
        </section>

        {/* Topics */}
        <section id="topics" className="px-8 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Topics &amp; Categories
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl">
            Click any topic to see all verses with KJV text and Korean summaries.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {topics.map((topic, i) => {
              const colors = [
                "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
                "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
                "from-violet-500/20 to-purple-500/20 border-violet-500/30",
                "from-amber-500/20 to-orange-500/20 border-amber-500/30",
                "from-rose-500/20 to-pink-500/20 border-rose-500/30",
                "from-cyan-500/20 to-sky-500/20 border-cyan-500/30",
                "from-lime-500/20 to-green-500/20 border-lime-500/30",
                "from-fuchsia-500/20 to-purple-500/20 border-fuchsia-500/30",
              ];
              const style = colors[i % colors.length];
              return (
                <Link
                  key={topic.id}
                  href={`/topic/${topic.id}`}
                  className={`group block rounded-2xl border bg-gradient-to-br ${style} p-5 transition-all hover:scale-[1.02] hover:shadow-lg`}
                >
                  <h3 className="font-semibold text-foreground group-hover:underline">
                    {topic.title}
                  </h3>
                  {topic.description && (
                    <p className="mt-1 text-sm text-foreground/70 line-clamp-2">
                      {topic.description}
                    </p>
                  )}
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-foreground/60">
                    {topic.verses.length} verse{topic.verses.length !== 1 ? "s" : ""}
                    <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="px-8 py-16 bg-foreground/[0.03]">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Features &amp; Functions
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 rounded-xl border border-foreground/10 bg-background p-5 hover:border-foreground/20 transition-colors"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verse sample */}
        <section id="verse-sample" className="px-8 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Quote className="h-7 w-7 text-[var(--accent)]" />
            Verse sample
          </h2>
          <p className="text-foreground/70 mb-6">
            Each topic contains verses like this — theme, Korean summary,
            reference, and full KJV text.
          </p>
          <div className="max-w-2xl rounded-2xl border-2 border-[var(--accent)]/30 bg-[var(--accent-soft)]/30 p-6">
            <p className="text-sm font-medium text-foreground/80">
              Creation through Him
            </p>
            <p className="mt-1 text-foreground/70 text-sm" lang="ko">
              이 세상 모든 것은 그가 없이는 창조된 것이 없다
            </p>
            <p className="mt-2 text-xs font-mono text-foreground/60">
              John 1:3
            </p>
            <blockquote className="mt-3 pl-4 border-l-2 border-[var(--accent)] text-foreground italic">
              &ldquo;All things were made by him; and without him was not any
              thing made that was made.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Footer */}
        <section id="footer" className="px-8 py-12 border-t border-foreground/10">
          <div className="max-w-3xl text-sm text-foreground/70">
            <p>&copy; {new Date().getFullYear()} KJV Words. Built for spreading words of truth.</p>
            <p className="mt-1">KJV Bible &middot; 2 Timothy 2:15</p>
          </div>
        </section>
      </div>

      {/* Bottom-right: GitHub link */}
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2.5 text-sm font-medium shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Open on GitHub"
      >
        <Github className="h-5 w-5" />
        GitHub
      </a>
    </div>
  );
}
