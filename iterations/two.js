// for of

//["", "" , ""]

const arr = [1, 2, 3, 4, 5]

for(const i of arr){
    console.log(i);
}

const greeting = "Helo World"
for(const greet of greeting){
    console.log(greet);
}


//Maps - objects 
//use : unqiue value ko store krta h bss repaet ni hone dega

const map =  new Map()
map.set('IN', "India")
map.set('USA', "United States of America");
map.set('Fr', "France")
map.set('IN', "India")


for(const key of map){
    console.log(key)
}

for(const [key, value] of map){
    console.log(key, ':-', value)
}


const myObj = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

//it will not work
// for(const [key, value] of myObj){
//     console.log(key, ':-', value)
// }
