import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Details.css';

gsap.registerPlugin(ScrollTrigger);

const WaxSealSVG = () => (
  <div className="wax-seal-wrapper">
    <svg className="wax-seal" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <filter id="dropshadow-seal" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="4" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.4"/>
        </feComponentTransfer>
        <feMerge> 
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      {/* Deep Navy/Gold Wax Seal */}
      <path d="M50,5 C75,2 95,20 95,45 C98,75 80,95 50,95 C20,95 2,75 5,45 C2,20 25,5 50,5 Z" fill="#122866" filter="url(#dropshadow-seal)"/>
      <circle cx="50" cy="50" r="38" fill="none" stroke="#2a50a8" strokeWidth="2" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="#3b82f6" strokeWidth="1" />
      {/* Initial */}
      <text x="50" y="68" fontFamily="var(--font-script)" fontSize="45" fill="#d4a843" textAnchor="middle">M</text>
    </svg>
  </div>
);

const Details = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    
    // Horizontal scroll timeline
    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + track.scrollWidth,
        invalidateOnRefresh: true,
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="details-pin-container">
      
      {/* Dynamic Animated Background */}
      <div className="details-animated-bg">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>

      <div className="details-scroll-track" ref={trackRef}>
        
        {/* Card 1: La Familia */}
        <div className="details-card paper-card">
          <WaxSealSVG />
          <div className="card-content-wrapper">
            
            {/* Elegant Inner Border */}
            <div className="card-inner-border">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', inset: 0}}>
                <path d="M0,10 L10,0 L90,0 L100,10 L100,90 L90,100 L10,100 L0,90 Z" fill="none" stroke="var(--bg-main)" strokeWidth="0.5" opacity="0.3" vectorEffect="non-scaling-stroke" />
                <rect x="3" y="3" width="94" height="94" fill="none" stroke="var(--bg-main)" strokeWidth="1" opacity="0.15" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            <div className="details-image-container">
              <div className="details-image-wrapper">
                <img 
                  src="/carrusel/WhatsApp Image 2026-06-22 at 4.50.36 PM (2).jpeg" 
                  alt="La Familia - Jesús y los niños" 
                  className="details-floating-img"
                />
              </div>
            </div>

            <div className="card-text-content">
              <h3 className="card-subtitle-script">La Familia</h3>
              
              <p className="card-desc italic-quote">
                "Dejad que los niños vengan a mí, y no se lo impidáis; porque de los tales es el reino de los cielos."
                <br/>
                <span className="quote-author">Mateo 19:14</span>
              </p>
              
              <div className="family-roles">
                <div className="role-group">
                  <p className="role-title">Padres</p>
                  <p className="role-names">Carlos & Fernanda</p>
                </div>
                <div className="role-group">
                  <p className="role-title">Madrinas</p>
                  <p className="role-names">Ximena & Andrea</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Ceremonia Religiosa */}
        <div className="details-card paper-card">
          <WaxSealSVG />
          <div className="card-content-wrapper">
            
            {/* Elegant Inner Border */}
            <div className="card-inner-border">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', inset: 0}}>
                <path d="M0,10 L10,0 L90,0 L100,10 L100,90 L90,100 L10,100 L0,90 Z" fill="none" stroke="var(--bg-main)" strokeWidth="0.5" opacity="0.3" vectorEffect="non-scaling-stroke" />
                <rect x="3" y="3" width="94" height="94" fill="none" stroke="var(--bg-main)" strokeWidth="1" opacity="0.15" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            <div className="card-text-content">
              <h3 className="card-subtitle-script mt-2">Misa</h3>
              <div className="event-info-block">
                <p className="event-date">22 de Agosto de 2026</p>
                <p className="event-time">1:00 PM</p>
                <div className="event-separator"></div>
                <p className="event-location">Parroquia San Nicolás Tolentino</p>
                <p className="event-address">Av. Principal 123, Centro.</p>
              </div>
              
              <a href="https://maps.app.goo.gl/qmVPM8WE8VPMFUaC9?g_st=ic" target="_blank" rel="noreferrer" className="elegant-action-btn solid-btn">
                Ver Mapa
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: Recepción */}
        <div className="details-card paper-card">
          <WaxSealSVG />
          <div className="card-content-wrapper">
            
            {/* Elegant Inner Border */}
            <div className="card-inner-border">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', inset: 0}}>
                <path d="M0,10 L10,0 L90,0 L100,10 L100,90 L90,100 L10,100 L0,90 Z" fill="none" stroke="var(--bg-main)" strokeWidth="0.5" opacity="0.3" vectorEffect="non-scaling-stroke" />
                <rect x="3" y="3" width="94" height="94" fill="none" stroke="var(--bg-main)" strokeWidth="1" opacity="0.15" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            <div className="card-text-content">
              <h3 className="card-subtitle-script mt-2">Recepción</h3>
              <div className="event-info-block">
                <p className="event-date">22 de Agosto de 2026</p>
                <p className="event-time">3:00 PM</p>
                <div className="event-separator"></div>
                <p className="event-location">Rancho El Pitayo</p>
                <p className="event-address">Carretera a la sierra km 14.</p>
              </div>
              
              <a href="https://maps.app.goo.gl/HqwnQVSrgDEQ7C55A?g_st=ic" target="_blank" rel="noreferrer" className="elegant-action-btn solid-btn">
                Ver Mapa
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Details;
