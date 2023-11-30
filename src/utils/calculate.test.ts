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

const input6 = '-1 1000 *'
const answer6 = -1000

const input7 = '180 cos'
const answer7 = -0.5984600690578581

const input8 = '180 sin'
const answer8 = -0.8011526357338304

const input9 = '180 tan'
const answer9 = 1.3386902103511544

const input10 = '10 3 + 180 tan +'
const answer10 = 14.338690210351155

const littleBitOfEverything = '90 sin 10 + -9 / 10 - 90 tan + 30 cos /'
const answerForAlittleBitOfEverything = -85.61115305927883

const badInput1 = 'C + + is a cool language, but not an RPN equation'

const badInput2 = 'b'

const badInput3 = 'tan cos tan'

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

  it(`returns the correct result: ${answer6}, for input: ${input6}`, () => {
    expect(reversePolishCalculate(input6)).toEqual(answer6)
  })

  it(`returns the correct result: ${answer7}, for input: ${input7}`, () => {
    expect(reversePolishCalculate(input7)).toEqual(answer7)
  })

  it(`returns the correct result: ${answer8}, for input: ${input8}`, () => {
    expect(reversePolishCalculate(input8)).toEqual(answer8)
  })

  it(`returns the correct result: ${answer9}, for input: ${input9}`, () => {
    expect(reversePolishCalculate(input9)).toEqual(answer9)
  })

  it(`returns the correct result: ${answer10}, for input: ${input10}`, () => {
    expect(reversePolishCalculate(input10)).toEqual(answer10)
  })

  it(`returns the correct result: ${answerForAlittleBitOfEverything}, for input: ${littleBitOfEverything}`, () => {
    expect(reversePolishCalculate(littleBitOfEverything)).toEqual(answerForAlittleBitOfEverything)
  })

  it(`throws error: "Error evaluating improper Reverse Polish Notation", for bad input: ${badInput1}`, () => {
    expect(() => {
      reversePolishCalculate(badInput1)
    }).toThrow('Error evaluating improper Reverse Polish Notation')
  })

  it(`throws error: "Error evaluating improper Reverse Polish Notation", for bad input: ${badInput2}`, () => {
    expect(() => {
      reversePolishCalculate(badInput2)
    }).toThrow('Error evaluating improper Reverse Polish Notation')
  })

  it(`throws error: "Error evaluating improper Reverse Polish Notation", for bad input: ${badInput3}`, () => {
    expect(() => {
      reversePolishCalculate(badInput3)
    }).toThrow('Error evaluating improper Reverse Polish Notation')
  })
})
