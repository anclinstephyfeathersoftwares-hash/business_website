import React from "react";

export default function Footer() {
  return (
    <footer style={{ padding: "2rem 0", textAlign: "center", color: "#777", background: "#000" }}>
      <div className="container">
        © {new Date().getFullYear()} ARQUI9 Clone — Built with React + Vite
      </div>
    </footer>
  );
}
