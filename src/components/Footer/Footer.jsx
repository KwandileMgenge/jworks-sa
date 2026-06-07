import { BRAND, NAV_LINKS } from "../../data/constants";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="footer-grid">
      {/* Brand column */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div className="logo-mark" style={{ width: 48, height: 48, fontSize: 19 }}>JW</div>
          <div className="logo-text" style={{ fontSize: 23 }}>J WORKS<span>-SA</span></div>
        </div>
        <p className="footer-tagline">
          <strong>{BRAND.tagline}</strong><br />
          {BRAND.slogan}<br />
          Construction · Home Improvements · Energy &amp; Fuel Supply<br />
          <span style={{ color: "var(--grey-mid)" }}>Subsidiary: {BRAND.subsidiary}</span>
        </p>
      </div>

      {/* Quick links */}
      <div>
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul className="footer-links">
            {NAV_LINKS.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
            <li><a href="#contact">Request a Quote</a></li>
          </ul>
        </div>
      </div>

      {/* Contact details */}
      <div>
        <div className="footer-col">
          <h5>Contact Details</h5>
          <div className="f-contact-item">📞 <a href={`tel:${BRAND.phoneRaw}`}>{BRAND.phone}</a></div>
          <div className="f-contact-item">📠 {BRAND.fax}</div>
          <div className="f-contact-item">✉️ <a href={`mailto:${BRAND.emails.director}`}>{BRAND.emails.director}</a></div>
          <div className="f-contact-item">✉️ <a href={`mailto:${BRAND.emails.primary}`}>{BRAND.emails.primary}</a></div>
          <div className="f-contact-item">🌐 <a href={`https://${BRAND.website}`} target="_blank" rel="noreferrer">{BRAND.website}</a></div>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p className="footer-copy">
        © 2025 <a href="#home">J WORKS-SA</a>. All rights reserved. |{" "}
        <span style={{ color: "var(--blue)" }}>{BRAND.tagline}</span>
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: "var(--grey-mid)" }}>
        Follow us: <a href="#" className="social-pill">{BRAND.social}</a>
      </div>
    </div>
  </footer>
);

export default Footer;
