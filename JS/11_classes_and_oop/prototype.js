let myname= "MOiz     "

// console.log(myname.truelength);

let myheros = ["thor","spiderman"]

let herpower = {
    thor:"hammer",
    spiderman: "sling",

    getspiderpower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}
Object.prototype.hetish =function(){
    console.log(`histe is present in all objects`)
}
Array.prototype.heyMoiz =function(){
    console.log(`helllloooo MOIZ`)
}
// myheros.hetish();
// myheros.heyMoiz()
// herpower.hetish()
// herpower.heyMoiz()


// inheritance
const User ={
    name: "Moiz",
    email:"email.com"
}

const teacher={
    makevideo: true
}
const teachingsupport={
    isAvailable: false
}
const TAsupport= {
    makeassignemnt:'js assignment',
    fulltime: true,
    __proto__: teachingsupport
}

teacher.__proto__= User


// modren syntax
Object.setPrototypeOf(teachingsupport,teacher)

let anotherusername= "chaiorcode                "
String.prototype.truelength=function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`true lenght is ${this.trim().length}`)
}
anotherusername.truelength()