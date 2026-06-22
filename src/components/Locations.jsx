import React from 'react';
import './Locations.css';
import FadeIn from './FadeIn';

const Locations = () => {
  return (
    <section className="elegant-locations-container">
      <FadeIn delay={100}>
        <p className="locations-intro-text">
          Con mucho amor celebraremos este día tan especial en:
        </p>
      </FadeIn>
      
      <div className="locations-wrapper">
        <FadeIn delay={300}>
          <div className="location-block">
            <h3 className="location-title">Ceremonia Religiosa</h3>
            <p className="location-name">Prrq. San Nicolás Tolentino</p>
            <a 
              href="https://maps.app.goo.gl/qmVPM8WE8VPMFUaC9?g_st=ic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="location-link"
            >
              Ubicación
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={500}>
          <div className="location-block">
            <h3 className="location-title">Recepción</h3>
            <p className="location-name">Casa de la abuela</p>
            <a 
              href="https://maps.app.goo.gl/HqwnQVSrgDEQ7C55A?g_st=ic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="location-link"
            >
              Ubicación
            </a>
          </div>
        </FadeIn>
      </div>
      
      {/* Decorative White Lace bottom separator */}
      <FadeIn delay={700}>
        <div className="sarape-separator">
          <div className="sarape-line" style={{ backgroundColor: 'var(--accent-light)' }}></div>
          <div className="sarape-line" style={{ backgroundColor: 'var(--accent-light)', width: '60%', margin: '0 auto' }}></div>
          <div className="sarape-line" style={{ backgroundColor: 'var(--accent-light)', width: '30%', margin: '0 auto' }}></div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Locations;
