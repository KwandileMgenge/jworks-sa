import { BRAND, STATS } from "../../data/constants";
import { BtnPrimary, BtnOutline } from "../ui/Primitives";

// ─── Sub-components ───────────────────────────────────────────────
const HeroStatCard = ({ num, label }) => (
  <div className="stat-card">
    <div className="stat-num">{num}</div>
    <div className="stat-lbl">{label}</div>
  </div>
);

const HeroPreviewCard = ({ icon, title, sub }) => (
  <div className="preview-card">
    <div className="preview-icon">{icon}</div>
    <div>
      <strong>{title}</strong>
      <span>{sub}</span>
    </div>
  </div>
);

// ─── Hero ─────────────────────────────────────────────────────────
const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-bg" />
    <div className="hero-grid" />
    <div className="hero-glow" />
    <div className="hero-split" />
    <div className="hero-ticker" />

    <div className="hero-inner">
      {/* Left: headline + CTA */}
      <div>
        <div className="hero-badge">
          South Africa's Trusted Partner · Est. {BRAND.founded}
        </div>
        <h1 className="hero-h1">
          Building Your Future.
          <span className="blue">Powering Your Progress.</span>
        </h1>
        <p className="hero-sub">
          <strong>Construction, Renovations</strong> and Comprehensive{" "}
          <strong>Energy Solutions.</strong>
          <br />
          {BRAND.slogan}
        </p>
        <div className="hero-btns">
          <BtnPrimary href="#contact">Request a Quote</BtnPrimary>
          <BtnOutline href="#services">View Services</BtnOutline>
        </div>
      </div>

      {/* Right: stat cards + preview cards */}
      <div className="hero-right">
        <div className="stat-row">
          {STATS.slice(0, 2).map(s => <HeroStatCard key={s.label} {...s} />)}
        </div>
        <div className="stat-row">
          {STATS.slice(2).map(s => <HeroStatCard key={s.label} {...s} />)}
        </div>
        <HeroPreviewCard
          icon="🏗️"
          title="Construction & Home Improvements"
          sub="New builds, renovations, paving & more"
        />
        <HeroPreviewCard
          icon="⛽"
          title={`Energy & Fuel Supply via ${BRAND.subsidiary}`}
          sub="Diesel, LPG, Petrol, Biofuels, Aviation Fuel"
        />
      </div>
    </div>
  </section>
);

export default Hero;
