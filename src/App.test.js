import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const rndr = render(<App />);
  expect(rndr).toBeDefined();
});
