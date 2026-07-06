import styles from './Community.module.css';

export default function Community() {
  return (
    <section id="community" className={styles.community}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className="anim-1">
            <div className="section-label">Social Responsibility</div>
            <h2 className="section-title">
              Empowering The <span>Youth</span>
            </h2>
            <p className="section-desc" style={{ maxWidth: 'none', marginBottom: '24px' }}>
              As a proudly 100% Black-owned youth enterprise, J WORKS-SA is deeply passionate
              about driving tangible social upliftment across South African townships. Our
              cornerstone corporate social investment framework focuses on empowering local
              youth through community sports and shared educational resources.
            </p>
            <div className={styles.card}>
              <h4>Township Rugby Sponsorships</h4>
              <p>
                We proudly sponsor grassroots township rugby clubs by providing complete
                professional rugby match kits, modern training equipment, and nutritious food
                packs for competitive tournaments — steering youth toward positive development,
                teamwork, health, and a stronger community.
              </p>
            </div>
          </div>

          <div className={`${styles.visual} anim-2`}>
            <div className={styles.visualIcon}>🏉</div>
            <div className={styles.visualText}>
              Township Rugby Sponsorship<br />Programme
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
