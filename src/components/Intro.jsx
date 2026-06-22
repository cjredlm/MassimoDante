import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Intro.css';

const Intro = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      }
    });

    // Animate text column children
    tl.fromTo('.col-texto > *', 
      { opacity: 0, y: 30, filter: 'blur(10px)' }, 
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.5, stagger: 0.2, ease: 'power3.out' }
    )
    // Animate photo column children
    .fromTo('.col-foto', 
      { opacity: 0, y: 50, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'back.out(1.2)' }, 
      "-=1"
    )

    gsap.to('.particles-canvas', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: containerRef });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    function resize() {
      const parent = canvas.parentElement;
      canvas.width  = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Mouse tracking for particles
    let mouse = { x: -1000, y: -1000 };
    const handleCanvasMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleCanvasMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener('mousemove', handleCanvasMouseMove);
    window.addEventListener('mouseleave', handleCanvasMouseLeave);

    const SHAPES = ['circle', 'cross', 'diamond', 'dot'];
    const particles = Array.from({ length: 70 }, () => {
      const w = canvas.width || 680;
      const h = canvas.height || 420;
      return {
        x: Math.random() * w,
        y: Math.random() * h + h,
        size: Math.random() * 5 + 2,
        speed: Math.random() * 0.8 + 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        drift: (Math.random() - 0.5) * 0.4,
        shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
        angle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.02 + 0.005,
      };
    });

    function drawShape(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 1;
      const s = p.size;
      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, s, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'dot') {
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.5, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'cross') {
        const arm = s * 1.2;
        ctx.beginPath();
        ctx.moveTo(-arm, 0); ctx.lineTo(arm, 0);
        ctx.moveTo(0, -arm); ctx.lineTo(0, arm);
        ctx.stroke();
      } else if (p.shape === 'diamond') {
        ctx.beginPath();
        ctx.moveTo(0, -s); ctx.lineTo(s * 0.6, 0);
        ctx.lineTo(0, s);  ctx.lineTo(-s * 0.6, 0);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const h = canvas.height;
      const w = canvas.width;
      particles.forEach(p => {
        p.y -= p.speed;
        p.wobble += p.wobbleSpeed;
        p.x += p.drift + Math.sin(p.wobble) * 0.4;
        p.angle += p.rotSpeed;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 5;
          p.y += (dy / dist) * force * 5;
        }

        const progress = 1 - (p.y / h);
        p.opacity = progress < 0.15
          ? (progress / 0.15) * 0.6
          : progress > 0.85
          ? ((1 - progress) / 0.15) * 0.6
          : 0.55;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
          p.opacity = 0;
        }
        drawShape(p);
      });
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleCanvasMouseMove);
      window.removeEventListener('mouseleave', handleCanvasMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      
      {/* ENCAJE SUPERIOR (Talavera) */}
      <div className="lace-bar">
        <svg width="100%" height="24" viewBox="0 0 700 24" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="3" x2="700" y2="3" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8"/>
          <g fill="rgba(255,255,255,0.5)">
            {[0,70,140,210,280,350,420,490,560,630].map(x => (
              <g key={x} transform={`translate(${x},0)`}>
                <circle cx="35" cy="3" r="2"/>
                <path d="M33,5 L28,20 L35,23 L42,20 L37,5Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
                <circle cx="35" cy="23" r="2"/>
              </g>
            ))}
          </g>
        </svg>
      </div>

      <div className="seccion">
        <canvas className="particles-canvas" ref={canvasRef}></canvas>

        <div className="col-texto">
          <div className="eyebrow">El bautizo de Massimo Dante</div>
          <div className="titulo-script">Un día para celebrar<br/>el amor y la fe</div>
          <div className="divider-ornament">✦</div>
          <p className="cuerpo">Un día para celebrar el amor, la fe y el primer añito de nuestro hijo.</p>
          <p className="cuerpo">Y tu presencia haría aún más especial este día tan importante para nuestra familia.</p>
          <div className="divider-ornament">✦</div>
          <div className="fecha-line">22 DE AGOSTO DE 2026</div>
        </div>

        <div className="col-foto">
          <div className="arched-frame-wrapper" ref={frameRef}>
            
            {/* The elegant blue/white arched frame */}
            <svg className="arched-svg-border" viewBox="0 0 300 420" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M10,160 C10,70 70,10 150,10 C230,10 290,70 290,160 L290,410 L10,410 Z" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
              <path d="M20,160 C20,80 80,20 150,20 C220,20 280,80 280,160 L280,400 L20,400 Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            <div className="arched-photo-container">
              <video 
                src="/WhatsApp Video 2026-06-22 at 3.32.30 PM.mp4"
                autoPlay loop muted playsInline
                className="arched-video-element"
              />
            </div>
            
            <div className="arched-caption">Mis Padres</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Intro;
