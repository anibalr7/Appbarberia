import React from 'react';
import { render } from '@testing-library/react';
import ImagenCaja from './ImagenCaja';

test('renderiza correctamente el componente ImagenCaja', () => {
  // Renderizar el componente
  const { container } = render(<ImagenCaja />);

  // Verificar que el componente tenga la clase CSS adecuada
  const imageCaja = container.firstChild;
  expect(imageCaja).toHaveClass('image-caja');
});
