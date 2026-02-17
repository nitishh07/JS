const sayDate = function(str){
    console.log(str, Date.now());
}

let intervalId = null;   // const nahi, let

document.querySelector("#start").addEventListener('click', function(){
    if(intervalId === null){           //Check: intervalId === null  // Agar pehle se timer nahi chal raha → tabhi start karo
        intervalId = setInterval(sayDate, 1000, "Pihu");
    }
});

document.querySelector("#stop").addEventListener('click', function(){
    clearInterval(intervalId);
    intervalId = null;     //intervalId = null // reset, taki dubara start ho sake
});


