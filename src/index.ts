import { add } from './utility'

const firstNumber = 2
const secondNumber = 3
let userName = 'Landen English'

// display user welcome message
const showUser = (user: string): string => {
  return `Welcome, ${user}!`
}

console.log(add(firstNumber, secondNumber))
console.log(showUser(userName))
