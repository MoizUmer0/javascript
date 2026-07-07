function user(email,pass){
  

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
      this.email=email
    this.pass=pass
   
}
const chai = new user("email.com","abc")
console.log(chai.email)

