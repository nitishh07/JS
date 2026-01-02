//Immediately Invoked Function Expression

//global scope ke pollution se problem ke karan iifee ka use hota hai

//named IIFE
(function chai(){

    console.log('DB connected');
})
();

//unamed IIFE
((name) => {
    console.log(`DB connected TWO ${name}`)
}) ('nitish')