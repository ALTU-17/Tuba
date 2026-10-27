"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { totalDishes } from "@/lib/menu";

const dishes = [
  {
    no: "01",
    tag: "The No.1",
    title: (
      <>
        Chicken <em>Dum</em> Biryani
      </>
    ),
    desc: "Long-grain basmati, saffron, fried onion and overnight-marinated chicken, sealed with dough and cooked on slow heat. The plate Aurangabad keeps coming back to.",
    // price: "from ₹200",
    priceLabel: "Plate",
    variant: "photo",
    image: "/images/image.png",
    alt: "Hotel Tuba chicken dum biryani with raita",
    position: "50% 45%",
  },
  {
    no: "02",
    tag: "House special",
    title: (
      <>
         Naan Qaliya
      </>
    ),
    desc: "Aurangabad's Mughlai classic — tender chicken in a cashew-thickened qaliya, finished with ghee and mopped up with torn naan straight from the tandoor.",
    price: "Ask today",
    priceLabel: "House cut",
    variant: "chilli",
    image: "/images/qaliya.png",
    alt: "Naan served with a bowl of spicy qaliya",
    position: "56% 58%",
    word: "قلیہ",
  },
  {
    no: "03",
    tag: "Old-city classic",
    title: (
      <>
        <em>Tawa Gosht</em>
      </>
    ),
    desc: "Charred, glossy and unapologetically spiced. Ordered before the table even sits down, and never quite enough the first time.",
    // price: "₹400",
    priceLabel: "Full plate",
    variant: "red",
    word: "توا گوشت",
  },
  {
    no: "04",
    tag: "From the coals",
    title: (
      <>
        Tandoori <em>Kebabs</em>
      </>
    ),
    desc: "Chicken tikka, leg piece, lollipop and tandoori — hanging over live coals through the evening shift, brushed with butter and served hot.",
    // price: "from ₹250",
    priceLabel: "Plate",
    variant: "photo",
    image: "/images/kabab.jpg",
    alt: "Kebabs hanging over the grill at Hotel Tuba at night",
    position: "70% 80%",
  },
  {
    no: "05",
    tag: `7 sections · ${totalDishes} dishes`,
    title: (
      <>
        The rest of the <em>table.</em>
      </>
    ),
    desc: "Korma, kapsa, bheja fry, biryani, butter naan, Chinese and a small, careful veg list. The full board is waiting.",
    price: "See menu",
    priceLabel: "Everything",
    variant: "cream",
    word: "طوبیٰ",
  },
];

export default function Signatures() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [maxX, setMaxX] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const query = window.matchMedia("(min-width: 901px)");
    const update = () => setPinned(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!pinned) {
      setMaxX(0);
      return;
    }
    const measure = () => {
      const el = trackRef.current;
      if (!el) return;
      setMaxX(Math.max(0, el.scrollWidth - window.innerWidth + 32));
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -maxX]);
  const x = useSpring(rawX, { stiffness: 120, damping: 30, mass: 0.35 });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section
      ref={sectionRef}
      id="signatures"
      className={`sig ${pinned ? "sig--pinned" : ""}`}
    >
      <div className="sig__sticky">
        <div className="sig__head shell">
          <div>
            <span className="eyebrow">
              <span className="eyebrow__num">02</span>
              House signatures
              <span className="eyebrow__line" />
            </span>
            <h2 className="display">
              Order these <em>first.</em>
            </h2>
          </div>
          <div className="sig__progress">
            <span>05 plates</span>
            <div className="sig__bar">
              <motion.span style={{ scaleX: progress }} />
            </div>
            <span>Scroll</span>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          className="sig__track"
          style={pinned ? { x } : undefined}
        >
          {dishes.map((dish) => {
            const cardClass = [
              "sig__card",
              `sig__card--${dish.variant}`,
              ...(dish.image && dish.variant !== "photo"
                ? ["sig__card--photo"]
                : []),
            ].join(" ");

            return (
              <article className={cardClass} key={dish.no}>
                {dish.image && (
                  <Image
                    src={dish.image}
                    alt={dish.alt ?? ""}
                    fill
                    sizes="(max-width: 900px) 82vw, 40vw"
                    style={{ objectPosition: dish.position }}
                  />
                )}
                {dish.word && (
                  <span className="sig__watermark" aria-hidden="true">
                    {dish.word}
                  </span>
                )}
                <div className="sig__no">
                  <span>{dish.no} / 05</span>
                  <span className="sig__tag">{dish.tag}</span>
                </div>
                <div className="sig__body">
                  <span className="sig__plate" aria-hidden="true" />
                  <h3>{dish.title}</h3>
                  <p className="sig__desc">{dish.desc}</p>
                  <div className="sig__meta">
                    <strong>{dish.price}</strong>
                    <span>{dish.priceLabel}</span>
                  </div>
                  {dish.variant === "cream" && (
                    <a className="sig__cta" href="#menu">
                      Open the full menu <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </motion.div>

        <div className="sig__hint" aria-hidden="true">
          <svg viewBox="0 0 40 10" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M0 5h38M34 1l4 4-4 4" />
          </svg>
          Keep scrolling to move the table
        </div>
      </div>
    </section>
  );
}
