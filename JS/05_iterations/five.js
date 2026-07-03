const coding =["js","ruby","java","python","cpp"]

// coding.forEach(item => { // call back function so no name
//     console.log(item)
// });

// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const myCoding= [
    {
        language: "Javascript",
        languagefilename: "js"
    },
    {
        language: "CPP",
        languagefilename: "c++"
    },
    {
        language: "ruby",
        languagefilename: "rb"
    },
    
]

myCoding.forEach((item)=>{
    console.log(item.language)
})