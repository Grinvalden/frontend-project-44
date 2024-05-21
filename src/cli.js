import readlineSync from 'readline-sync';
/* eslint-disable */
let name;
export const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  name = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${name}!`);
};
export  {name};


