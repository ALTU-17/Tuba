import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const ventures = [
  {
    index: "01",
    name: "Hotel Tuba",
    status: "Flagship",
    desc: "The original Champa Chowk house. Biryani by the handi, kebabs from the coals, and a family section that has grown with the city.",
    meta: "Since 2012 · Open daily",
    href: "#visit",
  },
  {
    index: "02",
    name: "Tuba Family Restaurant",
    status: "Family dining",
    desc: "A second, family-first dining room built for long dinners, group bookings and celebrations that run past midnight.",
    meta: `Open ${site.familyHours}`,
    href: site.phoneHref,
  },
  {
    index: "03",
    name: "Tuba Goat Farm",
    status: "Top quality meat",
    desc: "Tuba's own goat farm, supplying the kitchens with tender, grass-fed goats. The farm is open for visits and bookings.",
    meta: "Bulk orders & events",
    href: site.phoneHref,
  },
    {
    index: "04",
    name: "Tuba Cloud Kitchen",
    status: "On request",
    desc: "Tuba's cloud kitchen, serving the same menu as the restaurants. Available for delivery and catering across Aurangabad.",
    meta: "Bulk orders & events",
    href: site.phoneHref,
  },
  {
    index: "05",
    name: "The next table",
    status: "Reserved",
    desc: "Tuba Group is growing. This card is waiting for the next venture — a bakery, a cloud kitchen, a banquet floor.",
    meta: "Partnerships welcome",
    href: site.phoneHref,
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M3 13L13 3M13 3H5M13 3v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Group() {
  return (
    <section id="group" className="group section">
      <div className="shell">
        <div className="sec-head">
          <Reveal className="sec-head__title">
            <span className="eyebrow">
              <span className="eyebrow__num">06</span>
              Tuba Group
              <span className="eyebrow__line" />
            </span>
            <h2 className="display">
              One family. <em>A growing table.</em>
            </h2>
          </Reveal>
          <Reveal className="sec-head__aside" delay={0.1}>
            <p className="lead">
              Twelve years, one kitchen philosophy. Tuba Group is owner-led by{" "}
              <strong style={{ color: "var(--cream)", fontWeight: 400 }}>
                {site.owner}
              </strong>{" "}
              and built around the same idea: generous food, fair prices and a
              seat for everyone. New ventures sit at the same table.
            </p>
          </Reveal>
        </div>

        <div className="group__grid">
          {ventures.map((venture, index) => {
            const isEmpty = index === ventures.length - 1;
            return (
              <Reveal key={venture.name} delay={index * 0.07}>
                <a
                  className={`group__card ${isEmpty ? "group__card--empty" : ""}`}
                  href={venture.href}
                  style={{ height: "100%" }}
                >
                  <div className="group__top">
                    <span className="group__index">{venture.index}</span>
                    <span className="group__status">{venture.status}</span>
                  </div>
                  <div className="group__body">
                    {isEmpty && (
                      <span className="group__plus" aria-hidden="true">
                        +
                      </span>
                    )}
                    <h3>{venture.name}</h3>
                    <p>{venture.desc}</p>
                  </div>
                  <div className="group__foot">
                    <span>{venture.meta}</span>
                    <Arrow />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="group__note">
            Planning something bigger? The Tuba kitchen takes on catering and
            large family bookings across Aurangabad.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
