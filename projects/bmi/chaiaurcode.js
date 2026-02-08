const form = document.querySelector('form');
//this use case will get empty value
// const height = parseInt(document.querySelector('#height').value) //jb click krne pe value chhaiye  aise khali value milega

form.addEventListener('submit' , function(e){
    e.preventDefault();

    // document.querySelector('#height').value  //value milega lekin string me

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${weight}`
    }

    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2);

        //show result

        let message = ""
        if(bmi < 18.6){
            message = "UnderWeight";
        }else if(bmi >= 18.6 && bmi <= 24.9){
            message = "Normal Range";
        }else if(bmi > 24.9){
            message = "OverWeight";
        }

        results.innerHTML = `<span>${bmi}</span><div>${message}<div>`;
    }
})
