import readlineSync from 'readline-sync';
import { name } from '../cli.js';
import {
  correct, wrongAnswer, num, win, isPrime,
} from '../index.js';

const prime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const generatedNumber = num();
    console.log(`Question: ${generatedNumber}`);
    const enterResult = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(generatedNumber) ? 'yes' : 'no';

    if (enterResult === correctAnswer) {
      correct();
    } else {
      return wrongAnswer(enterResult, correctAnswer, name);
    }
  }

  return win(name);
};

export default prime;
