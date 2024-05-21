import readlineSync from 'readline-sync';
import { name } from '../cli.js';
import {
  correct, wrongAnswer, num, win,
} from '../index.js';

const calculate = () => {
  let num1 = num();
  let num2 = num();
  let rightResult = Math.floor(num1 + num2);
  console.log('What is the result of the expression?');

  console.log(`Question: ${num1} + ${num2}`);

  let enterResult = readlineSync.question('Your answer: ');

  if (rightResult === Math.floor(enterResult)) {
    correct();
  } else {
    return wrongAnswer(enterResult, rightResult, name);
  }

  num1 = num();
  num2 = num();
  rightResult = Math.floor(num1 - num2);
  console.log(`Question: ${num1} - ${num2} ?`);
  enterResult = readlineSync.question('Your answer: ');
  if (rightResult === Math.floor(enterResult)) {
    correct();
  } else {
    return wrongAnswer(enterResult, rightResult, name);
  }

  num1 = num();
  num2 = num();
  rightResult = Math.floor(num1 * num2);
  console.log(`Question: ${num1} * ${num2} ?`);
  enterResult = readlineSync.question('Your answer: ');
  if (rightResult === Math.floor(enterResult)) {
    correct();
  } else {
    return wrongAnswer(enterResult, rightResult, name);
  }

  return win(name);
};

export default calculate;
