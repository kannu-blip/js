 var c = 100                              //global variable 
 let a = 300
if (true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a);              //local scope
    
}
// for (let i = 0; i < array.length; i++){
    // const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "kannu"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    two()
}
// one()

if (true) {
    const username = "kannu";
    if (username === "kannu"){
        const website = " youtube"
        // console.log(username + website);
    }
}


//two methods of syntax for hoisting
/*****by this we can print before declaration******/
console.log(addone(5))
function addone(num){
    return num + 1
}
/****in this we cannot print without declarattion cause we hold this function in addTwo */
// addTwo()
const addTwo = function(num){
    return num + 2
}