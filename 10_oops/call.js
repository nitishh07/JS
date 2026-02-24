function setUsername(username){
    //complex DB calls
    this.username = username;
}

function createUser(username , email , password){
    // setUsername(username) 
    setUsername.call(this , username)   //refernce hold krke rkhna hai ni to print hi ni hoga kuch
    //apna this de diya 
    this.email = email
    this.password = password
}

const chai = new createUser("chai" , "chai@fb.com" , "123")
console.log(chai)