import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Hero.css';
import FadeIn from './FadeIn';
import Countdown from './Countdown';

const IMAGES = [
  '/WhatsApp Image 2026-05-23 at 10.09.44 PM.jpeg',
  '/Screenshot_19.png',
  '/Screenshot_1.png',
  '/Screenshot_2.png',
  '/Screenshot_3.png'
];

// --- Pure SVG Components ---

const PapelPicadoSVG = () => (
  <svg className="svg-papel-picado" viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path className="papel-path" d="M0,0 L1000,0 L1000,40 Q950,80 900,40 Q850,80 800,40 Q750,80 700,40 Q650,80 600,40 Q550,80 500,40 Q450,80 400,40 Q350,80 300,40 Q250,80 200,40 Q150,80 100,40 Q50,80 0,40 Z" fill="var(--accent-light)" opacity="0.15"/>
    <path className="papel-path-stroke" d="M0,0 L1000,0 L1000,30 Q950,70 900,30 Q850,70 800,30 Q750,70 700,30 Q650,70 600,30 Q550,70 500,30 Q450,70 400,30 Q350,70 300,30 Q250,70 200,30 Q150,70 100,30 Q50,70 0,30 Z" fill="none" stroke="var(--accent-light)" strokeWidth="2" opacity="0.6"/>
    {[100, 300, 500, 700, 900].map(x => (
      <g key={x} className="papel-decoration" transform={`translate(${x}, 30)`} fill="var(--accent-light)" opacity="0.8">
        <polygon points="0,-10 3,0 0,10 -3,0" />
        <circle cx="0" cy="-15" r="2" />
        <circle cx="0" cy="15" r="2" />
      </g>
    ))}
    {[200, 400, 600, 800].map(x => (
      <g key={x} className="papel-decoration" transform={`translate(${x}, 25)`} fill="none" stroke="var(--accent-light)" strokeWidth="1.5" opacity="0.8">
        <path d="M-10,-5 Q0,0 -10,5 Z" />
        <path d="M10,-5 Q0,0 10,5 Z" />
        <circle cx="0" cy="0" r="2" fill="var(--accent-light)"/>
      </g>
    ))}
  </svg>
);

const CrossSVG = () => (
  <svg className="svg-cross" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
    <path d="M45,20 L45,45 L20,45 Q15,45 15,50 Q15,55 20,55 L45,55 L45,130 Q45,135 50,135 Q55,135 55,130 L55,55 L80,55 Q85,55 85,50 Q85,45 80,45 L55,45 L55,20 Q55,15 50,15 Q45,15 45,20 Z" fill="var(--accent-light)" opacity="0.9"/>
    <polygon points="50,47 53,50 50,53 47,50" fill="var(--bg-main)" />
  </svg>
);

const drawStar = (spikes, outerRadius, innerRadius) => {
  let path = '';
  for (let i = 0; i < spikes * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i * Math.PI) / spikes;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    path += (i === 0 ? 'M ' : 'L ') + x + ',' + y;
  }
  return path + ' Z';
};

const OriginalTalaveraRingSVG = () => {
  const petals = 48;
  const cx = 100;
  const cy = 100;
  
  const decorativeElements = [];

  for (let i = 0; i < petals; i++) {
    const angle = (i * 360) / petals;
    const rad = (angle * Math.PI) / 180;
    
    // The base of the petal touches the inner ring
    const pRadius = 74.5;
    const px = cx + Math.cos(rad) * pRadius;
    const py = cy + Math.sin(rad) * pRadius;
    
    // Rotate +90 so that -y points outwards away from the center
    const rotation = angle + 90;
    
    decorativeElements.push(
      <g key={`petal-${i}`} className="talavera-petal" transform={`translate(${px}, ${py}) rotate(${rotation})`}>
        {/* Flawless U-shape path radiating outwards */}
        <path 
          d="M -2.5,0 L -2.5,-5.5 A 2.5,2.5 0 0,1 2.5,-5.5 L 2.5,0" 
          fill="none" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
      </g>
    );
  }

  // Stars and sparkles
  for (let i = 0; i < petals; i += 3) {
    if (i % 6 === 0) {
      // Solid 8-point flower/star (no longer a snowflake!)
      const angle = (i * 360) / petals;
      const rad = (angle * Math.PI) / 180;
      const aRadius = 92; 
      const ax = cx + Math.cos(rad) * aRadius;
      const ay = cy + Math.sin(rad) * aRadius;
      
      decorativeElements.push(
        <g key={`star-${i}`} className="talavera-star" transform={`translate(${ax}, ${ay}) rotate(${angle})`}>
          <path d={drawStar(8, 3.5, 1.5)} fill="white" />
        </g>
      );
    } else {
      // Small 4-point solid diamond sparkle
      const angle2 = (i * 360) / petals;
      const rad2 = (angle2 * Math.PI) / 180;
      const sRadius = 88;
      const sx = cx + Math.cos(rad2) * sRadius;
      const sy = cy + Math.sin(rad2) * sRadius;

      decorativeElements.push(
        <g key={`sparkle-${i}`} className="talavera-sparkle" transform={`translate(${sx}, ${sy}) rotate(${angle2})`}>
          <path d={drawStar(4, 2, 0.5)} fill="white" opacity="0.8" />
        </g>
      );
    }
  }

  return (
    <svg viewBox="0 0 200 200" className="svg-talavera-ring" xmlns="http://www.w3.org/2000/svg">
      {decorativeElements}
      
      {/* Solid inner ring anchoring the petals */}
      <circle className="talavera-inner-ring" cx="100" cy="100" r="74" fill="none" stroke="white" strokeWidth="2.5" />
      
      {/* Delicate inner border */}
      <circle className="talavera-inner-border" cx="100" cy="100" r="70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.8" />
    </svg>
  );
};

