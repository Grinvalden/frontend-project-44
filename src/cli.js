import readlineSync from 'readline-sync';
/* eslint-disable */
const greeting = (name) => {
  name = readlineSync.question('May I have you name?');
  console.log(`Hello, ${name}!`);
};
export default greeting;
