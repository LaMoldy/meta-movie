import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'

import Layout from '../components/layout'

// Sets up jest to mock next js router and next link
jest.mock('next/router', () => require('next-router-mock'))
jest.mock('next/dist/client/router', () => require('next-router-mock'))

describe('Layout', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/')
  })

  it('Renders a navbar', () => {
    render(<Layout />)
    const navbar = screen.getByTestId('nav')
    expect(navbar).toBeInTheDocument()
  })

  it('Site name on navbar', () => {
    render(<Layout />)
    const title = screen.getByTestId('title')
    expect(title).toBeInTheDocument()
  })

  it('Footer should be displayed', () => {
    render(<Layout />)
    const footer = screen.getByTestId('footer')
    expect(footer).toBeInTheDocument()
  })
})
