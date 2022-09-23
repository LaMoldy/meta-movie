import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';

// Sets up jest to mock next js router and next link
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('Home', () => {
  beforeEach(() => {
    console.clear(); // Clears the console
    mockRouter.setCurrentUrl('/');
  });

  it('Renders a navbar', () => {
    render(<Home />);
    const navbar = screen.getByTestId('nav');
    expect(navbar).toBeInTheDocument();
  });

  it('Site name on navbar', () => {
    render(<Home />);
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
  })
});
