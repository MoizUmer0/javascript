class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
   static createId(){
        return`123`
    }
}
const Moiz = new User("hitesh")
// console.log(Moiz.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher("iphone","iphone@.com")
console.log(iphone.createId() )