import { CORE_VALUES } from '../data/siteData';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Quote + values */}
          <div className={`${styles.visual} anim-1`}>
            <div className={styles.box}>
              <p className={styles.quote}>
                J WORKS-SA aims to deliver high-quality liquified gas and construction services.
                We are committed to excellent, cost-effective customer service while creating
                employment opportunities in the industry.
              </p>
              <div className={styles.values}>
                {CORE_VALUES.map(({ label, desc }) => (
                  <div key={label} className={styles.valueItem}>
                    <strong>{label}</strong>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className={`${styles.textCol} anim-2`}>
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">About <span>J WORKS-SA</span></h2>
            <p className="section-desc" style={{ maxWidth: 'none' }}>
              Founded in 2014, J WORKS-SA is a proudly South African, 100% Black-owned, youth-led
              company operating at the intersection of construction excellence and energy supply.
              Our dual-sector expertise means we serve residential clients, private and commercial
              enterprises, major municipalities, and state-owned entities with the same level of
              care and professionalism.
            </p>
            <p className={styles.subPara}>
              From bathroom renovations in your home to bulk fuel supply contracts for your fleet
              — via our dedicated subsidiary, <strong>J Black Holdings</strong> — J WORKS-SA brings
              quality workmanship and cost-effective solutions under one trusted brand.
            </p>

            <div className={styles.missionBlock}>
              <h4>Our Mission</h4>
              <p>
                To drive excellence and continuous innovation across the construction and energy
                sectors, delivering highly reliable, premium-quality solutions that consistently
                exceed our clients' expectations — through superior workmanship, corporate
                integrity, and operational adaptability.
              </p>
            </div>
            <div className={styles.missionBlock}>
              <h4>Our Vision</h4>
              <p>
                To continuously expand sustainable employment opportunities within our local
                communities and firmly establish J WORKS-SA as a legacy African brand synonymous
                with elite quality and regional excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
