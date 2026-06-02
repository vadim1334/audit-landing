"use client";

import { impactBars, stackRows, workStreams } from "@/data/resume";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const tooltipStyle = {
  background: "#18181b",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 8,
};

function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <article className="card-surface flex min-w-0 flex-col p-5 sm:p-6">
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="mt-1 text-xs text-[var(--text-muted)]">{subtitle}</p>
      <div className="mt-4 h-[300px] min-w-0">{children}</div>
    </article>
  );
}

export function ResumeCharts() {
  return (
    <section id="charts" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs uppercase tracking-wider text-[var(--text-dim)]">
          Аналитика профиля
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Чарты по опыту, результатам и рабочим задачам
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
          Визуальная версия резюме: где накоплен опыт, какие метрики уже двигались
          и какие зоны компетенций закрывают вакансию AI/Growth Product Manager.
        </p>
      </div>

      <div className="grid min-w-0 gap-4 lg:grid-cols-2">
        <ChartCard
          title="Измеримые результаты"
          subtitle="Запуски, discovery и изменения ключевых бизнес-метрик"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={impactBars} margin={{ top: 12, right: 10, left: -10, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} interval={0} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(_, _name, item) => [item.payload.label, "результат"]}
              />
              <Bar dataKey="value" name="результат" fill="#818cf8" radius={[5, 5, 0, 0]}>
                {impactBars.map((item, index) => (
                  <Cell
                    key={item.name}
                    fill={index % 2 === 0 ? "#818cf8" : "#a3e635"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Фокус рабочих задач"
          subtitle="Оценка по текущему стеку задач: AI, growth, аналитика и delivery"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={workStreams}
              margin={{ top: 4, right: 18, left: 42, bottom: 4 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tickLine={false} axisLine={false} />
              <YAxis
                type="category"
                dataKey="title"
                width={92}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(value) => [`${value}/100`, "фокус"]}
                labelFormatter={(_, payload) =>
                  payload?.[0]?.payload?.description ?? ""
                }
              />
              <Bar dataKey="value" fill="#e4e4e7" radius={[0, 5, 5, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Профиль компетенций"
          subtitle="Product, AI/LLM, аналитика, growth, delivery и web/design"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={stackRows} outerRadius={100}>
              <PolarGrid stroke="rgba(255,255,255,0.12)" />
              <PolarAngleAxis dataKey="name" tick={{ fill: "#a1a1aa", fontSize: 11 }} />
              <Radar
                name="стек"
                dataKey="score"
                stroke="#a3e635"
                fill="#a3e635"
                fillOpacity={0.22}
              />
              <Legend />
              <Tooltip contentStyle={tooltipStyle} />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </section>
  );
}
