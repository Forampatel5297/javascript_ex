


const firstPerson  = ['foram', 'patel', '415 spring field rd', 23];
const secondPerson = ['akshay', 'patel', '415 spring field rd', 25];
const Person = (accumulator, currentValue) => accumulator + currentValue;
const convertString = (arraytemp => arraytemp.reduce(stringPerson));
console.log(convertString(firstPerson) === convertString(secondPerson) ? `are the same persons` : ' are diferent persons');
