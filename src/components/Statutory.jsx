import { STATUTORY_ITEMS } from '../data/siteData';
import styles from './Statutory.module.css';

export default function Statutory() {
  return (
    <section id="statutory" className={styles.statutory}>
      <div className={styles.inner}>
        <div className="section-label">Accreditations &amp; Compliance</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>
          Statutory <span>Information</span>
        </h2>
        <p className="section-desc">
          J WORKS-SA operates under strict legal, safety, and structural guidelines, maintaining
          full compliance registrations with South Africa's leading regulatory authorities.
        </p>
        <div className={styles.grid}>
          {STATUTORY_ITEMS.map(({ label, value }) => (
            <div key={label} className={styles.item}>
              <strong>{label}</strong>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
