import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsapp.css";

function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/917204096079"
      className="floating-whatsapp"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsapp;