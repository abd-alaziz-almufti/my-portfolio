import Image from "next/image";
import Navbar from "./Navbar";
import BrowserFrame from "./BrowserFrame";
import ProductShowcase from "./ProductShowcase";
import SmoothScroll from "./SmoothScroll";
import WorkRibbon from "./WorkRibbon";
import { BlurText, LightRays, StarBorder, CountUp } from "./react-bits";
import { content, links, heroStack, EMAIL, CV_URL, SITE_URL, type Lang } from "../content";

function SectionHeading({ id, title, note }: { id: string; title: string; note?: string }) {
  return (
    <div data-reveal className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
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

export default function PortfolioPage({ lang }: { lang: Lang }) {
  const t = content[lang];
  const hl = t.healthyLife;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t.name,
    alternateName: lang === "ar" ? content.en.name : content.ar.name,
    jobTitle: "Full Stack Developer",
    url: lang === "ar" ? `${SITE_URL}/ar` : SITE_URL,
    image: `${SITE_URL}/images/MY%20Profile.jpeg`,
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
      <Navbar name={t.name} nav={t.nav} />
      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <div className="hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
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
                  <StarBorder
                    as="a"
                    href="#work"
                    radius={9999}
                    backgroundColor="#0a7a5c"
                    textColor="#ffffff"
                    color="#7fe3bf"
                    duration={6}
                    glow={0.4}
                    clickPulse={false}
                    className="font-semibold"
                  >
                    {t.hero.seeWork}
                  </StarBorder>
                  <a
                    href={CV_URL}
                    download
                    className="rounded-full border border-ink/20 bg-surface px-6 py-3 font-semibold text-ink transition-colors hover:border-ink"
                  >
                    {t.nav.cv}
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    dir="ltr"
                    className="rounded-full px-2 py-3 font-semibold text-ink underline decoration-ink/20 underline-offset-4 hover:decoration-ink sm:px-6"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div style={{ animationDelay: "200ms" }} className="reveal-photo relative mx-auto w-60 md:w-[21rem]">
                <div data-parallax="-36" className="relative aspect-[4/5]">
                  <div className="photo-backing absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem]" aria-hidden="true" />
                  <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-line bg-surface">
                    <Image
                      src="/images/MY Profile.jpeg"
                      alt={t.hero.photoAlt}
                      fill
                      sizes="(min-width: 768px) 336px, 240px"
                      className="object-cover object-[50%_22%]"
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
                <div data-parallax="-12" className="hero-chip float-b absolute -end-3 top-8 md:-end-10" aria-hidden="true">
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
            <SectionHeading id="work" title={t.work.title} note={t.work.note} />

            <article id="project-healthylife" data-reveal className="panel-dark rounded-3xl p-7 text-white md:p-12">
              <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="text-sm font-semibold text-sun">{hl.eyebrow}</p>
                  <h3 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">HealthyLife AI</h3>
                  <p className="mt-4 text-lg leading-relaxed text-white/80">{hl.text}</p>
                  <ul data-stagger className="mt-6 space-y-3">
                    {hl.built.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-white/85">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
                <dl className="grid self-start gap-px overflow-hidden rounded-2xl bg-white/10">
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
                    <p className="mt-2 leading-relaxed text-muted">{project.detail}</p>
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

        {/* Experience */}
        <section aria-labelledby="experience" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
            <div className="self-start md:sticky md:top-28">
              <h2
                data-reveal
                id="experience"
                className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl"
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
            <SectionHeading id="skills" title={t.skills.title} />
            <div data-stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.skills.groups.map((s, i) => (
                <div key={s.group} className="skill-card rounded-2xl border border-line bg-surface p-6">
                  <p className="text-sm font-medium tabular-nums text-accent">0{i + 1}</p>
                  <h3 className="mt-1 font-display text-xl font-bold text-ink">{s.group}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <li key={item} className="rounded-md bg-accent-soft px-2.5 py-1 text-sm font-medium text-accent">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div data-reveal className="mt-16 rounded-3xl border border-line bg-surface p-7 md:p-10">
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

        {/* Contact */}
        <section aria-labelledby="contact" className="contact-panel text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
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
      <footer className="bg-night text-white/50">
        <div className="mx-auto max-w-6xl border-t border-white/10 px-5 py-6 text-sm md:px-8">{t.footer}</div>
      </footer>
    </>
  );
}
