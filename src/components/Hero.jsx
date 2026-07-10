import heroImage from "../assets/images/hero.png";
import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0,y: 40 }}
      animate={{ opacity: 1,y: 0 }}
      transition={{ duration: 0.8 }}
    >

      <div className="hero-content">

        <span className="hero-tag">
          🌿 PREMIUM AYURVEDIC CARE
        </span>

        <h1>
          Nature's Healing,
          <br />
          Bottled for You
        </h1>

        <p>
          Premium Ayurvedic oils for pain relief,
          healthy hair and stress relaxation.
          Crafted with trusted herbal ingredients.
        </p>

        <div className="hero-badges">
          <span>💬 WhatsApp Orders</span>
          <span>🌿 Trusted Formula</span>
        </div>

        <a href="#products" className="primary-btn">
          Explore Products →
        </a>

      </div>

      <div className="hero-image-card">
        <img
          src={heroImage}
          alt="Satva Products"
          className="hero-image"
        />
      </div>

    </motion.section>
  );
}

export default Hero;