//Getters and Setters
class User{
    constructor(email , password) {
        this.email = email;
        this.password = password;
    }

    //getter likh rahe hai to setter likhna hi pdega

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value
    }
}


const hitesh = new User("h@hitesh.com" , "123")
console.log(hitesh.password);
console.log(hitesh.email);