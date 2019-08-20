const message = "3.14 it's a grate number but 42 it's the answer to life";
const pi =parseFloat(message);
const answertolife = parseFloat(message.slice(29, 31));
const result = pi + answertolife;
const output = result.toString();
console.log('output:' ,output);