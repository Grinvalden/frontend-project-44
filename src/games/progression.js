import readlineSync from 'readline-sync';
import { name } from '../cli.js';
import { correct, wrongAnswer, getRndArifmeticProgr, win, lookingItem } from '../index.js';

export const progression = (enterResult) => {

    console.log('What number is missing in the progression?')
    
    for (let i = 0; i < 3; i += 1){
        const arifmeticProgr = getRndArifmeticProgr();
        console.log(`Question: ${arifmeticProgr}`);
        enterResult = readlineSync.question('Your answer: ')

        if (Math.floor(enterResult) === Math.floor(lookingItem)){
            correct();
        }
        else {return wrongAnswer(enterResult, lookingItem, name);
        }
    }
    return win(name);
}
    