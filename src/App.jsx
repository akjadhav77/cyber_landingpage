import React from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import FaqSection from "./components/FaqSection";
import PartnersSection from "./components/PartnersSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <h2>AK</h2> */}
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <FaqSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
