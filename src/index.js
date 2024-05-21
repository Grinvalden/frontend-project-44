export const correct = () => console.log('Correct!');

export const wrongAnswer = (wrongResult, correctResult, name) => console.log(`${wrongResult} is wrong answer ;(. Correct answer was ${correctResult}.\nLet's try again, ${name}!`);

export const num = () => Math.floor(Math.random() * 100);

export const numUpTo10 = () => Math.floor(Math.random() * 10);

export const indexRandom = () => Math.floor(Math.random() * 9);

const state = {
  lookingItem: null,
};

export const getRndArifmeticProgr = () => {
  const firstNum = numUpTo10();
  const difference = numUpTo10();
  const itemRandom = indexRandom();
  const arrLength = 10;
  const arr = [];

  for (let i = 0; i < arrLength; i += 1) {
    arr.push(firstNum + i * difference);
  }

  state.lookingItem = arr[itemRandom];
  arr[itemRandom] = '..';

  return arr.join(' ');
};

export const getLookingItem = () => state.lookingItem;

export const win = (playersName) => console.log(`Congratulations, ${playersName}!`);

export function isPrime(integer) {
  if (integer <= 1) return false;
  for (let i = 2; i < integer; i += 1) {
    if (integer % i === 0) return false;
  }
  return true;
}
