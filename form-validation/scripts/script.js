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

function showErrorFor(input, error, message) {
    input.classList.add('input-error');
    error.classList.add('active');
    error.textContent = `${message}`;
}

function removeErrorFor(input, error) {
    input.classList.remove('input-error');
    error.classList.remove('active');
    error.textContent = '';
}

function showSuccessFor(input) {
    input.classList.add('input-success');
}

function validateFirstName() {
    let validate = false;
    if (userFirstName.value === "") {
        showErrorFor(userFirstName, errorFirstName, 'Name can not be empty.');
    } else if (regexFirstName.test(userFirstName.value) === false) {
        showErrorFor(userFirstName, errorFirstName, 'Can not containt numeric or special values.');
    } else {
        removeErrorFor(userFirstName, errorFirstName);
        showSuccessFor(userFirstName);
        validate = true;
    }
    return validate;
}

function validateLastName() {
    let validate = false;
    if (userLastName.value === "") {
        showErrorFor(userLastName, errorLastName, 'Last Name can not be empty.');
    } else if (regexLastName.test(userLastName.value) === false) {
        showErrorFor(userLastName, errorLastName, 'Can not containt numeric or special values.');
    } else {
        validate = true;
        removeErrorFor(userLastName, errorLastName);
        showSuccessFor(userLastName);
    }
    return validate;
}

function validateEmail() {
    let validate = false;
    if (userEmail.value === "") {
        showErrorFor(userEmail, errorEmail, 'Email can not be empty.');
    } else if (regexEmail.test(userEmail.value) === false) {
        showErrorFor(userEmail, errorEmail, 'Looks like this is not an email.');
    } else {
        validate = true;
        removeErrorFor(userEmail, errorEmail);
        showSuccessFor(userEmail);
    }
    return validate;
}

function validatePassword() {
    let validate = false;
    if (userPassword.value === "") {
        showErrorFor(userPassword, errorPassword, 'Password can not be empty.');
    } else if (regexPass.test(userPassword.value) === false) {
        showErrorFor(userPassword, errorPassword, '8 characters long with one letter and one number.');
    } else {
        validate = true;
        removeErrorFor(userPassword, errorPassword);
        showSuccessFor(userPassword);
    }
    return validate;
}

form.addEventListener('submit', function (event) {
    if (validateFirstName() === false) event.preventDefault();
    if (validateLastName() === false) event.preventDefault();
    if (validateEmail() === false) event.preventDefault();
    if (validatePassword() === false) event.preventDefault();
});