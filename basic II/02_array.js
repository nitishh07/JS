const marvel = ["thor" , "ironamn", "captain"]
const dc = ["superman", "batman", "wonderwomen"]

//Push
// marvel.push(dc)  //push me same arr me return krte hai
// console.log(marvel)

//Concat
// const allHero = marvel.concat(dc)  //concat me new arr return krte hai
// console.log(allHero)

//spread
const allHeros = [...marvel , ...dc]
console.log(allHeros)

//Flat
const another_arr = [ 1, 2, 3 , [ 4, 5 , [9 , 10]]];

const real_arr = another_arr.flat(Infinity)
console.log(real_arr)

console.log(Array.isArray("Nitish"))
console.log(Array.from("Nitish"))  //convert into arr
console.log(Array.from({name: 'Pihu'})) //intersting -> btna pdega keys se arr ya value se arr

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1 , score2 , score3))