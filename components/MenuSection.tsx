"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { menu, totalDishes } from "@/lib/menu";

export default function MenuSection() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((entry) => entry.id === active) ?? menu[0];

  return (
    <section id="menu" className="menu section">
      <div className="shell">
        <div className="menu__head">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow__num">03</span>
              The menu
              <span className="eyebrow__line" />
            </span>
            <h2 className="display" style={{ marginTop: 16 }}>
              The whole <em>board.</em>
              <span>Seven sections. {totalDishes} dishes. One long table.</span>
            </h2>
          </Reveal>
          <Reveal className="menu__note" delay={0.1}>
            <p>
              <b>Full / half / quarter plate</b> pricing is listed exactly as it
              appears on the house board. Biryani is cooked through the day and
              rarely lasts the evening — call ahead for family packs.
            </p>
            <p>
              Prices can move with the market. Confirm while ordering, or ask
              the floor team for today&apos;s specials.
            </p>
          </Reveal>
        </div>

        <div className="menu__tabs" role="tablist" aria-label="Menu categories">
          {menu.map((entry) => {
            const isActive = entry.id === active;
            return (
              <button
                key={entry.id}
                type="button"
                role="tab"
                id={`tab-${entry.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${entry.id}`}
                tabIndex={isActive ? 0 : -1}
                className={`menu__tab ${isActive ? "is-active" : ""}`}
                onClick={() => setActive(entry.id)}
              >
                <span>{entry.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={category.id}
            id={`panel-${category.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${category.id}`}
            className="menu__panel"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            {category.items.map((item, index) => (
              <motion.div
                key={item.name}
                className="menu__item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.018, 0.3) }}
              >
                <div>
                  <span className="menu__name">
                    {item.name}
                    {item.star && (
                      <span className="menu__star" aria-label="House favourite">
                        ★
                      </span>
                    )}
                  </span>
                  {item.sub && <span className="menu__sub">{item.sub}</span>}
                </div>
                <span className="menu__price">
                  {item.price}
                  {item.price.includes("/") && <small>Full / Half</small>}
                  {item.price === "Ask" && <small>On request</small>}
                </span>
              </motion.div>
            ))}
            {category.note && (
              <p
                className="menu__sub"
                style={{ gridColumn: "1 / -1", marginTop: 18, letterSpacing: "0.06em" }}
              >
                {category.note}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="menu__board">
          <Reveal>
            <figure className="menu__board-fig">
              <Image
                src="/images/menu-board-detai.webp"
                alt="The Hotel Tuba menu board listing starters, beef, chicken, Chinese, veg, rice and roti prices"
                width={1200}
                height={750}
                sizes="(max-width: 1000px) 92vw, 38vw"
              />
              <figcaption>
                <span>The board at the counter</span>
                <span>Champa Chowk</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="menu__board-copy" delay={0.1}>
            <h3>
              Printed once. <em className="serif-i">Memorised</em> by everyone
              else.
            </h3>
            <p>
              Regulars do not open the menu. They order the biryani, a plate of
              chaab, butter naan for the table, and whichever gosh is slowest
              that day. First-timers should start with the chicken dum biryani
              and work outward — the board is deep, but it is not complicated.
            </p>
            <div className="menu__chips">
              <span className="menu__chip">Dine-in</span>
              <span className="menu__chip">Takeaway</span>
              <span className="menu__chip">Family section</span>
              <span className="menu__chip">Breakfast from 7 AM</span>
              <span className="menu__chip">Bulk orders</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
