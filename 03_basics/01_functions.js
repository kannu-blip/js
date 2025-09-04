function sayMyName(){
console.log("k");
console.log("a");
console.log("n");
console.log("n");
console.log("u");
}
// sayMyName()

function addTwoNumbers(number1 ,number2){
    //  let result = number1 + number2
    //  return result                                   //After Result Nothing executed add on 
    return number1 + number2
}

const result = addTwoNumbers(3,5)
// console.log("Result: ", result);

function loginUserMessage(username){
    if (username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("kannu"))

function CalculateCartPrice(val1, val2,...num1){
    return num1
}
// console.log(CalculateCartPrice(200, 300,1000))

const user = {
    username : "kannu",
    price : 199
}
function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username : "kannu",
    price : 300
})

const myNewArray = [20, 40 ,30 ,100]
function returnSecondValue(getarray){
     return getarray [3]
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([20, 40 ,30 ,100]));
