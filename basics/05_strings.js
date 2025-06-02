const name = "kannu"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('cookievibes')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,6)     //we cannot give negative value
console.log(newString);

const anotherString = gameName.slice(6,11)
console.log(anotherString);

const oneString = "      kannu       "
console.log(oneString);
console.log(oneString.trim());

const url = '//https:kannu.com/kannu%20'
console.log(url.replace('%20' , '-'));
console.log(url.includes('hey'));

console.log(gameName.split('-'));