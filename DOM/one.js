//In relation to One.html file
// document.getElementById
// document.getElementById("").innerHTML = ""

document.getElementById('title').id 

document.getElementById('title').className //title id me konsa class hai uska naam

document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class') //title id ka class attribute nikalo
document.getElementById('title').setAttribute('class' , 'test heading')  //change class name

const title = document.getElementById('title')
title.style.backgroundColor = 'green'
title.style.padding = '15px'
title.textContent   //all content
title.innerHTML    //visible text
title.innerText    //all HTML tags also visible


//QUERY SELECTOR
document.querySelector('h2')
document.querySelector('#title') //id
document.querySelector('.title') //class
document.querySelector('input[type="password"]')
document.querySelector('p:first-child')

document.querySelector('ul')
const myul = document.querySelector('ul') //selecteing ul
//now selecting li inside ul
myul.querySelector('li')
//changing color of list
const turnGreen = myul.querySelector('li')
turnGreen.style.backgroundColor = "green"
turnGreen.innerHTML 


//QUERY SELECTOR ALL
document.querySelectorAll('li')
//NodeList aaega

const tempLiList = document.querySelectorAll('li')
//forEach avaliable h lekin map ni 

tempLiList.style.color = 'green' //wrong X
tempLiList[0].style.color = 'green' //Right 

const myH1 = document.querySelectorAll('h1')
myH1[0].style.color = 'green'

//NodeList me foreach se hi iterate kr skenge
tempLiList.forEach(function (i) {
    i.style.backgroundColor = 'red'
})

//Loop kaise krenge ..getelemntbyclassname me
const tempClassList = document.getElementsByClassName('list-item')

//convert krenge
tempClassList
//HTML COLLETION - o/p

Array.from(tempClassList) //convetred into arr

const myConvertedArray = Array.from(tempClassList)

//all methods are available
myConvertedArray.forEach(function(li){
    li.style.color = 'red';
});

document.querySelector('.mw-headline');
myH2[0].innerText;

myH2.forEach(function (h){
    h.style.color = 'red'
    h.style.backgroundColor ='green'
    h.style.padding = '10px'
});




