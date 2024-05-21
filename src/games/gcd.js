import readlineSync from 'readline-sync';
import { name } from '../cli.js';
import {
  correct, wrongAnswer, num, win, getGCD,
} from '../index.js';

const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const num1 = num();
    const num2 = num();
    console.log(`Question: ${num1} ${num2}`);
    const enterResult = readlineSync.question('Your answer: ');

    const rightResult = getGCD(num1, num2);

    if (parseInt(enterResult, 10) === rightResult) {
      correct();
    } else {
      return wrongAnswer(enterResult, rightResult, name);
    }
  }
  return win(name);
};

export default gcd;
