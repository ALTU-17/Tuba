"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1] as const;

/* ---------- Inline logo (matches your image) ---------- */
function TubaMark({ animate = false }: { animate?: boolean }) {
  const draw: Variants = animate
    ? {
        hidden: { pathLength: 0, opacity: 0 },
        show: {
          pathLength: 1,
          opacity: 1,
          transition: { duration: 1.15, ease: EASE, delay: 0.15 },
        },
      }
    : { hidden: {}, show: {} };

  return (
    <svg
      viewBox="0 0 220 240"
      className="tuba-mark"
      role="img"
      aria-label="Tuba Hotel emblem"
    >
      <defs>
        <linearGradient id="tubaGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7e2ac" />
          <stop offset="38%" stopColor="#d9b26a" />
          <stop offset="62%" stopColor="#b8892f" />
          <stop offset="100%" stopColor="#8a5f1c" />
        </linearGradient>
        <linearGradient id="tubaGoldSoft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4d99a" />
          <stop offset="100%" stopColor="#a9791f" />
        </linearGradient>
      </defs>

      {/* Dome circle */}
      <motion.circle
        cx="110"
        cy="112"
        r="76"
        fill="none"
        stroke="url(#tubaGold)"
        strokeWidth="3"
        variants={draw}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "show" : undefined}
      />

      {/* Inner arch (pointed ogee) */}
      <motion.path
        d="M110 44
           C 78 74, 46 96, 46 130
           C 46 156, 66 178, 92 184
           M110 44
           C 142 74, 174 96, 174 130
           C 174 156, 154 178, 128 184"
        fill="none"
        stroke="url(#tubaGoldSoft)"
        strokeWidth="2.4"
        strokeLinecap="round"
        variants={
          animate
            ? {
                hidden: { pathLength: 0, opacity: 0 },
                show: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 1.3, ease: EASE, delay: 0.3 },
                },
              }
            : {}
        }
        initial={animate ? "hidden" : undefined}
        animate={animate ? "show" : undefined}
      />

      {/* Finial tip */}
      <motion.path
        d="M110 20 L114 32 L110 40 L106 32 Z"
        fill="url(#tubaGold)"
        initial={animate ? { opacity: 0, y: -6 } : undefined}
        animate={animate ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.9, duration: 0.5, ease: EASE }}
      />

      {/* Serif T */}
      <motion.path
        d="M74 96
           H146
           L148 108
           H142
           C140 104, 138 102, 132 102
           H118
           V168
           C118 174, 120 176, 128 176
           V180
           H92
           V176
           C100 176, 102 174, 102 168
           V102
           H88
           C82 102, 80 104, 78 108
           H72
           Z"
        fill="url(#tubaGold)"
        initial={animate ? { opacity: 0, scale: 0.9 } : undefined}
        animate={animate ? { opacity: 1, scale: 1 } : undefined}
        style={{ transformOrigin: "110px 140px" }}
        transition={{ delay: 0.7, duration: 0.7, ease: EASE }}
      />
    </svg>
  );
}

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(false);
      return;
    }

    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    const duration = 2000;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const timer = window.setTimeout(() => setVisible(false), 2800);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.documentElement.style.overflow = "";
        window.dispatchEvent(new Event("tuba:preloader-done"));
      }}
    >
      {visible && (
        <div className="preloader" aria-hidden="true">
          {/* Curtain panels */}
          <motion.div
            className="preloader__panel preloader__panel--top"
            exit={{ y: "-100%" }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
          />
          <motion.div
            className="preloader__panel preloader__panel--bottom"
            exit={{ y: "100%" }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
          />

          {/* Warm glow behind logo */}
          <motion.div
            className="preloader__glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.55, 0.4, 0.5] }}
            transition={{ duration: 2.4, ease: "easeOut" }}
          />

          {/* Center: the logo reconstruction */}
          <motion.div
            className="preloader__center"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <motion.div
              className="preloader__emblem"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE }}
            >
              <TubaMark animate />
            </motion.div>

            {/* TUBA wordmark */}
            <motion.h1
              className="preloader__word"
              initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.05, duration: 1, ease: EASE }}
            >
              TUBA
            </motion.h1>

            {/* Diamond divider */}
            <motion.div
              className="preloader__divider"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.35, duration: 0.9, ease: EASE }}
            >
              <span className="preloader__divider-line" />
              <span className="preloader__divider-dot" />
              <span className="preloader__divider-diamond">◆</span>
              <span className="preloader__divider-dot" />
              <span className="preloader__divider-line" />
            </motion.div>

            {/* HOTEL · SINCE 2012 */}
            <motion.p
              className="preloader__meta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.55, duration: 0.8, ease: "easeOut" }}
            >
              HOTEL <span className="preloader__meta-dot">·</span> SINCE 2012
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <div className="preloader__bar" aria-hidden="true">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.05, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>

          {/* Count */}
          <div className="preloader__count" aria-hidden="true">
            {String(count).padStart(3, "0")}
            <span>%</span>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}