"use client";

import dynamic from "next/dynamic";

const ResumeChartsLazy = dynamic(
  () => import("@/components/resume/resume-charts").then((m) => m.ResumeCharts),
  {
    ssr: false,
    loading: () => (
      <section
        id="charts"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
        aria-busy="true"
      >
        <div className="mb-8 max-w-3xl animate-pulse">
          <div className="h-4 w-36 rounded bg-[var(--border)]" />
          <div className="mt-4 h-8 max-w-2xl rounded-lg bg-[var(--border-strong)]/40" />
          <div className="mt-2 h-12 max-w-3xl rounded-lg bg-[var(--border-strong)]/20" />
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="card-surface h-[408px] animate-pulse bg-[var(--bg-card)]"
            />
          ))}
        </div>
      </section>
    ),
  },
);

export function ResumeChartsGate() {
  return <ResumeChartsLazy />;
}
