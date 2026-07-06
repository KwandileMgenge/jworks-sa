import { GALLERY_ITEMS } from '../data/siteData';
import styles from './Gallery.module.css';

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.inner}>
        <div className="section-label">Our Work</div>
        <h2 className="section-title">Project <span>Gallery</span></h2>
        <p className="section-desc">
          A showcase of our construction craftsmanship and energy supply operations across
          South Africa.
        </p>

        <div className={styles.grid}>
          {GALLERY_ITEMS.map(({ icon, label, tag, cls, large }) => (
            <div
              key={tag}
              className={`${styles.item} ${styles[cls]} ${large ? styles.large : ''}`}
            >
              <div className={styles.placeholder}>
                <div className={styles.placeholderIcon}>{icon}</div>
                <div className={styles.placeholderText}>{label}</div>
              </div>
              <div className={styles.overlay}><span>{tag}</span></div>
            </div>
          ))}
        </div>
        <p className={styles.note}>📸 Replace the placeholder tiles above with your actual project photos.</p>
      </div>
    </section>
  );
}
