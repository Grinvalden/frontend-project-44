import readlineSync from 'readline-sync';
import { name } from '../cli.js';
import {
  correct, wrongAnswer, num, win, isPrime,
} from '../index.js';

const prime = () => {
  let generatedNumber;
  let enterResult;

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${generatedNumber = num()}`);
    enterResult = readlineSync.question('Your answer: ');
    if (isPrime(generatedNumber) && (enterResult === 'yes')) {
      correct();
    } else {
      if (!isPrime(generatedNumber) && (enterResult === 'yes')) {
        return wrongAnswer(enterResult, 'no', name);
      }
      if (isPrime(generatedNumber) && (enterResult === 'no')) {
        return wrongAnswer(enterResult, 'yes', name);
      }
    }
  }
  return win(name);
};

export default prime;
