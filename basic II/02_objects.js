// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123a"
tinderUser.name = "Nitish"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "nitish@gmail.com",
    fullname : {
        userfullname : {
            firstname: "pihu",
            secondname: "kunwar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

//Combine two objects
const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

// const obj3 = {obj1 , obj2}  // obj ke andar obj aa jaega

// const obj3 = Object.assign({}, obj1 , obj2)  //Obj.assign() ek saath de dega

const obj3 = {...obj1 , ...obj2}
console.log(obj3)


//Arrays in objects

const users = [
    {
    name : "Nitish",
    age : 21
    },
    {
    name : "Nitish",
    age : 21
    },
    {
    name : "Nitish",
    age : 21
    },
]

console.log(users[1].name)
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn')) 

//******************************************************************************************************************************************************************************************* */

//Destructuring of objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//console.log(course.courseInstructor);
//like this we can also print value from object
const {courseInstructor : instructor} = course
console.log(courseInstructor);

//instead of curseInstrucotr we can give value and print that only
console.log(instructor);


//JSON Format
// {
//     "name": "nitish",
//     "coursename": "js in hindi",
//     "price": "free"
// }


