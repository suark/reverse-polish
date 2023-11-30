/**
 * A Simple component that displays a title, a text input, and a labelled result
 *
 * The user can type into the text input and the results will immediately show beside the "Result" label
 * If bad input is provided, the component should not crash.
 * It should display some error messages if the input is invalid.
 */

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
        /**
         * If the user had an input equation then erased it:
         * - we don't need to run a calculation
         * - we want to set the result back to empty string
         */
        setCalculatedValue('')
      }
    } catch (error) {
      // All errors the calculator can throw are just shown to the user as "Invalid Equation"
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
