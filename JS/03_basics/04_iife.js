//  Tmmediate Invoke Function Expression (IIFE)


(function chai(){
    // named iife
    console.log(`db connected`) // to remove the globel scope polution we use iife
})();

((name) =>{
    console.log(`db connected two ${name}`);
})('Moiz');