const score = 400
console.log(typeof(score));
console.log(score);
const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));  //point ke baad kitna precision tk
console.log(typeof(balance));

const otherNumber = 23.8667

console.log(otherNumber.toPrecision(3));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))



//-----------------------------------------------------Maths-------------------------------------------------------------------------
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(5.7))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4 , 3 , 6 , 8))

//Math.random()
console.log(Math.floor(Math.random()*10) + 1); //value 0 na ho isliye +1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+ min);

