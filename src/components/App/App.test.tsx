import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('Component: App', () => {
  it('renders the calculator component', () => {
    render(<App />)
    const calculator = screen.getByText(/Reverse Polish Notation Calculator/i)
    expect(calculator).toBeInTheDocument()
  })
})
