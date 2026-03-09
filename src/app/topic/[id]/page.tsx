import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic } from "@/lib/verses";
import VerseCard from "@/components/VerseCard";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function TopicPage({ params }: Props) {
  const { id } = await params;
  const topic = getTopic(id);
  if (!topic) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        All topics
      </Link>
      <header>
        <h1 className="text-2xl font-bold text-foreground">{topic.title}</h1>
        {topic.description && (
          <p className="text-foreground/80 mt-1">{topic.description}</p>
        )}
        <p className="text-sm text-foreground/60 mt-2">
          {topic.verses.length} verse{topic.verses.length !== 1 ? "s" : ""}
        </p>
      </header>
      <ul className="space-y-4">
        {topic.verses.map((verse) => (
          <li key={verse.id}>
            <VerseCard verse={verse} />
          </li>
        ))}
      </ul>
    </div>
  );
}
