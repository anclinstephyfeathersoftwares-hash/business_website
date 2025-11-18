import React from "react";
import { motion } from "framer-motion";

export default function ShowcaseSection() {
  const imgs = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];

  return (
    <section style={{ padding: "4rem 0", background: "#050505" }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: "center", fontSize: 40, marginBottom: 40 }}>
          SHOWCASE
        </h2>

        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "1fr",
          }}
        >
          {imgs.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              viewport={{ once: true }}
              style={{ overflow: "hidden", borderRadius: 8 }}
            >
              <img
                src={src}
                alt={`showcase ${idx + 1}`}
                style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
