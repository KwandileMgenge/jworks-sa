import { SectionHeader } from "../ui/Primitives";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

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
