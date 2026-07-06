import styles from './Director.module.css';

export default function Director() {
  const directorImg = new URL(`../assets/JackGumede.jpg`, import.meta.url).href;

  return (
    <section id="director" className={styles.director}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={`${styles.portrait} anim-1`}>
            {/* Image placeholder with a fallback alt text */}
            <img 
              src={directorImg}
              alt="Jackson Gumede - Director & Founder" 
              className={styles.portraitImg} 
            />
            <div className={styles.name}>Jackson Gumede</div>
            <div className={styles.role}>Director &amp; Founder</div>
          </div>

          <div className="anim-2">
            <div className="section-label">Message From The Director</div>
            <h2 className="section-title">
              Building Beyond <span>Boundaries</span>
            </h2>
            <blockquote className={styles.quote}>
              "Welcome to J WORKS-SA. With over a decade of successful project delivery, we have
              cultivated an enduring reputation as a trusted partner for private and commercial
              enterprises, major municipalities, and residential clients across South Africa. We
              look forward to building the future together with you."
            </blockquote>
            <blockquote className={styles.quote}>
              "As a 100% Black-owned, youth-led enterprise, we carry a unique responsibility to
              inject fresh energy, modern technology, and sustainable job opportunities into local
              economies. Whether executing public civil works or supplying refined petroleum
              products, we ensure every single technical specification is delivered with absolute
              precision and zero compromise on quality. We don't just execute contracts — we build
              lasting trust."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
