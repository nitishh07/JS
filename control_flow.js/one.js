//if
// const isUserLoggedIn = true;
// const temp = 41 

// if(temp == 50){
//     console.log("less than 50")
// }else{
//     console.log('temp greater than 50')
// }


// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }


//Short hand notation

const balance = 1000
// if(balance > 500) console.log("test")


//NESTING
if(balance < 500){
    console.log("lessthan");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false

if(UserLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(UserLoggedIn || debitCard){
    console.log("Allow to buy course")
}