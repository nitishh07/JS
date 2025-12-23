console.log("Nitish"); 
const accountId = 12345;
let accountEmail = "nk@gmail.com";
account = 23456;
// prefer not to use var bcz of issue in block scope and functional scope
console.table([accountId, accountEmail ,account]);

//Conversion

let score = "33ab";
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33Abc" => NaN
// true => 1; false => 0

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); 


// ******************************** Operations *******************************************

let v = 3;
let negv = -v;
console.log(negv);

console.log(1 + 2 + "2");
console.log("1" + 2 + 2);
console.log(+true);
v++
console.log(v)

//console.log(2 > 1)
//console.log(2 <= 1)
//console.log(2 == 1)
//console.log(2 != 1)

console.log("2" < 1); 
console.log(null < 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);

//=== (Strict check)

//Primitive

//7 Types : String , Number , Boolean , null , undefined, Symbol , BigInt

const scor = 100;
const scoreValue = 100.3;
const isLogedIn = false;
let userEmail;

let val = Symbol('1234');
let newVal = Symbol('1234');

console.log(val === newVal);

//Refernce (Non - Primitive)

//Array , Object , Functions

const heros = ["kriss" , "naagraj" , "shaktiman"]

let myObj = {
    name : "nick",
    age : 22
}

const myFunction = function(){
    console.log("Hello World");
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Stack(Primitive) , Heap (Non - Primitive)
let myYoutubename = "nitishkumar"

let anothername = myYoutubename
anothername = 'pihukunwar'

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
