import React from 'react';

function BotoColor({ onColorChange }) {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleClick = () => {
    const randomColor = getRandomColor();
    onColorChange(randomColor);
  };

  return (
    <button id="colorButton" onClick={handleClick}>
      Cambiar color
    </button>
  );
}

export default BotoColor;
