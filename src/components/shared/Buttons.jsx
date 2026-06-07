export const BtnPrimary = ({ href, onClick, children }) =>
  href
    ? <a href={href} className="btn-primary">{children}</a>
    : <button className="btn-primary" onClick={onClick}>{children}</button>;

export const BtnOutline = ({ href, children }) =>
  <a href={href} className="btn-outline">{children}</a>;
