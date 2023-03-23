import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import mockRouter from "next-router-mock"
import Admin from '../pages/admin'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('next/dist/client/router', () => require('next-router-mock'))

describe('Admin', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/admin")
  })

  it('Navbar present', () => {
    render(<Admin />)
    const navbar = screen.getByTestId('nav')
    expect(navbar).toBeInTheDocument()
  })

  it('Header is present', () => {
    render(<Admin />)
    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
  })

  it('Add movie button', () => {
    render(<Admin />)
    const button = screen.getByTestId('button')
    expect(button).toBeInTheDocument()
  })
})