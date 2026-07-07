const user ={
    username: "MOIZ",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username ="MOIz"
//     console.log(this.username)

// }
// chai()

// const chai = function(){
//     let username ="MOIz"
//     console.log(this.username)
// }

const chai = ()=>{
    let username ="MOIz"
    console.log(this)
}
// chai()

// const addtwo =(num1,num2)=>{
//     return num1+num2
// }

// const addtwo =(num1,num2)=> num1+num2 //implicit return for single line functions
// const addtwo =(num1,num2)=> (num1+num2)
const addtwo =(num1,num2)=> ({username:"Moiz"}) //to retun object you must need to wrap it in round brackets

console.log(addtwo(3,5))


