// // ES6


// class User {
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }

// }
// const chai = new User("Moiz","email.com",123)
// console.log(chai.changeUserName())


// bts

function user(username ,email,password){
    this.username=username
        this.email=email
        this.password=password
}
user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUserName =function(){
     return `${this.username.toUpperCase()}`
}

const tea = new user("moiz",'emial.com',123)
console.log(tea.encryptPassword())
console.log(tea.changeUserName())