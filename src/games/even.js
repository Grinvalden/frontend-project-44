import readlineSync from 'readline-sync';
import { name } from '../cli.js';
import {correct, wrongAnswer, num, win} from '../index.js';

export const evenOrOdd = (enterResult) => {
    let generatedNumber;

    console.log('Answer "yes" if the number is even, otherwise answer "no".')  
    for(let i = 0; i < 3; i += 1){
        console.log(`Question: ${generatedNumber = num()}`) 
            enterResult = readlineSync.question(`Your answer: `);
            if ((generatedNumber % 2 === 0) && (enterResult === 'yes')){
                correct();
        }
            else if((generatedNumber % 2 !== 0) && (enterResult === 'no')){
                correct();
        }
            else {  
                if(generatedNumber % 2 !== 0){
                    return wrongAnswer(enterResult, 'no', name);}
                if(generatedNumber % 2 === 0){
                    return wrongAnswer(enterResult, 'yes', name);}
        }}
    return win(name); 
};