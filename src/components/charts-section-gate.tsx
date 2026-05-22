"use client";

import dynamic from "next/dynamic";
import { ChartsSectionSkeleton } from "@/components/charts-section-skeleton";
import type { AuditLandingStats } from "@/lib/stats";

const ChartsSectionLazy = dynamic(
  () => import("@/components/charts-section").then((m) => m.ChartsSection),
  {
    ssr: false,
    loading: () => <ChartsSectionSkeleton />,
  },
);

export function ChartsSectionGate({ stats }: { stats: AuditLandingStats }) {
  return <ChartsSectionLazy stats={stats} />;
}
