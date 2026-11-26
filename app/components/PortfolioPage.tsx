import Image from "next/image";
import Navbar from "./Navbar";
import BrowserFrame from "./BrowserFrame";
import ProductShowcase from "./ProductShowcase";
import Architecture from "./Architecture";
import SmoothScroll from "./SmoothScroll";
import Interactions from "./Interactions";
import AssistantWidget from "./AssistantWidget";
import ApiChip from "./ApiChip";
import WorkRibbon from "./WorkRibbon";
import { BlurText, LightRays, StarBorder, CountUp } from "./react-bits";
import { content, links, heroStack, EMAIL, CV_URL, SITE_URL, type Lang } from "../content";

function Kicker({ index, label }: { index: string; label: string }) {
  return (
    <p className="section-kicker" dir="ltr" aria-hidden="true">
      <span className="text-sun">{index}</span> {"//"} {label}
    </p>
  );
}

function SectionHeading({ id, index, title, note }: { id: string; index: string; title: string; note?: string }) {
  return (
    <div data-reveal className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <Kicker index={index} label={id} />
        <h2 id={id} className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          {title}
        </h2>
      </div>
      {note && <p className="max-w-md text-muted">{note}</p>}
    </div>
  );
}

const SERVICE_ICONS = [
  // server
  <svg key="server" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6" /></svg>,
  // layers
  <svg key="layers" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></svg>,
  // sparkles
  <svg key="spark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3.5 11.6 8a2 2 0 0 0 1.3 1.3l4.6 1.6-4.6 1.6a2 2 0 0 0-1.3 1.3L10 18.5l-1.6-4.6a2 2 0 0 0-1.3-1.3L2.5 11l4.6-1.6A2 2 0 0 0 8.4 8L10 3.5Z" /><path d="M18.5 3v4M16.5 5h4M18 16v3M16.5 17.5h3" /></svg>,
];

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

