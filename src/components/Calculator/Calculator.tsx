import React, { useState, ChangeEvent } from 'react'
import { reversePolishCalculate } from '../../utils/calculate'

export function Calculator() {
  const [inputValue, setInputValue] = useState('')
  const [calculatedValue, setCalculatedValue] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setInputValue(inputValue)
    try {
      if (inputValue !== '') {
        const reversePolishResult = reversePolishCalculate(inputValue)
        setCalculatedValue(reversePolishResult?.toString() ?? '')
      } else {
        setCalculatedValue('')
      }
    } catch (error) {
      setCalculatedValue('Invalid Equation')
    }
  }

  return (
    <>
      <h3>{'Reverse Polish Notation Calculator'}</h3>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Enter Equation...'
      />
      <p>{`Result: ${calculatedValue}`}</p>
    </>
  )
}
