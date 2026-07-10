import "./App.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import WhyChoose from "./components/WhyChoose";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Products />
      <WhyChoose />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsapp/>
      

      </>
  );
}

export default App;