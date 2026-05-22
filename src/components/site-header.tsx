import Link from "next/link";
import { ru } from "@/content/ru";

const links = [
  { href: "#overview", label: ru.header.nav.overview },
  { href: "#charts", label: ru.header.nav.charts },
  { href: "#tasks", label: ru.header.nav.tasks },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(11,11,12,0.85)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border-strong)] bg-[var(--bg-card)] text-xs">
            AI
          </span>
          <span className="hidden sm:inline">{ru.header.brand}</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-1 text-sm text-[var(--text-muted)] sm:flex-nowrap">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 transition hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
