import readlineSync from 'readline-sync';
import { name } from '../cli.js';
import {
  correct, wrongAnswer, getRndArifmeticProgr, win, getLookingItem,
} from '../index.js';

const progression = () => {
  let enterResult;
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const arifmeticProgr = getRndArifmeticProgr();
    console.log(`Question: ${arifmeticProgr}`);
    enterResult = readlineSync.question('Your answer: ');

    if (Math.floor(enterResult) === Math.floor(getLookingItem())) {
      correct();
    } else {
      return wrongAnswer(enterResult, getLookingItem(), name);
    }
  }
  return win(name);
};

export default progression;
