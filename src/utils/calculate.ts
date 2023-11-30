const normalOperands = ['^', '*', '/', '+', '-']
const trigonometryOperands = ['cos', 'tan', 'sin']
const possibleOperands = [...normalOperands, ...trigonometryOperands]
const operands = ['^', '*', '/', '+', '-', 'cos', 'tan', 'sin'] as const
type Operand = (typeof operands)[number]

/**
 * Useful custom type guard to narrow strings down to valid operands
 */
function isOperand(operandString: string): operandString is Operand {
  return possibleOperands.includes(operandString)
}

/**
 * Used after encountering an operand, it attempts to compute the result that comes from that operand.
 * Then it returns the equation that is now partially calculated.
 */
function evaluate(operand: Operand, equationArray: string[], index: number) {
  if (normalOperands.includes(operand)) {
    /**
     * Find needed operators
     * If we don't have two, throw an error
     */
    const leftOperator = equationArray[index - 2]
    const rightOperator = equationArray[index - 1]
    if (leftOperator == null || rightOperator == null) {
      throw new Error('Invalid Operators')
    }

    const leftOperatorAsNumber = parseFloat(leftOperator)
    const rightOperatorAsNumber = parseFloat(rightOperator)
    const result = normalEvaluate(operand, leftOperatorAsNumber, rightOperatorAsNumber)
    // Replace the two operators and one operand with their mathematical value
    equationArray.splice(index - 2, 3, result.toString())
  } else {
    /**
     * We must be in the trigometry case because those operands are the only options left.
     * This time we throw an error based only on needed one operator, like "90 tan"
     */
    const operator = equationArray[index - 1]
    if (operator == null) {
      throw new Error('Invalid Operator')
    }

    const operatorAsNumber = parseFloat(operator)
    const result = trigonometryEvaluate(operand, operatorAsNumber)
    // Replace just one operator and one operand in this case, using our calculated result
    equationArray.splice(index - 1, 2, result.toString())
  }
  // Finally we need the equation as a string again
  return equationArray.join(' ')
}

/**
 * Handles trigonometry calculations and is just separated into a function for easier reading.
 * I utilize the switches default case as my "last case" so typescript can understand I'll never return undefined
 */
function trigonometryEvaluate(operand: string, operatorAsNumber: number) {
  switch (operand) {
    case 'cos':
      return Math.cos(operatorAsNumber)
    case 'sin':
      return Math.sin(operatorAsNumber)
    default: // 'tan'
      return Math.tan(operatorAsNumber)
  }
}

/**
 * Handles normal calculations and is just separated into a function for easier reading.
 */
function normalEvaluate(operand: string, leftOperatorAsNumber: number, rightOperatorAsNumber: number) {
  switch (operand) {
    case '^':
      return leftOperatorAsNumber ** rightOperatorAsNumber
    case '*':
      return leftOperatorAsNumber * rightOperatorAsNumber
    case '/':
      if (rightOperatorAsNumber === 0) {
        throw new Error('Divide by zero')
      }
      return leftOperatorAsNumber / rightOperatorAsNumber
    case '+':
      return leftOperatorAsNumber + rightOperatorAsNumber
    default: // '-'
      return leftOperatorAsNumber - rightOperatorAsNumber
  }
}

/**
 * A Recursive function that takes a string in reverse posix and returns its calculated value
 */
export function reversePolishCalculate(equation: string): number | undefined {
  try {
    const equationArray = equation.split(' ')

    // Base case: We have reduced the equation to one value and now we can return it.
    if (equationArray.length === 1) {
      const finalValue = parseFloat(equation)

      if (isNaN(finalValue)) {
        throw new Error('Result is not a number')
      }

      return finalValue
    }

    /**
     * - Iterate through the equation
     * - stopping when we find an operand
     * - calculating the result
     * - replacing the calculated part of the equation with its corresponding value
     * - calling itself again with the now reduced version of the equation
     */
    for (let index = 0; index < equationArray.length; index++) {
      const operatorOrOperand = equationArray[index]
      if (isOperand(operatorOrOperand)) {
        const result = evaluate(operatorOrOperand, equationArray, index)
        return reversePolishCalculate(result)
      }
    }
  } catch (error) {
    throw new Error('Error evaluating improper Reverse Polish Notation', { cause: error })
  }
}
