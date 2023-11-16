import React, { useEffect, useState } from 'react';
import './Bubbles.css'; // Asegúrate de ajustar la ruta a tu archivo de estilos CSS

const Bubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const createBubble = () => {
      const size = Math.random() * 60 + 30;
      const duration = Math.random() * 20 + 10;
      const left = Math.random() * window.innerWidth;
      const animation = `moveBubble ${duration}s linear infinite`;

      return {
        size,
        duration,
        left,
        animation,
      };
    };

    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 10 }, () => createBubble());
      setBubbles(newBubbles);
    };

    generateBubbles();

    // Limpiar las burbujas al desmontar el componente
    return () => {
      setBubbles([]);
    };
  }, []);

  return (
    <div className="bubbles-container">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}px`,
            animation: `${bubble.animation}`,
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles;
