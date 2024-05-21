
    export const correct = () => console.log('Correct!');

    export const wrongAnswer = (wrongResult, correctResult, name) => 
        console.log(`${wrongResult} is wrong answer ;(. Correct answer was ${correctResult}.\nLet's try again, ${name}!`);

    export const num = () => Math.floor(Math.random()*100);

    export const numUpTo10 = () => Math.floor(Math.random()*10);

    export const indexRandom = () => Math.floor(Math.random()*9);
    
    let lookingItem;

    export const getRndArifmeticProgr = () => {
        let firstNum = numUpTo10();
        let difference = numUpTo10();
        const itemRandom = indexRandom();
        const arrLength = 10;
        let arr = [];
    
        for (let i = 0; i < arrLength; i += 1) {
            arr.push(firstNum + i * difference);
        }

        lookingItem = arr[itemRandom];
        
        arr[itemRandom] = '..';
    
        return arr.join(' ');
    };

    export {lookingItem};

    export const win = (playersName) => console.log(`Congratulations, ${playersName}!`);
    




