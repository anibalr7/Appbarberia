import React, { useState } from 'react';
import './Main.css';

import cabelloImage from './imagenesreact/cabello.jpg';
import barbaImage from './imagenesreact/barba.jpg';
import cabelloBarbaImage from './imagenesreact/cabello+barba.jpg';
import BotoColor from '../BotoColor/BotoColor';

const Main = () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <main id="myMain" style={{ backgroundColor }}>
      <ul className="productos">
        <li>
          <h2>Cabello</h2>
          <img src={cabelloImage} alt="Cabello" />
          <p className="producto-descripcion">Descubre tu espíritu vikingo con nuestro peinado inspirado en los guerreros nórdicos. Un look que te llevará a tiempos legendarios</p>
        </li>
        <li>
          <h2>Barba</h2>
          <img src={barbaImage} alt="Barba" />
          <p className="producto-descripcion">Domina el espíritu feroz de los vikingos con nuestro estilo de barba vikingo, una declaración audaz y poderosa que evoca la valentía y la masculinidad.</p>
        </li>
        <li>
          <h2>Cabello + Barba</h2>
          <img src={cabelloBarbaImage} alt="Cabello + Barba" />
          <p className="producto-descripcion">Nuestro peinado vikingo es perfecto para los audaces y aventureros modernos que buscan un estilo único y distintivo.</p>
        </li>
      </ul>
      <BotoColor onColorChange={handleColorChange} />
    </main>
  );
};

export default Main;

 