import labels from "@/data/factor-colors.json";

export type FactorKey = "emotional" | "resource" | "complexity";

//да — выше порога по фактору (в т.ч. эмоционально / по ресурсам / по сложности)
export const FACTOR_YES_COLOR = "#DC2626";
//нет — ниже порога
export const FACTOR_NO_COLOR = "#22C55E";

//Подписи столбцов Excel; заливка плашки только от «да»/«нет»
export const factorStyles = labels as Record<
  FactorKey,
  { label: string; header: string; yes: string; no: string }
>;

export const FACTOR_ORDER: FactorKey[] = [
  "emotional",
  "resource",
  "complexity",
];

export function pillClasses(active: boolean): string {
  if (active) {
    return "border-red-500/50 bg-red-500/15 text-red-200";
  }
  return "border-emerald-500/45 bg-emerald-500/10 text-emerald-200";
}
