//SET TIMEOUT
// setTimeout(function(){
//     console.log("Nitish");
// }, 2000);


const sayNitish = function(){
    console.log("Nitish");
}

const changeText = function(){
    document.querySelector('h1').innerHTML = "Best JS Series"
}

// setTimeout(sayNitish , 1000)
// setTimeout(changeText , 2000)

//CLEARTIMEOUT

const changeMe = setTimeout(changeText , 2000);

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("STOPPED")
})
