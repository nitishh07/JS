//Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(typeof myDate)
// console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2026, 0 , 26)

// let myCreatedDate = new Date(2026, 0 , 23 , 5 , 3)

let myCreatedDate = new Date("01-01-2026")
console.log(myCreatedDate.toLocaleString());

//ye abhi ka aa gya ms me
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

//to convert into sec
console.log((Math.floor(Date.now())/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)

newDate.toLocaleString('default', {
    weekday: "long",
});