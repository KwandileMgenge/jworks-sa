import { useState } from "react";
import { BRAND, CONSTRUCTION_SERVICES, ENERGY_SERVICES } from "../../data/constants";

const INITIAL_FORM = { name: "", phone: "", email: "", service: "", message: "" };

const ContactForm = () => {
  const [form, setForm]       = useState(INITIAL_FORM);
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
    setForm(INITIAL_FORM);
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
            <input
              name="name"
              value={form.name}
              onChange={handle}
              placeholder="Your full name"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handle}
              placeholder="+27 ..."
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handle}
            placeholder="your@email.com"
            required
          />
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

export default ContactForm;
