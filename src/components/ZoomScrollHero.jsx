import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ZoomScrollHero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    // VIDEO ZOOM IN → ZOOM OUT ON SCROLL
    gsap.fromTo(
      video,
      { scale: 1.8, opacity: 1 },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        height: "180vh",     // keeps scroll long like Arqui9
        width: "100vw",
        overflow: "hidden",
        background: "#000",
      }}
    >

      {/* Sticky video just like Arqui9 */}
      <video
        ref={videoRef}
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Logo or text over video */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#ffffffaa",
          fontSize: "80px",
          letterSpacing: "20px",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        ARQUI9
      </div>
    </section>
  );
}
