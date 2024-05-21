import readlineSync from 'readline-sync';
/* eslint-disable */
let name;
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
export  {name};


