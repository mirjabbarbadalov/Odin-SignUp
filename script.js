function checkPassword(){

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submitButton=document.getElementById("submit-button");

var passwordValue = password.value;
var confirmPasswordValue = confirmPassword.value;

console.log(passwordValue);
    if (passwordValue === confirmPasswordValue) {
        
        password.classList.remove("normal")
        password.classList.add("good")
        confirmPassword.classList.remove("normal")
        confirmPassword.classList.add("good")
      } else {
        password.classList.remove("normal")
        password.classList.add("error")
        confirmPassword.classList.remove("normal")
        confirmPassword.classList.add("error")
      }
}