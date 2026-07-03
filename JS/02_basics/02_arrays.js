const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "batman", "wonderwoman"];

// marvel_heros.push(dc_heros); // add array at the end
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros); // add array at the end
// console.log(all_heros);

const allnewheros = [...marvel_heros, ...dc_heros]; // add array at the end knows as spread operator
// console.log(allnewheros);

const another_array = [1,2,3,[4,5,6],7,[7,[8,9]]];
const realanotherarray = another_array.flat(Infinity); // flat method to remove nested array
// console.log(realanotherarray);




console.log(Array.isArray("hitesh")); // false
console.log(Array.from("hitesh")); // true
console.log(Array.from({name: "hitesh"})); // []


let score= 100
let bonus = 20
let finalScore = score + bonus
console.log(Array.of(score, bonus, finalScore)); // [100, 20, 120]
