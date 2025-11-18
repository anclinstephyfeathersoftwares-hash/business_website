import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Concept Design", desc: "Creative concepts for architecture & interiors." },
  { title: "Animation & Motion", desc: "Motion design, storytelling and cinematic animation." },
  { title: "Architecture Visualization", desc: "Photoreal renders and visual narratives." },
  { title: "Creative Direction", desc: "End-to-end creative production and art direction." }
];

export default function ServicesSection() {
  return (
    <section style={{ padding: "4rem 0", background: "#000" }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: "center", fontSize: 40, marginBottom: 40 }}>
          OUR SERVICES
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                padding: 20,
                borderRadius: 8,
                background: "rgba(255,255,255,0.02)"
              }}
            >
              <h3 style={{ fontSize: 22, fontWeight: 300, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: "#cfcfcf" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
