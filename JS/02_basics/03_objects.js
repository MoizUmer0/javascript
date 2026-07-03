// singleton
// object.create() => create object with prototype
// object literals
const mysymbol = Symbol('key1'); //unique key
const jsuser = { 
    name: "John",
    "Full name": "John Doe",
    age: 30,
    [mysymbol]: "mykey1", //you can use symbol as key
    location: "New York",
    email: "moixumer23@gmail.com",
    isloggedin: false,
    lastlogin: ['monday', 'sunday'],

}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["Full name"]); //you cannot use this with dot notation 
// console.log(typeof jsuser[mysymbol]); //you cannot use this with dot notation


jsuser.email = "moizgpt.com" //update value
// Object.freeze(jsuser) //freeze object so you cannot update it
jsuser.email = "moizgptnew.com" //update value
// console.log(jsuser); 



jsuser.greeting = function() { //add method to object
    console.log("Hello");
}
console.log(jsuser.greeting()); //call method

jsuser.greetingtwo = function() { //add method to object
    console.log(`Hello,${this.name}`);
}
console.log(jsuser.greetingtwo()); //call method