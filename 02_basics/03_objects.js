// -------------------------singleton-------------------------------------//
//                obejct literals              //
const mysym = Symbol("key1")
const jsUser = {
        name : "kannu",
        "full name" : "kannu kashyap",
        [mysym] : "heykey",
        age : 18,
        location : "haridwar",
        email : "kannu@google.com",
        isLoggedIn : false,
        lastLoginDays : ["Monday", "Saturday"]

    }
    // console.log(jsUser.email)
    // console.log(jsUser.location)
    // console.log(jsUser["full name"])
    // console.log(jsUser[mysym])

jsUser.email = "kannu@email.com"
// Object.freeze(jsUser)
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())