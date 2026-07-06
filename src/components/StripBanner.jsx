import { STRIP_ITEMS } from '../data/siteData';
import styles from './StripBanner.module.css';

export default function StripBanner() {
  return (
    <div className={styles.strip}>
      {STRIP_ITEMS.map((item, i) => (
        <div key={item} className={styles.stripRow}>
          <span className={styles.stripItem}>{item}</span>
          {i < STRIP_ITEMS.length - 1 && <span className={styles.stripDot} />}
        </div>
      ))}
    </div>
  );
}
