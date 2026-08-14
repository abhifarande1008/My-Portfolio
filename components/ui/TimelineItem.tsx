import type { ExperienceEntry } from "@/lib/types";

const typeLabel: Record<ExperienceEntry["type"], string> = {
  experience: "Experience",
  training: "Training",
  certification: "Certification",
};

export function TimelineItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="relative grid gap-3 border-l border-white/10 pl-6 md:grid-cols-[8rem_1fr] md:gap-8">
      <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-accent" />
      <p className="font-mono text-[length:var(--text-mono)] text-text-secondary">{entry.period}</p>
      <div className="space-y-3">
        <p className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
          {typeLabel[entry.type]}
        </p>
        <h3 className="font-serif text-2xl">{entry.title}</h3>
        <p className="text-text-secondary">{entry.org}</p>
        <p className="max-w-2xl text-sm text-text-secondary">{entry.description}</p>
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 px-2 py-1 font-mono text-[length:var(--text-mono)] text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        {entry.certificateUrl && (
          <a
            href={entry.certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block font-mono text-[length:var(--text-mono)] text-accent"
          >
            View Certificate
          </a>
        )}
      </div>
    </article>
  );
}
