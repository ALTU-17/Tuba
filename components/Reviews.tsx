import Image from "next/image";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const starPath =
  "M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6Z";

function Stars() {
  return (
    <div className="reviews__stars" aria-label={`${site.rating} out of 5 stars`}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="star-partial">
            <stop offset="20%" stopColor="currentColor" />
            <stop offset="20%" stopColor="rgba(26,18,12,0.16)" />
          </linearGradient>
        </defs>
        <path d={starPath} fill="currentColor" />
      </svg>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d={starPath} fill="currentColor" />
      </svg>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d={starPath} fill="currentColor" />
      </svg>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d={starPath} fill="currentColor" />
      </svg>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d={starPath} fill="url(#star-partial)" />
      </svg>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="reviews section ink-theme">
      <div className="shell">
        <div className="sec-head">
          <Reveal className="sec-head__title">
            <span className="eyebrow eyebrow--ink">
              <span className="eyebrow__num">07</span>
              Word of mouth
              <span className="eyebrow__line" />
            </span>
            <h2 className="display">
              The city has <em>spoken.</em>
            </h2>
          </Reveal>
          <Reveal className="sec-head__aside" delay={0.1}>
            <p className="lead">
              Four point two stars, eight hundred and eighteen reviews, and a
              queue that still forms before opening. The compliments are
              consistent — and so are the empty plates.
            </p>
          </Reveal>
        </div>

        <div className="reviews__grid">
          <div className="reviews__left">
            <Reveal>
              <div className="reviews__score">
                <div className="reviews__num">
                  {site.rating}
                  <small>/ 5</small>
                </div>
                <Stars />
                <p className="reviews__meta">
                  {site.reviews} Google reviews · {site.price} per person
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="reviews__quote">
                “Rich, aromatic and <em>generous</em> — the biryani people drive
                across town for.”
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="reviews__themes">
                {[
                  "Biryani",
                  "Generous portions",
                  "Quick service",
                  "Family seating",
                  "Value",
                  "Old-city flavour",
                ].map((theme) => (
                  <span key={theme}>{theme}</span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="lead">
                Diners describe the chicken biryani as rich and aromatic, the
                portions as unusually generous for the price, and the service as
                quick even at peak hours. Families keep returning for the
                private seating; regulars keep returning for the same handi.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={34}>
            <figure className="reviews__listing">
              <Image
                src="/images/google-listing.png"
                alt="Hotel Tuba's Google listing showing 4.2 stars, 818 reviews, price range ₹200–400 per person and the Champa Chowk address"
                width={630}
                height={586}
                sizes="(max-width: 900px) 80vw, 330px"
              />
              <figcaption>
                <span>Google listing</span>
                <span>4.2 ★ · 818</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>

      <div className="reviews__marquee">
        <Marquee
          items={[
            "Rich",
            "Aromatic",
            "Generous",
            "Quick service",
            "Family-friendly",
            "Affordable",
            "Old-city flavour",
          ]}
        />
      </div>
    </section>
  );
}
