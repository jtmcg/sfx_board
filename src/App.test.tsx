import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PLACEHOLDER text', () => {
  render(<App />);
  const placeholderText = screen.getByText(/PLACEHOLDER/i);
  expect(placeholderText).toBeInTheDocument();
});
