import React from 'react';
import '../styles/home.css';
import video1 from '../assets/images/videos/video1.mp4';
import '../styles/home.css';

export default function Home() {
  return (
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
  );
}
