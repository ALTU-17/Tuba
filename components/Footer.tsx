import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__urdu" aria-hidden="true">
              طوبیٰ ہوٹل
            </span>
            <p className="footer__tag">
              The No.1 biryani in Aurangabad. Twelve years, one handi, and a
              seat for everyone.
            </p>
            <p className="footer__note">
              {site.legal} · Owner: {site.owner}. Champa Chowk, Kaiser Colony,
              Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431001.
              FSSAI-compliant kitchen. Food-safety records available at the
              counter.
            </p>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h3>Explore</h3>
              {navLinks.slice(1, 6).map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
              <a href="#reviews">Reviews</a>
            </div>
            <div className="footer__col">
              <h3>Visit</h3>
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={site.maps} target="_blank" rel="noreferrer">
                Get directions
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <p>Daily · {site.hours}</p>
              <p>Family restaurant · {site.familyHours}</p>
            </div>
          </div>
        </div>

        <div className="footer__word" aria-hidden="true">
          TUBA
        </div>

        <div className="footer__bottom">
          <span>© 2026 Hotel Tuba · Aurangabad</span>
          <span>Biryani · Kebabs · Naan Qaliya</span>
          <span>FSSAI-safe kitchen</span>
          <a className="footer__top-btn" href="#home">
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
