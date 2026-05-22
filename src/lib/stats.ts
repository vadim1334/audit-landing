import type { AuditData, Task } from "./types";
import { FACTOR_NO_COLOR, FACTOR_YES_COLOR, factorStyles } from "./factor-styles";

const YES = new Set(["да", "yes"]);

export function isYes(value: string | undefined | null): boolean {
  return YES.has((value ?? "").trim().toLowerCase());
}

export function normalizeDeployment(raw: string | null): string {
  if (!raw) return "Не указано";
  const v = raw.trim();
  if (v.toLowerCase().startsWith("гибрид")) return "Гибрид";
  if (v.toLowerCase().includes("saas") && v.toLowerCase().includes("api")) {
    return "SaaS + API";
  }
  if (v.toLowerCase().startsWith("saas")) return "SaaS";
  if (v.toLowerCase().startsWith("api")) return "API";
  return v.length > 28 ? `${v.slice(0, 26)}…` : v;
}

export function buildStats(data: AuditData) {
  const tasks = data.tasks;

  const factorRows = [
    {
      key: "emotional" as const,
      factor: factorStyles.emotional.label,
      да: tasks.filter((t) => isYes(t.factors.emotional)).length,
      нет: tasks.filter((t) => !isYes(t.factors.emotional)).length,
      colorYes: FACTOR_YES_COLOR,
      colorNo: FACTOR_NO_COLOR,
    },
    {
      key: "resource" as const,
      factor: factorStyles.resource.label,
      да: tasks.filter((t) => isYes(t.factors.resource)).length,
      нет: tasks.filter((t) => !isYes(t.factors.resource)).length,
      colorYes: FACTOR_YES_COLOR,
      colorNo: FACTOR_NO_COLOR,
    },
    {
      key: "complexity" as const,
      factor: factorStyles.complexity.label,
      да: tasks.filter((t) => isYes(t.factors.complexity)).length,
      нет: tasks.filter((t) => !isYes(t.factors.complexity)).length,
      colorYes: FACTOR_YES_COLOR,
      colorNo: FACTOR_NO_COLOR,
    },
  ];

  const deploymentMap = new Map<string, number>();
  for (const t of tasks) {
    const key = normalizeDeployment(t.deployment);
    deploymentMap.set(key, (deploymentMap.get(key) ?? 0) + 1);
  }
  const deployment = [...deploymentMap.entries()]
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  const subtasksByTask = tasks.map((t) => ({
    name: shorten(t.title, 22),
    fullTitle: t.title,
    subtasks: t.subtasks.length,
  }));

  const aiCoverage = tasks.map((t) => {
    const withAi = t.subtasks.filter((s) => hasAiTool(s.tool)).length;
    const total = t.subtasks.length || 1;
    return {
      name: shorten(t.title, 20),
      fullTitle: t.title,
      ai: withAi,
      human: Math.max(0, total - withAi),
      pct: Math.round((withAi / total) * 100),
    };
  });

  const promptsCount = tasks.reduce(
    (acc, t) => acc + t.subtasks.filter((s) => s.prompt).length,
    0,
  );

  const aiSubtasks = tasks.reduce(
    (acc, t) => acc + t.subtasks.filter((s) => hasAiTool(s.tool)).length,
    0,
  );

  return {
    taskCount: tasks.length,
    subtaskCount: data.meta.totalSubtasks,
    promptsCount,
    aiSubtasks,
    factorRows,
    deployment,
    subtasksByTask,
    aiCoverage,
  };
}

export type AuditLandingStats = ReturnType<typeof buildStats>;

export function hasAiTool(tool: string | null | undefined): boolean {
  if (!tool) return false;
  const t = tool.toLowerCase();
  if (t.includes("не ии") || t.includes("только человек") || t === "—") {
    return false;
  }
  if (t.includes("руками") && !t.includes("cursor")) return false;
  return (
    t.includes("cursor") ||
    t.includes("claude") ||
    t.includes("chatgpt") ||
    t.includes("gemini") ||
    t.includes("manus") ||
    t.includes("rag") ||
    t.includes("бот") ||
    t.includes("llm") ||
    t.includes("copilot") ||
    t.includes("n8n") ||
    t.includes("lovable") ||
    t.includes("parallel") ||
    t.includes("tavily") ||
    t.includes("ии") ||
    t.includes(" ai") ||
    t.startsWith("ai")
  );
}

function shorten(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}

export function taskScore(task: Task): number {
  return (
    Number(isYes(task.factors.emotional)) +
    Number(isYes(task.factors.resource)) +
    Number(isYes(task.factors.complexity))
  );
}
