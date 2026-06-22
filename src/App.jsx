import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Details from './components/Details';
import GiftsAndRSVP from './components/GiftsAndRSVP';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <div style={{ position: 'relative', zIndex: 10, background: 'var(--bg-main)', paddingBottom: '4rem' }}>
        <Intro />
        <Details />
        <GiftsAndRSVP />
      </div>
    </div>
  );
}

export default App;
