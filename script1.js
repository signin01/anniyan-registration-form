console.log("Script loaded successfully!");

var RegistrationForm = document.getElementById('Registration1');
var submitbtn = document.getElementById('submitbtn');
var nameinput = document.getElementById('name');
var emailinput = document.getElementById('email');
var passwordinput = document.getElementById('password');

var nameerror = document.getElementById('nameError');
var emailerror = document.getElementById('emailerror');
var passworderror = document.getElementById('passwordError');

RegistrationForm.addEventListener('input', function () {
    console.log("Typing detected...");

    var nameValue = nameinput.value.trim();
    var emailValue = emailinput.value.trim();
    var passwordValue = passwordinput.value.trim();

    var isNameValid = nameValue !== "";
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isEmailValid = emailPattern.test(emailValue);
    var isPasswordValid = passwordValue.length >= 6;

    nameerror.textContent = isNameValid ? "" : " Name is required";
    emailerror.textContent = isEmailValid ? "" : " Enter a valid email";
    passworderror.textContent = isPasswordValid ? "" : " Min 6 characters needed";

    console.log("Validation status:", {isNameValid, isEmailValid, isPasswordValid});

    if (isNameValid && isEmailValid && isPasswordValid) {
        console.log("Conditions met! Enabling button...");
        submitbtn.disabled = false;
        submitbtn.style.opacity = "1";
        submitbtn.style.cursor = "pointer";
    } else {
        submitbtn.disabled = true;
        submitbtn.style.opacity = "0.6";
    }
});

RegistrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Success! Registration for Anniyan.com is complete!");
});