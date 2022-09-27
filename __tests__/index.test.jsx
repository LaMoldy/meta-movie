import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import Layout from '../components/layout';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';

// Sets up jest to mock next js router and next link
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('Home', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/');
  });
  
  it('Movie input box should be on screen', () => {
    render(<Home />);
    const input = screen.getByTestId('movieInput');
    expect(input).toBeInTheDocument();
  });

  it('Movie input box should have button on screen', () => {
    render(<Home />);
    const button = screen.getByTestId('inputSearchButton');
    expect(button).toBeInTheDocument();
  });
});


// Tests for the Layouts
describe('Layout', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/');
  });

  it('Renders a navbar', () => {
    render(<Layout />);
    const navbar = screen.getByTestId('nav');
    expect(navbar).toBeInTheDocument();
  });

  it('Site name on navbar', () => {
    render(<Layout />);
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
  });

  it('Footer should be displayed', () => {
    render(<Layout />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});
