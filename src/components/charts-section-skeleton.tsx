import { ru } from "@/content/ru";

/**Плейсхолдер #charts пока блок Recharts загружается только на клиенте (без SSR).*/
export function ChartsSectionSkeleton() {
  const c = ru.charts;
  return (
    <section
      id="charts"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      aria-busy="true"
      aria-label={c.title}
    >
      <div className="mb-8 max-w-2xl animate-pulse">
        <div className="h-4 w-32 rounded bg-[var(--border)]" />
        <div className="mt-4 h-8 max-w-lg rounded-lg bg-[var(--border-strong)]/40" />
        <div className="mt-2 h-12 max-w-xl rounded-lg bg-[var(--border-strong)]/20" />
      </div>
      <div className="grid min-w-0 gap-4 lg:grid-cols-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="card-surface h-[392px] min-w-0 animate-pulse rounded-[12px] bg-[var(--bg-card)]"
          />
        ))}
      </div>
    </section>
  );
}
