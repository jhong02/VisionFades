import React, { useEffect } from "react";
import "../styles/home.css";
import "../styles/chromeReveal.css";
import video1 from "../assets/videos/video1.mp4";

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;

        const y = window.scrollY;

        // loop offsets (px). tweak the multipliers for speed.
        root.style.setProperty("--chromeOffset", `${-(y * 0.35)}px`);
        root.style.setProperty("--shineOffset", `${-(y * 0.9)}px`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO: videos only */}
      <div className="video-banner-container">
        <div className="video-row">
          <video className="video-banner" src={video1} autoPlay muted loop playsInline />
          <video className="video-banner" src={video1} autoPlay muted loop playsInline />
          <video className="video-banner" src={video1} autoPlay muted loop playsInline />
        </div>

        <div className="video-overlay">
          <h1>VISION FADES STUDIO</h1>
          <button className="book-btn">BOOK AN APPOINTMENT</button>
        </div>
      </div>

      {/* SCROLL REVEAL: chrome wallpaper section */}
      <section className="chrome-reveal">
        <div className="chrome-content">
          <h2>THE CHROME ZONE</h2>
          <p>
            This section is a repeating, custom SVG chrome pattern (no static PNG background).
            As you scroll, it loops and the shine moves.
          </p>
        </div>
      </section>
    </>
  );
}