import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('verifica se o valor é numérico', () => {
  console.log = jest.fn(); // Captura as mensagens de log

  render(<App />);

  const input = screen.getByLabelText('Valor:');
  const submitButton = screen.getByRole('button', { name: 'Enviar' });

  fireEvent.change(input, { target: { value: '123' } });
  fireEvent.click(submitButton);

  expect(console.log).toHaveBeenCalledWith('Valor é numérico');
});

test('verifica se o valor não é numérico', () => {
  console.log = jest.fn(); // Captura as mensagens de log

  render(<App />);

  const input = screen.getByLabelText('Valor:');
  const submitButton = screen.getByRole('button', { name: 'Enviar' });

  fireEvent.change(input, { target: { value: 'abc' } });
  fireEvent.click(submitButton);

  expect(console.log).toHaveBeenCalledWith('Valor não é numérico');
});
