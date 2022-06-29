const regexFirstName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
const regexLastName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;

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
    let validate = false;
    if (userFirstName.value === "") {
        errorFirstName.textContent = 'Name can not be empty.';
        errorFirstName.classList.add('active');
        userFirstName.classList.add('input-error');
    } else if (regexFirstName.test(userFirstName.value) === false) {
        errorFirstName.textContent = 'Can not containt numeric or special values.';
        errorFirstName.classList.add('active');
        userFirstName.classList.add('input-error');
    } else {
        validate = true;
        errorFirstName.textContent = '';
        errorFirstName.classList.remove('active');
        userFirstName.classList.remove('input-error');
    }
    return validate;
}

function validateLastName() {
    let validate = false;
    if (userLastName.value === "") {
        errorLastName.textContent = 'Last Name can not be empty.';
        errorLastName.classList.add('active');
        userLastName.classList.add('input-error');
    } else if (regexLastName.test(userLastName.value) === false) {
        regexLastNameValue = regexFirstName.test(userFirstName.value) === false
        errorLastName.textContent = 'Can not containt numeric or special values.';
        errorLastName.classList.add('active');
        userLastName.classList.add('input-error');
    } else {
        validate = true;
        errorLastName.textContent = '';
        errorLastName.classList.remove('active');
        userLastName.classList.remove('input-error');
    }
    return validate;
}

function validateEmail() {
    let validate = false;
    if (userEmail.value === "") {
        errorEmail.textContent = 'Email can not be empty.';
        errorEmail.classList.add('active');
        userEmail.classList.add('input-error');
    } else if (regexEmail.test(userEmail.value) === false) {
        errorEmail.textContent = 'Looks like this is not an email.';
        errorEmail.classList.add('active');
        userEmail.classList.add('input-error');
    } else {
        validate = true;
        errorEmail.textContent = '';
        errorEmail.classList.remove('active');
        userEmail.classList.remove('input-error');
    }
    return validate;
}

function validatePassword() {
    let validate = false;
    if (userPassword.value === "") {
        errorPassword.textContent = 'Password can not be empty.';
        errorPassword.classList.add('active');
        userPassword.classList.add('input-error')
    } else if (regexPass.test(userPassword.value) === false) {
        errorPassword.textContent = 'At least 8 characters long, must include one letter and one number.';
        errorPassword.classList.add('active');
        userPassword.classList.add('input-error')
    } else {
        validate = true;
        errorPassword.textContent = '';
        errorPassword.classList.remove('active');
        userPassword.classList.remove('input-error')
    }
    return validate;
}