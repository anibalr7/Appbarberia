import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import Precios from '../precios/Precios';

function Menu() {
  return (
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><a href="reservasenlinea.html" target="_blank" rel="noopener noreferrer">Reservas en línea</a></li>
      <li><Link to="/precios" target="_blank">Precios</Link></li>
      <li><a href="Galeria.html" target="_blank" rel="noopener noreferrer">Galería</a></li>
      <li><a href="calificaciones.html" target="_blank" rel="noopener noreferrer">Calificaciones</a></li>
      <li><a href="promociones.html" target="_blank" rel="noopener noreferrer">Promociones</a></li>
    </ul>
  );
}

export default Menu;

