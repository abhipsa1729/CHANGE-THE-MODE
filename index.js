document.querySelector('.switch').addEventListener('click', (event) => {
    //toggle background
    document.querySelector('body').classList.toggle("nightly");
    
    //toggle image
    document.querySelector('div').classList.toggle("night-image");
    document.querySelector('div').classList.toggle("day-image");

    //toggle text
    let divClassNames = document.querySelector('div').className;
    if(divClassNames === "night-image"){
        document.getElementById('change-it').innerHTML="GOOD NIGHT";
    }else{
        document.getElementById('change-it').innerHTML="GOOD MORNING";
    }
})
