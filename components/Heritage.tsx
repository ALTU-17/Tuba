"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

function Counter({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(to);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1500, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(to * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
    </span>
  );
}

export default function Heritage() {
  return (
    <section className="heritage section ink-theme" id="heritage">
      <span className="heritage__urdu" aria-hidden="true">
        طوبیٰ
      </span>

      <div className="shell">
        <div className="sec-head">
          <Reveal className="sec-head__title">
            <span className="eyebrow eyebrow--ink">
              <span className="eyebrow__num">01</span>
              The house
              <span className="eyebrow__line" />
            </span>
            <h2 className="display">
              Twelve years of dum, smoke &amp; the <em>old city.</em>
            </h2>
          </Reveal>
          <Reveal className="sec-head__aside" delay={0.1}>
            <p className="lead">
              Hotel Tuba is the kind of place Aurangabad measures its evenings
              by. A Mughlai kitchen on Champa Chowk, a handi sealed with dough,
              kebabs turning over live coals, and a queue that never quite
              stops.
            </p>
          </Reveal>
        </div>

        <div className="heritage__grid">
          <div className="heritage__copy">
            <Reveal>
              <p className="lead">
                What began in {site.since} as a small family kitchen has become
                one of the city&apos;s most-loved biryani addresses. The recipes
                did not travel far — they were perfected here. Long-grain rice
                layered with marinated chicken, saffron, fried onion and slow
                heat. Served with raita, mirchi ka salan and no ceremony at all.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                The menu is enormous, the portions are honest, and the bill
                rarely surprises. Owner <strong>Ilyas Qureshi</strong> still
                keeps the same promise the house opened with: feed every guest
                the way you would feed your own family.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <blockquote className="heritage__quote">
                <p>
                  “Feed people the way you would feed your own family. The rest
                  — the crowd, the name, the twelve years — follows.”
                </p>
                <footer>
                  <strong>The Qureshi family</strong>
                  <span>House promise · since {site.since}</span>
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={0.2}>
              <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
                <span className="heritage__sign" aria-hidden="true">
                  Ilyas Qureshi
                </span>
                <span className="mono" style={{ color: "var(--muted-ink)" }}>
                  {site.owner} · Owner, Tuba Group
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal className="heritage__figure-wrap" delay={0.12} y={40}>
            <figure className="heritage__figure">
              <div className="arch">
                <Image
                  src="/images/storefront-night.webp"
                  alt="The illuminated Hotel Tuba storefront at night, with kebabs hanging over the grill and guests waiting outside"
                  fill
                  sizes="(max-width: 900px) 90vw, 46vw"
                />
              </div>
              <figcaption className="heritage__plaque">
                <strong>The corner that started it all.</strong>
                <span>Champa Chowk · Aurangabad</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="heritage__stats">
          {[
            {
              value: (
                <>
                  <Counter to={12} />
                  <small>+</small>
                </>
              ),
              label: "Years on the same corner",
            },
            {
              value: (
                <>
                  <Counter to={818} />
                </>
              ),
              label: "Google reviews and counting",
            },
            {
              value: (
                <>
                  <Counter to={4.2} decimals={1} />
                  <small>★</small>
                </>
              ),
              label: "Average guest rating",
            },
            {
              value: <>₹200–400</>,
              label: "Per person · generous portions",
            },
          ].map((stat, index) => (
            <Reveal className="stat" key={stat.label} delay={index * 0.06}>
              <div className="stat__value">{stat.value}</div>
              <div className="stat__label">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
