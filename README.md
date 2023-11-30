# Reverse Polish Calculator

## Features

- small web app that uses the calculator
  - text input where you can write the equation
  - result updates as you type
  - displays an error message if the calculator is given bad input
- 100% test code coverage with Jest
- fully typed with Typescript

## Calculator Requirements

- The input will be a postfix string (operators on the left of their operands)
- characters will be separated by a space
- the function returns a Number.
- Inputs must consider positive and negative numbers
- valid operators are ^ , \* , / , + , -
- and basic trigonometric functions: cos, sin, tan

## Installation Instructions

Requires node and npm.

- clone repository
- run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm test -- --coverage --watchAll`

Launches the test runner in the interactive watch mode and displays code coverage.

### `npm run build`

Builds the app for production to the `build` folder.

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._
