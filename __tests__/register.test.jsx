import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import Register from '../pages/register'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('next/dist/client/router', () => require('next-router-mock'))

describe('Register', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/register")
  })

  it('Navbar present', () => {
    render(<Register />)
    const navbar = screen.getByTestId('nav')
    expect(navbar).toBeInTheDocument()
  })

  it('Heading should be present', () => {
    render(<Register />)
    const header = screen.getByTestId('registerTitle')
    expect(header).toBeInTheDocument()
  })

  it('Register username should be present', () => {
    render(<Register />)
    const email = screen.getByTestId('registerUsername')
    expect(email).toBeInTheDocument()
  })

  it('Register submit be present', () => {
    render(<Register />)
    const submit = screen.getByTestId('registerSubmit')
    expect(submit).toBeInTheDocument()
  })
})