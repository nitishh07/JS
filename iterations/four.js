const coding = ["js", "java", "cpp", "ruby"];

//callback func rhta hai isme to uska naam ni hoga jaise function name(val){}
//name ni likhenge 

//type -1
// coding.forEach(function (val) {
//     console.log(val);
// })

//type - 2
coding.forEach((val) => {
    console.log(val);
})

//type - 3
function print(val){
    console.log(val);
}

coding.forEach(print);

//more paramters can be passed
coding.forEach((item , index , arr) => {
    console.log(item, arr, index)
})


//accessing objects
//array of objects par forEach() use karke har object ka languageName print kar raha hai.
const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js" 
    },
    {
        languageName : "python",
        languageFileName : "py" 
    },
    {
        languageName : "java",
        languageFileName : "java" 
    }
]

myCoding.forEach((item) =>{
    console.log(item.languageName);
})