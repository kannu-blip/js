//----------------------------ARRAY------------------------------------//
const myArr = [0,1,2,3,4,5]                 //are always in square brackets
// console.log(myArr[0]);
const myHeroes = ["batman, thor"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[2]);

//---------------------------ARRAY METHODS-----------------------------//
myArr.push(6)
myArr.pop()                                 //pop last value from array
myArr.unshift(9)                            //adding first value to array
myArr.shift()                               //remove the first value 
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// console.log(newArr);
// console.log(myArr);


/*
SLICE  - instances returns a shallow copy of a portion of an array into a new array object selected from start to end
SPLICE - changes the contents of an array by removing or replacing existing elements
*/

console.log("A", myArr)                    //original array
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" ,myArr)                    //using slice

const myn2 = myArr.splice(1,3)
console.log("C" ,myArr)                   //using splice
console.log(myn2);

