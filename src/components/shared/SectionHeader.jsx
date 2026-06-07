const SectionHeader = ({ label, title, accent, desc }) => (
  <div style={{ marginBottom: 44 }}>
    <div className="sec-label">{label}</div>
    <h2 className="sec-title">
      {title} {accent && <span>{accent}</span>}
    </h2>
    {desc && <p className="sec-desc">{desc}</p>}
  </div>
);

export default SectionHeader;
