/*****     primitive data types:-

strings
boolean 
null
numbers
undefined
symbol
bigInt
stack memory

           Refrence data types:-
objects
arrays
functions
 heap memory

******/

const score = 100
const scorevalue = 100.3

const isLoggedIn = true
const outsidetemp = null
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId); // false

// const bignumber = 66288587527928n

let myobject = {
    name: "kannu",
    age : 18,
}

const myFunction = function() {
    console.log("hello world");
}

console.log(typeof bignumber); //undefined
console.log(typeof outsidetemp); //object
console.log(typeof myFunction); //function