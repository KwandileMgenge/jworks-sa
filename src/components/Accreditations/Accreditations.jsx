import { ACCREDITATIONS, CLIENTS } from "../../data/constants";
import SectionHeader from "../shared/SectionHeader";
import "./Accreditations.css";

const Accreditations = () => (
  <section className="accred-section">
    <div className="accred-inner">
      <SectionHeader
        label="Trust & Compliance"
        title="Accreditations &"
        accent="Clients"
        desc="J Works SA is registered and accredited to the highest industry standards, serving a diverse base spanning private and public sectors."
      />
      <div className="accred-grid">
        <div className="accred-box">
          <h4>Industry Registrations</h4>
          <div className="badge-row">
            {ACCREDITATIONS.map(a => (
              <div className="accred-badge" key={a}>{a}</div>
            ))}
          </div>
          <p style={{ marginTop: 18, fontSize: 13, color: "var(--grey-mid)", lineHeight: 1.7 }}>
            Registered with the National Home Builders Registration Council (NHBRC)
            and the Construction Industry Development Board (CIDB).
          </p>
        </div>
        <div className="accred-box">
          <h4>Our Clientele</h4>
          <div className="badge-row">
            {CLIENTS.map(c => (
              <div className="client-badge" key={c}>{c}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Accreditations;
