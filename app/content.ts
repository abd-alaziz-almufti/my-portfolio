export type Lang = "en" | "ar";

export const EMAIL = "abedalmufti@gmail.com";
export const SITE_URL = "https://my-portfolio-zeta-three-9gki3si54m.vercel.app";
export const CV_URL = "/Abdalaziz_Almufti_CV.pdf";

export const links = {
  linkedin: "https://www.linkedin.com/in/abdalaziz-almufti-a6a9a53a9/",
  github: "https://github.com/abd-alaziz-almufti",
  whatsapp: "https://wa.me/972567048866",
  healthyLife: "https://frontend-nextjs-phi-ten.vercel.app/ar",
  healthyLifeBackend: "https://github.com/HealthyLife-AI/Backend-Laravel",
  healthyLifeFrontend: "https://github.com/HealthyLife-AI/Frontend-Nextjs",
};

export const heroStack = [
  "Laravel", "Next.js", "TypeScript", "MySQL", "PostgreSQL", "Livewire", "Filament",
  "Claude API", "OpenAI API", "Tailwind CSS", "Docker", "RabbitMQ", "PHPUnit", "REST APIs",
];

const certifications = [
  { title: "Building with the Claude API", url: "https://verify.skilljar.com/c/7nz2rcvvsxtz" },
  { title: "AI Fluency: Framework & Foundations", url: "https://verify.skilljar.com/c/a2uyixvqek63" },
  { title: "Claude Code 101", url: "https://verify.skilljar.com/c/h9unvpzxc9mu" },
];

const projectLinks = {
  realEstate: {
    demo: "https://real-state-frontend-with-nextjs-meo.vercel.app/",
    backend: "https://github.com/abd-alaziz-almufti/real-estate-system",
    frontend: "https://github.com/abd-alaziz-almufti/real_state_frontend_with_nextjs",
  },
  expense: {
    demo: "https://expense-manager-project-production.up.railway.app/user/login",
    code: "https://github.com/abd-alaziz-almufti/Expense-Manager-Project",
  },
  university: {
    demo: "https://uup-iug.onrender.com/",
    code: "https://github.com/abd-alaziz-almufti/uup-iug",
  },
  dental: "https://github.com/abd-alaziz-almufti/DentalClinicManagementSystem",
  microservices: "https://github.com/abd-alaziz-almufti/Expense-Management-SpringBoot",
};

