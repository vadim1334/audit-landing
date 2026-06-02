export const resumeProfile = {
  name: "Вадим Барсов",
  role: "Growth Product Manager / AI Product Manager",
  location: "Санкт-Петербург · удалённо / гибрид",
  contact: "TG: @nbmivad",
  summary:
    "Product Manager с опытом запуска и развития B2B/AI-продуктов на стыке бизнеса, маркетинга, данных и разработки.",
  proof:
    "Сильная сторона — быстро переводить неопределённую идею в MVP, roadmap, требования, эксперименты и понятные продуктовые решения.",
  stats: [
    {
      label: "Опыт",
      value: "16 лет",
      hint: "из них 10 лет в tech, 7 лет в Software",
    },
    { label: "AI-агенты", value: "10", hint: "запущены в каталог Just AI" },
    { label: "Activation", value: "+5 п.п.", hint: "рост после role-based онбординга" },
    { label: "Discovery", value: "72", hint: "оффера протестированы в Яндексе" },
  ],
} as const;

export const companies = [
  {
    company: "Just AI",
    logo: "JA",
    logoUrl: "https://promoagents.just-ai.com/marketplace/wp-content/uploads/sites/2/2026/05/publisher_just-ai.svg",
    color: "#ff3b3f",
    period: "2025 — сейчас",
    durationMonths: 12,
    role: "AI Product Manager / Product Marketing",
    focus: "AI-продукты, маркетплейс агентов, GenAI roadmap, activation/retention",
    achievements: [
      "Развиваю маркетплейс ИИ-агентов для SMB и enterprise-продукт Jay Copilot.",
      "Запустил 10 AI-агентов: от сценариев и MVP-гипотез до вывода в каталог.",
      "+5 п.п. к activation через сегментацию пользователей и role-based онбординг.",
      "Сформировал стратегию и roadmap на 2026 для GenAI-продукта.",
    ],
  },
  {
    company: "Яндекс / eLama",
    logo: "Я",
    logoUrl: "/img/custom-logo.png",
    color: "#fc3f1d",
    period: "2022 — 2025",
    durationMonths: 38,
    role: "Marketing Lead",
    focus: "Growth, acquisition, activation, BI-отчётность, AARRR/AAARRR",
    achievements: [
      "Увеличил acquisition в 3 раза в 2023 к 2022 и ещё на 15% в 2024.",
      "Повысил activation из PPC в 1,5 раза, затем добавил ещё +10% год к году.",
      "Снизил CPL на 20% за счёт кампаний, креативов и воронок.",
      "Запустил 72 discovery-оффера и обвязал решения BI-отчётами.",
    ],
  },
  {
    company: "Conteq",
    logo: "CQ",
    logoUrl: "https://habrastorage.org/getpro/moikrug/uploads/company/100/007/401/2/logo/medium_83b5009e040969ee7b60362ad7426573.jpeg",
    color: "#38bdf8",
    period: "2019 — 2022",
    durationMonths: 29,
    role: "Продуктовый маркетолог",
    focus: "B2B GTM, performance, SEO, сквозная аналитика",
    achievements: [
      "Снизил CAC на 80% по продвигаемым ИТ-продуктам.",
      "Увеличил количество квалифицированных лидов на 60%.",
      "Запустил GTM на международные рынки: США и Ближний Восток.",
      "Настроил сквозную аналитику в Power BI от MQL до SQL.",
    ],
  },
  {
    company: "ТРЕЙДКОН",
    logo: "T",
    logoUrl: "/img/new-logo.png",
    color: "#f97316",
    period: "2018 — 2019",
    durationMonths: 15,
    role: "Бренд-менеджер / Продуктовый менеджер",
    focus: "Позиционирование, ассортимент, B2B-партнёры, экономика направления",
    achievements: [
      "Управлял брендом TOSOT: позиционирование, ценообразование и продвижение.",
      "Развивал OEM-направления: ассортимент, конкурентный анализ, стратегия.",
      "Стимулировал B2B-партнёров через акции, кейсы и расчёты рентабельности.",
    ],
  },
  {
    company: "АЛТЭК",
    logo: "А",
    logoUrl: "",
    color: "#22c55e",
    period: "2014 — 2018",
    durationMonths: 43,
    role: "Marketing Lead / Категорийный менеджер-аналитик",
    focus: "Digital, GMV, 1C-интеграции, ассортимент и сервисная экономика",
    achievements: [
      "Увеличил GMV по направлению запчастей на 180%.",
      "Запустил digital-направление: сайт, SEO, SMM, реклама и обновления SKU.",
      "Внедрил интеграции с 1С и процессы контроля взаиморасчётов.",
    ],
  },
  {
    company: "РЭП холдинг",
    logo: "РЭП",
    logoUrl: "https://www.reph.ru/bitrix/templates/reph/images/header/logo_new_ru.jpg",
    color: "#94a3b8",
    period: "2015 — 2016",
    durationMonths: 7,
    role: "Менеджер ВЭД",
    focus: "Поставки, тендеры, билингвальные контракты, нефтегазовое оборудование",
    achievements: [
      "Закупал оборудование и запчасти, 70% поставщиков были иностранными.",
      "Контролировал сроки, объёмы и качество поставок по контрактам.",
      "Готовил требования и участвовал в тендерных процедурах по 228-ФЗ.",
    ],
  },
  {
    company: "Буквоед",
    logo: "Б",
    logoUrl: "https://www.bookvoed.ru/",
    color: "#a855f7",
    period: "2012 — 2014",
    durationMonths: 25,
    role: "Категорийный менеджер / маркетолог-аналитик",
    focus: "Ассортимент, ABC/XYZ, GMV, промо и розничная экономика",
    achievements: [
      "Управлял ассортиментом и закупочной политикой нескольких категорий.",
      "Анализировал продажи, остатки, конкурентную среду и меры роста GMV.",
      "Сопровождал промо-акции, ивенты и товарные карточки в 1С.",
    ],
  },
] as const;

export const workStreams = [
  {
    title: "AI Product Discovery",
    value: 92,
    description:
      "Сценарии агентов, MVP-гипотезы, оценка спроса, edge-cases и проверка ценности через метрики.",
  },
  {
    title: "Product Growth",
    value: 88,
    description:
      "Activation, retention, CAC, LTV, role-based onboarding, A/B-тесты, сегментация и growth-гипотезы.",
  },
  {
    title: "Data & Analytics",
    value: 84,
    description:
      "SQL, Python, Metabase, Power BI, DataLens, продуктовые метрики, когорты и юнит-экономика.",
  },
  {
    title: "GTM & B2B Marketing",
    value: 80,
    description:
      "Позиционирование, офферы, acquisition, performance, SEO, Telegram Ads, Яндекс Директ и Google Ads.",
  },
  {
    title: "Delivery & Stakeholders",
    value: 78,
    description:
      "Roadmap, backlog, постановка задач разработке, синхронизация дизайна, аналитики, маркетинга и C-level.",
  },
] as const;

export const impactBars = [
  { name: "AI-агенты", value: 10, label: "10 запусков" },
  { name: "LTV", value: 180, label: "+180%" },
  { name: "GMV", value: 180, label: "+180%" },
  { name: "CAC", value: 80, label: "-80%" },
  { name: "MQL", value: 60, label: "+60%" },
  { name: "CPL", value: 20, label: "-20%" },
] as const;

export const stackRows = [
  { name: "Product", score: 95 },
  { name: "AI/LLM", score: 88 },
  { name: "Analytics", score: 86 },
  { name: "Growth", score: 84 },
  { name: "Delivery", score: 80 },
  { name: "Design/Web", score: 68 },
] as const;
