import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="Satva Logo" className="logo" />

        <div>
          <h2>SATVA</h2>
          <p>PRODUCTS</p>
        </div>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </div>
      {menuOpen && (
  <div className="mobile-menu">

    <a href="#hero" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#products" onClick={() => setMenuOpen(false)}>
      Products
    </a>

    <a href="#whychoose" onClick={() => setMenuOpen(false)}>
      Why Choose
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>

  </div>
)}
    </nav>
  );
}

export default Navbar;