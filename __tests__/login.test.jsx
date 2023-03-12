import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import Login from '../pages/login'

// Sets up jest to mock next js router and next link
jest.mock('next/router', () => require('next-router-mock'))
jest.mock('next/dist/client/router', () => require('next-router-mock'))

describe('Login', () => {
  mockRouter.setCurrentUrl('/')

  it('Title should be present', () => {
    render(<Login />)
    const input = screen.getByTestId('loginTitle')
    expect(input).toBeInTheDocument()
  })

  it('Username input box present', () => {
    render(<Login />)
    const button = screen.getByTestId('loginUsername')
    expect(button).toBeInTheDocument()
  })

  it('Password input box present', () => {
    render(<Login />)
    const button = screen.getByTestId('loginPassword')
    expect(button).toBeInTheDocument()
  })

  it('Login button present', () => {
    render(<Login />)
    const button = screen.getByTestId('loginSubmit')
    expect(button).toBeInTheDocument()
  })

})