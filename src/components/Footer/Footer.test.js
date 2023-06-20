import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renderiza correctamente el componente Footer', () => {
  // Renderizar el componente
  const { getByAltText, getByText } = render(<Footer />);

  // Verificar que se rendericen las imágenes
  const backgroundImage = getByAltText('Background');
  const logoImage = getByAltText('Logo');
  expect(backgroundImage).toBeInTheDocument();
  expect(logoImage).toBeInTheDocument();

  // Verificar que se renderice el texto del footer
  const copyrightText = getByText(
    'Derechos de autor © 2023 - Barberia El Valhalla. Todos los derechos reservados.'
  );
  expect(copyrightText).toBeInTheDocument();
});
