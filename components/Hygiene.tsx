import Reveal from "@/components/Reveal";
import SealBadge from "@/components/SealBadge";
import { site } from "@/lib/site";

const checks = [
  {
    title: "FSSAI-licensed kitchen",
    text: "Licence maintained, displayed at the counter and produced on request.",
  },
  {
    title: "Fresh, daily sourcing",
    text: "Meat and produce brought in each morning. Nothing carried over to the next service.",
  },
  {
    title: "Separate prep lines",
    text: "Veg and non-veg handled on separate boards, in separate utensils, by separate hands.",
  },
  {
    title: "Sealed takeaways",
    text: "Tamper-evident packing on every parcel, so the food leaves exactly as it was plated.",
  },
  {
    title: "Daily deep clean",
    text: "The kitchen is closed, scrubbed and reset after every shift — not once a week.",
  },
  {
    title: "Filtered water",
    text: "Filtered water for cooking and drinking; utensils sanitised between services.",
  },
];

const steps = [
  { no: "01", title: "Source", text: "Bought fresh, checked by hand, morning." },
  { no: "02", title: "Store", text: "Cold chain, covered, labelled and separate." },
  { no: "03", title: "Cook", text: "Small batches, tasted before service." },
  { no: "04", title: "Seal", text: "Taped, labelled and heat-held for travel." },
  { no: "05", title: "Serve", text: "Hot, clean, and exactly as ordered." },
];

export default function Hygiene() {
  return (
    <section id="hygiene" className="hygiene section">
      <div className="shell">
        <div className="hygiene__grid">
          <div className="hygiene__intro">
            <Reveal>
              <span className="eyebrow">
                <span className="eyebrow__num">05</span>
                FSSAI &amp; food safety
                <span className="eyebrow__line" />
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display">
                Clean kitchen. <em>Clear conscience.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                A 200-plate evening is no excuse for a careless kitchen. Tuba
                runs on the boring, unglamorous things — cold storage, clean
                boards, fresh oil, sealed parcels and a floor team that knows
                the difference between busy and rushed.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="hygiene__seal-row">
                <div className="hygiene__stamp">
                  <div className="hygiene__stamp-face">
                    <strong>FSSAI</strong>
                    <span>Compliant kitchen</span>
                  </div>
                </div>
                <p className="hygiene__seal-copy">
                  Food safety is a daily practice, not a certificate on a wall.
                  Ask to see the licence or the kitchen log — we will walk you
                  through it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ display: "flex", gap: 18, alignItems: "center", marginTop: 8 }}>
                <div style={{ width: 96, flex: "none" }}>
                  <SealBadge
                    text="FOOD SAFETY · HYGIENE · FOOD SAFETY · "
                    center="100%"
                    label="Care"
                  />
                </div>
                <p className="hygiene__fine" style={{ margin: 0, maxWidth: "34ch" }}>
                  {site.fssaiNote}
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <div className="hygiene__list">
              {checks.map((check, index) => (
                <Reveal key={check.title} delay={index * 0.05}>
                  <div className="hygiene__item">
                    <span className="hygiene__check">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                        <path d="M2.5 8.5l3.5 3.5L14 4.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <h3>{check.title}</h3>
                    <p>{check.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="hygiene__steps">
          {steps.map((step, index) => (
            <Reveal className="hygiene__step" key={step.no} delay={index * 0.06}>
              <span className="hygiene__step-num">{step.no}</span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
