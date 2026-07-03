const buttons = document.querySelectorAll('button')
console.log(buttons)
const counter = document.querySelector('#counter')
let count=0

buttons.forEach( (button)=> {
    button.addEventListener('click',function (e){
        console.log(e.target)
        if(e.target.id==="decrease"){
           if(count>0){
            counter.textContent= --count
           }
        }
        if(e.target.id === "increase"){
            counter.textContent= ++count
        }
        if(e.target.id === "reset"){
            count=0
            counter.textContent=count
        }
    })
}) 
