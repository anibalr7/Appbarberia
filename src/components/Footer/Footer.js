
import React from 'react';
import './Footer.css';
import logoblanco from './imagenesreact/logoblanco.png';
import bg from './imagenesreact/bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="footer">
      <img src={bg} className="footer-image" alt="Background" />
      <img src={logoblanco} className="imagenlogo" alt="Logo" />
      <p>Derechos de autor &copy; 2023 - Barberia El Valhalla. Todos los derechos reservados.</p>
      <FontAwesomeIcon icon={faFacebook} className="facebook-icon" alt="icon"/>
      <FontAwesomeIcon icon={faWhatsapp}  className="Whatsapp-icon " alt="icon"/>
      <FontAwesomeIcon icon={faInstagram} className="instagram-icon" alt="icon"/>
     
    </div>
  );
}; 


export default Footer;
