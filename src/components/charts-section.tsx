"use client";

import { useEffect, useState } from "react";
import { ru } from "@/content/ru";
import { FACTOR_NO_COLOR, FACTOR_YES_COLOR } from "@/lib/factor-styles";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartStats = {
  factorRows: {
    factor: string;
    да: number;
    нет: number;
    colorYes: string;
    colorNo: string;
  }[];
  deployment: { name: string; value: number }[];
  subtasksByTask: { name: string; fullTitle: string; subtasks: number }[];
  aiCoverage: {
    name: string;
    fullTitle: string;
    ai: number;
    human: number;
    pct: number;
  }[];
};

const PIE_COLORS = ["#e4e4e7", "#a1a1aa", "#818cf8", "#a3e635", "#f472b6"];

function ChartCard({
  title,
  subtitle,
  legend,
  children,
}: {
  title: string;
  subtitle: string;
  /**Legend rendered above chart; keeps fixed height wrapper for ResponsiveContainer only.*/
  legend?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <article className="card-surface flex min-w-0 flex-col p-5 sm:p-6">
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="mt-1 text-xs text-[var(--text-muted)]">{subtitle}</p>
      <div className="mt-4 flex min-h-0 flex-col gap-3">
        {legend}
        <div className="h-[280px] w-full min-w-0 shrink-0">{children}</div>
      </div>
    </article>
  );
}

function FactorLegend() {
  const t = ru.charts.factors;
  return (
    <div className="flex flex-wrap items-center gap-4 text-[11px] text-[var(--text-muted)]">
      <span className="inline-flex items-center gap-1.5">
        <span
          className="h-2.5 w-2.5 rounded-sm"
          style={{ backgroundColor: FACTOR_YES_COLOR }}
        />
        {t.legendYes}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span
          className="h-2.5 w-2.5 rounded-sm"
          style={{ backgroundColor: FACTOR_NO_COLOR }}
        />
        {t.legendNo}
      </span>
    </div>
  );
}

export function ChartsSection({ stats }: { stats: ChartStats }) {
  const c = ru.charts;
  const [yCategoryWidth, setYCategoryWidth] = useState(108);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 480px)");
    const sync = () => setYCategoryWidth(mq.matches ? 76 : 108);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section id="charts" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-wider text-[var(--text-dim)]">
          {c.sectionLabel}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          {c.title}
        </h2>
        <p className="mt-2 text-sm text-[var(--text-muted)]">{c.subtitle}</p>
      </div>

      <div className="grid min-w-0 gap-4 lg:grid-cols-2">
        <ChartCard
          title={c.factors.title}
          subtitle={c.factors.subtitle}
          legend={<FactorLegend />}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats.factorRows} margin={{ top: 8, right: 8, left: -8 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="factor"
                tickLine={false}
                axisLine={false}
                interval={0}
                tick={{ fontSize: 10 }}
              />
              <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "#18181b",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                }}
              />
              <Legend />
              <Bar dataKey="да" name="да" radius={[4, 4, 0, 0]}>
                {stats.factorRows.map((row) => (
                  <Cell key={`yes-${row.factor}`} fill={row.colorYes} />
                ))}
              </Bar>
              <Bar dataKey="нет" name="нет" radius={[4, 4, 0, 0]}>
                {stats.factorRows.map((row) => (
                  <Cell key={`no-${row.factor}`} fill={row.colorNo} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title={c.deployment.title} subtitle={c.deployment.subtitle}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={stats.deployment}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={58}
                outerRadius={92}
                paddingAngle={2}
              >
                {stats.deployment.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "#18181b",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title={c.subtasks.title} subtitle={c.subtasks.subtitle}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={stats.subtasksByTask}
              margin={{ top: 4, right: 12, left: 4, bottom: 4 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" allowDecimals={false} tickLine={false} axisLine={false} />
              <YAxis
                type="category"
                dataKey="name"
                width={yCategoryWidth}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                labelFormatter={(_, payload) =>
                  payload?.[0]?.payload?.fullTitle ?? ""
                }
                contentStyle={{
                  background: "#18181b",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                }}
              />
              <Bar dataKey="subtasks" fill="#e4e4e7" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title={c.aiCoverage.title} subtitle={c.aiCoverage.subtitle}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={stats.aiCoverage}
              margin={{ top: 4, right: 12, left: 4, bottom: 4 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" allowDecimals={false} tickLine={false} axisLine={false} />
              <YAxis
                type="category"
                dataKey="name"
                width={yCategoryWidth}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                labelFormatter={(_, payload) =>
                  payload?.[0]?.payload?.fullTitle ?? ""
                }
                contentStyle={{
                  background: "#18181b",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                }}
              />
              <Legend />
              <Bar dataKey="ai" stackId="s" fill="#818cf8" name={c.aiCoverage.ai} />
              <Bar
                dataKey="human"
                stackId="s"
                fill="#3f3f46"
                name={c.aiCoverage.human}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

    </section>
  );
}
