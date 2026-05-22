import { ru } from "@/content/ru";

export function SiteFooter() {
  const t = ru.footer;
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto max-w-6xl px-4 text-sm text-[var(--text-dim)] sm:px-6">
        <p>{t.source}</p>
      </div>
    </footer>
  );
}
