import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';

test('renderiza correctamente el componente Main', () => {
  // Renderizar el componente
  const { getByAltText } = render(<Main />);

  // Verificar que las imágenes estén presentes
  const cabelloImage = getByAltText('Cabello');
  const barbaImage = getByAltText('Barba');
  const cabelloBarbaImage = getByAltText('Cabello + Barba');

  expect(cabelloImage).toBeInTheDocument();
  expect(barbaImage).toBeInTheDocument();
  expect(cabelloBarbaImage).toBeInTheDocument();
});
