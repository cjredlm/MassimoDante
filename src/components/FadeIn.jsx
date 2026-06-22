import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const FadeIn = ({ children, className = '', delay = 0, y = 30, duration = 1 }) => {
  const domRef = useRef();

  useGSAP(() => {
    gsap.fromTo(domRef.current, 
      { opacity: 0, y: y }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: duration, 
        delay: delay / 1000, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: domRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div className={`gsap-fade-in ${className}`} ref={domRef}>
      {children}
    </div>
  );
};

export default FadeIn;
