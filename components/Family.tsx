import FloorPlan from "@/components/FloorPlan";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const features = [
  {
    title: "Private family cabins",
    text: "Partitioned booths and curtained corners, so the table belongs to your people — not the room.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M3 21V8l9-5 9 5v13M3 21h18M9 21v-7h6v7" />
        <path d="M8 9h.01M16 9h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Comfort for every guest",
    text: "Wide seating, a relaxed hall and space to settle in. No rush, no elbow-to-elbow dining.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M5 11V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6M3 11h18v6H3v-6ZM6 17v3M18 17v3" />
      </svg>
    ),
  },
  {
    title: "Quick, attentive service",
    text: "Food leaves the kitchen hot and fast. The floor team checks in without hovering.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Takeaway, packed right",
    text: "Sealed, stackable parcels that hold the heat all the way home. Family packs available.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M5 8h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8L5 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>
    ),
  },
];

export default function Family() {
  return (
    <section id="family" className="family section ink-theme">
      <div className="shell">
        <div className="family__grid">
          <Reveal className="family__fig" y={40}>
            <figure style={{ margin: 0 }}>
              <div className="family__plan">
                <div className="family__plan-head">
                  <span>Sheet 01 · indicative layout</span>
                  <span>Family hall · ground floor</span>
                </div>
                <FloorPlan />
                <div className="family__plan-foot">
                  <span>
                    <i className="is-gold" aria-hidden="true" />
                    Curtained family cabin
                  </span>
                  <span>
                    <i aria-hidden="true" />
                    Open table
                  </span>
                  <span>
                    <i className="is-route" aria-hidden="true" />
                    Walk from the door
                  </span>
                </div>
              </div>
              <div className="family__fig-cap">
                <strong>A table for the whole family.</strong>
                <span>Private section · Champa Chowk</span>
              </div>
            </figure>
          </Reveal>

          <div className="family__body">
            <Reveal>
              <span className="eyebrow eyebrow--ink">
                <span className="eyebrow__num">04</span>
                Family first
                <span className="eyebrow__line" />
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display">
                Your table. Your people. <em>Your room.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                Hotel Tuba was built for families, not for turnarounds. There is
                a dedicated family section with partitioned seating and private
                corners — room for grandparents, cousins, children and the
                friend who always arrives late. The ambience is warm and
                unhurried, the plates are generous, and nobody will ask you to
                finish.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="lead">
                Solo diners are just as comfortable. Every guest gets a proper
                seat, a clean table and the same biryani — whether it is a quick
                plate at 8 AM or a full family dinner at 10 PM.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="family__features">
                {features.map((feature) => (
                  <div className="family__feature" key={feature.title}>
                    {feature.icon}
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="family__strip">
            <div>
              <h3>Tuba Family Restaurant</h3>
              <p>
                The second Tuba table — built entirely around family dining,
                group bookings and long dinners.
              </p>
            </div>
            <div className="family__strip-hours">
              <span>Open {site.familyHours}</span>
              <a className="btn" href={site.phoneHref}>
                Call {site.phone}
                <span className="btn__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
