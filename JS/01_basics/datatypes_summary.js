// #Primitive 

// 7 types : string, number, bigint, boolean, undefined, symbol, null

const score = 100; //number
const scorevalue = 100.3; //number
const isLoggedIn = false; //boolean
const outsideTemp = null; //null
let userEmail; //undefined
const id = Symbol('123'); //symbol
const bigNumber = 123456789012345678901234567890n; //bigint

// refrrence (Non Primitive)

// Array, Object, Function

const heros = ["shaktiman", "nagraj", "doga"]; //array
let myObj = {
    name: "hitesh",
    age: 20
} //object
const myFunction = function() {
    console.log("Hello world");
} //function


// ++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive) ,Heap (Non Primitive) memory allocation

let myyoutubename = "hitesh choudhary";
let myAnothername = myyoutubename;


let userOne = {
    email: "moiz@google.com"
}

let userTwo =  userOne

    userTwo.email = "user2@google.com"


    // copy of the values goes in stack memory and reference of the values goes in heap memory
    // same value goes in heap memory and reference of the values goes in stack memory
