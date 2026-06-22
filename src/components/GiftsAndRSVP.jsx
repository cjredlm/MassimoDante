import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './GiftsAndRSVP.css';

const CAROUSEL_IMAGES = [
  "/carrusel/WhatsApp Image 2026-06-22 at 4.50.34 PM.jpeg",
  "/carrusel/WhatsApp Image 2026-06-22 at 4.50.36 PM (1).jpeg",
  "/carrusel/WhatsApp Image 2026-06-22 at 4.50.36 PM (2).jpeg",
  "/carrusel/WhatsApp Image 2026-06-22 at 4.50.36 PM (3).jpeg",
  "/carrusel/WhatsApp Image 2026-06-22 at 4.50.36 PM.jpeg",
  "/carrusel/WhatsApp Image 2026-06-22 at 4.50.37 PM (1).jpeg",
  "/carrusel/WhatsApp Image 2026-06-22 at 4.50.37 PM (2).jpeg",
  "/carrusel/WhatsApp Image 2026-06-22 at 4.50.37 PM (3).jpeg",
  "/carrusel/WhatsApp Image 2026-06-22 at 4.50.37 PM.jpeg"
];

const GiftsAndRSVP = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Title animation
    gsap.fromTo('.rsvp-title-script',
      { opacity: 0, y: 50, scale: 0.9 },
      { 
        opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.rsvp-title-script',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Cards staggered animation
    gsap.fromTo('.rsvp-card',
      { opacity: 0, y: 50 },
      { 
        opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.rsvp-cards-container',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section className="elegant-rsvp-container" ref={containerRef}>
      <h2 className="rsvp-title-script">Con cariño para Dante</h2>

      <div className="rsvp-cards-container">
        
        {/* Tarjeta 1: Mesa de Regalos */}
        <div className="rsvp-card glass-card">
          <div className="card-icon-circle">
            {/* Gift Icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5v-8.25M12 21V11.25m0 0H4.5m7.5 0h7.5m-7.5 0c-2.071 0-3.75-1.679-3.75-3.75S7.929 3.75 10.5 3.75c1.196 0 2.274.555 2.96 1.424A3.75 3.75 0 0117.25 3.75c2.071 0 3.75 1.679 3.75 3.75S19.321 7.5 17.25 7.5h-5.25z" />
            </svg>
          </div>
          <h3 className="card-title">Mesa de Regalos</h3>
          <p className="rsvp-elegant-text">Tu presencia es el regalo más importante para nosotros.</p>
          <p className="rsvp-elegant-text">Pero si deseas tener un detalle para Dante, hemos preparado una mesa de regalos en Amazon.</p>
          
          <a 
            href="https://www.amazon.com.mx/registries/gl/guest-view/2JOAE5JAN68U6?ref_=cm_sw_r_apin_ggr-subnav-share_5S4JN2DTAFSG8B01ZB6R_1&language=en-US" 
            target="_blank" 
            rel="noopener noreferrer"
            className="premium-btn"
          >
            ABRIR MESA DE REGALOS
          </a>

          <p className="rsvp-elegant-text note">Como viajaremos de regreso a Guadalajara después del bautizo, esto nos ayudará mucho con el traslado.</p>
        </div>

        {/* Tarjeta 2: Confirmar Asistencia */}
        <div className="rsvp-card glass-card">
          <div className="card-icon-circle">
            {/* Envelop/Chat Icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <h3 className="card-title">Confirmar Asistencia</h3>
          <p className="rsvp-elegant-text">Nos encantaría que nos acompañaras en este día tan especial.</p>
          <p className="rsvp-elegant-text">Por favor confirma tu asistencia dando clic en el botón de abajo para enviarnos un mensaje.</p>
          
          <a 
            href="https://wa.me/523322442840?text=Hola%20%E2%9C%A8%20%20%0ASoy%20%5Bescribe%20tu%20nombre%5D%20y%20confirmo%20mi%20asistencia%20al%20bautizo%20y%201er%20cumplea%C3%B1os%20de%20Dante.%20%20%0AAsistiremos:%20%5B___%5D%20personas%20%F0%9F%A4%8D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="premium-btn whatsapp-btn"
          >
            CONFIRMAR POR WHATSAPP
          </a>
        </div>

      </div>

      {/* --- NUEVA SECCIÓN: CARTA Y CARRUSEL --- */}
      <div className="dedicatoria-section">
        
        {/* Carta a Dante */}
        <div className="letter-card">
          {/* Inner paper texture overlay */}
          <div className="letter-inner-border"></div>
          
          <h3 className="letter-title">Para Dante</h3>
          <div className="letter-divider"></div>
          
          <p className="letter-text">
            Hijo, tu mamá y yo queremos desearte lo mejor en este día tan especial, hoy te entregamos a la santa voluntad de Dios para que te cuide siempre.
          </p>
          <p className="letter-text">
            Eres la luz de nuestra vida, no sabes cuánto te amamos y lo feliz que nos has hecho desde que estás con nosotros. Eres un niño increíble.
          </p>
          
          <p className="letter-signature">
            Te amamos hijo,<br/>
            <span className="signature-names">Carlos & Fernanda</span>
          </p>
        </div>

        {/* Carrusel Infinito */}
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {[...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES].map((src, idx) => (
              <div className="carousel-slide" key={idx}>
                <img src={src} alt="Carrusel Dante" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="floral-spacer">
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <path d="M25,5 Q35,15 25,25 Q15,15 25,5 Z" fill="none" stroke="var(--accent-light)" strokeWidth="2"/>
          <path d="M45,25 Q35,35 25,25 Q35,15 45,25 Z" fill="none" stroke="var(--accent-light)" strokeWidth="2"/>
          <path d="M25,45 Q15,35 25,25 Q35,35 25,45 Z" fill="none" stroke="var(--accent-light)" strokeWidth="2"/>
          <path d="M5,25 Q15,15 25,25 Q15,35 5,25 Z" fill="none" stroke="var(--accent-light)" strokeWidth="2"/>
          <circle cx="25" cy="25" r="4" fill="var(--accent-light)" />
        </svg>
      </div>

      <p className="rsvp-elegant-text footer-text">
        Gracias por ser parte de este momento tan especial para nuestra familia.
      </p>
    </section>
  );
};

export default GiftsAndRSVP;
