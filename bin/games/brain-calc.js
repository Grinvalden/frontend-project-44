#!/usr/bin/env node
import readlineSync from 'readline-sync';


console.log('Welcome to the Brain Games!');
const playersName = readlineSync.question('May I have you name?');
console.log(`Hello, ${playersName}!`);
const calculate = (theResultOfCalculation) => {
        console.log('What is the result of the expression?');
        let num1 = 0;
        let num2 = 0;
            console.log(`Question: ${num1 = Math.floor(Math.random()*100)} + ${num2 = Math.floor(Math.random()*100)} ? `);
            theResultOfCalculation = readlineSync.question('Your answer: ')
                if((Math.floor(num1 + num2)) === Math.floor(theResultOfCalculation)){
                    console.log('Correct!')
                }
                else { return `${theResultOfCalculation} is wrong answer ;(. Correct answer was ${num1 + num2}.\nLet's try again, ${playersName}!` 
                }
            console.log(`Question: ${num1 = Math.floor(Math.random()*100)} - ${num2 = Math.floor(Math.random()*100)} ? `);
            theResultOfCalculation = readlineSync.question('Your answer: ')
                if((Math.floor(num1 - num2)) === Math.floor(theResultOfCalculation)){
                    console.log('Correct!')
                }
                else { return `${theResultOfCalculation} is wrong answer ;(. Correct answer was ${num1 - num2}.\nLet's try again, ${playersName}!`
                }
            console.log(`Question: ${num1 = Math.floor(Math.random()*100)} * ${num2 = Math.floor(Math.random()*100)} ? `);
            theResultOfCalculation = readlineSync.question('Your answer: ')    
                if((Math.floor(num1 * num2)) === Math.floor(theResultOfCalculation)){
                    console.log('Correct!')
                }
                else { return `${theResultOfCalculation} is wrong answer ;(. Correct answer was ${num1 * num2}.\nLet's try again, ${playersName}!`
                }
        return console.log(`Congratulations, ${playersName}!`);
    };
    console.log(calculate());

