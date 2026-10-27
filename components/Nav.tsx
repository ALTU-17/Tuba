"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/site";

const EASE = [0.76, 0, 0.24, 1] as const;

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M6.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.1 6.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav__inner shell">
          <a className="nav__brand" href="#home" aria-label={`${site.name} — home`}>
            <span className="nav__mark" aria-hidden="true">
              <Image
                className="nav__mark-img"
                src="/images/tuba-mark.png"
                alt=""
                width={432}
                height={482}
                preload
                sizes="48px"
              />
            </span>
            <span className="nav__name">
              <strong>TUBA</strong>
              <span>Hotel · Since {site.since}</span>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.slice(1, 7).map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav__right">
            <a
              className="nav__ig"
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`${site.name} on Instagram`}
              title="Instagram"
            >
              <InstagramIcon />
            </a>
            <a className="nav__call" href={site.phoneHref}>
              <PhoneIcon />
              {site.phone}
            </a>
            <button
              type="button"
              className="nav__menu"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="site-menu"
            >
              <i aria-hidden="true">
                <span />
                <span />
              </i>
              Menu
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            className="menu-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            data-lenis-prevent
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <div className="menu-overlay__top">
              <span className="eyebrow" style={{ color: "var(--gold)" }}>
                <span className="eyebrow__num">08</span>
                Index
                <span className="eyebrow__line" />
              </span>
              <button
                type="button"
                className="menu-overlay__close"
                onClick={() => setOpen(false)}
                autoFocus
              >
                Close
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
            </div>

            <motion.nav
              className="menu-overlay__links"
              aria-label="Site sections"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.055, delayChildren: 0.18 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="menu-overlay__link"
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 26 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <small>{link.index}</small>
                  {link.label}
                  <span>Explore</span>
                </motion.a>
              ))}
            </motion.nav>

            <div className="menu-overlay__foot">
              <div>
                <p>{site.address}</p>
                <p style={{ marginTop: 6 }}>
                  <a href={site.phoneHref} style={{ color: "var(--gold)" }}>
                    {site.phone}
                  </a>
                  <span style={{ opacity: 0.4 }}> · </span>
                  Daily {site.hours}
                </p>
              </div>
              <span className="menu-overlay__urdu" aria-hidden="true">
                طوبیٰ ہوٹل
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
