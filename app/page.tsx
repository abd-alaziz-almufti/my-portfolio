import Image from "next/image";
import Navbar from "./components/Navbar";
import BrowserFrame from "./components/BrowserFrame";
import ProductShowcase from "./components/ProductShowcase";

const EMAIL = "abedalmufti@gmail.com";
const CV_URL = "/Abdalaziz_Almufti_CV.pdf";

const links = {
  linkedin: "https://www.linkedin.com/in/abdalaziz-almufti-a6a9a53a9/",
  github: "https://github.com/abd-alaziz-almufti",
  whatsapp: "https://wa.me/972567048866",
};

const healthyLife = {
  url: "https://frontend-nextjs-phi-ten.vercel.app/ar",
  backend: "https://github.com/HealthyLife-AI/Backend-Laravel",
  frontend: "https://github.com/HealthyLife-AI/Frontend-Nextjs",
  built: [
    "Designed the multi-tenant architecture and MySQL schema, with a global scope that keeps every clinic's patient data isolated, and role-based permissions.",
    "Built the Laravel REST API that serves both the Next.js dashboard for specialists and the Flutter app for patients.",
    "Added an AI layer: rule-based alerts when a patient's adherence drops, and LLM-written weekly summaries for each patient.",
    "Lead a team of three developers alongside design and marketing, and run releases and production deployment.",
  ],
  facts: [
    { label: "Role", value: "Founder & Tech Lead" },
    { label: "Since", value: "July 2026" },
    { label: "Status", value: "Live in production" },
    { label: "Stack", value: "Laravel, Next.js, MySQL, Flutter" },
  ],
};

const projects = [
  {
    title: "Real estate management, multi-tenant SaaS",
    summary:
      "Property, unit, lease, payment, expense and maintenance workflows for real estate companies. Built with a partner as a Laravel + Filament backend and a Next.js frontend.",
    detail:
      "Tenant isolation through a custom CompanyScope on every query, role-based access for five roles with Spatie Permission and Filament Shield, queued jobs and PHPUnit tests.",
    image: "/images/Project1.png",
    frame: "Real estate SaaS · public site",
    tech: ["Laravel", "Filament", "Next.js", "MySQL"],
    links: [
      { label: "Live demo", url: "https://real-state-frontend-with-nextjs-meo.vercel.app/" },
      { label: "Backend code", url: "https://github.com/abd-alaziz-almufti/real-estate-system" },
      { label: "Frontend code", url: "https://github.com/abd-alaziz-almufti/real_state_frontend_with_nextjs" },
    ],
  },
  {
    title: "Smart expense manager with AI analysis",
    summary:
      "A personal-finance app for expenses, budgets, income and alerts that asks the OpenAI API for a spending analysis and a budget plan for each user.",
    detail:
      "AI answers are held to a JSON contract, validated and parsed defensively, with rate limits and API failures handled and covered by tests using OpenAI fakes.",
    image: "/images/project2.png",
    frame: "Expense manager · dashboard",
    tech: ["Laravel", "Livewire", "Filament", "OpenAI API"],
    links: [
      { label: "Live demo", url: "https://expense-manager-project-production.up.railway.app/user/login" },
      { label: "Code", url: "https://github.com/abd-alaziz-almufti/Expense-Manager-Project" },
    ],
  },
  {
    title: "Unified University Platform",
    summary:
      "My graduation project at the Islamic University of Gaza, defended with distinction: one place for university services, with a ticketing system, announcements and an admin portal.",
    detail:
      "Ticket routing with chat-style replies, notifications, admission calculations, instant search and an approval flow for profile changes, with eager loading and caching.",
    image: "/images/project3.png",
    frame: "Unified University Platform · home",
    tech: ["Laravel", "Livewire", "Filament", "PostgreSQL"],
    links: [
      { label: "Live demo", url: "https://uup-iug.onrender.com/" },
      { label: "Code", url: "https://github.com/abd-alaziz-almufti/uup-iug" },
    ],
  },
];

