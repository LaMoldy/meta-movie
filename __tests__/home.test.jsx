import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'

import Home from '../pages/index'

// Sets up jest to mock next js router and next link
jest.mock('next/router', () => require('next-router-mock'))
jest.mock('next/dist/client/router', () => require('next-router-mock'))

describe('Home', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/')
  })

  it('Movie input box should be on screen', () => {
    render(<Home />)
    const input = screen.getByTestId('movieInput')
    expect(input).toBeInTheDocument()
  })

  it('Movie input box should have button on screen', () => {
    render(<Home />)
    const button = screen.getByTestId('inputSearchButton')
    expect(button).toBeInTheDocument()
  })
})
