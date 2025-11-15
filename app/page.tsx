"use client";

import Link from "next/link";

const coreHighlights = [
  {
    title: "Training Systems",
    body: "Deterministic pipelines, from curated datasets to controlled deployment, designed for verifiable outputs."
  },
  {
    title: "Physics-Grade Data",
    body: "Data acquisition, annotation, and simulation under strict statistical governance and provenance tracking."
  },
  {
    title: "AI Operators",
    body: "Embedded engineers, monitoring models in production with live telemetry, drift detection, and safe rollback."
  }
];

const milestones = [
  { label: "Model epochs executed", value: "10^7" },
  { label: "Quality compliance checks", value: "24/7" },
  { label: "Latency commitment", value: "< 40 ms" }
];

const principles = [
  "Predictability over hype.",
  "Square edges, squared metrics.",
  "Black box models with white box governance.",
  "Auditable training at planetary scale."
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero box">
        <div className="hero__badge">10e23a</div>
        <h1>
          Disciplined AI training
          <span> engineered for verification.</span>
        </h1>
        <p>
          We build austere, measurable AI training infrastructure that keeps
          humans in control. No gradients. No theatrics. Just precision and
          uptime.
        </p>
        <div className="hero__cta">
          <Link href="#contact" className="button">
            Engage
          </Link>
          <Link href="#principles" className="link">
            Operating principles
          </Link>
        </div>
      </section>

      <section className="metrics box">
        {milestones.map((item) => (
          <div key={item.label} className="metric">
            <span className="metric__value">{item.value}</span>
            <span className="metric__label">{item.label}</span>
          </div>
        ))}
      </section>

      <section className="grid">
        {coreHighlights.map((highlight) => (
          <article key={highlight.title} className="box">
            <h2>{highlight.title}</h2>
            <p>{highlight.body}</p>
          </article>
        ))}
      </section>

      <section id="principles" className="principles box">
        <h2>Operating Principles</h2>
        <ul>
          {principles.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="contact box">
        <h2>Interface with 10e23a</h2>
        <p>
          Deployment-ready within 30 days. NDA-backed briefings, zero fluff.
          Send encrypted requests to <a href="mailto:contact@10e23a.ai">contact@10e23a.ai</a>.
        </p>
        <div className="contact__cta">
          <Link href="mailto:contact@10e23a.ai" className="button">
            Initiate exchange
          </Link>
          <span className="contact__note">
            Optional: attach model audits or incident reports.
          </span>
        </div>
      </section>
    </main>
  );
}
