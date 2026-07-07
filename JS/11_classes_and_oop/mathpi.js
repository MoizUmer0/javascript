const descriptor =Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor)
// const mynewOBJ = Object.create(null)

const chai = {
    name:'ginger',
    price: 250,
    isAvaliable: true,


    order: function(){
        console.log("chai nahi bani")
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
Object.defineProperty(chai,'name',{
    // writable: false,
    enumerable: true
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
// // console.log(Math.PI)

for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function')
    console.log(`${key},${value}`)
}