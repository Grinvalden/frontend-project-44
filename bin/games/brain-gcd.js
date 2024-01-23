#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const playersName = readlineSync.question('May I have you name?');
console.log(`Hello, ${playersName}!`);
const theSmallestCommonDivisor = (result) => {
    console.log('Find the greatest common divisor of given numbers.')
        for (let i = 0; i < 3; i += 1){
        let int1 = 0;
        let int2 = 0;
        console.log(`Question: ${int1 = Math.floor(Math.random()*100)} ${int2 = Math.floor(Math.random()*100)} ? `);
        result = readlineSync.question('Your answer: ')
           while(int1 > 0 && int2 > 0) {
            if (int1 >= int2) {
                int1 = int1 % int2 
            }
                else { int2 = int2 % int1
                }
            }
            let theCorrectResult = Math.max(int1, int2)
            if(Math.floor(result) === Math.floor(theCorrectResult)){
                console.log("Correct!")
            }
            else { return `${result} is wrong answer ;(. Correct answer was ${theCorrectResult}.\nLet's try again, ${playersName}!`
            }
        } 
return console.log(`Congratulations, ${playersName}!`);
}

console.log(theSmallestCommonDivisor());
