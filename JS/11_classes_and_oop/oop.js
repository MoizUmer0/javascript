// const user = {
//     username: "Moiz",
//     loggincount: 8,
//     singedin: true,

//     getuserdetail: function(){
//         // console.log("got user details from database")
//         // console.log(`username: ${this.username}`)
//         console.log(this)
//     }
// }
// console.log(user.username)
// // console.log(user.getuserdetail())
// console.log(this)


 //construction function
// const promiseOne = new Promise()
// const date = new Date


function user(username,logincount,islogedin){
    this.username=username
    this.loggincount=logincount
    this.singedin=islogedin
    this.greeting=function (){
        console.log(`${this.username}`)
    }
    return this
}
const userOne = new user("moiz",12,true);
const userTwo=  new user("ChaiorCode",12,false)
console.log(userOne)

// new keyword-> -an empty object is created instanse
             //  -constructor function is called
            //   -All arguments are injected in the this
            //   -now you get everything in function
