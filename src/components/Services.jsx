import { SERVICE_COLUMNS, FUEL_DETAILS } from '../data/siteData';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Our <span>Services</span></h2>
          <p className="section-desc">
            From bricks and mortar to barrels and fuel lines — J WORKS-SA delivers across two
            essential industries: civil &amp; infrastructure construction, and bulk fuel &amp; energy
            supply through our dedicated subsidiary, J Black Holdings.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICE_COLUMNS.map(({ icon, title, subtitle, items }) => (
            <div key={title} className={styles.col}>
              <div className={styles.colHeader}>
                <div className={styles.colIcon}>{icon}</div>
                <div>
                  <div className={styles.colTitle}>{title}</div>
                  <div className={styles.colSubtitle}>{subtitle}</div>
                </div>
              </div>
              <ul className={styles.serviceList}>
                {items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* J Black Holdings fuel detail cards */}
        <div className={styles.fuelGrid}>
          {FUEL_DETAILS.map(({ tag, title, desc }) => (
            <div key={title} className={styles.fuelCard}>
              <span className={styles.subsidiaryTag}>{tag}</span>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#contact" className="btn-primary">Request a Quote for Any Service</a>
        </div>
      </div>
    </section>
  );
}
