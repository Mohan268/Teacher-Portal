const fullName = document.querySelector('#signup-fullname');
const email = document.querySelector('#signup-email');
const password = document.querySelector('#signup-password');
const confirmPassword = document.querySelector('#signup-confirmPassword');
const signupBtn = document.querySelector('#signup-btn');

const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');
const loginBtn = document.querySelector('#login-btn');


function login(){
    if(loginEmail.value === localStorage.getItem('email') && loginPassword.value === localStorage.getItem('password')){
     window.open('index3.html');
    }

}



function signup(){
localStorage.setItem('name', JSON.stringify(fullName.value))
localStorage.setItem('email', JSON.stringify(email.value))
localStorage.setItem('password', JSON.stringify(password.value))
localStorage.setItem('confirm-password', JSON.stringify(confirmPassword.value))

if(localStorage.getItem('password') === localStorage.getItem('confirm-password') ){
  window.open('index2.html');
}
else{
    document.querySelector('#password-check').textContent = "Password should be match"
}
   console.log(fullName.value);
}




signupBtn.addEventListener('click', signup);

loginBtn.addEventListener('click', login);

