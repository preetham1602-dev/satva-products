import { FaWhatsapp, FaEnvelope, FaLeaf } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">
        <FaLeaf className="footer-logo" />
        <h2>Satva Products</h2>

        <p>
          Nature's Healing, Bottled for You.
        </p>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>

        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-contact">
        <h3>Contact</h3>

        <p>
          <FaWhatsapp /> +91 72040 96079
        </p>

        <p>
          <FaEnvelope /> manishpujary81@gmail.com
        </p>
      </div>

      <div className="footer-bottom">
        © 2026 Satva Products. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;