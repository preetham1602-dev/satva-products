import { FaLeaf, FaHandHoldingHeart, FaWhatsapp, FaTruck } from "react-icons/fa";
import "./WhyChoose.css";

function WhyChoose() {
  const features = [
    {
      icon: <FaLeaf />,
      title: "100% Natural",
      text: "Made with carefully selected Ayurvedic ingredients.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Traditional Formula",
      text: "Prepared using trusted Ayurvedic knowledge.",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp Support",
      text: "Quick support and easy ordering through WhatsApp.",
    },
    {
      icon: <FaTruck />,
      title: "Trusted Delivery",
      text: "Delivery available across locations. Charges depend on your area.",
    },
  ];

  return (
    <section className="why-choose" id="whychoose">
      <h2>Why Choose Satva?</h2>
      <p className="subtitle">
        We believe in simple, natural and trusted Ayurvedic care.
      </p>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;