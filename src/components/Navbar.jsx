import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/siteData';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const logoImg = new URL(`../assets/JWorksLogo.png`, import.meta.url).href;
  const textImg = new URL(`../assets/JWorksTxt.png`, import.meta.url).href;

  const close = () => setOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`} id="navbar">
      <a href="#home" className={styles.logo}>
        <div className={styles.logoMark}><img src={logoImg} alt="j works logo" /></div>
        <div className={styles.logoText}><img src={textImg} alt="" /></div>
      </a>

      <ul className={`${styles.navLinks} ${open ? styles.open : ''}`} id="navLinks">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              onClick={close}
              className={label === 'Contact' ? styles.navCta : ''}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={styles.hamburger}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
