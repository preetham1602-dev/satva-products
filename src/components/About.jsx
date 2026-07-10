import logo from "../assets/images/logo.png";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <h2>About Us</h2>

      <img src={logo} alt="Satva Logo" className="about-logo" />

      <h3>SATVA PRODUCTS</h3>

      <p>
        At Satva Products, we believe true wellness begins with nature.
        Our Ayurvedic oils are carefully prepared using traditional
        herbal knowledge to support pain relief, hair care and
        relaxation with trusted natural ingredients.
      </p>

      <div className="about-features">
        <div>🌿 Traditional Ayurveda</div>
        <div>💚 Premium Quality</div>
        <div>🌱 Trusted Herbal Care</div>
      </div>

    </section>
  );
}

export default About;