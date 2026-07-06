import { NAV_LINKS } from '../data/siteData';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#home" className={styles.logo}>
            <div className={styles.logoMark}>JW</div>
            <div className={styles.logoText}>J WORKS<span>-SA</span></div>
          </a>
          <p className={styles.tagline}>
            <strong>Quality Workmanship – Building the Nation.</strong><br />
            We Are Building Your Future.<br />
            Construction · Home Improvements · Energy &amp; Fuel Supply (J Black Holdings)
          </p>
        </div>

        {/* Quick links */}
        <div className={styles.col}>
          <h5>Quick Links</h5>
          <ul className={styles.links}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
            <li><a href="#contact">Request a Quote</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h5>Contact Details</h5>
          <div className={styles.contactList}>
            <div>📞 <a href="tel:+27767737162">+27 76 773 7162</a></div>
            <div>📞 <a href="tel:+27317871004">+27 31 787 1004</a></div>
            <div>📠 +27 86 480 7238</div>
            <div>✉️ <a href="mailto:info@jworks-sa.co.za">info@jworks-sa.co.za</a></div>
            <div>🌐 <a href="https://www.jworks-sa.co.za" target="_blank" rel="noopener noreferrer">www.jworks-sa.co.za</a></div>
            <div>📱 @JWORKS_SA</div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copy}>
          © 2025 <a href="#home">J WORKS-SA</a>. All rights reserved. | Quality Workmanship – Building the Nation.
        </div>
        <div className={styles.social}>
          Follow us: <a className={styles.socialPill} href="#">@JWORKS_SA</a>
        </div>
      </div>
    </footer>
  );
}
