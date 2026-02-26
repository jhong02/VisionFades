import React, { useEffect, useRef } from "react";
import "../styles/home.css";
import video1 from "../assets/videos/video1.mp4";

export default function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;

    const update = () => {
      raf = 0;

      const yRaw = window.scrollY - el.offsetTop;
      const y = Math.max(0, yRaw);

      // true parallax: set px offsets directly (no calc multiplication)
      el.style.setProperty("--gradY", `${-y * 0.08}px`); // slow
      el.style.setProperty("--svgY", `${-y * 0.18}px`);  // faster

      // subtle horizontal drift so it "feels alive"
      el.style.setProperty("--svgX", `${Math.sin(y * 0.002) * 24}px`);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="video-banner-container">
        <div className="video-row">
          <video className="video-banner" src={video1} autoPlay muted loop playsInline />
          <video className="video-banner" src={video1} autoPlay muted loop playsInline />
          <video className="video-banner" src={video1} autoPlay muted loop playsInline />
        </div>

        <div className="video-overlay">
          <div>
            <h1>VISION FADES STUDIO</h1>
            <button className="book-btn">BOOK AN APPOINTMENT</button>
          </div>
        </div>
      </section>

      {/* PARALLAX SECTION */}
      <section ref={sectionRef} className="home-sections">
        <div className="home-bg" aria-hidden="true" />
        <div className="home-svg" aria-hidden="true" />
        <div className="home-veil" aria-hidden="true" />
        <div className="home-grain" aria-hidden="true" />

        <div className="home-content">
          <div className="home-section">
            <h2>ABOUT</h2>
            <p>Welcome to Vision Fades Studio. Scroll down to see more content.</p>
          </div>

          <div className="home-section">
            <h2>SERVICES</h2>
            <p>Haircuts, fades, tapers, and custom requests.</p>
          </div>

          <div className="home-section">
            <h2>BOOK</h2>
            <p>Hit “Book an Appointment” to lock in a time.</p>
          </div>
        </div>
      </section>
    </>
  );
}