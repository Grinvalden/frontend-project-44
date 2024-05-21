import readlineSync from 'readline-sync';
import { name } from '../cli.js';
import {
  correct, wrongAnswer, num, win,
} from '../index.js';

const gcd = () => {
  let num1 = 0;
  let num2 = 0;
  let enterResult;
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${num1 = num()} ${num2 = num()}`);
    enterResult = readlineSync.question('Your answer: ');

    const rightResult = (num1 >= num2) ? num1 % num2 : num2 % num1;

    if (Math.floor(enterResult) === Math.floor(rightResult)) {
      correct();
    } else {
      return wrongAnswer(enterResult, rightResult, name);
    }
  }
  return win(name);
};

export default gcd;
