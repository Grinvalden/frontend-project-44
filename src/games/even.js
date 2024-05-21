import readlineSync from 'readline-sync';
import { name } from '../cli.js';
import {
  correct, wrongAnswer, num, win,
} from '../index.js';

const evenOrOdd = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const generatedNumber = num();
    console.log(`Question: ${generatedNumber}`);
    const enterResult = readlineSync.question('Your answer: ');
    const correctAnswer = (generatedNumber % 2 === 0) ? 'yes' : 'no';

    if (enterResult === correctAnswer) {
      correct();
    } else {
      return wrongAnswer(enterResult, correctAnswer, name);
    }
  }

  return win(name);
};

export default evenOrOdd;
