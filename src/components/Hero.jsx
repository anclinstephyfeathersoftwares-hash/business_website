import { useEffect, useState } from "react";
import "../styles/main.css";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallax = scrollY * 0.25;

  return (
    <section className="hero-section">

      {/* ⭐ BACKGROUND VIDEO ADDED HERE */}
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="/v.mp4" type="video/mp4" />
      </video>
      <div className="bg-overlay"></div>
      {/* -------------------------------- */}

      <div className="hero-left">
        <p className="hero-small-title">OUR SERVICES</p>

        {/* BLOCK MASK IMAGE EFFECT */}
        <div className="mask-wrapper">
          <img
            src="/a1.jpg"
            className="masked-img"
            style={{ transform: `translateY(${parallax}px)` }}
          />
        </div>
      </div>

      <div className="hero-right">
        <h1 className="hero-title">Architectural Rendering and CGI's</h1>
        <p className="hero-desc">
          Specialising in creating visually engaging representations of reality (renders)
          for the architectural field and beyond.
        </p>

        <div className="scroll-line"></div>

        <h2 className="hero-sub">Film & Animation</h2>
        <div className="scroll-line"></div>

        <h2 className="hero-sub">Immersive Experiences</h2>
        <div className="scroll-line"></div>

        <a className="explore">↳ EXPLORE SERVICES</a>
      </div>

    </section>
  );
}
