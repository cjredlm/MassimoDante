import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const targetDate = new Date('2026-08-22T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="countdown-container">
      <h2 className="countdown-title">Faltan</h2>
      
      <div className="countdown-timer">
        <div className="time-box">
          <span className="time-value">{timeLeft.days}</span>
          <span className="time-label">Días</span>
        </div>
        <span className="time-separator">:</span>
        <div className="time-box">
          <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="time-label">Horas</span>
        </div>
        <span className="time-separator">:</span>
        <div className="time-box">
          <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="time-label">Minutos</span>
        </div>
        <span className="time-separator">:</span>
        <div className="time-box">
          <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="time-label">Segundos</span>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
