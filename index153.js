const arithmetic  = {
    add : function (number1, number2) {
        return verifynumbertype(number1,number2) ? number1 + number2 : 'Parameters numbers'; 
    },
    subtract: function (number1, number2) {
        return verifynumbertype(number1,number2) ? number1 - number2 : 'Parameters numbers'; 
    },
    multiply: function (number1, number2) {
        return verifynumbertype(number1,number2) ? number1 * number2 : 'Parameters numbers'; 
    },
    divide: function (number1, number2) {
        return verifynumbertype(number1,number2) ? number1 / number2 : 'Parameters numbers'; 
    },
    remainder: function (number1, number2) {
        return verifynumbertype(number1,number2) ? number1 % number2 : 'Parameters numbers'; 
    },
}

const verifynumbertype = function (number1, number2) {
    return typeof number1 === 'number' && typeof number2 === 'number' ? true : false;
}

console.log('Add: ( 2 + 10 ) =', arithmetic.add(2, 10));
console.log('Subtract: ( 10 - 5 ) =', arithmetic.subtract(10, 5));
console.log('Multiply: ( 3 * 100 ) =', arithmetic.multiply(3, 100));
console.log('Divide: (40 / 2 ) =', arithmetic.divide(40, 2));
console.log('Remainder: ( 20 % 2 ) =', arithmetic.remainder(20, 2));
