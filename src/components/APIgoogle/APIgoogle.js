import React, { useEffect } from 'react';

const APIgoogle = () => {
  useEffect(() => {
    // Cargar la API de Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBV-JHbxh69knfbaCqYdVfarx3suFN6a6w`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    
    script.onload = () => {
     
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 8.7531616, lng: -75.8932614 },
        zoom: 7,
      });
    };

    
    return () => {
      document.body.removeChild(script);
      
    };
  }, []);

  return <div id="map" style={{ height: '400px' }} />;
};

export default APIgoogle;
