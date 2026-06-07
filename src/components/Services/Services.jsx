import { BRAND, CONSTRUCTION_SERVICES, ENERGY_SERVICES } from "../../data/constants";
import SectionHeader from "../shared/SectionHeader";
import { BtnPrimary } from "../shared/Buttons";
import "./Services.css";

const ServiceColumn = ({ icon, title, subtitle, items }) => (
  <div className="svc-col">
    <div className="svc-col-hd">
      <div className="svc-icon">{icon}</div>
      <div>
        <div className="svc-col-name">{title}</div>
        <div className="svc-col-sub">{subtitle}</div>
      </div>
    </div>
    <ul className="svc-list">
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  </div>
);

const Services = () => (
  <section id="services" className="services-section">
    <div className="services-inner">
      <SectionHeader
        label="What We Do"
        title="Our"
        accent="Services"
        desc={`From bricks and mortar to barrels and fuel lines — J WORKS-SA and subsidiary ${BRAND.subsidiary} deliver across two essential industries.`}
      />
      <div className="services-grid">
        <ServiceColumn
          icon="🏗️"
          title="Construction & Home Improvements"
          subtitle="Building, Renovating, Transforming"
          items={CONSTRUCTION_SERVICES}
        />
        <ServiceColumn
          icon="⛽"
          title={`Energy & Fuel Supply — ${BRAND.subsidiary}`}
          subtitle="Powering Industry & Households"
          items={ENERGY_SERVICES}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: 44 }}>
        <BtnPrimary href="#contact">Request a Quote for Any Service</BtnPrimary>
      </div>
    </div>
  </section>
);

export default Services;
