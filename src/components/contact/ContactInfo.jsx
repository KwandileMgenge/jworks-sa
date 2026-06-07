import { BRAND } from "../../data/constants";

const CONTACT_BLOCKS = (brand) => [
  {
    heading: "Phone & Fax",
    items: [
      { icon: "📞", content: <a href={`tel:${brand.phoneRaw}`}>{brand.phone}</a> },
      { icon: "📠", content: `${brand.fax} (Fax)` },
    ],
  },
  {
    heading: "Email Addresses",
    items: [
      {
        icon: "✉️",
        content: (
          <>
            <a href={`mailto:${brand.emails.director}`}>{brand.emails.director}</a>{" "}
            <small style={{ color: "var(--grey-mid)" }}>(Director)</small>
          </>
        ),
      },
      {
        icon: "✉️",
        content: (
          <>
            <a href={`mailto:${brand.emails.admin}`}>{brand.emails.admin}</a>{" "}
            <small style={{ color: "var(--grey-mid)" }}>(Admin)</small>
          </>
        ),
      },
    ],
  },
  {
    heading: "Web & Social",
    items: [
      {
        icon: "🌐",
        content: (
          <a href={`https://${brand.website}`} target="_blank" rel="noreferrer">
            {brand.website}
          </a>
        ),
      },
      { icon: "📱", content: brand.social },
    ],
  },
];

const ContactInfo = () => (
  <div>
    {CONTACT_BLOCKS(BRAND).map(block => (
      <div className="contact-block" key={block.heading}>
        <h4>{block.heading}</h4>
        {block.items.map((item, i) => (
          <div className="contact-item" key={i}>
            <div className="c-icon">{item.icon}</div>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
    ))}
    <div className="map-ph">
      <div className="pin">📍</div>
      <span>
        <strong style={{ color: "var(--blue)" }}>J WORKS-SA</strong>
        <br />
        KwaZulu-Natal, South Africa
        <br />
        <small>Embed your Google Maps link here</small>
      </span>
    </div>
  </div>
);

export default ContactInfo;
