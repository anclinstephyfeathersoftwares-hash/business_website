import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomScrollSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        { scale: 1.6, opacity: 0.8 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom+=300 top",
            scrub: 1.2,
          },
          ease: "power2.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        height: "200vh",
        position: "relative",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <video
        ref={videoRef}
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          position: "sticky",
          top: 0,
        }}
      />

      {/* Overlay Text */}
      <h1
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontSize: "60px",
          fontWeight: "300",
          letterSpacing: "4px",
        }}
      >
        ARQUI9 STYLE ZOOM
      </h1>
    </section>
  );
}
