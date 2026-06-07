import { useState } from "react";
import { BRAND, CONSTRUCTION_SERVICES, ENERGY_SERVICES } from "../../data/constants";
import SectionHeader from "../shared/SectionHeader";
import "./Contact.css";

/* ── Contact Info ─────────────────────────────────────────────── */
const ContactInfo = () => {
  const blocks = [
    {
      heading: "Phone",
      items: [
        { icon: "📞", content: <a href={`tel:${BRAND.phoneRaw}`}>{BRAND.phone}</a> },
      ],
    },
    {
      heading: "Email Addresses",
      items: [
        { icon: "✉️", content: <><a href={`mailto:${BRAND.emails.director}`}>{BRAND.emails.director}</a>{" "}<small style={{ color: "var(--grey-mid)" }}>(Director)</small></> },
        { icon: "✉️", content: <><a href={`mailto:${BRAND.emails.admin}`}>{BRAND.emails.admin}</a>{" "}<small style={{ color: "var(--grey-mid)" }}>(Admin)</small></> },
      ],
    },
    {
      heading: "Social",
      items: [
        { icon: "📱", content: BRAND.social },
      ],
    },
  ];

  return (
    <div>
      {blocks.map(b => (
        <div className="contact-block" key={b.heading}>
          <h4>{b.heading}</h4>
          {b.items.map((item, i) => (
            <div className="contact-item" key={i}>
              <div className="c-icon">{item.icon}</div>
              <span>{item.content}</span>
            </div>
          ))}
        </div>
      ))}
      <div className="map-ph">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13859.813161899545!2d30.955929599999997!3d-29.721112249999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef70338137d923d%3A0xe164b2788317ca4!2sPalace%20View%20Estate!5e0!3m2!1sen!2sza!4v1780833808339!5m2!1sen!2sza"
          width="600"
          height="450"
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="J WORKS-SA Location"
        />
      </div>
    </div>
  );
};

/* ── Contact Form ─────────────────────────────────────────────── */
const ContactForm = () => {
  const [form, setForm]       = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    const { name, email, phone, service, message } = form;
    const sub  = encodeURIComponent(`Quote Request: ${service} — ${name}`);
    const body = encodeURIComponent(
      `New Quote Request from J WORKS-SA Website\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${BRAND.emails.admin}?subject=${sub}&body=${body}`;
    setSuccess(true);
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
    setTimeout(() => setSuccess(false), 6000);
  };

  return (
    <div className="form-wrap">
      <div className="form-title">Request a Quote</div>
      <p className="form-desc">Fill in the form and we'll get back to you within 24 hours.</p>
      <form onSubmit={submit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input name="name" value={form.name} onChange={handle} placeholder="Your full name" required />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input name="phone" value={form.phone} onChange={handle} placeholder="+27 ..." required />
          </div>
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input type="email" name="email" value={form.email} onChange={handle} placeholder="your@email.com" required />
        </div>
        <div className="form-group">
          <label>Service Required *</label>
          <select name="service" value={form.service} onChange={handle} required>
            <option value="" disabled>Select a service…</option>
            <optgroup label="Construction & Home Improvements">
              {CONSTRUCTION_SERVICES.map(s => <option key={s}>{s}</option>)}
            </optgroup>
            <optgroup label="Energy & Fuel Supply">
              {ENERGY_SERVICES.map(s => <option key={s}>{s}</option>)}
            </optgroup>
          </select>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            placeholder="Tell us about your project, location, timeline, and requirements…"
          />
        </div>
        <button type="submit" className="form-submit">Send My Request →</button>
        <div className={`form-success${success ? " show" : ""}`}>
          ✅ Received! We'll be in touch within 24 hours.
        </div>
      </form>
    </div>
  );
};

/* ── Contact Section ──────────────────────────────────────────── */
const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-inner">
      <SectionHeader
        label="Get In Touch"
        title="Contact"
        accent="Us"
        desc="Ready to start your project or secure a fuel supply contract? We'd love to hear from you."
      />
      <div className="contact-grid">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
