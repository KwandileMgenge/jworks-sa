// ─── Section Header ───────────────────────────────────────────────
export const SectionHeader = ({ label, title, accent, desc }) => (
  <div style={{ marginBottom: 44 }}>
    <div className="sec-label">{label}</div>
    <h2 className="sec-title">
      {title} {accent && <span>{accent}</span>}
    </h2>
    {desc && <p className="sec-desc">{desc}</p>}
  </div>
);

// ─── Buttons ──────────────────────────────────────────────────────
export const BtnPrimary = ({ href, onClick, children }) =>
  href ? (
    <a href={href} className="btn-primary">{children}</a>
  ) : (
    <button className="btn-primary" onClick={onClick}>{children}</button>
  );

export const BtnOutline = ({ href, children }) => (
  <a href={href} className="btn-outline">{children}</a>
);
