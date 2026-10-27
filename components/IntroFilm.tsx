"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

const SEEN_KEY = "tuba:intro-seen";
const FILM_MS = 4000;
const LOADER_FALLBACK_MS = 4600;
const MAX_WAIT_MS = 12000;

const EASE = [0.76, 0, 0.24, 1] as const;

export default function IntroFilm() {
  const [src, setSrc] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [progress, setProgress] = useState(false);
  const [active, setActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const doneRef = useRef(false);
  const revealedRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const waitRef = useRef<number | null>(null);
  const playedRef = useRef(false);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    clearTimer();
    if (waitRef.current !== null) {
      window.clearTimeout(waitRef.current);
      waitRef.current = null;
    }
    setActive(false);
    document.documentElement.classList.remove("intro-locked");
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const forced = new URLSearchParams(window.location.search).get("intro") === "1";
    let seen = false;
    try {
      seen = window.localStorage.getItem(SEEN_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen && !forced) return;

    const isMobile = window.matchMedia("(max-width: 720px)").matches;
    setSrc(isMobile ? "/videos/mobile_intro.mp4" : "/videos/pc_intro.mp4");
    setActive(true);

    const reveal = () => {
      if (doneRef.current || revealedRef.current) return;
      revealedRef.current = true;
      setRevealed(true);
      document.documentElement.classList.add("intro-locked");
      try {
        window.localStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* storage blocked — the film simply plays once per page load */
      }
    };

    window.addEventListener("tuba:preloader-done", reveal);
    const fallback = window.setTimeout(reveal, LOADER_FALLBACK_MS);
    waitRef.current = window.setTimeout(finish, MAX_WAIT_MS);

    return () => {
      window.removeEventListener("tuba:preloader-done", reveal);
      window.clearTimeout(fallback);
      clearTimer();
      if (waitRef.current !== null) window.clearTimeout(waitRef.current);
      document.documentElement.classList.remove("intro-locked");
    };
  }, [finish]);

  useEffect(() => {
    if (!revealed) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKey);
    skipRef.current?.focus({ preventScroll: true });
    return () => window.removeEventListener("keydown", onKey);
  }, [revealed, finish]);

  useEffect(() => {
    if (!revealed) return;
    const video = videoRef.current;
    if (!video || playedRef.current || video.readyState < 2) return;
    void video.play().catch(() => finish());
  }, [revealed, src, finish]);

  const startFilm = () => {
    if (playedRef.current || doneRef.current) return;
    playedRef.current = true;
    if (waitRef.current !== null) {
      window.clearTimeout(waitRef.current);
      waitRef.current = null;
    }
    setProgress(true);
    timerRef.current = window.setTimeout(finish, FILM_MS);
  };

  return (
    <AnimatePresence>
      {active && src && (
        <motion.div
          className="intro"
          role="dialog"
          aria-modal="true"
          aria-label="Hotel Tuba intro film"
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <video
            ref={videoRef}
            className="intro__film"
            src={src}
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            onCanPlay={() => {
              const video = videoRef.current;
              if (!video || !revealed) return;
              void video.play().catch(() => finish());
            }}
            onPlaying={startFilm}
            onError={finish}
          />
          <div className="intro__scrim" aria-hidden="true" />

          <div className="intro__top">
            <span className="intro__eyebrow">
              <span className="intro__dot" aria-hidden="true" />
              The house film
            </span>
            <button ref={skipRef} type="button" className="intro__skip" onClick={finish}>
              Skip
              <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
          </div>

          <div className="intro__foot">
            <div className="intro__brand">
              <strong>TUBA</strong>
              <span>Hotel · Since {site.since}</span>
            </div>
            <span className="intro__place">Champa Chowk · Aurangabad</span>
          </div>

          <div className="intro__bar" aria-hidden="true">
            <span className={progress ? "is-running" : ""} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
