import readlineSync from 'readline-sync';
/* eslint-disable */
export const greeting = (name) => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have you name?');
  console.log(`Hello, ${name}!`);
};
