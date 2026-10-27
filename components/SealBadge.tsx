"use client";

import { useId } from "react";

export default function SealBadge({
  text,
  center,
  label,
  className,
  ink = false,
}: {
  text: string;
  center: string;
  label: string;
  className?: string;
  ink?: boolean;
}) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");

  return (
    <div
      className={`seal ${ink ? "seal--ink" : ""} ${className ?? ""}`}
      aria-label={`${text} — ${center} ${label}`}
      role="img"
    >
      <svg className="seal__ring" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <path
            id={`seal-${id}`}
            d="M 50,50 m -41,0 a 41,41 0 1,1 82,0 a 41,41 0 1,1 -82,0"
            fill="none"
          />
        </defs>
        <circle
          cx="50"
          cy="50"
          r="49.5"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="0.5"
        />
        <text>
          <textPath href={`#seal-${id}`} startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="seal__face">
        <span className="seal__num">{center}</span>
        <span className="seal__label">{label}</span>
      </div>
    </div>
  );
}
