//Adavnce Objects in JS

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);
/* 

{
  value: 3.141592653589793, - hardcoded 
  writable: false,
  enumerable: false,
  configurable: false
}

*/

const chai = {
    name: "ginder chai",
    price : 250,
    isAvailable : true,

    orderChai: function(){
        console.log("chai nhi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false,
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))


//    enumerable: false, iske karan name print hoga ye property hai agar false hua to iterate ni kr paenge
for(const [key , value] of Object.entries(chai)){

    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    } 
}

/*
name : ginder chai
price : 250
isAvailable : true
*/






// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI)