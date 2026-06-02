import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ExternalLink, Sparkles } from "lucide-react";
import { ResumeChartsGate } from "@/components/resume/resume-charts-gate";
import { companies, resumeProfile, workStreams } from "@/data/resume";

export const metadata: Metadata = {
  title: "Вадим Барсов · Growth / AI Product Manager",
  description:
    "Визуальный лендинг-резюме Growth Product Manager / AI Product Manager: опыт, компании, достижения, графики и рабочие задачи.",
};

function ResumeHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(11,11,12,0.86)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:h-14 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-0">
        <Link href="/resume" className="flex items-center gap-2 text-sm font-medium">
          <span className="sm:hidden">AI PM</span>
          <span className="hidden sm:inline">AI Product Manager / ex-PMM</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm text-[var(--text-muted)] sm:flex-nowrap">
          <Link className="rounded-md px-3 py-1.5 transition hover:bg-[var(--accent-soft)]" href="#charts">
            Графики
          </Link>
          <Link className="rounded-md px-3 py-1.5 transition hover:bg-[var(--accent-soft)]" href="#companies">
            Компании
          </Link>
          <Link className="rounded-md px-3 py-1.5 transition hover:bg-[var(--accent-soft)] text-white" href="/">
            <span className="sm:hidden">Рутина GenAI</span>
            <span className="hidden sm:inline">GenAI в моей рутине</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-14 sm:pt-28 sm:pb-18">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-[var(--glow)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex w-fit rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-xs leading-snug text-[var(--text-muted)]">
              {resumeProfile.location} · {resumeProfile.contact}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl sm:leading-[1.05]">
              {resumeProfile.name}
              <span className="block text-[var(--text-muted)]">
                {resumeProfile.role}
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              {resumeProfile.summary} {resumeProfile.proof}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://spb.hh.ru/resume/723c315dff0243ad3c0039ed1f684d35795635"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/90 bg-white px-5 py-2.5 text-sm font-medium text-[#0b0b0c] transition hover:bg-white/90 sm:w-auto"
              >
                Резюме
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="#charts"
                className="inline-flex w-full items-center justify-center rounded-lg border border-[var(--border-strong)] bg-white/[0.03] px-5 py-2.5 text-sm text-[var(--text)] transition hover:bg-[var(--accent-soft)] sm:w-auto"
              >
                Смотреть графики
              </Link>
              <Link
                href="#companies"
                className="inline-flex w-full items-center justify-center rounded-lg border border-[var(--border-strong)] bg-white/[0.03] px-5 py-2.5 text-sm text-[var(--text)] transition hover:bg-[var(--accent-soft)] sm:w-auto"
              >
                Опыт по компаниям
              </Link>
            </div>
          </div>
          <div className="card-surface p-5 shadow-[0_20px_60px_rgba(0,0,0,0.16)] sm:p-6">
            <p className="text-xs uppercase tracking-wider text-[var(--text-dim)]">
              Из маркетинга в Product Manager
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {resumeProfile.stats.map((item) => (
                <article key={item.label} className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4">
                  <p className="text-xs uppercase tracking-wider text-[var(--text-dim)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold tabular-nums">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                    {item.hint}
                  </p>
                </article>
              ))}
            </div>
            <Link
              href="#work"
              className="mt-6 inline-flex items-center gap-2 text-xs text-[var(--text-dim)] transition hover:text-[var(--text-muted)]"
            >
              <span>Листайте к карте рабочих задач</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkStreams() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-14">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs uppercase tracking-wider text-[var(--text-dim)]">
          Карта рабочих задач
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Чем полезен для AI-продукта
        </h2>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {workStreams.map((stream) => (
          <article key={stream.title} className="card-surface flex h-full flex-col p-4">
            <div className="mb-4 inline-flex rounded-lg border border-indigo-400/20 bg-indigo-400/8 p-2 text-indigo-200">
              <Sparkles className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-medium">{stream.title}</h3>
            <div className="mt-3 h-2 rounded-full bg-[var(--bg-elevated)]">
              <div
                className="h-2 rounded-full bg-indigo-300"
                style={{ width: `${stream.value}%` }}
              />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">
              {stream.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CompaniesTimeline() {
  return (
    <section id="companies" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-24 sm:px-6">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs uppercase tracking-wider text-[var(--text-dim)]">
          Компании
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Опыт и доказательства результата
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
          Каждая карточка показывает роль, период, фокус и ключевые достижения из резюме.
        </p>
      </div>

      <div className="space-y-3">
        {companies.map((company, index) => (
          <article
            key={`${company.company}-${company.period}`}
            className="card-surface overflow-hidden transition-colors hover:bg-white/[0.02]"
          >
            <div className="grid gap-5 p-5 md:grid-cols-[auto_1fr_auto] md:items-start">
              <div className="flex items-center gap-3">
                <span className="rounded-md border border-[var(--border)] px-2 py-1 text-xs text-[var(--text-dim)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold">{company.company}</h3>
                  <span className="rounded-md border border-[var(--border)] px-2 py-0.5 text-[11px] text-[var(--text-muted)]">
                    {company.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--text)]">{company.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {company.focus}
                </p>
                <div className="mt-4 grid gap-2 md:grid-cols-2">
                  {company.achievements.map((achievement) => (
                    <p
                      key={achievement}
                      className="rounded-lg border border-[var(--border)] bg-white/[0.03] px-3 py-2 text-sm leading-relaxed text-[var(--text-muted)]"
                    >
                      {achievement}
                    </p>
                  ))}
                </div>
              </div>

              <div className="w-fit rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-left md:ml-auto md:text-right">
                <p className="text-2xl font-semibold tabular-nums">
                  {company.durationMonths}
                </p>
                <p className="text-xs text-[var(--text-dim)]">мес.</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <>
      <ResumeHeader />
      <main className="min-w-0 flex-1">
        <Hero />
        <WorkStreams />
        <ResumeChartsGate />
        <CompaniesTimeline />
      </main>
      <footer className="border-t border-[var(--border)] py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-[var(--text-dim)] sm:px-6">
          <p>Источник: резюме «Барсов Вадим», обновлено 2 июня 2026.</p>
        </div>
      </footer>
    </>
  );
}
