export const ru = {
  meta: {
    title: "Аудит рабочих задач · ИИ-делегирование",
    description:
      "Интерактивный лендинг по аудиту рабочих задач: графики, факторы делегирования и раскрывающиеся подзадачи с промптами.",
  },
  header: {
    brand: "Аудит рабочих задач",
    nav: { overview: "Обзор", charts: "Графики", tasks: "Задачи" },
  },
  hero: {
    badge:
      "Итоговый проект: Вадим Барсов / AI Product Manager",
    title: "Карта рабочих задач",
    subtitle: "с графиками и раскрывающимися шагами",
    introBefore: "Интерактивный обзор по Excel-аудиту:",
    introTasks: "крупных задач",
    introSubtasks: "подзадач",
    ctaCharts: "Смотреть графики",
    ctaTasks: "Раскрыть задачи",
    ctaExcel: "Скачать Excel",
    excelUrl:
      "https://1drv.ms/x/c/b9d7138dd76a59a5/IQAVPs3WhU1ZT709V9qibWWMAQ3S4sf4y5wZOTUhZUFAAAs?e=hy3oVu",
    scroll: "Листайте вниз",
  },
  metrics: {
    tasks: { label: "Крупные задачи", hint: "шаг 1 в таблице" },
    subtasks: { label: "Подзадачи", hint: "декомпозиция шага 3" },
    prompts: { label: "С промптами", hint: "готовые шаблоны" },
    ai: { label: "С ИИ-инструментом", hint: "из подзадач" },
  },
  charts: {
    sectionLabel: "Аналитика",
    title: "Графики по аудиту",
    subtitle:
      "Факторы делегирования, варианты внедрения, глубина декомпозиции и доля подзадач с ИИ-инструментами.",
    factors: {
      title: "Факторы делегирования",
      subtitle:
        "По каждому столбцу Excel: «да» (фактор сильнее) — красный, «нет» — зелёный.",
      legendYes: "«да» — красным",
      legendNo: "«нет» — зелёным",
    },
    deployment: {
      title: "Вариант внедрения",
      subtitle: "Шаг 7 — API / SaaS / Гибрид",
    },
    subtasks: {
      title: "Подзадачи на задачу",
      subtitle: "Глубина декомпозиции (шаг 3)",
    },
    aiCoverage: {
      title: "Покрытие ИИ по подзадачам",
      subtitle: "Подзадачи с инструментом vs без",
      ai: "С ИИ",
      human: "Без ИИ",
    },
  },
  tasks: {
    sectionLabel: "Таблица",
    title: "Раскрывающиеся задачи",
    subtitle:
      "Клик по строке — шаги 6–11 и подзадачи с инструментами и промптами.",
    filters: { all: "Все", delegate: "К делегированию", ai: "С ИИ" },
    factorsLegend: "Факторы делегирования (цвета как в Excel)",
    subtasksLabel: "подзадач",
    aiLabel: "ИИ",
    emptySubtasks: "Подзадачи не заполнены.",
    subtasksTitle: "Подзадачи",
    tool: "Инструмент",
    prompt: "Промпт",
    blocks: {
      integration: "Как встроен ИИ",
      rationale: "Обоснование",
      risks: "Риски",
      mitigation: "Снижение рисков",
      requirements: "Требования",
    },
  },
  footer: {
    source: "Источник: файл Excel аудита задач · лист Practicum",
  },
} as const;
