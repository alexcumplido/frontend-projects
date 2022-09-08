
const form = document.querySelector('[name="card-form"]');

const cardDetails = document.querySelectorAll('.card__detail');
const formInputs = document.querySelectorAll('.form__input');

const detailNumber = document.getElementById('detail-n  umber');
const detailCardholder = document.getElementById('detail-cardholder');
const detailMonth = document.getElementById('detail-month');
const detailYear = document.getElementById('detail-year');
const detailCvc = document.getElementById('detail-cvc');

const inputNumber = document.getElementById('card-number');
const inputCardholder = document.getElementById('card-cardholder');
const inputMonth = document.getElementById('card-month');
const inputYear = document.getElementById('card-year');
const inputCvc = document.getElementById('card-cvc');
const errorNumber = document.getElementById('error-number');
const errorCardholder = document.getElementById('error-cardholder');
const errorMonth = document.getElementById('error-month');
const errorYear = document.getElementById('error-year');
const errorCvc = document.getElementById('error-cvc');

const submitButton = document.getElementById('form-button');

const modal = document.getElementById('modal');
const modalContinuation = document.getElementById('modal-continuation');

const regex = {
    emptyInput: /^$/,
    cardholder: /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/i,
    number: /^[0-9]{16}$/,
    month: /(^[0][1-9]$)|(^[1][0-2]$)/,
    year: /(^[2][2-9]$)/,
    cvc: /^[0-9]{3}$/
}

function addListener(input, cardDetail) {
    input.addEventListener('input', function (event) {
        cardDetail.textContent = event.target.value;
    });
}

function showError(errorEl, inputEl, text) {
    errorEl.textContent = `${text}`;
    errorEl.classList.remove('hidden');
    inputEl.classList.add('form__input--error');
}

function hideError(errorEl, inputEl) {
    errorEl.textContent = ``;
    errorEl.classList.add('hidden');
    inputEl.classList.remove('form__input--error');
}

function validateCardholder() {
    let validation = false;
    if (regex.emptyInput.test(inputCardholder.value.trim())) {
        showError(errorCardholder, inputCardholder, `Can't be blank`);
    } else if (regex.cardholder.test(inputCardholder.value.trim()) === false) {
        showError(errorCardholder, inputCardholder, `Only letters, separate name and fullname`);
    } else {
        hideError(errorCardholder, inputCardholder);
        validation = true;
    }
    return validation;
}

function validateNumber() {
    let validation = false;
    if (regex.emptyInput.test(inputNumber.value)) {
        showError(errorNumber, inputNumber, `Can't be blank`);
    } else if (regex.number.test(inputNumber.value) === false) {
        showError(errorNumber, inputNumber, `Wrong format, only 16 numbers`);
    } else {
        hideError(errorNumber, inputNumber);
        validation = true;
    }
    return validation;
}

function validateMonth() {
    let validation = false;
    if (regex.emptyInput.test(inputMonth.value)) {
        showError(errorMonth, inputMonth, `Can't be blank`);
    } else if (regex.month.test(inputMonth.value) === false) {
        showError(errorMonth, inputMonth, `Invalid date`);
    } else {
        hideError(errorMonth, inputMonth);
        validation = true;
    }
    return validation;
}

function validateYear() {
    let validation = false;
    if (regex.emptyInput.test(inputYear.value)) {
        showError(errorYear, inputYear, `Can't be blank`);
    } else if (regex.year.test(inputYear.value) === false) {
        showError(errorYear, inputYear, `Invalid date`);
    } else {
        hideError(errorYear, inputYear);
        validation = true;
    }
    return validation;
}

function validateCvc() {
    let validation = false;
    if (regex.emptyInput.test(inputCvc.value)) {
        showError(errorCvc, inputCvc, `Can't be blank`);
    } else if (regex.cvc.test(inputCvc.value) === false) {
        showError(errorCvc, inputCvc, `Invalid cvc`);
    } else {
        hideError(errorCvc, inputCvc);
        validation = true;
    }
    return validation;
}

function cleanCardDetails() {
    cardDetails.forEach(function (element) {
        element.textContent = '';
    });
}

function cleanFormInputs() {
    formInputs.forEach(function (element) {
        element.value = '';
    });
}

function toggleModal() {
    form.classList.toggle('hidden');
    modal.classList.toggle('hidden');
}

addListener(inputCardholder, detailCardholder);

inputNumber.addEventListener('input', function (event) {
    let value = event.target.value;

    detailNumber.textContent = value.replace(/(\d{4}(?!\s))/g, "$1 ");
});

addListener(inputMonth, detailMonth);
addListener(inputYear, detailYear);
addListener(inputCvc, detailCvc);

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    let cardHolderTrue, numberTrue, monthTrue, yearTrue, cvcTrue = false;
    if (validateCardholder() === true) cardHolderTrue = true;
    if (validateNumber() === true) numberTrue = true;
    if (validateMonth() === true) monthTrue = true;
    if (validateYear() === true) yearTrue = true;
    if (validateCvc() === true) cvcTrue = true;

    if (cardHolderTrue && numberTrue && monthTrue && yearTrue && cvcTrue) {
        toggleModal();
    }
});

modalContinuation.addEventListener('click', function (event) {
    toggleModal();
    cleanCardDetails();
    cleanFormInputs();
});