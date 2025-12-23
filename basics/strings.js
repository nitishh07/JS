const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hiteshhc")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(2));

//check string methods
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newWord = "   Nitish";
console.log(newWord.trim())

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20' , '-'));

console.log(url.includes('nitish'))

const game = new String('hitesh-hc-com')
console.log(game.split('-') )



