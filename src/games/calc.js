import readlineSync from 'readline-sync';
import { name } from '../cli.js';
import { correct, wrongAnswer, num, win } from '../index.js';

export const calculate = (enterResult) => {
     let num1;
     let num2;
     let rightResult;
        console.log('What is the result of the expression?');
       
            console.log(`Question: ${num1 = num()} + ${num2 = num()}`);
            enterResult = readlineSync.question('Your answer: ')
                if((rightResult = Math.floor(num1 + num2)) === Math.floor(enterResult)){
                    correct();
                }
                else { return wrongAnswer(enterResult, rightResult, name);
                }
            console.log(`Question: ${num1 = num()} - ${num2 = num()} ? `);
            enterResult = readlineSync.question('Your answer: ')
                if((rightResult = Math.floor(num1 - num2)) === Math.floor(enterResult)){
                   correct();
                }
                else { return wrongAnswer(enterResult, rightResult, name);
                }
            console.log(`Question: ${num1 = num()} * ${num2 = num()} ? `);
            enterResult = readlineSync.question('Your answer: ')    
                if((rightResult = Math.floor(num1 * num2)) === Math.floor(enterResult)){
                    correct();
                }
                else { return wrongAnswer(enterResult, rightResult, name);
                }
        return win(name);
    };