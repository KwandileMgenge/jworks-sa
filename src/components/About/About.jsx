import { BRAND, VALUES, APPROACH } from "../../data/constants";
import SectionHeader from "../shared/SectionHeader";
import "./About.css";

const ValueCard = ({ icon, title, desc }) => (
  <div className="val-item">
    <strong>{icon} {title}</strong>
    <span>{desc}</span>
  </div>
);

const ApproachCard = ({ title, desc }) => (
  <div className="approach-item">
    <h5>{title}</h5>
    <p>{desc}</p>
  </div>
);

const About = () => (
  <section id="about" className="about-section">
    <div className="about-inner">
      <SectionHeader
        label="Who We Are"
        title="About"
        accent="J WORKS-SA"
        desc={`Founded in ${BRAND.founded}, a multi-division company specialising in construction, infrastructure development, and energy product supply across South Africa.`}
      />
      <div className="about-grid">
        {/* Left column: quote + values */}
        <div>
          <div className="about-box">
            <p className="about-quote">
              "J Works SA delivers comprehensive construction and property development solutions
              to private and public sector clients. Our subsidiary, J Black Holdings, provides
              specialised energy solutions to the same sectors. Our reputation is built on
              integrity, quality, and an energetic approach led by a young and dynamic leadership team."
            </p>
            <div className="founder-strip">
              <div className="founder-av">JG</div>
              <div>
                <div className="founder-name">{BRAND.director}</div>
                <div className="founder-role">Director &amp; Founder, J WORKS-SA</div>
              </div>
            </div>
          </div>
          <div className="values-grid">
            {VALUES.map(v => <ValueCard key={v.title} {...v} />)}
          </div>
        </div>

        {/* Right column: mission + vision + approach */}
        <div>
          <div className="mission-card">
            <h4>🎯 Mission</h4>
            <p>To drive excellence and innovation in construction and energy solutions, delivering reliable, high-quality services that exceed client expectations. By prioritising workmanship, integrity, and adaptability, we aim to build a legacy of trust and sustainable growth.</p>
          </div>
          <div className="mission-card">
            <h4>🔭 Vision</h4>
            <p>To expand employment opportunities within our communities and establish J Works SA as a legacy brand synonymous with quality and excellence in the construction and energy sectors.</p>
          </div>
          <div className="sec-label" style={{ marginTop: 20, marginBottom: 14 }}>Our Approach</div>
          <div className="approach-grid">
            {APPROACH.map(a => <ApproachCard key={a.title} {...a} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
