import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BotoColor from './BotoColor';

describe('BotoColor', () => {
  test('cambia el color al hacer clic en el botón', () => {
    
    const mockOnColorChange = jest.fn();

    
    const { getByText } = render(<BotoColor onColorChange={mockOnColorChange} />);

  
    const button = getByText('Cambiar color');

    
    fireEvent.click(button);

    expect(mockOnColorChange).toHaveBeenCalledTimes(1);

    
    const randomColor = mockOnColorChange.mock.calls[0][0];

    
    expect(typeof randomColor).toBe('string');
    expect(randomColor).toMatch(/^#[0-9A-F]{6}$/);
  });
});
