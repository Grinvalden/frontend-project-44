import readlineSync from 'readline-sync';

console.log("Welcome to the Brain Games!");
const playersName = readlineSync.question('May I have you name?');
console.log(`Hello, ${playersName}!`);
const theQuestionAboutNumber = (answer) => {
    let theGeneratedNumber = 0;
    console.log('Answer "yes" if the number is even, otherwise answer "no".')  
    for(let i = 0; i < 3; i += 1){
        console.log(`Question: ${theGeneratedNumber = Math.floor(Math.random()*100)}.`) 
            answer = readlineSync.question(`Your answer: `);
            if((theGeneratedNumber % 2 === 0) && (answer === 'yes')){
                console.log("Correct!")
        }
            else if((theGeneratedNumber % 2 !== 0) && (answer === 'no')){
                console.log("Correct!")
        }
            else {  
                if(theGeneratedNumber % 2 !== 0){
                    return "'yes' is wrong answer ;(. Correct answer was 'no'./n Let's try again, Bill!'"}
                if(theGeneratedNumber % 2 === 0){
                    return "'no' is wrong answer ;(. Correct answer was 'yes'./n Let's try again, Bill!'"}
        }}
    return console.log(`Congratulations, ${playersName}!`); 
};   
console.log(theQuestionAboutNumber());
