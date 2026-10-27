"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    document.documentElement.classList.add("has-cursor");

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const soft = { ...mouse };
    let frame = 0;
    let visible = false;

    const render = () => {
      soft.x += (mouse.x - soft.x) * 0.16;
      soft.y += (mouse.y - soft.y) * 0.16;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${soft.x}px, ${soft.y}px, 0)`;
      }
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);

    const onMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      if (!visible) {
        visible = true;
        if (ring.current) ring.current.style.opacity = "1";
        if (dot.current) dot.current.style.opacity = "1";
      }
    };

    const onOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [data-cursor='hover'], input, label",
      );
      ring.current?.classList.toggle("is-hover", Boolean(interactive));
    };

    const onDown = () => ring.current?.classList.add("is-down");
    const onUp = () => ring.current?.classList.remove("is-down");
    const onLeave = () => {
      visible = false;
      if (ring.current) ring.current.style.opacity = "0";
      if (dot.current) dot.current.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor" style={{ opacity: 0 }} aria-hidden="true" />
      <div ref={dot} className="cursor__dot" style={{ opacity: 0 }} aria-hidden="true" />
    </>
  );
}
