import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowText(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.6)"
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          position: "absolute",
          bottom: 48,
          width: "100%",
          textAlign: "center",
          color: "#fff",
          letterSpacing: "0.8rem",
          fontSize: 48,
          transform: showText ? "translateY(0)" : "translateY(30px)",
          opacity: showText ? 1 : 0,
          transition: "opacity 1s ease, transform 1s ease"
        }}
      >
        A R Q U I 9
      </div>
    </section>
  );
}
