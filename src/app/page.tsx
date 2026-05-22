import { ChartsSectionGate } from "@/components/charts-section-gate";
import { Hero } from "@/components/hero";
import { MetricsStrip } from "@/components/metrics-strip";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TaskAccordion } from "@/components/task-accordion";
import { auditData } from "@/lib/data";
import { buildStats } from "@/lib/stats";

export default function HomePage() {
  const stats = buildStats(auditData);

  return (
    <>
      <SiteHeader />
      <main className="min-w-0 flex-1">
        <Hero taskCount={stats.taskCount} subtaskCount={stats.subtaskCount} />
        <div className="mt-10">
          <MetricsStrip
            taskCount={stats.taskCount}
            subtaskCount={stats.subtaskCount}
            promptsCount={stats.promptsCount}
            aiSubtasks={stats.aiSubtasks}
          />
        </div>
        <ChartsSectionGate stats={stats} />
        <TaskAccordion tasks={auditData.tasks} />
      </main>
      <SiteFooter />
    </>
  );
}
