"use client";

import clsx from "clsx";
import { ChevronDown, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { ru } from "@/content/ru";
import type { Task } from "@/lib/types";
import { FACTOR_ORDER, factorStyles, pillClasses } from "@/lib/factor-styles";
import type { FactorKey } from "@/lib/factor-styles";
import { hasAiTool, isYes, taskScore } from "@/lib/stats";

type TaskAccordionProps = {
  tasks: Task[];
};

function FactorPill({
  factorKey,
  active,
}: {
  factorKey: FactorKey;
  active: boolean;
}) {
  const label = factorStyles[factorKey].label;
  return (
    <span
      className={clsx(
        "rounded-md border px-2 py-0.5 text-[11px]",
        pillClasses(active),
      )}
      title={label}
    >
      {label}
    </span>
  );
}

function DetailBlock({ title, body }: { title: string; body: string | null }) {
  if (!body) return null;
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[rgba(0,0,0,0.2)] p-3">
      <p className="text-[11px] uppercase tracking-wider text-[var(--text-dim)]">
        {title}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)] whitespace-pre-wrap">
        {body}
      </p>
    </div>
  );
}

export function TaskAccordion({ tasks }: TaskAccordionProps) {
  const t = ru.tasks;
  const [openId, setOpenId] = useState<number | null>(0);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "ai" | "delegate">("all");

  const filtered = useMemo(() => {
    if (filter === "delegate") {
      return tasks.filter((t) => taskScore(t) >= 2);
    }
    if (filter === "ai") {
      return tasks.filter((t) => t.subtasks.some((s) => hasAiTool(s.tool)));
    }
    return tasks;
  }, [filter, tasks]);

  return (
    <section id="tasks" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wider text-[var(--text-dim)]">
            {t.sectionLabel}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.title}
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{t.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(
            [
              ["all", t.filters.all],
              ["delegate", t.filters.delegate],
              ["ai", t.filters.ai],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={clsx(
                "rounded-lg border px-3 py-1.5 text-sm transition",
                filter === key
                  ? "border-[var(--border-strong)] bg-[var(--accent-soft)] text-[var(--text)]"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {filtered.map((task, index) => {
          const id = tasks.indexOf(task);
          const isOpen = openId === id;
          const aiCount = task.subtasks.filter((s) => hasAiTool(s.tool)).length;

          return (
            <article key={task.title} className="card-surface overflow-hidden">
              <button
                type="button"
                className="flex w-full items-start gap-3 px-4 py-4 text-left transition hover:bg-[var(--accent-soft)] sm:px-5"
                onClick={() => setOpenId(isOpen ? null : id)}
                aria-expanded={isOpen}
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-xs text-[var(--text-dim)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block min-w-0 break-words text-sm font-medium leading-snug sm:text-base">
                    {task.title}
                  </span>
                  <span className="mt-2 flex flex-wrap gap-1.5">
                    {FACTOR_ORDER.map((key) => (
                      <FactorPill
                        key={key}
                        factorKey={key}
                        active={isYes(task.factors[key])}
                      />
                    ))}
                    {task.deployment && (
                      <span className="rounded-md border border-[var(--border)] px-2 py-0.5 text-[11px] text-[var(--text-muted)]">
                        {task.deployment}
                      </span>
                    )}
                    <span className="rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-[11px] text-indigo-200">
                      {task.subtasks.length} {t.subtasksLabel} · {t.aiLabel}{" "}
                      {aiCount}
                    </span>
                  </span>
                </span>
                <ChevronDown
                  className={clsx(
                    "mt-1 h-5 w-5 shrink-0 text-[var(--text-dim)] transition",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              {isOpen && (
                <div className="border-t border-[var(--border)] px-4 pb-5 pt-4 sm:px-5">
                  <div className="grid gap-3 lg:grid-cols-2">
                    <DetailBlock
                      title={t.blocks.integration}
                      body={task.integration}
                    />
                    <DetailBlock title={t.blocks.rationale} body={task.rationale} />
                    <DetailBlock title={t.blocks.risks} body={task.risks} />
                    <DetailBlock
                      title={t.blocks.mitigation}
                      body={task.mitigation}
                    />
                    <DetailBlock
                      title={t.blocks.requirements}
                      body={task.requirements}
                    />
                  </div>

                  {task.subtasks.length > 0 ? (
                    <div className="mt-5 space-y-2">
                      <p className="text-xs uppercase tracking-wider text-[var(--text-dim)]">
                        {t.subtasksTitle}
                      </p>
                      {task.subtasks.map((sub) => {
                        const subKey = `${id}-${sub.title}`;
                        const subOpen = openSub === subKey;
                        return (
                          <div
                            key={subKey}
                            className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)]"
                          >
                            <button
                              type="button"
                              className="flex w-full items-center gap-2 px-3 py-3 text-left text-sm"
                              onClick={() =>
                                setOpenSub(subOpen ? null : subKey)
                              }
                            >
                              {hasAiTool(sub.tool) ? (
                                <Sparkles className="h-4 w-4 shrink-0 text-indigo-300" />
                              ) : (
                                <span className="h-4 w-4 shrink-0 rounded-full border border-[var(--border)]" />
                              )}
                              <span className="min-w-0 flex-1 break-words">{sub.title}</span>
                              <ChevronDown
                                className={clsx(
                                  "h-4 w-4 text-[var(--text-dim)] transition",
                                  subOpen && "rotate-180",
                                )}
                              />
                            </button>
                            {subOpen && (
                              <div className="space-y-3 border-t border-[var(--border)] px-3 pb-3 pt-2">
                                <DetailBlock title={t.tool} body={sub.tool} />
                                <DetailBlock title={t.prompt} body={sub.prompt} />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="mt-4 text-sm text-[var(--text-dim)]">
                      {t.emptySubtasks}
                    </p>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
