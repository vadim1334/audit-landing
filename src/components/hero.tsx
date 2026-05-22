import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import { ru } from "@/content/ru";

type HeroProps = {
  taskCount: number;
  subtaskCount: number;
};

export function Hero({ taskCount, subtaskCount }: HeroProps) {
  const t = ru.hero;
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[var(--glow)]" />

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="mx-auto mb-4 max-w-2xl rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-xs leading-snug text-[var(--text-muted)] sm:max-w-3xl sm:text-[13px]">
          {t.badge}
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.1]">
          {t.title}
          <span className="block text-[var(--text-muted)]">{t.subtitle}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
          {t.introBefore} {taskCount} {t.introTasks}, {subtaskCount}{" "}
          {t.introSubtasks}.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#charts"
            className="rounded-lg border border-[var(--border-strong)] bg-transparent px-5 py-2.5 text-sm transition hover:bg-[var(--accent-soft)]"
          >
            {t.ctaCharts}
          </Link>
          <Link
            href="#tasks"
            className="rounded-lg border border-[var(--border-strong)] px-5 py-2.5 text-sm transition hover:bg-[var(--accent-soft)]"
          >
            {t.ctaTasks}
          </Link>
          <Link
            href={t.excelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/90 bg-white px-5 py-2.5 text-sm font-medium text-[#0b0b0c] transition hover:bg-white/90"
          >
            <Download className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
            {t.ctaExcel}
          </Link>
        </div>
        <Link
          href="#overview"
          className="mt-12 inline-flex flex-col items-center gap-1 text-xs text-[var(--text-dim)] transition hover:text-[var(--text-muted)]"
        >
          <span>{t.scroll}</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
