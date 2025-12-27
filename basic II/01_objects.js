//singleton -> 
// Object.create
//object literals


const mySum = Symbol("key1")
//if we use mySum : "mykey1" like this in object then it is as a string
//to use symbol we should use [mySum] : "myKey1" like this 
const JsUser = {
    name : "Nitish",
    "gf name": "unknown",
    age: 19,
    location: "Jaipur",
    email: "nitish@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
    [mySum] : "myKey1"
}

//two types to print objects
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["gf name"])
//to print symbol
console.log(JsUser[mySum])

//freeze obj and change obj
JsUser.email = 'pihu@gmail.com'
// Object.freeze(JsUser)
// console.log(JsUser)

//greetings
JsUser.greeting = function(){
    console.log("Hello JS User!")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User! ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

