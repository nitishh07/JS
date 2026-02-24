// Function ----------|
//Array --------------|-> Object -> null
//String -------------|

function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username , score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printme = function(){
    console.log(`score is ${this.score}`)
}

const chai = new createUser("chai" , 25);
const tea = createUser("tea" , 250);

chai.printme()
chai.increment()


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is presesnt in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`)
} 

heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()


//inheritence

const User = {
    name : "Pihu",
    email: "pihu@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
 
Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`)
}

anotherUsername.trueLength()