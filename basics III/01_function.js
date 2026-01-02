// const { use } = require("react");   // ❌ Not needed here

function sayMyName(){
    console.log("H")
    console.log("H")
    console.log("H")
    console.log("H")
}

//sayMyName()

function addTwoNumbers(x , y){
    let result = x + y;
    return result;
}

const result = addTwoNumbers(2 , 3);
console.log("result : " , result);

function loginUserMessage(username){
    if(!username){
        // if username is not provided
        return "please enter a username"
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("pihu"))


//...X (Rest Opeartor) 
function calculatePrice(val1 , val2 , ...x){
    return x;      // returns remaining values as array
}

console.log(calculatePrice(200, 300 , 500, 2000)) //op -> 500 , 2000


const user = {
    username : "nitish",
    price : 200
}

// function taking object
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 500
});

const myNewArray = [200, 400, 500 ,100]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))