const en = {
  name: "Abdalaziz Almufti",
  nav: {
    items: [
      { name: "Work", href: "#work" },
      { name: "Experience", href: "#experience" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ],
    cv: "Download CV",
    cvShort: "CV",
    main: "Main",
    theme: "Switch between light and dark",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchTo: { href: "/ar", label: "العربية", short: "ع", lang: "ar", title: "النسخة العربية" },
  },
  hero: {
    badge: "Open to Backend and Full Stack roles, remote or relocation",
    title: "I build web products end to end, from the database to production.",
    introBefore: "I'm Abdalaziz Almufti, a Full Stack Developer in Gaza working with Laravel and Next.js. I founded and lead ",
    introAfter: ", an Arabic-first platform for nutrition specialists that is live today.",
    seeWork: "See my work",
    photoAlt: "Portrait of Abdalaziz Almufti",
    liveChip: "Live in production",
    roleLabel: "Role",
    role: "Founder & Tech Lead",
    stackLabel: "Technologies I work with",
  },
  ribbon: {
    label: "A look at the work",
    line1: "BUILT AND",
    line2: "SHIPPED",
    staticBefore: "Built and ",
    staticAccent: "shipped",
    caption: "Screens from products I designed, built and put in production.",
    hint: "Keep scrolling",
    items: [
      { title: "HealthyLife AI · Clinic dashboard", image: "/images/hl-dashboard.webp", href: "#project-healthylife" },
      { title: "Real estate SaaS", image: "/images/Project1.png", href: "#project-real-estate" },
      { title: "HealthyLife AI · Meal plan builder", image: "/images/hl-meal-plan.webp", href: "#project-healthylife" },
      { title: "Smart expense manager", image: "/images/project2.png", href: "#project-expense-manager" },
      { title: "HealthyLife AI · Adherence alerts", image: "/images/hl-alerts.webp", href: "#project-healthylife" },
      { title: "Unified University Platform", image: "/images/project3.png", href: "#project-university" },
    ],
  },
  work: {
    title: "Selected work",
    note: "What I've built, starting with the product I run.",
    techLabel: "Technologies",
    shotAlt: (title: string) => `Screenshot of ${title}`,
  },
  healthyLife: {
    eyebrow: "Current project",
    text: "An Arabic-first SaaS platform for clinical nutrition specialists. They manage patients, design meal plans from a library of local dishes, and get alerted between visits when a patient starts to slip.",
    built: [
      "Designed the multi-tenant architecture and MySQL schema, with a global scope that keeps every clinic's patient data isolated, and role-based permissions.",
      "Built the Laravel REST API that serves both the Next.js dashboard for specialists and the Flutter app for patients.",
      "Added an AI layer: rule-based alerts when a patient's adherence drops, and LLM-written weekly summaries for each patient.",
      "Lead a team of three developers alongside design and marketing, and run releases and production deployment.",
    ],
    visit: "Visit the platform",
    backend: "Backend code",
    dashboard: "Dashboard code",
    facts: [
      { label: "Role", value: "Founder & Tech Lead" },
      { label: "Since", value: "July", year: 2026 },
      { label: "Status", value: "Live in production" },
      { label: "Stack", value: "Laravel, Next.js, MySQL, Flutter" },
    ] as { label: string; value: string; year?: number }[],
    inside: "A look inside the product",
    showcase: {
      label: "HealthyLife AI screens",
      frame: "HealthyLife AI · Specialist dashboard",
      views: [
        {
          id: "dashboard",
          tab: "Clinic dashboard",
          caption: "Each specialist starts the day with the patients who need attention and the alerts they haven't read.",
          image: "/images/hl-dashboard.webp",
          alt: "HealthyLife AI clinic dashboard in Arabic, showing patient counts, patients who stopped logging meals, and a welcome banner for the nutritionist",
        },
        {
          id: "meal-plan",
          tab: "Meal plan builder",
          caption: "Plans are built meal by meal from local dishes, with alternatives, and the calories and macros update with every change.",
          image: "/images/hl-meal-plan.webp",
          alt: "HealthyLife AI meal plan builder in Arabic, with breakfast items and their alternatives and a daily nutrition summary ring showing 2011 of 2349 calories",
        },
        {
          id: "alerts",
          tab: "Adherence alerts",
          caption: "The system flags patients who stopped logging or went over their targets, and celebrates progress, before the next visit.",
          image: "/images/hl-alerts.webp",
          alt: "HealthyLife AI alerts page in Arabic, listing patients who have not logged meals for three days, one who exceeded calorie targets, and one weight-loss achievement",
        },
      ],
    },
  },
  projects: [
    {
      id: "project-real-estate",
      title: "Real estate management, multi-tenant SaaS",
      summary: "Property, unit, lease, payment, expense and maintenance workflows for real estate companies. Built with a partner as a Laravel + Filament backend and a Next.js frontend.",
      detail: "Tenant isolation through a custom CompanyScope on every query, role-based access for five roles with Spatie Permission and Filament Shield, queued jobs and PHPUnit tests.",
      image: "/images/Project1.png",
      frame: "Real estate SaaS · public site",
      tech: ["Laravel", "Filament", "Next.js", "MySQL"],
      links: [
        { label: "Live demo", url: projectLinks.realEstate.demo },
        { label: "Backend code", url: projectLinks.realEstate.backend },
        { label: "Frontend code", url: projectLinks.realEstate.frontend },
      ],
    },
    {
      id: "project-expense-manager",
      title: "Smart expense manager with AI analysis",
      summary: "A personal-finance app for expenses, budgets, income and alerts that asks the OpenAI API for a spending analysis and a budget plan for each user.",
      detail: "AI answers are held to a JSON contract, validated and parsed defensively, with rate limits and API failures handled and covered by tests using OpenAI fakes.",
      image: "/images/project2.png",
      frame: "Expense manager · dashboard",
      tech: ["Laravel", "Livewire", "Filament", "OpenAI API"],
      links: [
        { label: "Live demo", url: projectLinks.expense.demo },
        { label: "Code", url: projectLinks.expense.code },
      ],
    },
    {
      id: "project-university",
      title: "Unified University Platform",
      summary: "My graduation project at the Islamic University of Gaza, defended with distinction: one place for university services, with a ticketing system, announcements and an admin portal.",
      detail: "Ticket routing with chat-style replies, notifications, admission calculations, instant search and an approval flow for profile changes, with eager loading and caching.",
      image: "/images/project3.png",
      frame: "Unified University Platform · home",
      tech: ["Laravel", "Livewire", "Filament", "PostgreSQL"],
      links: [
        { label: "Live demo", url: projectLinks.university.demo },
        { label: "Code", url: projectLinks.university.code },
      ],
    },
  ],
  moreWork: [
    {
      title: "Dental clinic management system",
      text: "Multi-branch clinic backend for patients, appointments, visits, billing and inventory.",
      url: projectLinks.dental,
    },
    {
      title: "Expense management microservices",
      text: "Event-driven services in Java and Spring Boot.",
      url: projectLinks.microservices,
    },
  ],
  experience: {
    title: "Experience and education",
    blurb: "A little over two years from trainee to running a product in production, with a software degree finished along the way.",
    at: "at",
    numbers: [
      { value: 6, label: "Products and systems built" },
      { value: 4, label: "Live demos you can open today" },
      { value: 3, label: "Developers on the team I lead" },
    ],
    items: [
      {
        period: "Jul 2026 – now",
        role: "Founder & Tech Lead",
        org: "HealthyLife AI",
        text: "Founded the product and lead its team. Own the architecture, database, backend, web dashboard and production.",
      },
      {
        period: "Jul 2026 – now",
        role: "Trainee, Code Map 3 program",
        org: "Taqat",
        text: "Started HealthyLife AI in the program and took it from interviews with nutritionists and an MVP spec to a production release.",
      },
      {
        period: "Jun 2024 – Mar 2025",
        role: "Laravel Developer (Trainee)",
        org: "Webura, Gaza",
        text: "Intensive project-based Laravel training. Built an e-commerce platform end to end with Stripe payments and a Livewire admin dashboard.",
      },
      {
        period: "2022 – 2026",
        role: "B.Sc. in Software Development",
        org: "Islamic University of Gaza",
        text: "Graduated in June 2026 with a grade of Very Good, in an English-taught program.",
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      { group: "Backend", items: ["Laravel", "PHP", "Livewire", "Filament", "REST APIs", "Java & Spring Boot"] },
      { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Blade"] },
      { group: "AI", items: ["Claude API", "OpenAI API", "Structured output", "Prompt engineering"] },
      { group: "Data & tools", items: ["MySQL", "PostgreSQL", "RabbitMQ", "Docker", "PHPUnit", "Git"] },
    ],
    certsTitle: "Certifications from Anthropic Education",
    verify: "Verify credential",
    certifications,
  },
  contact: {
    title: "Hiring a backend or full stack developer?",
    text: "I'm open to full-time and remote roles, and to freelance projects. The quickest way to reach me is email.",
  },
  footer: "© 2026 Abdalaziz Almufti. Gaza, Palestine.",
};

export type Content = typeof en;

const ar: Content = {
  name: "عبدالعزيز المفتي",
  nav: {
    items: [
      { name: "الأعمال", href: "#work" },
      { name: "الخبرات", href: "#experience" },
      { name: "المهارات", href: "#skills" },
      { name: "تواصل", href: "#contact" },
    ],
    cv: "تحميل السيرة الذاتية",
    cvShort: "السيرة",
    main: "التنقل الرئيسي",
    theme: "التبديل بين الوضع الفاتح والداكن",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    switchTo: { href: "/", label: "English", short: "EN", lang: "en", title: "English version" },
  },
  hero: {
    badge: "متاح لوظائف Backend و Full Stack، عن بُعد أو بالانتقال",
    title: "أبني منتجات الويب كاملةً، من قاعدة البيانات حتى الإنتاج.",
    introBefore: "أنا عبدالعزيز المفتي، مطوّر Full Stack من غزة أعمل بـ Laravel و Next.js. أسّست وأقود ",
    introAfter: "، منصة عربية لأخصائيي التغذية وهي تعمل اليوم لدى مستخدميها.",
    seeWork: "شاهد أعمالي",
    photoAlt: "صورة شخصية لعبدالعزيز المفتي",
    liveChip: "تعمل الآن في الإنتاج",
    roleLabel: "الدور",
    role: "المؤسس والقائد التقني",
    stackLabel: "التقنيات التي أعمل بها",
  },
  ribbon: {
    label: "نظرة على الأعمال",
    line1: "من الفكرة",
    line2: "إلى الإنتاج",
    staticBefore: "من الفكرة ",
    staticAccent: "إلى الإنتاج",
    caption: "لقطات من منتجات صمّمتها وبنيتها وأطلقتها.",
    hint: "واصل التمرير",
    items: [
      { title: "HealthyLife AI · لوحة العيادة", image: "/images/hl-dashboard.webp", href: "#project-healthylife" },
      { title: "نظام إدارة العقارات", image: "/images/Project1.png", href: "#project-real-estate" },
      { title: "HealthyLife AI · منشئ الخطط الغذائية", image: "/images/hl-meal-plan.webp", href: "#project-healthylife" },
      { title: "مدير المصاريف الذكي", image: "/images/project2.png", href: "#project-expense-manager" },
      { title: "HealthyLife AI · تنبيهات الالتزام", image: "/images/hl-alerts.webp", href: "#project-healthylife" },
      { title: "المنصة الجامعية الموحدة", image: "/images/project3.png", href: "#project-university" },
    ],
  },
  work: {
    title: "أعمال مختارة",
    note: "ما بنيته، بدءًا بالمنتج الذي أديره.",
    techLabel: "التقنيات",
    shotAlt: (title: string) => `لقطة شاشة من ${title}`,
  },
  healthyLife: {
    eyebrow: "المشروع الحالي",
    text: "منصة SaaS عربية لأخصائيي التغذية العلاجية. يديرون مرضاهم، ويصمّمون الخطط الغذائية من مكتبة أطباق محلية، وتصلهم تنبيهات بين الزيارات عندما يبدأ التزام المريض بالتراجع.",
    built: [
      "صمّمت معمارية multi-tenant ومخطط MySQL، مع global scope يعزل بيانات مرضى كل عيادة، وصلاحيات مبنية على الأدوار.",
      "بنيت REST API بـ Laravel يخدم لوحة Next.js للأخصائيين وتطبيق Flutter للمرضى.",
      "أضفت طبقة ذكاء اصطناعي: تنبيهات مبنية على قواعد عند انخفاض التزام المريض، وملخصات أسبوعية لكل مريض يكتبها نموذج لغوي.",
      "أقود فريقًا من ثلاثة مطورين إلى جانب التصميم والتسويق، وأدير الإصدارات والنشر على بيئة الإنتاج.",
    ],
    visit: "زيارة المنصة",
    backend: "كود الـ Backend",
    dashboard: "كود لوحة التحكم",
    facts: [
      { label: "الدور", value: "المؤسس والقائد التقني" },
      { label: "منذ", value: "يوليو", year: 2026 },
      { label: "الحالة", value: "تعمل في بيئة الإنتاج" },
      { label: "التقنيات", value: "Laravel, Next.js, MySQL, Flutter" },
    ],
    inside: "نظرة داخل المنتج",
    showcase: {
      label: "شاشات HealthyLife AI",
      frame: "HealthyLife AI · لوحة الأخصائي",
      views: [
        {
          id: "dashboard",
          tab: "لوحة العيادة",
          caption: "يبدأ كل أخصائي يومه بالمرضى الذين يحتاجون متابعة والتنبيهات التي لم يقرأها بعد.",
          image: "/images/hl-dashboard.webp",
          alt: "لوحة العيادة في HealthyLife AI تعرض أعداد المرضى، والمرضى الذين توقفوا عن تسجيل وجباتهم، وترحيبًا بالأخصائي",
        },
        {
          id: "meal-plan",
          tab: "منشئ الخطط الغذائية",
          caption: "تُبنى الخطط وجبةً وجبة من أطباق محلية مع بدائل، وتتحدّث السعرات والعناصر الغذائية مع كل تعديل.",
          image: "/images/hl-meal-plan.webp",
          alt: "منشئ الخطط الغذائية في HealthyLife AI يعرض أصناف الفطور وبدائلها وملخصًا يوميًا يظهر 2011 من 2349 سعرة",
        },
        {
          id: "alerts",
          tab: "تنبيهات الالتزام",
          caption: "يرصد النظام المرضى الذين توقفوا عن التسجيل أو تجاوزوا أهدافهم، ويحتفي بالتقدّم، قبل الزيارة التالية.",
          image: "/images/hl-alerts.webp",
          alt: "صفحة التنبيهات في HealthyLife AI تعرض مرضى لم يسجلوا وجباتهم منذ ثلاثة أيام، ومريضًا تجاوز هدف السعرات، وإنجازًا في خسارة الوزن",
        },
      ],
    },
  },
  projects: [
    {
      id: "project-real-estate",
      title: "إدارة العقارات، نظام SaaS متعدد المستأجرين",
      summary: "سير عمل كامل للعقارات والوحدات والعقود والدفعات والمصاريف والصيانة لشركات العقارات. بنيته مع شريك: Backend بـ Laravel و Filament وواجهة بـ Next.js.",
      detail: "عزل بيانات كل شركة عبر CompanyScope مخصص على كل استعلام، وصلاحيات لخمسة أدوار بـ Spatie Permission و Filament Shield، مع queued jobs واختبارات PHPUnit.",
      image: "/images/Project1.png",
      frame: "نظام العقارات · الموقع العام",
      tech: ["Laravel", "Filament", "Next.js", "MySQL"],
      links: [
        { label: "عرض حي", url: projectLinks.realEstate.demo },
        { label: "كود الـ Backend", url: projectLinks.realEstate.backend },
        { label: "كود الواجهة", url: projectLinks.realEstate.frontend },
      ],
    },
    {
      id: "project-expense-manager",
      title: "مدير مصاريف ذكي بتحليل الذكاء الاصطناعي",
      summary: "تطبيق للمالية الشخصية يدير المصاريف والميزانيات والدخل والتنبيهات، ويطلب من OpenAI API تحليلًا للإنفاق وخطة ميزانية لكل مستخدم.",
      detail: "ردود الذكاء الاصطناعي ملزمة بعقد JSON وتُفحص وتُحلَّل بحذر، مع معالجة حدود الطلبات وأعطال الـ API وتغطيتها باختبارات تستخدم OpenAI fakes.",
      image: "/images/project2.png",
      frame: "مدير المصاريف · لوحة التحكم",
      tech: ["Laravel", "Livewire", "Filament", "OpenAI API"],
      links: [
        { label: "عرض حي", url: projectLinks.expense.demo },
        { label: "الكود", url: projectLinks.expense.code },
      ],
    },
    {
      id: "project-university",
      title: "المنصة الجامعية الموحدة",
      summary: "مشروع تخرجي في الجامعة الإسلامية بغزة، ناقشته بامتياز: مكان واحد لخدمات الجامعة، فيه نظام تذاكر وإعلانات وبوابة إدارة.",
      detail: "توجيه التذاكر مع ردود بأسلوب المحادثة، وإشعارات، وحساب معدلات القبول، وبحث فوري، ومسار موافقة على تعديل الملف الشخصي، مع eager loading و caching.",
      image: "/images/project3.png",
      frame: "المنصة الجامعية الموحدة · الرئيسية",
      tech: ["Laravel", "Livewire", "Filament", "PostgreSQL"],
      links: [
        { label: "عرض حي", url: projectLinks.university.demo },
        { label: "الكود", url: projectLinks.university.code },
      ],
    },
  ],
  moreWork: [
    {
      title: "نظام إدارة عيادة أسنان",
      text: "Backend لعيادة متعددة الفروع يدير المرضى والمواعيد والزيارات والفواتير والمخزون.",
      url: projectLinks.dental,
    },
    {
      title: "خدمات مصغّرة لإدارة المصاريف",
      text: "خدمات event-driven بـ Java و Spring Boot.",
      url: projectLinks.microservices,
    },
  ],
  experience: {
    title: "الخبرات والتعليم",
    blurb: "أكثر من سنتين بقليل، من متدرّب إلى إدارة منتج يعمل في بيئة الإنتاج، مع إنهاء شهادة البرمجيات في الطريق.",
    at: "في",
    numbers: [
      { value: 6, label: "منتجات وأنظمة بنيتها" },
      { value: 4, label: "عروض حيّة يمكنك فتحها اليوم" },
      { value: 3, label: "مطورين في الفريق الذي أقوده" },
    ],
    items: [
      {
        period: "يوليو 2026 – الآن",
        role: "المؤسس والقائد التقني",
        org: "HealthyLife AI",
        text: "أسّست المنتج وأقود فريقه. مسؤول عن المعمارية وقاعدة البيانات والـ Backend ولوحة الويب وبيئة الإنتاج.",
      },
      {
        period: "يوليو 2026 – الآن",
        role: "متدرّب، برنامج Code Map 3",
        org: "طاقات",
        text: "بدأت HealthyLife AI ضمن البرنامج ونقلتها من مقابلات مع أخصائيي التغذية ومواصفات MVP إلى إصدار يعمل في بيئة الإنتاج.",
      },
      {
        period: "يونيو 2024 – مارس 2025",
        role: "مطوّر Laravel (متدرّب)",
        org: "Webura، غزة",
        text: "تدريب مكثّف على Laravel مبني على المشاريع. بنيت منصة تجارة إلكترونية كاملة بمدفوعات Stripe ولوحة إدارة بـ Livewire.",
      },
      {
        period: "2022 – 2026",
        role: "بكالوريوس تطوير البرمجيات",
        org: "الجامعة الإسلامية بغزة",
        text: "تخرّجت في يونيو 2026 بتقدير جيد جدًا، في برنامج يُدرَّس بالإنجليزية.",
      },
    ],
  },
  skills: {
    title: "المهارات",
    groups: [
      { group: "الواجهة الخلفية", items: ["Laravel", "PHP", "Livewire", "Filament", "REST APIs", "Java & Spring Boot"] },
      { group: "الواجهة الأمامية", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Blade"] },
      { group: "الذكاء الاصطناعي", items: ["Claude API", "OpenAI API", "Structured output", "Prompt engineering"] },
      { group: "البيانات والأدوات", items: ["MySQL", "PostgreSQL", "RabbitMQ", "Docker", "PHPUnit", "Git"] },
    ],
    certsTitle: "شهادات من Anthropic Education",
    verify: "تحقّق من الشهادة",
    certifications,
  },
  contact: {
    title: "تبحث عن مطوّر Backend أو Full Stack؟",
    text: "متاح للوظائف بدوام كامل وعن بُعد، وللمشاريع المستقلة. أسرع طريقة للتواصل معي هي البريد الإلكتروني.",
  },
  footer: "© 2026 عبدالعزيز المفتي. غزة، فلسطين.",
};

export const content: Record<Lang, Content> = { en, ar };
