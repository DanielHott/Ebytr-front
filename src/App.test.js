import { render, screen } from '@testing-library/react';
import App from './App';

test('1 - Testa se a página renderiza', () => {
  render(<App />);
  const linkElement = screen.getByText(/Agenda de tarefas /i);
  expect(linkElement).toBeInTheDocument();
});

