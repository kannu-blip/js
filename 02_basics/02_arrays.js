const marval_heros =["spiderman" ,"thor" ,"ironman"]
const dc_heros = ["batman" ,"flash" ,"superman"]
// marval_heros.push(dc_heros)
// console.log(marval_heros);

const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);

const togetherHeros = [...marval_heros, ...dc_heros]              //this is spread method work same as concat
// console.log(togetherHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7,[6 ,7 ,[4 ,5]]]
const realArr = anotherArr.flat(Infinity)                         //flat method uses for open all depth in an array
// console.log(realArr);

console.log(Array.isArray("kannu"));
console.log(Array.from("kannu"));
console.log(Array.from({name :"kannu"}))

let score1 = 100 
let score2 = 200 
let score3 = 300 
console.log(Array.of(score1, score2 , score3));