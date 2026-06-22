import React from 'react';
import './Family.css';
import FadeIn from './FadeIn';

const Family = () => {
  return (
    <section className="elegant-family-container">
      <div className="family-inner-wrapper">
        <FadeIn delay={100}>
          <div className="family-column">
            <h3 className="family-role">Papás de Dante</h3>
            <p className="family-names">Carlos & Fernanda</p>
          </div>
        </FadeIn>

        <div className="family-spacer"></div>

        <FadeIn delay={300}>
          <div className="family-column">
            <h3 className="family-role">Madrinas</h3>
            <p className="family-names">Ximena & Andrea</p>
          </div>
        </FadeIn>
      </div>
      
      {/* Small decorative separator */}
      <div className="tiny-floral-separator">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="4" fill="var(--accent-light)"/>
          <path d="M10,20 Q20,10 30,20 Q20,30 10,20 Z" fill="none" stroke="var(--accent-light)" strokeWidth="1.5"/>
        </svg>
      </div>
    </section>
  );
};

export default Family;
