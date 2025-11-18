import { useState, useEffect } from "react";
import "./Realities.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

export default function Realities() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // change every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="realities-container">
      <img
        src={images[currentIndex]}
        className="bg-image fade"
        alt="background"
      />

      <div className="content">
        <p className="label">OUR IMPACT</p>

        <h1>
          We envision realities,<br />
          move worlds and<br />
          create the future
        </h1>

        <a href="#" className="explore-link">
          EXPLORE SERVICES
        </a>
      </div>
    </section>
  );
}
