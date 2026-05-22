import { ru } from "@/content/ru";

type MetricsStripProps = {
  taskCount: number;
  subtaskCount: number;
  promptsCount: number;
  aiSubtasks: number;
};

export function MetricsStrip(props: MetricsStripProps) {
  const m = ru.metrics;
  const items = [
    { label: m.tasks.label, value: String(props.taskCount), hint: m.tasks.hint },
    {
      label: m.subtasks.label,
      value: String(props.subtaskCount),
      hint: m.subtasks.hint,
    },
    {
      label: m.prompts.label,
      value: String(props.promptsCount),
      hint: m.prompts.hint,
    },
    { label: m.ai.label, value: String(props.aiSubtasks), hint: m.ai.hint },
  ];

  return (
    <section id="overview" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.label} className="card-surface p-5">
            <p className="text-xs uppercase tracking-wider text-[var(--text-dim)]">
              {item.label}
            </p>
            <p className="mt-2 text-3xl font-semibold tabular-nums">{item.value}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{item.hint}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
