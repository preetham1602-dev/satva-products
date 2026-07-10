import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Contact Us</h2>

      <p>
        Have questions or want to place an order?
        Get in touch with us.
      </p>

      <div className="contact-card">

        <FaWhatsapp className="contact-icon" />

        <h3>WhatsApp</h3>

        <a
          href="https://wa.me/917204096079"
          target="_blank"
          rel="noreferrer"
        >
          +91 72040 96079
        </a>

      </div>

      <div className="contact-card">

        <FaEnvelope className="contact-icon" />

        <h3>Email</h3>

        <a href="mailto:manishpujary81@gmail.com">
          manishpujary81@gmail.com
        </a>

      </div>

    </section>
  );
}

export default Contact;