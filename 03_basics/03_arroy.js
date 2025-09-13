const user = {
    username :"kannu",
    price : 1000,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to the website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()
// console.log(this);


// ****it will work ******//
// function chai(){
//     console.log(this);
// }
// chai()

//***(this) is not work in function it works with object****//
const chai = function(){
    let username = "kannu"
//     console.log(this.username);
}

// ******ARROY FUNCTION*********//
// const chai = () => {
//     let username = "kannu"
//     console.log(this);
// }
// chai()

// ***EXPLICIT RETURN***************/
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// ****IMPLICIT RETURN****************/
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// ***for objects 
const addTwo = (num1, num2) => ({username : "kannu"})

console.log(addTwo(3,4));