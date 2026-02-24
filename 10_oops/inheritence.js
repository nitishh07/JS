class User{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Username : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new Couse was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@teahce.com" , "123");

chai.addCourse();

const masalaChai = new User("Nitish");

masalaChai.logme()

chai.logme()

console.log(chai == masalaChai) //false
console.log(chai == Teacher) //false

console.log(chai instanceof Teacher) //true - usi se bana hai
console.log(chai instanceof User) //true
 
