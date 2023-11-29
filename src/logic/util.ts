const input1 = '10 3 +'
const input2 = '10 3 2 + -'
const input3 = '10 3 * 2 ^'

const operands = ['^', '*', '/', '+', '-'] as const
type Operand = (typeof operands)[number]

function isOperand(operandString: string): operandString is Operand {
  return operandString in { ...operands }
}

function evaluate(left: string, right: string, operand: Operand) {
  try {
    const leftAsNumber = parseInt(left)
    const rightAsNumber = parseInt(right)
    switch (operand) {
      case '^':
        return leftAsNumber ** rightAsNumber
      case '*':
        return leftAsNumber * rightAsNumber
      case '/':
        return leftAsNumber / rightAsNumber
      case '+':
        return leftAsNumber + rightAsNumber
      case '-':
        return leftAsNumber - rightAsNumber
    }
  } catch (error) {
    throw new Error('Write something better here')
  }
}

export function reversePolishCalculate(equation: string): string | undefined {
  try {
    const equationArray = equation.split(' ')

    if (equationArray.length === 1) {
      return equation
    }

    for (let i = 0; i < equationArray.length; i++) {
      const value = equationArray[i]
      if (isOperand(value)) {
        const left = equationArray[i - 2]
        const right = equationArray[i - 1]
        const result = evaluate(left, right, value)
        equationArray.splice(i - 2, 3, result.toString())
        return reversePolishCalculate(equationArray.join(' '))
      }
    }
  } catch (error) {
    throw new Error('also need something better here')
  }
}

console.log('------')
console.log('input1', reversePolishCalculate(input1))
console.log('input2', reversePolishCalculate(input2))
console.log('input3', reversePolishCalculate(input3))
console.log(reversePolishCalculate('29 7 6 * - 5 + 92 + 2 /'))