export default function PortfolioPage({ lang }: { lang: Lang }) {
  const t = content[lang];
  const hl = t.healthyLife;
  const scopeMail = `mailto:${EMAIL}?subject=${encodeURIComponent(t.hero.ctaSubject)}`;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t.name,
    alternateName: lang === "ar" ? content.en.name : content.ar.name,
    jobTitle: "Backend Developer",
    url: lang === "ar" ? `${SITE_URL}/ar` : SITE_URL,
    image: `${SITE_URL}/images/abdalaziz-portrait.webp`,
    email: `mailto:${EMAIL}`,
    address: { "@type": "PostalAddress", addressLocality: "Gaza", addressCountry: "PS" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Islamic University of Gaza" },
    worksFor: { "@type": "Organization", name: "HealthyLife AI", url: links.healthyLife },
    knowsAbout: heroStack,
    sameAs: [links.linkedin, links.github],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
      />
      <SmoothScroll />
      <Interactions />
      <Navbar name={t.name} nav={t.nav} />
      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <div className="hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
          <div className="hero-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
          <div className="hero-rays pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <LightRays
              raysOrigin="top-right"
              raysColor="#0a7a5c"
              lightMode
              raysSpeed={0.5}
              lightSpread={0.8}
              rayLength={2.2}
              glow={0.5}
              haze={0.2}
              intensity={1}
              opacity={0.9}
              followMouse={false}
              cursorShadow={false}
              clickPulse={false}
              maxDevicePixelRatio={1.5}
            />
          </div>
          <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
            <div className="grid items-center gap-14 md:grid-cols-[1fr_auto] md:gap-20">
              <div className="max-w-3xl">
                <p className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm font-medium text-muted">
                  <span className="live-dot" aria-hidden="true" />
                  {t.hero.badge}
                </p>
                <BlurText
                  as="h1"
                  text={t.hero.title}
                  highlight={t.hero.titleAccent}
                  animateBy="words"
                  direction="bottom"
                  delay={70}
                  blur={8}
                  distance={18}
                  stepDuration={0.45}
                  className="hero-title font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-[4.25rem]"
                />
                <p
                  style={{ animationDelay: "180ms" }}
                  className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
                >
                  {t.hero.introBefore}
                  <TextLink href={links.healthyLife}>HealthyLife AI</TextLink>
                  {t.hero.introAfter}
                </p>
                <div style={{ animationDelay: "270ms" }} className="reveal mt-9 flex flex-wrap gap-3">
                  <span data-magnetic className="magnetic inline-flex">
                  <StarBorder
                    as="a"
                    href={scopeMail}
                    radius={9999}
                    backgroundColor="#0a7a5c"
                    textColor="#ffffff"
                    color="#7fe3bf"
                    duration={6}
                    glow={0.4}
                    clickPulse={false}
                    className="font-semibold"
                  >
                    {t.hero.ctaPrimary}
                  </StarBorder>
                  </span>
                  <a
                    href="#work"
                    className="rounded-full border border-ink/20 bg-surface px-6 py-3 font-semibold text-ink transition-colors hover:border-ink"
                  >
                    {t.hero.seeWork}
                  </a>
                </div>
                <ul style={{ animationDelay: "360ms" }} className="reveal mt-10 grid max-w-xl grid-cols-3 gap-3">
                  {t.hero.stats.map((s) => {
                    const body = (
                      <>
                        <span className="stat-value block font-display text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl" dir="ltr">
                          {s.value}
                        </span>
                        <span className="mt-1 block text-sm text-muted">{s.label}</span>
                      </>
                    );
                    return (
                      <li key={s.label} data-spotlight className="stat-tile spotlight">
                        {s.href ? (
                          <a href={s.href} className="stat-link group block">
                            {body}
                          </a>
                        ) : (
                          body
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div style={{ animationDelay: "200ms" }} className="reveal-photo relative mx-auto w-60 md:w-[21rem]">
                <div data-parallax="-36" className="relative aspect-[4/5]">
                  <div className="photo-ring absolute -inset-[3px] rounded-[2.2rem]" aria-hidden="true" />
                  <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-night">
                    <Image
                      src="/images/abdalaziz-portrait.webp"
                      alt={t.hero.photoAlt}
                      fill
                      sizes="(min-width: 768px) 336px, 240px"
                      className="object-cover object-[50%_30%]"
                      priority
                    />
                  </div>
                </div>
                <a
                  href={links.healthyLife}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-parallax="-70"
                  className="hero-chip float-a absolute -start-4 bottom-10 md:-start-14"
                >
                  <span className="live-dot" aria-hidden="true" />
                  <span>
                    <span className="block text-xs text-muted">HealthyLife AI</span>
                    <span className="block font-semibold text-ink">{t.hero.liveChip}</span>
                  </span>
                </a>
                <div data-parallax="-12" className="api-chip float-b absolute -end-3 top-8 md:-end-16" dir="ltr" aria-hidden="true">
                  <ApiChip request={t.hero.apiChip.request} status={t.hero.apiChip.status} time={t.hero.apiChip.time} />
                </div>
                <div data-parallax="-24" className="hero-chip float-a absolute -end-6 bottom-[-1.25rem] md:-end-12" aria-hidden="true">
                  <span>
                    <span className="block text-xs text-muted">{t.hero.roleLabel}</span>
                    <span className="block font-semibold text-ink">{t.hero.role}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="marquee border-t border-line/70" dir="ltr" aria-label={t.hero.stackLabel}>
            <ul className="marquee-row">
              {[...heroStack, ...heroStack].map((item, i) => (
                <li key={i} aria-hidden={i >= heroStack.length || undefined}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <WorkRibbon text={t.ribbon} />

        {/* Featured: HealthyLife */}
        <section aria-labelledby="work" className="border-b border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
            <SectionHeading id="work" index="01" title={t.work.title} note={t.work.note} />

            <article id="project-healthylife" data-reveal className="panel-dark rounded-3xl p-7 text-white md:p-12">
              <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="text-sm font-semibold text-sun">{hl.eyebrow}</p>
                  <h3 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">HealthyLife AI</h3>
                  <p className="mt-4 text-lg leading-relaxed text-white/80">{hl.text}</p>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-sm font-semibold text-sun">{hl.problemLabel}</p>
                    <p className="mt-2 leading-relaxed text-white/85">{hl.problem}</p>
                  </div>
                  <ul data-stagger className="mt-6 space-y-3">
                    {hl.built.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-white/85">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl border border-mint/25 bg-mint/[0.06] p-5">
                    <p className="text-sm font-semibold text-mint">{hl.outcomeLabel}</p>
                    <p className="mt-2 leading-relaxed text-white/85">{hl.outcome}</p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={links.healthyLife}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-5 py-2.5 font-semibold text-night transition-colors hover:bg-mint"
                    >
                      {hl.visit}
                    </a>
                    <a
                      href={links.healthyLifeBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/25 px-5 py-2.5 font-semibold text-white transition-colors hover:border-white"
                    >
                      {hl.backend}
                    </a>
                    <a
                      href={links.healthyLifeFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/25 px-5 py-2.5 font-semibold text-white transition-colors hover:border-white"
                    >
                      {hl.dashboard}
                    </a>
                  </div>
                </div>
                <div className="space-y-4 self-start">
                  <dl className="grid gap-px overflow-hidden rounded-2xl bg-white/10">
                    {hl.facts.map((fact) => (
                      <div key={fact.label} className="bg-night/90 px-6 py-5">
                        <dt className="text-sm text-white/60">{fact.label}</dt>
                        <dd className="mt-1 font-display text-xl font-bold">
                          {fact.value}
                          {fact.year && (
                            <>
                              {" "}
                              <CountUp to={fact.year} from={2020} duration={1.4} />
                            </>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5">
                    <p className="text-sm font-semibold text-sun">{hl.ownershipLabel}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{hl.ownership}</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 border-t border-white/10 pt-10">
                <h4 className="font-display text-xl font-bold">{hl.architecture.title}</h4>
                <div className="mt-6">
                  <Architecture text={hl.architecture} />
                </div>
              </div>
              <div className="mt-12 border-t border-white/10 pt-10">
                <h4 className="font-display text-xl font-bold">{hl.inside}</h4>
                <div className="mt-5">
                  <ProductShowcase text={hl.showcase} />
                </div>
              </div>
            </article>

            <div className="mt-20 space-y-20 md:mt-28 md:space-y-32">
              {t.projects.map((project, i) => (
                <article
                  id={project.id}
                  key={project.id}
                  className="grid items-center gap-8 md:grid-cols-[1.25fr_1fr] md:gap-14"
                >
                  <div data-shot className={i % 2 ? "md:order-2" : ""}>
                    <BrowserFrame label={project.frame}>
                      <div className="project-shot relative aspect-[16/9] overflow-hidden bg-paper">
                        <Image
                          src={project.image}
                          alt={t.work.shotAlt(project.title)}
                          fill
                          sizes="(min-width: 1152px) 600px, (min-width: 768px) 55vw, 100vw"
                          className="object-cover object-top"
                        />
                      </div>
                    </BrowserFrame>
                  </div>
                  <div data-stagger>
                    <p className="text-sm font-medium tabular-nums text-muted" dir="ltr">
                      <span className="text-accent">0{i + 2}</span> <span className="mx-1 text-line">/</span> 0
                      {t.projects.length + 1}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-ink/85">{project.summary}</p>
                    <dl className="mt-5 grid gap-x-6 gap-y-3 rounded-xl border border-line bg-paper/60 p-4 sm:grid-cols-[auto_1fr]">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{t.work.roleLabel}</dt>
                        <dd className="mt-1 font-semibold text-ink">{project.role}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{t.work.highlightLabel}</dt>
                        <dd className="mt-1 font-semibold text-ink">{project.highlight}</dd>
                      </div>
                    </dl>
                    <dl className="mt-5 space-y-3 border-s-2 border-accent/30 ps-4">
                      {(["problem", "built", "outcome"] as const).map((key) => (
                        <div key={key}>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
                            {t.work.caseLabels[key]}
                            <span className="sr-only">: </span>
                          </dt>
                          <dd className="mt-1 leading-relaxed text-muted">{project[key]}</dd>
                        </div>
                      ))}
                    </dl>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.work.techLabel}>
                      {project.tech.map((tech) => (
                        <li key={tech} className="rounded-md bg-accent-soft px-2.5 py-1 text-sm font-medium text-accent">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
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

            <div data-reveal className="mt-20 grid gap-6 border-t border-line pt-10 md:mt-28 md:grid-cols-2">
              {t.moreWork.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lift group rounded-2xl border border-line p-6 hover:border-accent"
                >
                  <h3 className="font-display text-lg font-bold text-ink group-hover:text-accent">{item.title}</h3>
                  <p className="mt-1 text-muted">{item.text}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Services, for freelance clients */}
        <section aria-labelledby="services" className="border-b border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
            <SectionHeading id="services" index="02" title={t.services.title} note={t.services.note} />
            <div data-stagger className="grid gap-4 md:grid-cols-3">
              {t.services.items.map((item, i) => (
                <a
                  key={item.title}
                  href={item.href}
                  data-spotlight className="service-card spotlight lift group flex flex-col rounded-3xl border border-line bg-surface p-7"
                >
                  <span className="flex items-center justify-between">
                    <span className="service-icon" aria-hidden="true">
                      {SERVICE_ICONS[i]}
                    </span>
                    <span className="font-mono text-sm text-muted" dir="ltr">
                      0{i + 1}
                    </span>
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted">{item.text}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4">
                    {item.tech.split(" · ").map((tag) => (
                      <li key={tag} className="tech-pill">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    {item.proof}
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div data-reveal className="panel-dark mt-12 rounded-3xl p-7 text-white md:p-10">
              <h3 className="font-display text-2xl font-bold">{t.services.processTitle}</h3>
              <ol data-stagger className="mt-8 grid gap-8 md:grid-cols-4 md:gap-6">
                {t.services.process.map((step, i) => (
                  <li key={step.title} className="process-step">
                    <span className="font-mono text-sm text-mint" dir="ltr">
                      0{i + 1}
                    </span>
                    <h4 className="mt-2 font-display text-lg font-bold">{step.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">{step.text}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-2">
                {[
                  { title: t.services.firstWeekTitle, items: t.services.firstWeek },
                  { title: t.services.needTitle, items: t.services.need },
                ].map((block) => (
                  <div key={block.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <h4 className="font-display text-lg font-bold">{block.title}</h4>
                    <ul className="mt-4 space-y-2.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/80">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-3xl leading-relaxed text-white/75">{t.services.timeline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={scopeMail}
                  className="rounded-full bg-white px-5 py-2.5 font-semibold text-night transition-colors hover:bg-mint"
                >
                  {t.hero.ctaPrimary}
                </a>
                <a
                  href={links.brightGaza}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/25 px-5 py-2.5 font-semibold transition-colors hover:border-white"
                >
                  {t.services.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section aria-labelledby="experience" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
            <div className="self-start md:sticky md:top-28">
              <div data-reveal>
                <Kicker index="03" label="experience" />
              </div>
              <h2
                data-reveal
                id="experience"
                className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl"
              >
                {t.experience.title}
              </h2>
              <p data-reveal className="mt-4 max-w-sm leading-relaxed text-muted">
                {t.experience.blurb}
              </p>
              <dl data-stagger className="mt-8 divide-y divide-line border-y border-line">
                {t.experience.numbers.map((n) => (
                  <div key={n.label} className="flex items-baseline gap-5 py-4">
                    <dt className="order-2 text-ink/80">{n.label}</dt>
                    <dd className="order-1 w-12 font-display text-4xl font-extrabold tabular-nums text-accent">
                      <CountUp to={n.value} from={0} duration={1.2} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <ol data-timeline className="relative ps-8">
              <span className="absolute bottom-0 start-0 top-2 w-0.5 bg-line" aria-hidden="true" />
              <span
                data-timeline-fill
                className="absolute bottom-0 start-0 top-2 w-0.5 origin-top bg-accent"
                aria-hidden="true"
              />
              {t.experience.items.map((item) => (
                <li data-reveal key={item.role + item.org} className="relative pb-6 last:pb-0">
                  <span
                    className="absolute -start-[39px] top-7 h-4 w-4 rounded-full border-4 border-paper bg-accent"
                    aria-hidden="true"
                  />
                  <div className="lift rounded-2xl border border-line bg-surface p-6">
                    <p className="text-sm font-medium text-muted">{item.period}</p>
                    <h3 className="mt-1 font-display text-xl font-bold text-ink">
                      {item.role}{" "}
                      <span className="font-medium text-muted">
                        {t.experience.at} {item.org}
                      </span>
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink/80">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Skills & certifications */}
        <section aria-labelledby="skills" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
            <SectionHeading id="skills" index="04" title={t.skills.title} />
            <div data-stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {t.skills.groups.map((s, i) => {
                const core = i < 2;
                return (
                  <div
                    key={s.group}
                    data-spotlight
                    className={`skill-card spotlight rounded-2xl border bg-surface ${
                      core
                        ? "skill-core border-accent/40 p-7 sm:col-span-2 md:p-8 lg:col-span-3"
                        : "border-line p-6 lg:col-span-2"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium tabular-nums text-accent">0{i + 1}</p>
                        <h3 className={`mt-1 font-display font-bold text-ink ${core ? "text-2xl md:text-3xl" : "text-xl"}`}>
                          {s.group}
                        </h3>
                      </div>
                      {i === 0 && (
                        <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
                          {t.skills.coreNote}
                        </span>
                      )}
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className={`rounded-md bg-accent-soft font-medium text-accent ${
                            core ? "px-3 py-1.5 text-base" : "px-2.5 py-1 text-sm"
                          }`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div id="certifications" data-reveal data-spotlight className="spotlight mt-16 rounded-3xl border border-line bg-surface p-7 md:p-10">
              <h3 className="font-display text-2xl font-bold text-ink">{t.skills.certsTitle}</h3>
              <ul className="mt-6 divide-y divide-line">
                {t.skills.certifications.map((c) => (
                  <li key={c.title} className="flex flex-wrap items-center justify-between gap-3 py-4">
                    <span className="font-medium text-ink" dir="ltr">
                      {c.title}
                    </span>
                    <TextLink href={c.url}>{t.skills.verify}</TextLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Beyond the code */}
        <section aria-labelledby="beyond" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
            <SectionHeading id="beyond" index="05" title={t.beyond.title} note={t.beyond.text} />
            <ul data-stagger className="grid gap-4 md:grid-cols-3">
              {t.beyond.principles.map((p, i) => (
                <li key={p.title} data-spotlight className="spotlight rounded-2xl border border-line bg-paper p-6 md:p-7">
                  <p className="text-sm font-medium tabular-nums text-accent">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section aria-labelledby="contact" className="contact-panel text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
            <div data-reveal className="text-white/70">
              <Kicker index="06" label="contact" />
            </div>
            <h2
              data-reveal
              id="contact"
              className="hero-title max-w-3xl font-display text-4xl font-extrabold tracking-tight md:text-6xl"
            >
              {t.contact.title}
            </h2>
            <p data-reveal className="mt-5 max-w-2xl text-lg text-white/75">
              {t.contact.text}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              dir="ltr"
              className="mt-8 inline-block break-all font-display text-2xl font-bold text-mint underline decoration-mint/40 underline-offset-8 hover:decoration-mint md:text-4xl"
            >
              {EMAIL}
            </a>
            <div data-reveal className="mt-10 flex flex-wrap gap-3">
              {[
                { label: "LinkedIn", url: links.linkedin },
                { label: "GitHub", url: links.github },
                { label: "WhatsApp", url: links.whatsapp },
                { label: "BrightGaza", url: links.brightGaza },
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
                className="rounded-full bg-white px-5 py-2.5 font-semibold text-night transition-colors hover:bg-mint"
              >
                {t.nav.cv}
              </a>
            </div>
          </div>
        </section>
      </main>
      <AssistantWidget lang={lang} t={t.assistant} />
      <footer className="bg-night text-white/50">
        <div className="mx-auto max-w-6xl border-t border-white/10 px-5 py-6 text-sm md:px-8">{t.footer}</div>
      </footer>
    </>
  );
}
