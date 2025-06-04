const score = 100

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//---------------------------MATHS-------------------------------//
//console.log(Math);
// console.log(Math.abs(-4));                         //gives negative values to positive only called abstract values
// console.log(Math.round(6.98));
// console.log(Math.ceil(4.2));                       //gives top max value for decimal
// console.log(Math.floor(8.9));                      //gives minimum value for decimal
// console.log(Math.max(7,9,2,3,5));                  //gives highest number of an array
// console.log(Math.min(1.7,3,4,8));                  //gives lowest number of an array

// console.log(Math.random());                        //always gives vlaues in b/w 0-1
// console.log((Math.random()*10) + 1);               //avoid zeros values 
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
Math.random()

console.log(Math.floor(Math.random() * (max - min + 1)) + min);      //gives values above 10
