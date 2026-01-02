const user = {
    username : "pihu",
    price : "9999",

    welcomeMessage: function(){
    //this - current context ko refer krega
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "isha"
// user.welcomeMessage()

//node environement - this refers to {} context
// console.log(this);



//Arrow Function

// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }

// chai()


// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)   
// }

// chai()

const chai = () =>{
    let username = "hitesh"
    console.log(this.username)
}
 
chai()


// const addTwo = (num1 , num2) =>{
//     return num1 + num2;
// }

// const addTwo = (num1 , num2) => (num1 + num2); //if () then no return keyword


const addTwo = (num1 , num2) => ({user : "nitish"});

console.log(addTwo(3,4))

const myArray =  [2,3,4,5]
myArray.forEach()
 