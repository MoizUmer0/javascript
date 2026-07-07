const promisesone = new Promise(function (resolve,reject){
    // do an async task
    // db calls,cryptography ,network
setTimeout(() => {
        console.log('Async task is completed')
        resolve()
},1000);
})

promisesone.then(function(){
    console.log('Promise Consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "MOiz",email:"example@gmail.com"})
    })
},1000)
promiseThree.then(function(user){
    console.log(user)
})

const promsideFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "MOiz umer",email:"example2@gmail.com"})
        }
        else{
            reject("Error: Something wnet wrong")
        }
    },1000)
})  
promsideFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolve or rejected")
})

const promiseFive=new Promise(function(resolve,reject){
     setTimeout(function(){
        let error1 = true
        if(!error1){
            resolve({username: "Java",password:123 })
        }
        else{
            reject("Error: JS wnet wrong")
        }
    },1000)
})
async function consumePromiseFive(){
   try {
        const response= await promiseFive
        console.log(response)
   } catch (error1) {
        console.log(error1)
   }
}
consumePromiseFive()



// async function getallusers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//    } catch (error) {
//     console.log("E:",error) 
//    }
// }

// getallusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error)) 