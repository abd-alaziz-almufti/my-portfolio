import type { Content } from "../content";

type Arch = Content["healthyLife"]["architecture"];

/**
 * A system diagram of HealthyLife AI, drawn in HTML so it stays sharp, follows the theme
 * and reads right to left on the Arabic page. Apps on one side, the Laravel API in the
 * middle, data and services on the other, with animated links showing the request flow.
 */

function Node({ name, tech }: { name: string; tech: string }) {
  return (
    <div className="arch-node">
      <span className="block text-sm text-white/60">{name}</span>
      <span className="mt-0.5 block font-mono text-sm font-semibold text-white" dir="ltr">
        {tech}
      </span>
    </div>
  );
}

function FlowLink() {
  return (
    <div className="arch-link" aria-hidden="true">
      <span />
    </div>
  );
}

export default function Architecture({ text }: { text: Arch }) {
  return (
    <figure>
      <div className="arch-grid">
        <div className="arch-col">
          <p className="arch-label">{text.clientsLabel}</p>
          {text.clients.map((c) => (
            <Node key={c.name} {...c} />
          ))}
        </div>

        <FlowLink />

        <div className="arch-col">
          <p className="arch-label">{text.apiLabel}</p>
          <div className="arch-node arch-core">
            <span className="block text-sm text-white/65">{text.api.name}</span>
            <span className="mt-0.5 block font-display text-2xl font-bold text-white" dir="ltr">
              {text.api.tech}
            </span>
            <ul className="mt-3 space-y-1.5">
              {text.api.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-white/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FlowLink />

        <div className="arch-col">
          <p className="arch-label">{text.servicesLabel}</p>
          {text.services.map((s) => (
            <Node key={s.name} {...s} />
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <figcaption className="max-w-2xl leading-relaxed text-white/75">{text.caption}</figcaption>
        <span className="arch-deploy">
          <span className="live-dot" aria-hidden="true" />
          {text.deploy}
        </span>
      </div>

      <div className="mt-10">
        <p className="arch-label">{text.decisionsTitle}</p>
        <ol className="mt-4 grid gap-3 md:grid-cols-2">
          {text.decisions.map((decision, i) => (
            <li key={decision} data-spotlight className="decision spotlight">
              <span className="decision-num" dir="ltr" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed text-white/85">{decision}</span>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
