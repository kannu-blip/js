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
console.log(loginUserMessage("kannu"))