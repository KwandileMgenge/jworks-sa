import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/constants";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <a href="#home" className="nav-logo">
        <div className="logo-mark">JW</div>
        <div className="logo-text">J WORKS<span>-SA</span></div>
      </a>

      <ul className={`nav-links${open ? " open" : ""}`}>
        {NAV_LINKS.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={l.href === "#contact" ? "nav-cta" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="hamburger"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
};

export default Navbar;
