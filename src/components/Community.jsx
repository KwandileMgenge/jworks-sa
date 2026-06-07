import { SectionHeader } from "../ui/Primitives";

const COMMUNITY_PHOTOS = ["🏉", "🤝", "👕", "🏆"];

const Community = () => (
  <section id="community" className="community-section">
    <div className="community-inner">
      <SectionHeader
        label="Giving Back"
        title="Community"
        accent="Development"
        desc="Our goal is to empower and uplift local communities — particularly the youth — through sports and shared resources."
      />
      <div className="community-grid">
        <div className="community-text">
          <p>
            We proudly sponsor township rugby clubs, providing them with rugby kits, training
            equipment, and food packs for tournaments. This initiative strengthens community
            ties while showcasing J Works SA as a company that values social development.
          </p>
          <p>
            As a{" "}
            <strong style={{ color: "var(--blue)" }}>100% Black-owned youth business</strong>,
            we're passionate about creating positive change and contributing to local communities
            through sustainable employment and excellence-driven services.
          </p>
          <div className="community-badge">🏉 Township Rugby Club Sponsors</div>
        </div>
        <div className="community-photos">
          {COMMUNITY_PHOTOS.map((emoji, i) => (
            <div className="community-photo" key={i}>{emoji}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Community;
