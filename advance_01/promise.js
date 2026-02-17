const promiseOne =  new Promise(function(resolve , reject){
    //Do an async task
    //DB calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
});

promiseOne.then(function(){
    console.log("Promise consumed")
})


//Promise 2
new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved!")
})


//Promise 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai" , email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


//Promise 4
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Chai" , email: "chai@example.com"})
        }else{
            reject("ERROR: Something went wrong");
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username      //Yaha se username return kiya.//Ye next .then() ko pass ho jayega.
})
.then((username)=>{
    console.log(username);    //Ye second .then() hai.//First .then() se jo return hua tha, wo yaha aayega.
})
.catch(function(err){
    console.log(err);
})
.finally(()=>{
    console.log("The promise is either resolved or reject");
})


//PROMISE 5

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript" , password: "123"})
        }else{
            reject("ERROR: JS went wrong");
        }
    }, 1000)
});

//agar err = true hai to async await hmseha response dega hi yhi manta hai to error handle ni kr pata hai
//iske liye try and catch block ka zarrooat pdega

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(err){
        console.log(err);
    }
}

consumePromiseFive();

//-----------------------------------------------------------

// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }

// getAllUsers();


//using .then()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err);
})