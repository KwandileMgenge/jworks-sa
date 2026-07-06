import { HERO_STATS, HERO_PREVIEWS } from '../data/siteData';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroGrid} />
      <div className={styles.heroAccent} />
      <div className={styles.heroSplit} />
      <div className={styles.heroLines} />

      <div className={styles.heroContent}>
        {/* Left */}
        <div className={`${styles.heroLeft} anim-1`}>
          <span className={styles.heroTag}>"WE DO IT BETTER" — SENZA KANGCONO</span>
          <h1 className={styles.heroHeadline}>
            Building Your
            <span className={styles.accent}> Future. Powering Your</span>
            {' '}Progress.
          </h1>
          <p className={styles.heroSub}>
            <strong>Construction, Renovations</strong> and Comprehensive{" "}
            <strong>Energy Solutions.</strong>
          </p>
          <div className={styles.heroBtns}>
            <a href="#contact" className="btn-primary">Request a Quote</a>
            <a href="#services" className="btn-outline">View Services</a>
          </div>
        </div>

        {/* Right — stats + previews */}
        <div className={`${styles.heroRight} anim-2`}>
          <div className={styles.heroStatRow}>
            {HERO_STATS.map(({ num, label }) => (
              <div key={label} className={styles.heroStat}>
                <div className={styles.statNum}>{num}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
          {HERO_PREVIEWS.map(({ icon, title, subtitle }) => (
            <div key={title} className={styles.servicePreview}>
              <div className={styles.serviceIcon}>{icon}</div>
              <div>
                <strong>{title}</strong>
                <span>{subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
