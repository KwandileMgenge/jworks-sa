import { useState } from 'react';
import { CONTACT_INFO, QUOTE_FORM_SERVICES } from '../data/siteData';
import styles from './Contact.module.css';

function ContactItem({ icon, children }) {
  return (
    <div className={styles.contactItem}>
      <div className={styles.ciIcon}>{icon}</div>
      <span>{children}</span>
    </div>
  );
}

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name    = data.get('name');
    const email   = data.get('email');
    const phone   = data.get('phone');
    const service = data.get('service');
    const message = data.get('message');

    const subject = encodeURIComponent(`Quote Request: ${service} - ${name}`);
    const body    = encodeURIComponent(
      `New Quote Request from J WORKS-SA Website\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:jworks_sa@icloud.com?subject=${subject}&body=${body}`;

    setSuccess(true);
    e.target.reset();
    setTimeout(() => setSuccess(false), 6000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Contact <span>Us</span></h2>
        <p className="section-desc">
          Ready to start your project or secure a fuel supply contract? We'd love to hear from you.
        </p>

        <div className={styles.grid}>
          {/* Info */}
          <div>
            <div className={styles.block}>
              <h4>Phone &amp; Fax</h4>
              {CONTACT_INFO.phones.map(({ icon, display, href }) => (
                <ContactItem key={display} icon={icon}>
                  {href ? <a href={href}>{display}</a> : display}
                </ContactItem>
              ))}
            </div>

            <div className={styles.block}>
              <h4>Email Addresses</h4>
              {CONTACT_INFO.emails.map(({ display, href, note }) => (
                <ContactItem key={display} icon="✉️">
                  <a href={href}>{display}</a>{note ? ` (${note})` : ''}
                </ContactItem>
              ))}
            </div>

            <div className={styles.block}>
              <h4>Web &amp; Social</h4>
              {CONTACT_INFO.web.map(({ icon, display, href }) => (
                <ContactItem key={display} icon={icon}>
                  {href ? <a href={href} target="_blank" rel="noopener noreferrer">{display}</a> : display}
                </ContactItem>
              ))}
            </div>

            <div className={styles.mapPlaceholder}>
              <div className={styles.mapPin}>📍</div>
              <span><strong>J WORKS-SA</strong><br />South Africa<br />Embed your Google Maps location here</span>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formWrap}>
            <h3 className={styles.formTitle}>Request a Quote</h3>
            <p className={styles.formDesc}>Fill in the form and we'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" required placeholder="+27 ..." />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="service">Service Required *</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>Select a service category...</option>
                  {QUOTE_FORM_SERVICES.map(({ group, options }) => (
                    <optgroup key={group} label={group}>
                      {options.map(o => <option key={o}>{o}</option>)}
                    </optgroup>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" placeholder="Tell us about your project or requirements..." />
              </div>
              <button type="submit" className={styles.formSubmit}>Send My Request →</button>
              {success && (
                <div className={styles.formSuccess}>
                  ✅ Thank you! Your request has been received. We'll be in touch within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