const moreWork = [
  {
    title: "Dental clinic management system",
    text: "Multi-branch clinic backend for patients, appointments, visits, billing and inventory.",
    url: "https://github.com/abd-alaziz-almufti/DentalClinicManagementSystem",
  },
  {
    title: "Expense management microservices",
    text: "Event-driven services in Java and Spring Boot.",
    url: "https://github.com/abd-alaziz-almufti/Expense-Management-SpringBoot",
  },
];

const experience = [
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
];

const skills = [
  { group: "Backend", items: ["Laravel", "PHP", "Livewire", "Filament", "REST APIs", "Java & Spring Boot"] },
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Blade"] },
  { group: "AI", items: ["Claude API", "OpenAI API", "Structured output", "Prompt engineering"] },
  { group: "Data & tools", items: ["MySQL", "PostgreSQL", "RabbitMQ", "Docker", "PHPUnit", "Git"] },
];

const certifications = [
  { title: "Building with the Claude API", url: "https://verify.skilljar.com/c/7nz2rcvvsxtz" },
  { title: "AI Fluency: Framework & Foundations", url: "https://verify.skilljar.com/c/a2uyixvqek63" },
  { title: "Claude Code 101", url: "https://verify.skilljar.com/c/h9unvpzxc9mu" },
];

function SectionHeading({ id, title, note }: { id: string; title: string; note?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <h2 id={id} className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {note && <p className="max-w-md text-muted">{note}</p>}
    </div>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
    >
      {children}
    </a>
  );
}

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm font-medium text-muted">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                Open to Backend and Full Stack roles, remote or relocation
              </p>
              <h1 style={{ animationDelay: "90ms" }} className="reveal font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-[4.25rem]">
                I build web products end to end, from the database to production.
              </h1>
              <p style={{ animationDelay: "180ms" }} className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                I&apos;m Abdalaziz Almufti, a Full Stack Developer in Gaza working with Laravel and Next.js. I founded
                and lead <TextLink href={healthyLife.url}>HealthyLife AI</TextLink>, an Arabic-first platform for
                nutrition specialists that is live today.
              </p>
              <div style={{ animationDelay: "270ms" }} className="reveal mt-9 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="rounded-full bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-ink"
                >
                  See my work
                </a>
                <a
                  href={CV_URL}
                  download
                  className="rounded-full border border-ink/20 bg-surface px-6 py-3 font-semibold text-ink transition-colors hover:border-ink"
                >
                  Download CV
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-full px-2 py-3 font-semibold text-ink underline sm:px-6 decoration-ink/20 underline-offset-4 hover:decoration-ink"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
            <div style={{ animationDelay: "200ms" }} className="reveal-photo relative mx-auto h-56 w-56 md:h-72 md:w-72">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-accent-soft" aria-hidden="true" />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-line bg-surface">
                <Image
                  src="/images/MY Profile.jpeg"
                  alt="Portrait of Abdalaziz Almufti"
                  fill
                  sizes="(min-width: 768px) 288px, 224px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured: HealthyLife */}
        <section aria-labelledby="work" className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
            <SectionHeading id="work" title="Selected work" note="What I've built, starting with the product I run." />

            <article className="rounded-3xl bg-ink p-7 text-white md:p-12">
              <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-sm font-semibold text-[#8fd9bf]">Current project</p>
                <h3 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">HealthyLife AI</h3>
                <p className="mt-4 text-lg leading-relaxed text-white/80">
                  An Arabic-first SaaS platform for clinical nutrition specialists. They manage patients, design
                  meal plans from a library of local dishes, and get alerted between visits when a patient starts to
                  slip.
                </p>
                <ul className="mt-6 space-y-3">
                  {healthyLife.built.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-white/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8fd9bf]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={healthyLife.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-5 py-2.5 font-semibold text-ink transition-colors hover:bg-[#8fd9bf]"
                  >
                    Visit the platform
                  </a>
                  <a
                    href={healthyLife.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/25 px-5 py-2.5 font-semibold text-white transition-colors hover:border-white"
                  >
                    Backend code
                  </a>
                  <a
                    href={healthyLife.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/25 px-5 py-2.5 font-semibold text-white transition-colors hover:border-white"
                  >
                    Dashboard code
                  </a>
                </div>
              </div>
              <dl className="grid self-start gap-px overflow-hidden rounded-2xl bg-white/10">
                {healthyLife.facts.map((fact) => (
                  <div key={fact.label} className="bg-ink/95 px-6 py-5">
                    <dt className="text-sm text-white/60">{fact.label}</dt>
                    <dd className="mt-1 font-display text-xl font-bold">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              </div>
              <div className="mt-12 border-t border-white/10 pt-10">
                <h4 className="font-display text-xl font-bold">A look inside the product</h4>
                <div className="mt-5">
                  <ProductShowcase />
                </div>
              </div>
            </article>

            <div className="mt-16 divide-y divide-line border-y border-line">
              {projects.map((project) => (
                <article key={project.title} className="grid gap-6 py-10 md:grid-cols-[320px_1fr] md:gap-10">
                  <BrowserFrame label={project.frame} className="self-start">
                    <div className="project-shot relative aspect-[16/10] overflow-hidden bg-paper">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      sizes="(min-width: 768px) 320px, 100vw"
                      className="object-cover object-top"
                    />
                    </div>
                  </BrowserFrame>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink">{project.title}</h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-ink/85">{project.summary}</p>
                    <p className="mt-2 max-w-2xl leading-relaxed text-muted">{project.detail}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                      {project.tech.map((t) => (
                        <li key={t} className="rounded-md bg-accent-soft px-2.5 py-1 text-sm font-medium text-accent">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                      {project.links.map((link) => (
                        <TextLink key={link.label} href={link.url}>
                          {link.label}
                        </TextLink>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {moreWork.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-line p-6 transition-colors hover:border-accent"
                >
                  <h3 className="font-display text-lg font-bold text-ink group-hover:text-accent">{item.title}</h3>
                  <p className="mt-1 text-muted">{item.text}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section aria-labelledby="experience" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <SectionHeading id="experience" title="Experience and education" />
          <ol className="relative border-l-2 border-line pl-8">
            {experience.map((item) => (
              <li key={item.role + item.org} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-paper bg-accent"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium text-muted">{item.period}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-ink">
                  {item.role} <span className="font-medium text-muted">at {item.org}</span>
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-ink/80">{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Skills & certifications */}
        <section aria-labelledby="skills" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
            <SectionHeading id="skills" title="Skills" />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3 className="font-display text-lg font-bold text-ink">{s.group}</h3>
                  <ul className="mt-3 space-y-1.5 text-ink/80">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-3xl border border-line bg-surface p-7 md:p-10">
              <h3 className="font-display text-2xl font-bold text-ink">Certifications from Anthropic Education</h3>
              <ul className="mt-6 divide-y divide-line">
                {certifications.map((c) => (
                  <li key={c.title} className="flex flex-wrap items-center justify-between gap-3 py-4">
                    <span className="font-medium text-ink">{c.title}</span>
                    <TextLink href={c.url}>Verify credential</TextLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section aria-labelledby="contact" className="bg-ink text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <h2 id="contact" className="max-w-3xl font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              Hiring a backend or full stack developer?
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              I&apos;m open to full-time and remote roles, and to freelance projects. The quickest way to reach me is
              email.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-8 inline-block break-all font-display text-2xl font-bold text-[#8fd9bf] underline decoration-[#8fd9bf]/40 underline-offset-8 hover:decoration-[#8fd9bf] md:text-4xl"
            >
              {EMAIL}
            </a>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { label: "LinkedIn", url: links.linkedin },
                { label: "GitHub", url: links.github },
                { label: "WhatsApp", url: links.whatsapp },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 px-5 py-2.5 font-semibold transition-colors hover:border-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={CV_URL}
                download
                className="rounded-full bg-white px-5 py-2.5 font-semibold text-ink transition-colors hover:bg-[#8fd9bf]"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-ink text-white/50">
        <div className="mx-auto max-w-6xl border-t border-white/10 px-5 py-6 text-sm md:px-8">
          © 2026 Abdalaziz Almufti. Gaza, Palestine.
        </div>
      </footer>
    </>
  );
}
