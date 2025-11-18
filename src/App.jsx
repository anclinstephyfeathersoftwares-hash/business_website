import React from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ShowcaseSection from "./components/ShowcaseSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ShowcaseSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
