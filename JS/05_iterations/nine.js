 const mynums = [1,2,3]

 const mytotal=mynums.reduce((acc,currval)=>{
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval
 },3)
 console.log(mytotal)


 const shoppingcart= [
    {   
        itemname: 'JS course',
        price: 2999
    },
    {   
        itemname: 'Python course',
        price: 4999
    },
    {   
        itemname: 'development',
        price: 8999
    },
 ]

 const newtotal= shoppingcart.reduce((acc,item)=> acc+ item.price,0)

 console.log(newtotal)