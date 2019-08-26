
let numbers = [];
for (let i = 1000; i > 0; i--) {
    numbers.push(i);    
}
const evenNumbers = numbers.filter(number =>number % 2 === 0);

const oddNumbers = numbers.filter(number =>number % 2 !== 0);

const showOddNumbers = oddNumbers.filter((numbers, index) => index <= oddNumbers.length && index >= oddNumbers.length-10);
const showEvenNumbers = evenNumbers.filter((number, index) => index >= 0 && index < 20);

console.log(showOddNumbers);
console.log(showEvenNumbers);
