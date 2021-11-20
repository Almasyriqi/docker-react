import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('url is correct', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement.href).toContain('https://reactjs.org');
})
