import type { Metadata } from "next";
import { ru } from "@/content/ru";
import "./globals.css";

export const metadata: Metadata = {
  title: ru.meta.title,
  description: ru.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full min-w-0 antialiased">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="flex min-h-full min-w-0 flex-col">
        {children}
      </body>
    </html>
  );
}
