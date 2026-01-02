//for

// for(let i = 0; i< 10; i++){
//     const element =  i;
//     if(element == 5){
//         console.log("5 is best")
//     }
//     console.log(element);
// }


// for(let i=0; i<=10; i++){
//     console.log(`outer loop : ${i}`);
//     for(let j = 0; j<=10; j++){
//         console.log(`Inner Loop : ${j}` )
//     }
// }


//while
let arr = ['speed', 'messi', 'dhoni']

let i = 0;
while(i < arr.length){
    console.log(`Value is ${arr[i]}`);
    i++;
}


//do while

let score = 1

do {
    console.log(`${score}`)
    score++;
}while(score <= 5)