import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Calculator } from './Calculator'

// Small convenience function to reduce some code repetition
function getTextInputElement(screen: any) {
  return screen.getByPlaceholderText('Enter Equation...')
}

describe('Component: Calculator', () => {
  it('renders a title', () => {
    render(<Calculator />)
    const calculator = screen.getByText('Reverse Polish Notation Calculator')
    expect(calculator).toBeInTheDocument()
  })

  it('renders a text input', () => {
    render(<Calculator />)
    const textInput = getTextInputElement(screen)
    expect(textInput).toBeInTheDocument()
  })

  it('renders a result label', () => {
    render(<Calculator />)
    const resultLabel = screen.getByText(/Result/i)
    expect(resultLabel).toBeInTheDocument()
  })

  it('shows a result of "13", for an input of 10 3 +', () => {
    render(<Calculator />)
    const textInput = getTextInputElement(screen)
    fireEvent.change(textInput, { target: { value: '10 3 +' } })
    const resultLabel = screen.getByText('Result: 13')
    expect(resultLabel).toBeInTheDocument()
  })

  it('shows a result of "Invalid Equation", for an invalid input', () => {
    render(<Calculator />)
    const textInput = getTextInputElement(screen)
    fireEvent.change(textInput, { target: { value: '10 3 + +' } })
    const resultLabel = screen.getByText('Result: Invalid Equation')
    expect(resultLabel).toBeInTheDocument()
  })

  it('shows a blank result before any inputs are given', () => {
    render(<Calculator />)
    const resultLabel = screen.getByText('Result:')
    expect(resultLabel).toBeInTheDocument()
  })

  it('shows a blank result if the user had input but deletes it all', () => {
    render(<Calculator />)
    const textInput = getTextInputElement(screen)
    fireEvent.change(textInput, { target: { value: '10' } })
    fireEvent.change(textInput, { target: { value: '' } })
    const resultLabel = screen.getByText('Result:')
    expect(resultLabel).toBeInTheDocument()
  })

  it('shows a blank result when user has input, the input is not invalid, but the input is not enough to make a whole equation', () => {
    render(<Calculator />)
    const textInput = getTextInputElement(screen)
    fireEvent.change(textInput, { target: { value: '10 3' } })
    const resultLabel = screen.getByText('Result:')
    expect(resultLabel).toBeInTheDocument()
  })
})
