import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

test('renderiza correctamente el componente Menu', () => {
  // Renderizar el componente
  const { getByText } = render(<Menu />);

  // Verificar que los elementos estén presentes
  const reservasEnLineaLink = getByText('Reservas en linea');
  const preciosLink = getByText('Precios');
  const galeriaLink = getByText('Galeria');
  const calificacionesLink = getByText('Calificaciones');
  const promocionesLink = getByText('Promociones');

  expect(reservasEnLineaLink).toBeInTheDocument();
  expect(preciosLink).toBeInTheDocument();
  expect(galeriaLink).toBeInTheDocument();
  expect(calificacionesLink).toBeInTheDocument();
  expect(promocionesLink).toBeInTheDocument();
});
