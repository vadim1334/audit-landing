<<<<<<< HEAD
# Аудит рабочих задач — лендинг

Интерактивная страница по Excel-файлу **Аудит рабочих задач_with_extension.xlsx** (лист Practicum).

## Быстрый вход (Windows)

В корне **этого** проекта есть batch-файлы:

| Файл | Когда использовать |
|------|---------------------|
| `ОТКРЫТЬ_ЛЕНДИНГ.bat` | Полный цикл перед проверкой: убить порт 3000 → `npm run build` → браузер → `npm run start`. |
| `ОБНОВИТЬ_ДАННЫЕ.bat` | Перегенерировать `src/data/audit.json` через `..\scripts\export_audit_v2.py`. |
| `СОБРАТЬ_ФИНАЛ.bat` | Редкий финальный просмотр: перед `npm run start` также чистится порт 3000. |

Подробнее: **`docs/WORKFLOW.md`**.

Компас родительской папки («Аналитик данных», много временных файлов): **`README-ПРО-АУДИТ-ЛЕНДИНГ.md`** в каталог на уровень выше от `audit-landing`.

## Запуск вручную

```bash
cd audit-landing
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

> **Windows + длинный путь OneDrive:** если `npm run dev` падает с ошибкой Turbopack «path length exceeds max», используйте production-режим: `npm run build` → `npm run start`, либо откройте проект через короткий путь `subst X: "…\Аналитик данных"` и `cd X:\audit-landing`. В `package.json` для dev включён флаг `--webpack`.

## Обновление данных

1. Положите или обновите `.xlsx` в корень папки **`Аналитик данных`** (на уровень выше этого репозитория).
2. Запустите **`ОБНОВИТЬ_ДАННЫЕ.bat`** или из **`Аналитик данных`**:

```bash
python scripts/export_audit_v2.py
```

Скрипт пересоберёт `audit-landing/src/data/audit.json`.

## Особенности сборки UI

Графики (Recharts) подключаются через клиентский `ChartsSectionGate` с **`dynamic(..., { ssr: false })`**, чтобы при `next build` не возникало предупреждений из-за измерений `ResponsiveContainer` без DOM.

## Стек

Next.js 16, React 19, Tailwind v4, Recharts, Lucide.
=======
# audit-landing
Аудит рабочих задач 
>>>>>>> 22f9cfef9aa380f93f1b3a4009c1aa966db2da26
