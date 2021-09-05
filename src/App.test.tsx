import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('layout setup', () => {

  describe('SideBar', () => {
    it('renders PLACEHOLDER text', () => {
      render(<App/>);
      const placeholderText = screen.getByText(/.*SIDEBAR.*/);
    expect(placeholderText).toBeInTheDocument();
    });
  });

  describe('Header', () => {
    it('renders PLACEHOLDER text', () => {
      render(<App/>);
      const placeholderText = screen.getByText(/.*No Song Playing.*/);
    expect(placeholderText).toBeInTheDocument();
    });
  });

  describe('ButtonPanel', () => {
    it('renders PLACEHOLDER text', () => {
      render(<App/>);
      const placeholderText = screen.getByText(/.*BUTTONPANEL.*/);
    expect(placeholderText).toBeInTheDocument();
    });
  });
});
