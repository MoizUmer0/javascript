const score = 100

const balance= new Number(1000)


// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); 

const otherNumber = 123.456789
// console.log(typeof otherNumber.toPrecision(4)); //123.5  convert it into string

const myNumber = 1000000
// console.log(myNumber.toLocaleString("en-IN")); //1,00,000



// ++++++++++++++++++++++++++maths+++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));    
// console.log(Math.min(2,3,4,5,6,7));
// console.log(Math.max(2,3,4,5,6,7));

console.log(Math.random()); //0 to 1
console.log((Math.random()*10)+1); //0 to 10


const min = 10
const max = 20


console.log(Math.floor(Math.random()*(max-min)+min)); //10 to 20