// --- Main Component ---

const Hero = () => {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Background and initial fade in
    tl.fromTo('.talavera-bg-elegant', { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power2.inOut' })
      .fromTo('.papel-picado-top-svg', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)' }, "-=1")
      .fromTo('.mono-name', { scale: 0.8, opacity: 0, y: 20 }, { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }, "-=0.5")
      .fromTo('.hero-cross-container', { rotationY: 90, opacity: 0 }, { rotationY: 0, opacity: 1, duration: 1, ease: 'power2.out' }, "-=0.8")
      .fromTo('.hero-intro-text', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .fromTo('.hero-main-title', { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.5)' }, "-=0.4")
      .fromTo('.hero-subtitle', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.6")
      .fromTo('.hero-date-sub', { opacity: 0, letterSpacing: '0px' }, { opacity: 1, letterSpacing: '2px', duration: 1 }, "-=0.4")
      .fromTo('.circular-photo-container', { scale: 0, rotation: -45, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.7)' }, "-=1")
      .fromTo('.hero-countdown-group', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .fromTo('.hero-audio-container', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5");
      
    // Parallax effect on scroll for elements
    gsap.to('.hero-photo-group', {
      y: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.mono-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

  }, { scope: containerRef });

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="mono-hero" ref={containerRef}>
      {/* Animated Talavera Background (Full screen original design) */}
      <div className="talavera-bg-elegant"></div>

      {/* SVG Top Banner */}
      <div className="papel-picado-top-svg">
        <PapelPicadoSVG />
      </div>
      
      <div className="mono-hero-inner">
        
        <div className="mono-name-container">
          <h2 className="mono-name">Massimo Dante</h2>
        </div>

        <div className="hero-content-row">
          <div className="hero-text-group">
            <div className="hero-cross-container">
              <CrossSVG />
            </div>

            <p className="hero-intro-text">
              Queremos compartir contigo una<br/>bendición muy especial:
            </p>

            <h1 className="hero-main-title">EL BAUTIZO</h1>
            <p className="hero-subtitle">de nuestro hijo</p>

            <p className="hero-date-sub">22 de Agosto de 2026</p>
          </div>

          <div className="hero-photo-group">
            <div className="circular-photo-container">
              {/* Clean elegant SVG ring frame based on the new reference image */}
              <div className="talavera-frame-overlay">
                <OriginalTalaveraRingSVG />
              </div>
              
              {/* Sliding photos */}
              <div className="circular-photo-mask">
                {IMAGES.map((img, index) => (
                  <div
                    key={img}
                    className={`hero-bg-image ${index === currentImageIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url('${img}')` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-countdown-group">
            <Countdown />
          </div>
        </div>

        {/* Audio Player Button at bottom center */}
        <div className="hero-audio-container">
          <button 
            className={`elegant-audio-btn ${isPlaying ? 'playing' : ''}`} 
            onClick={toggleAudio}
            aria-label={isPlaying ? 'Pausar canción' : 'Reproducir canción'}
          >
            <div className="audio-btn-ring"></div>
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="audio-icon">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="audio-icon play-icon">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          <audio ref={audioRef} loop preload="auto">
            <source src="/lullaby.webm" type="audio/webm" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>

      </div>
    </section>
  );
};

export default Hero;
