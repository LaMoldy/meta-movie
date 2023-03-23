import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import ServerProblemPage from '../pages/500'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('next/dist/client/router', () => require('next-router-mock'))

describe('404 Page', () => {
  it('Image should be present', () => {
    render(<ServerProblemPage />)
    const image = screen.getByAltText('500 Image')
    expect(image).toBeInTheDocument()
  })

  it('Divider should be present', () => {
    render(<ServerProblemPage />)
    const divider = screen.getByTestId('divider')
    expect(divider).toBeInTheDocument()
  })

  it('404 header should be present', () => {
    render(<ServerProblemPage />)
    const header = screen.getByTestId('500')
    expect(header).toBeInTheDocument()
  })

  it('Lost text should be present', () => {
    render(<ServerProblemPage />)
    const text = screen.getByTestId('server-text')
    expect(text).toBeInTheDocument()
  })
})
