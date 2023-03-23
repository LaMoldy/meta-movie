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

  it('Renders the nav', () => {
    render(<Layout />)
    const main = screen.getByTestId('main')
    expect(main).toBeInTheDocument()
  })

  it('Footer should be displayed', () => {
    render(<Layout />)
    const footer = screen.getByTestId('footer')
    expect(footer).toBeInTheDocument()
  })
})
