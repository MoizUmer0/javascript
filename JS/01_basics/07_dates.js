let mydate= new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("2023-01-14")


// console.log(myCreatedDate.toLocaleString());

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)) //converted to seconds


let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1); //0-11
console.log(newDate.getDate());
console.log(newDate.getDay());  

newDate.toLocaleString('default', {
     weekday: 'long' 
    }) //Monday