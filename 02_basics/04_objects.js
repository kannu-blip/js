const tinderUser = new Object()                  //this is singleton object  
// const tinderUser = {}  
tinderUser.name = "kinoo" 
tinderUser.Id = "001kanu"   
tinderUser.isLoggedIn = false             
// console.log(tinderUser);

const regularUser = {
    email : "kannu@email.com",
    fullname : {
        userfullname :{
            firstname : "kannu",
            lastname : "kashyap"
        }
    }
}
// console.log(regularUser.fullname);    
// console.log(regularUser.fullname.userfullname);    

const obj1 = {1 :"a" , 2 :"b"}
const obj2 = {3 :"a" , 4 :"b"}
const obj3 = {5 :"a", 6 :"b"}
// const obj4 = Object.assign({}, obj1 ,obj2 ,obj3)
const obj4 = {...obj1 , ...obj2}
// console.log(obj4);

const Users = [
    {
        id : "kannu001",
        email : "kannu@email.com"
    },
    {
        id : "kannu001",
        email : "kannu@email.com"
    },
    {
        id : "kannu001",
        email : "kannu@email.com"
    }
]
// console.log(Users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));

// -----------------------------------------DESTRUCTURING OF OBJECTS-------------------------------------------//
const course = {
    coursename : "js",
    price : "999",
    courseInstructer : "hitesh"
}
const {coursename} = course
// console.log(coursename);
const{courseInstructer: instructur} = course
console.log(instructur)

