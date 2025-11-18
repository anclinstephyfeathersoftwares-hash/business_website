import React from "react";

export default function AboutSection() {
  return (
    <section style={{ padding: "4rem 0", background: "#000", color: "#ddd", textAlign: "center" }}>
      <div className="container">
        <h2 className="section-title" style={{ fontSize: 40, marginBottom: 24 }}>ABOUT US</h2>
        <p style={{ maxWidth: 900, margin: "0 auto", lineHeight: 1.8 }}>
          We are a creative CGI & motion design studio focused on architectural visualization,
          storytelling, and advanced animation projects. We craft photoreal images and cinematic motion
          to help architects and brands tell their stories.
        </p>
      </div>
    </section>
  );
}
