//REDUCE

//let initial value = 0;
// const myTotal = myNums.reduce(function (accumulator , current Value) {
//     return accumulator + current Value
// }, Intial value);



const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc , currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0);

// console.log(myTotal);


//Reduce - arrow function

const myTotal = myNums.reduce( (acc, curr)=> acc + curr, 0);

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "web dev",
        price : 5999,
    },
    {
        itemName : "app course",
        price : 3999,
    },
]

const priceToPay = shoppingCart.reduce((acc , item) => acc + item.price, 0)

console.log(priceToPay);
