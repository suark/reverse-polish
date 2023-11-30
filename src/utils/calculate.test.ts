import { reversePolishCalculate } from './calculate'

const input1 = '10 3 +'
const answer1 = 13
const input2 = '10 3 2 + -'
const answer2 = 5
const input3 = '10 3 * 2 ^'
const answer3 = 900
const input4 = '3 2 /'
const answer4 = 1.5
const input5 = '29 7 6 * - 5 + 92 + 2 /'
const meaningOfLife = 42
const badInput1 = 'C + + is a cool language, but not an RPN equation'
const badInput2 = 'b'

describe('reversePolishCalculate', () => {
  it(`returns the correct result: ${answer1}, for input: ${input1}`, () => {
    expect(reversePolishCalculate(input1)).toEqual(answer1)
  })

  it(`returns the correct result: ${answer2}, for input: ${input2}`, () => {
    expect(reversePolishCalculate(input2)).toEqual(answer2)
  })

  it(`returns the correct result: ${answer3}, for input: ${input3}`, () => {
    expect(reversePolishCalculate(input3)).toEqual(answer3)
  })

  it(`returns the correct result: ${answer4}, for input: ${input4}`, () => {
    expect(reversePolishCalculate(input4)).toEqual(answer4)
  })

  it(`returns the correct result: ${meaningOfLife}, for input: ${input5}`, () => {
    expect(reversePolishCalculate(input5)).toEqual(meaningOfLife)
  })

  it(`throw error: Error evaluating improper Reverse Polish Notation, for bad input: ${badInput1}`, () => {
    expect(() => {
      reversePolishCalculate(badInput1)
    }).toThrow('Error evaluating improper Reverse Polish Notation')
  })

  it(`throw error: Error evaluating improper Reverse Polish Notation, for bad input: ${badInput2}`, () => {
    expect(() => {
      reversePolishCalculate(badInput2)
    }).toThrow('Error evaluating improper Reverse Polish Notation')
  })
})
