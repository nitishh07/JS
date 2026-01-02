// const coding = ["js", "java", "cpp", "ruby"];

// const values = coding.forEach((item)=>{
//     console.log(item);
// })

// console.log(values)

//NOTE : Callback function ka naam ni hota mitr

//FILTER
const myNums = [1,2,3,4,5,6,7];

//type 1
// const newNums = myNums.filter((num) => num > 4);

//type 2  - {} lagane pe return likhna pdega scope h kyuki ye
// const newNums = myNums.filter((num) => {
//     return num > 4
// });
// console.log(newNums)


//type 3 - uing foreach
// const newNums = []

// myNums.forEach( (num)=> {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);



const books = [
    {
        title: 'Book One',
        genre: 'Fiction',
        publish: 1981,
        edition: 2004
    },
    {
        title: 'Book Two',
        genre: 'History',
        publish: 2003,
        edition: 2005
    },
    {
        title: 'Book Three',
        genre: 'Non-Fiction',
        publish: 1985,
        edition: 2014
    },
    {
        title: 'Book Four',
        genre: 'Geopolitics',
        publish: 1986,
        edition: 2009
    },
    {
        title: 'Book Five',
        genre: 'Horror',
        publish: 1999,
        edition: 2000
    },
    {
        title: 'Book Six',
        genre: 'Fantasy',
        publish: 1982,
        edition: 2002
    },
    {
        title: 'Book Seven',
        genre: 'Fairy Tale',
        publish: 1983,
        edition: 2001
    },
    {
        title: 'Book Eight',
        genre: 'Thriller',
        publish: 1992,
        edition: 2005
    },
]

let userBooks = books.filter( (val)=> val.genre === 'History')
 
userBooks = books.filter( (val)=> val.publish >= 2000)

console.log(userBooks);