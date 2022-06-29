const regexFirstName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
const regexLastName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const form = document.querySelector('.form');

const userFirstName = document.getElementById('firstName');
const userLastName = document.getElementById('lastName');
const userEmail = document.getElementById('emailAdress');
const userPassword = document.getElementById('password');

const errorFirstName = document.querySelector('.errorFirstName');
const errorLastName = document.querySelector('.errorLastName');
const errorEmail = document.querySelector('.errorEmail');
const errorPassword = document.querySelector('.errorPassword');
// regexPass 8 characters, at least 1 letter and 1 number:

form.addEventListener('submit', function (event) {
    if (validateFirstName() === false) event.preventDefault();
    if (validateLastName() === false) event.preventDefault();
    if (validateEmail() === false) event.preventDefault();
    if (validatePassword() === false) event.preventDefault();
});

function validateFirstName() {
    debugger;
    let validate = true;
    if (userFirstName.value === "") {
        validate = false;
        errorFirstName.textContent = 'First Name can not be empty.';
        errorFirstName.classList.add('active');
        userFirstName.classList.add('input-error');
    } else if (regexFirstName.test(userFirstName.value) === false) {
        validate = false;
        errorFirstName.textContent = 'First Name can not containt numeric or special values.';
        errorFirstName.classList.add('active');
        userFirstName.classList.add('input-error');
    } else {
        errorFirstName.textContent = '';
        errorFirstName.classList.remove('active');
        userFirstName.classList.remove('input-error');
    }
    return validate;
}

function validateLastName() {
    let validate = true;
    if (userLastName.value === "") {
        validate = false;
        errorLastName.textContent = 'Last Name can not be empty.';
        errorLastName.classList.add('active');
        userLastName.classList.add('input-error');
    } else if (regexLastName.test(userLastName.value) === false) {
        validate = false;
        errorLastName.textContent = 'Last Name can not containt numeric or special values.';
        errorLastName.classList.add('active');
        userLastName.classList.add('input-error');
    } else {
        errorLastName.textContent = '';
        errorLastName.classList.remove('active');
        userLastName.classList.remove('input-error');
    }
    return validate;
}

function validateEmail() {
    let validate = true;
    if (userEmail.value === "") {
        validate = false;
        errorEmail.textContent = 'Email can not be empty.';
        errorEmail.classList.add('active');
        userEmail.classList.add('input-error');
    } else if (regexEmail.test(userEmail.value) === false) {
        validate = false;
        errorEmail.textContent = 'Email need to be a valid email.';
        errorEmail.classList.add('active');
        userEmail.classList.add('input-error');
    } else {
        errorEmail.textContent = '';
        errorEmail.classList.remove('active');
        userEmail.classList.remove('input-error');
    }
    return validate;
}

function validatePassword() {
    let validate = true;
    if (userPassword.value === "") {
        validate = false;
        errorPassword.textContent = 'Password can not be empty.';
        errorPassword.classList.add('active');
        userPassword.classList.add('input-error')
    } else if (regexPass.test(userPassword.value) === false) {
        validate = false;
        errorPassword.textContent = 'Password neet to be at least 8 characters long, and include one letter and one number.';
        errorPassword.classList.add('active');
        userPassword.classList.add('input-error')
    } else {
        errorPassword.textContent = '';
        errorPassword.classList.remove('active');
        userPassword.classList.remove('input-error')
    }
    return validate;
}