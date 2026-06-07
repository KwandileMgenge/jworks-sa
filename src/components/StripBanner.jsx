import { BRAND } from "../../data/constants";

const ITEMS = [
  "🏗️ Construction & Home Improvements",
  "⛽ Fuel & Energy Supply",
  "🏆 Quality Workmanship",
  `📞 ${BRAND.phone}`,
];

const StripBanner = () => (
  <div className="strip">
    {ITEMS.map((item, i) => (
      <span key={item} style={{ display: "flex", alignItems: "center", gap: 36 }}>
        <span className="strip-item">{item}</span>
        {i < ITEMS.length - 1 && <span className="strip-dot" />}
      </span>
    ))}
  </div>
);

export default StripBanner;
