//Immediately invoke function expression(IIFE)

/***named iife****/
(function chai(){
    console.log(`DB CONNECTED`)
})();

/***normal iife***/
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('kannu')