


function saymyname(){ // defination
    console.log('M')
    console.log('O')
    console.log('I')
    console.log('Z')
}

// saymyname(); // refrence

// function addtwonumbers(number1,number2)//Parameters
// {
//     console.log(number1+number2)
// }


function addtwonumbers(number1,number2)//Parameters
{
    // let result = number1+number2
    // return result

    return number1+number2
}
const result=addtwonumbers(3,4);//(3,4) Arguments
// console.log("Result: ",result)


function loginusermessage(username){
    if(!username){
        // console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
const name =loginusermessage()
// console.log(name);



function calculateCaartprice(...num1)//rest operator
{
    return num1
}
// console.log(calculateCaartprice(200,400,500,20000))

function calculateCaartprice(val1,val2,...num1)//rest operator
{
    return num1
}
// console.log(calculateCaartprice(200,400,500,20000))


const user ={
    username: "Moiz",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleobject(user);

handleobject({
    username: "Sam",
    price: 200
})


const mynewarray= [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(mynewarray))
console.log(returnSecondValue([1,4,5,6,7,9]))