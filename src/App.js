import './App.css';
import BotoColor from './components/BotoColor/BotoColor.js';
import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Menu from './components/menu/Menu';
import Titulo from './components/titulo/Titulo';
import Main from './components/main/Main';
import ImagenCaja from './components/imagenCaja/ImagenCaja';
import APIgoogle from './components/APIgoogle/APIgoogle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Precios from './components/precios/Precios';


function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    setShowMap(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
          <header>
            <nav>
            <Titulo />

            <Menu />
            <Routes>
          <Route path="/precios" element={<Precios />} />
        </Routes>
           
            </nav>
          </header>
           <ImagenCaja />
           <Main />
           <button onClick={handleShowMap}>Mostrar Mapa</button>
            {showMap && <APIgoogle />}
            <Footer />
      </div>
    
    </BrowserRouter>
  );
}

export default App;






