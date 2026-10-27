"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import EmberCanvas from "@/components/EmberCanvas";
import SealBadge from "@/components/SealBadge";
import SplineStage from "@/components/SplineStage";
import { site } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;
const letters = ["T", "U", "B", "A"];
const splineScene = process.env.NEXT_PUBLIC_SPLINE_SCENE;

export default function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 900], [0, 90]);
  const typeY = useTransform(scrollY, [0, 900], [0, -50]);
  const fade = useTransform(scrollY, [0, 700], [1, 0.35]);

  return (
    <section className="hero" id="home">
      <div className="hero__wash" aria-hidden="true" />
      <EmberCanvas className="hero__canvas" />
      {splineScene ? <SplineStage scene={splineScene} /> : null}
      <div className="hero__vignette" aria-hidden="true" />

      <div className="hero__inner shell">
        <motion.div
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
        >
          <span className="hero__dot" />
          Open now
          <span className="sep" />
          Champa Chowk · Aurangabad
          <span className="sep" />
          <em>Est. {site.since}</em>
        </motion.div>

        <div className="hero__grid">
          <motion.div className="hero__type" style={{ y: typeY }}>
            <motion.p
              className="hero__kicker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.9 }}
            >
              Mughlai kitchen
              <span aria-hidden="true">طوبیٰ</span>
            </motion.p>

            <h1 className="hero__title" aria-label="Tuba Hotel">
              {letters.map((letter, index) => (
                <motion.span
                  className="hero__letter"
                  key={letter}
                  aria-hidden="true"
                  initial={{ y: 140, opacity: 0, rotate: 4 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{
                    delay: 0.7 + index * 0.08,
                    duration: 1.3,
                    ease: EASE,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <sup>HOTEL</sup>
            </h1>

            <motion.div
              className="hero__subline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.9 }}
            >
              Biryani · Kebabs · Naan Qaliya
            </motion.div>

            <motion.div
              className="hero__claim"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1, ease: EASE }}
            >
              <span className="hero__claim-rule" aria-hidden="true" />
              <div>
                <p>
                  The <em>No.1 biryani</em> in Aurangabad. Slow dum, saffron
                  smoke, and twelve years of the same handi.
                </p>
                <small>Rich · Aromatic · Generously served</small>
              </div>
            </motion.div>
          </motion.div>

          <motion.figure
            className="hero__figure"
            style={{ y: imageY, opacity: fade }}
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            transition={{ delay: 0.75, duration: 1.4, ease: EASE }}
          >
            <div className="hero__arch">
              <Image
                src="/images/biryani-bucket.webp"
                alt="Hotel Tuba chicken dum biryani sealed in a black bucket, served with raita"
                fill
                priority
                sizes="(max-width: 720px) 72vw, 400px"
              />
              <span className="steam steam--1" aria-hidden="true" />
              <span className="steam steam--2" aria-hidden="true" />
              <span className="steam steam--3" aria-hidden="true" />
              <figcaption className="hero__caption">
                <span>Chicken dum biryani</span>
                <span>Sealed &amp; slow-cooked</span>
              </figcaption>
            </div>

            <motion.div
              className="hero__badge"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.9, ease: EASE }}
            >
              <SealBadge
                text="NO.1 BIRYANI IN AURANGABAD · SINCE 2012 · "
                center="1"
                label="Biryani house"
              />
            </motion.div>
          </motion.figure>
        </div>

        <motion.div
          className="hero__foot"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1 }}
        >
          <a className="hero__scroll" href="#heritage">
            <i aria-hidden="true" />
            Scroll to taste
          </a>
          <div className="hero__meta">
            <span>
              <span className="stars" aria-hidden="true">
                ★★★★☆
              </span>{" "}
              <b>{site.rating}</b> · {site.reviews} Google reviews
            </span>
            <span>
              <b>{site.price}</b> per person
            </span>
            <span>
              Kitchen open <b>{site.hours}</b>
            </span>
            <span>
              <b>Family seating</b> · FSSAI-safe
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
