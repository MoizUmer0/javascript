function user(email,pass){
    this.email=email
    this.pass=pass

    Object.defineProperty(this,'email',{
    get:function(){
            return this._email.toUpperCase()
         },
    set:function(value){
        this._email=value
    }
    })

    Object.defineProperty(this,'pass',{
    get:function(){
            return this._pass.toUpperCase()
         },
    set:function(value){
        this._pass=value
    }
    })
   
}
const chai = new user("email.com","abc")
console.log(chai.email)

