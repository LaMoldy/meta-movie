import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import UnknownPage from '../pages/404'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('next/dist/client/router', () => require('next-router-mock'))

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
