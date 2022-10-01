import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import Layout from '../components/layout'
import UnknownPage from '../pages/404'
import Home from '../pages/index'

// Sets up jest to mock next js router and next link
jest.mock('next/router', () => require('next-router-mock'))
jest.mock('next/dist/client/router', () => require('next-router-mock'))

// Tests for the Layouts
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

// Tests for the Home page
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

// Tests for the 404 page
describe('404 Page', () => {
  it('Image should be present', () => {
    render(<UnknownPage />)
    const image = screen.getByAltText('404 Image')
    expect(image).toBeInTheDocument()
  })

  it('Divider should be present', () => {
    render(<UnknownPage />)
    const divider = screen.getByTestId('divider')
    expect(divider).toBeInTheDocument()
  })

  it('404 header should be present', () => {
    render(<UnknownPage />)
    const header = screen.getByTestId('404')
    expect(header).toBeInTheDocument()
  })

  it('Lost text should be present', () => {
    render(<UnknownPage />)
    const text = screen.getByTestId('lost-text')
    expect(text).toBeInTheDocument()
  })
})
