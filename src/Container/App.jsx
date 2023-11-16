import AboutMe from "../Components/AboutMe/AboutMe.jsx";
import Contact from "../Components/Contact/Contact.jsx";
import Education from "../Components/Education/Education.jsx";
import Nav from "../Components/Nav/Nav.jsx";
import Proyects from "../Components/Proyects/Proyects.jsx";
import React, { useEffect, useState } from 'react';

const HolographicBackground = () => {
  const [colors, setColors] = useState(['#80e8dd', '#7cc2f6', '#af81e4', '#e784ba', '#f9c1a0', '#b7f6af']);
  
  useEffect(() => {
    const body = document.body;
    const startTime = Date.now();

    const moveBackground = () => {
      const elapsed = Date.now() - startTime;
      const wave = Math.sin(elapsed / 1000);
      const position = wave * 50 + 50;
      body.style.background = `linear-gradient(45deg, ${colors.join(', ')})`;
      body.style.backgroundSize = '200% 200%';
      body.style.backgroundPosition = `${position}% ${position}%`;
      requestAnimationFrame(moveBackground);
    };

    moveBackground();

    // Limpiar el efecto al desmontar el componente
    return () => {
      body.style.background = 'initial';
    };
  }, [colors]);

  return null; // No necesitas renderizar nada en este componente
};

function App(props) {
    return (
        <div>
            <HolographicBackground />
            <Nav/>
            <AboutMe/>
            <Education/>
            <Proyects/>
            <Contact/>
        </div>
    )
}

export default App;