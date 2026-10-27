"use client";

import { motion, useReducedMotion } from "framer-motion";

const rounds = [
  { x: 330, y: 130, r: 27 },
  { x: 330, y: 255, r: 27 },
  { x: 345, y: 380, r: 27 },
  { x: 381, y: 520, r: 26 },
];

const cabins = [
  { top: 70, table: 120 },
  { top: 170, table: 220 },
  { top: 270, table: 320 },
];

const longSeats = [205, 250, 295];

export default function FloorPlan() {
  const reduced = useReducedMotion();

  return (
    <svg
      className="plan"
      viewBox="0 0 560 690"
      role="img"
      aria-label="Floor plan of Hotel Tuba: a separate family section of three curtained cabins off a private corridor, an open hall with round tables and a long communal table, plus the takeaway counter, kitchen and wash area."
    >
      <defs>
        <pattern
          id="plan-hatch"
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="7"
            stroke="#1a120c"
            strokeWidth="0.7"
            opacity="0.3"
          />
        </pattern>
        <pattern id="plan-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0v28" fill="none" stroke="#1a120c" strokeWidth="0.4" opacity="0.08" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="560" height="690" fill="url(#plan-grid)" />

      {/* shell walls, with the entry and cabin doors left open */}
      <path
        className="plan-line"
        d="M112 70 H268 V370 H112 M30 70 H530 V620 H110 M60 620 H30 V70"
      />
      <path className="plan-line" d="M112 170 H268 M112 270 H268" />
      <path className="plan-line" d="M112 70 V100 M112 135 V200 M112 235 V300 M112 335 V370" />

      {/* cabin door swings */}
      <g className="plan-line plan-line--thin">
        <path d="M112 100 H147" />
        <path d="M112 100 A35 35 0 0 1 147 135" />
        <path d="M112 200 H147" />
        <path d="M112 200 A35 35 0 0 1 147 235" />
        <path d="M112 300 H147" />
        <path d="M112 300 A35 35 0 0 1 147 335" />
        <path d="M110 620 V585" />
        <path d="M110 620 A35 35 0 0 0 75 585" />
      </g>

      {/* private family cabins */}
      {cabins.map((cabin, index) => (
        <g key={cabin.top}>
          <rect
            x="120"
            y={cabin.top + 8}
            width="140"
            height="11"
            rx="3"
            fill="none"
            stroke="#1a120c"
            strokeWidth="0.7"
            strokeDasharray="3 3"
            opacity="0.4"
          />
          <circle
            cx="196"
            cy={cabin.table}
            r="24"
            fill="rgba(26,18,12,0.04)"
            stroke="rgba(26,18,12,0.5)"
            strokeWidth="1.2"
          />
          <rect
            x="164"
            y={cabin.table - 5}
            width="9"
            height="10"
            rx="1.5"
            className="plan-chair"
          />
          <rect
            x="219"
            y={cabin.table - 5}
            width="9"
            height="10"
            rx="1.5"
            className="plan-chair"
          />
          <text className="plan-label plan-label--faint" x="126" y={cabin.top + 30}>
            0{index + 1}
          </text>
        </g>
      ))}

      {/* the recommended family booth */}
      <rect className="plan-booth" x="113" y="171" width="154" height="98" rx="2" />
      <path className="plan-line plan-line--thin" d="M268 200 H282" />
      <text className="plan-label plan-label--chilli" x="288" y="203">
        YOUR TABLE
      </text>

      {/* corridor */}
      <text
        className="plan-label plan-label--faint"
        x="77"
        y="420"
        textAnchor="middle"
        transform="rotate(-90 77 420)"
      >
        FAMILY CORRIDOR
      </text>

      {/* open hall */}
      <text className="plan-label" x="300" y="78">
        OPEN HALL
      </text>
      {rounds.map((table) => (
        <g key={`${table.x}-${table.y}`}>
          <circle className="plan-table" cx={table.x} cy={table.y} r={table.r} />
          <circle className="plan-table" cx={table.x} cy={table.y} r={table.r - 7} opacity="0.45" />
          <rect className="plan-chair" x={table.x - 7} y={table.y - table.r - 12} width="14" height="7" rx="1.5" />
          <rect className="plan-chair" x={table.x - 7} y={table.y + table.r + 5} width="14" height="7" rx="1.5" />
          <rect className="plan-chair" x={table.x - table.r - 12} y={table.y - 3.5} width="7" height="14" rx="1.5" />
          <rect className="plan-chair" x={table.x + table.r + 5} y={table.y - 3.5} width="7" height="14" rx="1.5" />
        </g>
      ))}

      {/* long communal table */}
      <rect className="plan-table" x="170" y="500" width="160" height="50" rx="3" />
      {longSeats.map((x) => (
        <g key={x}>
          <rect className="plan-chair" x={x - 8} y="489" width="16" height="7" rx="1.5" />
          <rect className="plan-chair" x={x - 8} y="553" width="16" height="7" rx="1.5" />
        </g>
      ))}
      <text className="plan-label plan-label--faint" x="170" y="590">
        COMMUNAL TABLE
      </text>

      {/* counter, kitchen, wash */}
      <g>
        <rect x="430" y="70" width="88" height="160" fill="url(#plan-hatch)" opacity="0.8" />
        <rect x="430" y="70" width="88" height="160" className="plan-line" />
        <text
          className="plan-label"
          x="474"
          y="150"
          textAnchor="middle"
          transform="rotate(-90 474 150)"
        >
          COUNTER · TAKEAWAY
        </text>
      </g>
      <g>
        <rect x="430" y="250" width="88" height="160" className="plan-line" />
        <rect x="430" y="300" width="88" height="10" fill="rgba(26,18,12,0.08)" />
        <text
          className="plan-label"
          x="474"
          y="330"
          textAnchor="middle"
          transform="rotate(-90 474 330)"
        >
          KITCHEN
        </text>
      </g>
      <g>
        <rect x="430" y="430" width="88" height="170" className="plan-line" />
        <text
          className="plan-label"
          x="474"
          y="515"
          textAnchor="middle"
          transform="rotate(-90 474 515)"
        >
          WASH
        </text>
      </g>

      {/* route from the street door to the family booths */}
      <motion.path
        className="plan-route"
        d="M77 612 V217 H108"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.85 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.6, delay: 0.35 }}
      />
      <motion.circle
        cx="77"
        cy="217"
        r="3.4"
        fill="#a93a29"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1 }}
      />

      {/* entry marker */}
      <g className="plan-label plan-label--chilli">
        <path d="M77 632 V648" stroke="#a93a29" strokeWidth="1" fill="none" />
        <path d="M77 648 l-4 -6 h8 z" fill="#a93a29" />
        <text x="77" y="670" textAnchor="middle">
          ENTRY · CHAMPA CHOWK RD
        </text>
      </g>

      {/* staircase to the upper family hall, off the corridor */}
      <g>
        <rect x="42" y="470" width="34" height="120" className="plan-line plan-line--thin" />
        {[0, 1, 2, 3, 4, 5].map((step) => (
          <path
            key={step}
            className="plan-line plan-line--thin"
            d={`M42 ${482 + step * 18} H76`}
          />
        ))}
      </g>

      {!reduced && (
        <motion.circle
          cx="196"
          cy="220"
          r="34"
          fill="none"
          stroke="#a93a29"
          strokeWidth="0.8"
          initial={{ opacity: 0.5, scale: 0.86 }}
          animate={{ opacity: [0.45, 0, 0.45], scale: [0.9, 1.18, 0.9] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "196px 220px" }}
        />
      )}
    </svg>
  );
}
