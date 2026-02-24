//Object literal

const user = {
    username: "nitish",
    loginCount : 8,
    signedIn: true,

    getUserDetails : function(){
        // console.log("Got user details from databse");
        console.log(`Username : ${this.username}`);
        console.log(this);        //this - current context or current obj
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

//------------------------------------------------------------------------------------------------------------------------------------------------

//Constructor function
// const promiseOne = new Promise()1
// const date = new Date()


function User(username , loginCount , isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.loggedIn = isloggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.user}`);
    }

    return this
}

// const userOne = User("hitesh", 12 , true)
// const userTwo = User("chaiaurcode", 13 , false) //ye overwrite kr dega -- isliye new keyword ke saaath constructorr banante hai taki har baar new instance mile

//using new keyword (constructor)
const userOne = new User("hitesh" , 12 , true)
const userTwo = new User("chaiaurcode", 11 , false)

console.log(userTwo)
console.log(userOne.constructor)

//step 1 - new obj created
//step 2 - constructor func called due to new keyword - returns al  l arguments