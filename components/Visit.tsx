import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

function MapCanvas() {
  return (
    <svg viewBox="0 0 600 560" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Stylised map showing Hotel Tuba at Champa Chowk, Aurangabad">
      <rect width="600" height="560" fill="#0b1512" />

      <g stroke="rgba(242,230,210,0.05)" strokeWidth="1">
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="560" />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50} />
        ))}
      </g>

      <g fill="rgba(242,230,210,0.022)" stroke="rgba(242,230,210,0.07)" strokeWidth="1">
        <rect x="38" y="44" width="118" height="86" rx="2" />
        <rect x="182" y="36" width="76" height="64" rx="2" />
        <rect x="292" y="52" width="94" height="48" rx="2" />
        <rect x="430" y="40" width="112" height="94" rx="2" />
        <rect x="46" y="200" width="88" height="120" rx="2" />
        <rect x="172" y="196" width="102" height="66" rx="2" />
        <rect x="402" y="216" width="74" height="86" rx="2" />
        <rect x="500" y="188" width="68" height="64" rx="2" />
        <rect x="58" y="398" width="112" height="86" rx="2" />
        <rect x="222" y="428" width="96" height="74" rx="2" />
        <rect x="376" y="386" width="88" height="64" rx="2" />
        <rect x="488" y="358" width="80" height="96" rx="2" />
        <rect x="486" y="482" width="72" height="44" rx="2" />
      </g>

      <g fill="none" strokeLinecap="round">
        {/* main road */}
        <path d="M-30 468 C 90 436, 168 392, 262 340 S 428 262, 640 236" stroke="rgba(242,230,210,0.14)" strokeWidth="26" />
        <path d="M-30 468 C 90 436, 168 392, 262 340 S 428 262, 640 236" stroke="#0b1512" strokeWidth="21" />
        <path d="M-30 468 C 90 436, 168 392, 262 340 S 428 262, 640 236" stroke="rgba(232,163,61,0.4)" strokeWidth="1" strokeDasharray="8 9" />

        {/* cross streets */}
        <path d="M112 -20 C 120 120, 178 236, 300 336 S 430 470, 448 600" stroke="rgba(242,230,210,0.1)" strokeWidth="16" />
        <path d="M112 -20 C 120 120, 178 236, 300 336 S 430 470, 448 600" stroke="#0b1512" strokeWidth="12" />
        <path d="M112 -20 C 120 120, 178 236, 300 336 S 430 470, 448 600" stroke="rgba(232,163,61,0.26)" strokeWidth="1" strokeDasharray="7 10" />

        <path d="M-20 152 C 140 176, 246 168, 372 146 S 540 122, 640 140" stroke="rgba(242,230,210,0.09)" strokeWidth="12" />
        <path d="M-20 152 C 140 176, 246 168, 372 146 S 540 122, 640 140" stroke="#0b1512" strokeWidth="9" />

        <path d="M40 598 C 112 500, 196 448, 320 420 S 520 396, 620 344" stroke="rgba(242,230,210,0.08)" strokeWidth="10" />
        <path d="M40 598 C 112 500, 196 448, 320 420 S 520 396, 620 344" stroke="#0b1512" strokeWidth="8" />
      </g>

      {/* block roofs / texture */}
      <g stroke="rgba(232,163,61,0.16)" strokeWidth="1" fill="none">
        <circle cx="330" cy="330" r="30" />
        <circle cx="330" cy="330" r="44" strokeDasharray="3 6" />
      </g>

      <g fill="rgba(242,230,210,0.52)" fontFamily="var(--font-sans), sans-serif" fontSize="8.5" letterSpacing="1.6">
        <text x="42" y="90">KAISER COLONY</text>
        <text x="300" y="78">MONDHA</text>
        <text x="470" y="120">STATION ROAD</text>
        <text x="66" y="448">OLD CITY</text>
        <text x="400" y="476">JALNA ROAD</text>
        <text x="330" y="296" fill="rgba(232,163,61,0.85)">CHAMPA CHOWK</text>
      </g>

      <g fill="rgba(242,230,210,0.28)" fontFamily="var(--font-sans), sans-serif" fontSize="7" letterSpacing="1.2">
        <text x="210" y="365">CHAMPA CHOWK RD</text>
        <text x="140" y="186" transform="rotate(14 140 186)">MONDHA RD</text>
      </g>

      {/* compass */}
      <g transform="translate(536, 498)" stroke="rgba(242,230,210,0.35)" fill="none">
        <circle r="20" />
        <path d="M0 -14L5 4 0 1 -5 4Z" fill="rgba(232,163,61,0.8)" stroke="none" />
        <text x="0" y="34" textAnchor="middle" fill="rgba(242,230,210,0.5)" fontSize="7" stroke="none" fontFamily="var(--font-sans), sans-serif">
          N
        </text>
      </g>
    </svg>
  );
}

export default function Visit() {
  return (
    <section id="visit" className="visit section">
      <div className="shell">
        <div className="sec-head">
          <Reveal className="sec-head__title">
            <span className="eyebrow">
              <span className="eyebrow__num">08</span>
              Find the house
              <span className="eyebrow__line" />
            </span>
            <h2 className="display">
              Come hungry. <em>Leave family.</em>
            </h2>
          </Reveal>
          <Reveal className="sec-head__aside" delay={0.1}>
            <p className="lead">
              On the corner of Champa Chowk, in the old city. Breakfast from 7
              AM, biryani through the day, and a kitchen that stays open until
              11:30 PM. The biryani sells out — call before you drive.
            </p>
          </Reveal>
        </div>

        <div className="visit__grid">
          <div className="visit__body">
            <Reveal>
              <dl className="visit__rows">
                <div className="visit__row">
                  <dt>Address</dt>
                  <dd>
                    <a href={site.maps} target="_blank" rel="noreferrer">
                      {site.address}
                    </a>
                  </dd>
                </div>
                <div className="visit__row">
                  <dt>Kitchen</dt>
                  <dd>Open daily · {site.hours}</dd>
                </div>
                <div className="visit__row">
                  <dt>Family</dt>
                  <dd>
                    Tuba Family Restaurant · {site.familyHours}
                  </dd>
                </div>
                <div className="visit__row">
                  <dt>Phone</dt>
                  <dd>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </dd>
                </div>
                <div className="visit__row">
                  <dt>Plus code</dt>
                  <dd>{site.plusCode}</dd>
                </div>
                <div className="visit__row">
                  <dt>Good to know</dt>
                  <dd>
                    Walk-ins welcome. For tables of eight or more, call ahead
                    and we will keep the family section ready.
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="visit__actions">
                <a className="btn" href={site.phoneHref}>
                  Call the house
                  <span className="btn__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <a
                  className="btn btn--ghost"
                  href={site.maps}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                  <span className="btn__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                <a
                  className="btn btn--ghost"
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={34}>
            <div className="visit__map">
              <MapCanvas />
              <span className="visit__map-caption">Aurangabad · MH 431001</span>
              <div className="visit__pin">
                <span className="visit__pin-mark" />
                <span className="visit__pin-label">Hotel Tuba</span>
              </div>
              <div className="visit__map-label">
                <span>Chhatrapati Sambhajinagar</span>
                <span>{site.plusCode}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
