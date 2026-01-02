const userEmail = []

if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email")
}

//falsy value
// false , 0 , -0, BigInt 0n, "", null , undefined , NaN

//truthy value
// "0" , 'false', " ", [] , {} , function(){}

// if(userEmail.length == 0){
//     console.log("array is empty")
// }


//check empty obj

const emptyObj = {}
//Object.keys(emptyObj) - array return krega
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}



//Nullish Coalescing Operator (??) : null undefined

//Ye operator sirf null ya undefined hone par right side wali value deta hai.
//Baaki values (0, "", false) ko valid maanta hai.
let val1;
val1 = 5 ?? 10
val2 = null ?? 10  

console.log(val2)


//Ternary Operator

//condition ? true : false

const isPrice = 100
isPrice >=80 ? console.log("less than 80") : console.log("more than 80")