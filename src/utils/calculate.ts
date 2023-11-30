const possibleOperands = ['^', '*', '/', '+', '-']
const operands = ['^', '*', '/', '+', '-'] as const
type Operand = (typeof operands)[number]

function isOperand(operandString: string): operandString is Operand {
  return possibleOperands.includes(operandString)
}

function evaluate(left: string, right: string, operand: Operand) {
  const leftAsNumber = parseFloat(left)
  const rightAsNumber = parseFloat(right)
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
}

export function reversePolishCalculate(equation: string): number | undefined {
  try {
    const equationArray = equation.split(' ')

    if (equationArray.length === 1) {
      const finalValue = parseFloat(equation)

      if (isNaN(finalValue)) {
        throw new Error('Result is not a number')
      }

      return finalValue
    }

    for (let i = 0; i < equationArray.length; i++) {
      const operatorOrOperand = equationArray[i]

      if (isOperand(operatorOrOperand)) {
        const left = equationArray[i - 2]
        const right = equationArray[i - 1]

        if (left == null || right == null) {
          throw new Error('Invalid Operators')
        }

        const result = evaluate(left, right, operatorOrOperand)
        equationArray.splice(i - 2, 3, result.toString())
        return reversePolishCalculate(equationArray.join(' '))
      }
    }
  } catch (error) {
    throw new Error('Error evaluating improper Reverse Polish Notation', { cause: error })
  }
}
