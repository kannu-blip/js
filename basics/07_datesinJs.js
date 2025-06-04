// -------------------DATES---------------------------//

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof(myDate));

 let isDate = new Date(2025 , 0 , 6)               //in js months are started with 0
// console.log(isDate.toDateString());
let myCreatedDate = new Date(2025 , 0 , 6 ,5 , 3)               //in js months are started with 0
// console.log(myCreatedDate.toLocaleString());
 let tellDate = Date("12-04-2025")
// console.log(tellDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(isDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());

// `${newDate.getDate()} and the time `
newDate.toLocaleString('default'{
    weekday : "long"
})