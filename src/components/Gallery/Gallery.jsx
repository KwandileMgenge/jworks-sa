import { GALLERY_ITEMS } from "../../data/constants";
import SectionHeader from "../shared/SectionHeader";
import "./Gallery.css";

const GalleryItem = ({ icon, label, tag, cls, large }) => (
  <div className={`g-item${large ? " large" : ""} ${cls}`}>
    <div className="g-ph">
      <div className="g-ph-icon">{icon}</div>
      <div className="g-ph-text" style={{ whiteSpace: "pre-line" }}>{label}</div>
    </div>
    <div className="g-overlay"><span>{tag}</span></div>
  </div>
);

const Gallery = () => (
  <section id="gallery" className="gallery-section">
    <div className="gallery-inner">
      <SectionHeader
        label="Our Work"
        title="Project"
        accent="Gallery"
        desc="A showcase of our construction craftsmanship and energy supply operations across South Africa."
      />
      <div className="gallery-grid">
        {GALLERY_ITEMS.map(item => (
          <GalleryItem key={item.label} {...item} />
        ))}
      </div>
      <p className="gallery-note">📸 Replace placeholder tiles with your actual project photos.</p>
    </div>
  </section>
);

export default Gallery;
