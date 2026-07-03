

// {} scope
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner: ",a)
}
// console.log(a)

// function one(){
//     const username= "MOiz"
//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log(website)
//     two()
// }
// one()


if(true){
    const username= "moiz"
    if(username=== "moiz"){
        const website ="youtube"
        // console.log(username + website)
    }
    // console.log(website)
}


// +++++++++++++++++++++ intresting ====================

addone(5)
function addone(num){
    return num+1
}


addtwo(5)//got an error cause the function is hold in a variable and variable is not decleared yet
const addtwo= function(num){
    return num+2
}
