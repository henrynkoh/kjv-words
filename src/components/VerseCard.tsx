import type { VerseEntry } from "@/lib/verses";

interface Props {
  verse: VerseEntry;
}

export default function VerseCard({ verse }: Props) {
  return (
    <article className="rounded-lg border border-foreground/15 bg-background/50 p-4 sm:p-5 space-y-3">
      <p className="text-sm font-medium text-foreground/80">{verse.theme}</p>
      <p className="text-foreground/70 text-sm" lang="ko">
        {verse.korean}
      </p>
      <p className="text-xs font-mono text-foreground/60">{verse.ref}</p>
      <blockquote className="text-foreground border-l-2 border-foreground/20 pl-4 italic">
        &ldquo;{verse.text}&rdquo;
      </blockquote>
    </article>
  );
}
