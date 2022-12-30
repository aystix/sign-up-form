const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    if(firstname.value == ""){
        document.querySelector(".error-text").style.display = "block";
        document.querySelector(".error-image").style.display = "block";
    }
     if(lastname.value == ""){
        document.querySelector(".error-text2").style.display = "block";
        document.querySelector(".error-image2").style.display = "block";
    }
    if(email.value == ""){
        document.querySelector(".error-text3").style.display = "block";
        document.querySelector(".error-image3").style.display = "block";
    }
    if(password.value == ""){
        document.querySelector(".error-text4").style.display = "block";
        document.querySelector(".error-image4").style.display = "block";
    }
    
})