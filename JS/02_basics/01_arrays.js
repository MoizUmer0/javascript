// arrays
let mynumbers = [0,1,2,3,4,5,6,7,8,9];
const myheroes = ["superman", "batman", "ironman", "spiderman"];

const myarray = new Array(1,2,3,4,5,6,7,8,9);


// Array methods

myarray.push(10) // add at the end
myarray.unshift(-1) // add at the start
myarray.pop() // remove from the end
myarray.shift() // remove from the start


// console.log(myarray.includes(5)); //true
// console.log(myarray.indexOf(5)); //5


// const newarray = myarray.join("-") // convert array to string

// console.log(typeof newarray);

// slice, splice
console.log("A",myarray);
const newarray = myarray.slice(1,3) // 2 to 4 index
console.log(newarray);
console.log("B",myarray);

const myarray2=myarray.splice(1,3) // 2 index se 3 element remove
console.log(myarray2);
console.log("C",myarray);

