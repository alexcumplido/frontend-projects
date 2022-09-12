
const form = document.querySelector('[name="card-form"]');

const cardDetails = document.querySelectorAll('.card__detail');
const formInputs = document.querySelectorAll('.form__input');

const detailNumber = document.getElementById('detail-number');
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
const errorDate = document.getElementById('error-date');
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

const errorText = {
    empty: `Can't be blank`,
    carholderFormat: `Only letters, separate name and fullname`,
    numberFormat: `Wrong format, only 16 numbers`,
    dateFormat: `Invalid date`,
    cvcFormat: `Invalid cvc`
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
        showError(errorCardholder, inputCardholder, errorText.empty);
    } else if (regex.cardholder.test(inputCardholder.value.trim()) === false) {
        showError(errorCardholder, inputCardholder, errorText.carholderFormat);
    } else {
        hideError(errorCardholder, inputCardholder);
        validation = true;
    }
    return validation;
}

function validateNumber() {
    let validation = false;
    if (regex.emptyInput.test(inputNumber.value)) {
        showError(errorNumber, inputNumber, errorText.empty);
    } else if (regex.number.test(inputNumber.value) === false) {
        showError(errorNumber, inputNumber, errorText.numberFormat);
    } else {
        hideError(errorNumber, inputNumber);
        validation = true;
    }
    return validation;
}

function validateMonth() {
    let validation = false;
    if (regex.emptyInput.test(inputMonth.value)) {
        showError(errorDate, inputMonth, errorText.empty);
    } else if (regex.month.test(inputMonth.value) === false) {
        showError(errorDate, inputMonth, errorText.dateFormat);
    } else {
        hideError(errorDate, inputMonth);
        validation = true;
    }
    return validation;
}

function validateYear() {
    let validation = false;
    if (regex.emptyInput.test(inputYear.value)) {
        showError(errorDate, inputYear, errorText.empty);
    } else if (regex.year.test(inputYear.value) === false) {
        showError(errorDate, inputYear, errorText.dateFormat);
    } else {
        hideError(errorDate, inputYear);
        validation = true;
    }
    return validation;
}

function validateCvc() {
    let validation = false;
    if (regex.emptyInput.test(inputCvc.value)) {
        showError(errorCvc, inputCvc, errorText.empty);
    } else if (regex.cvc.test(inputCvc.value) === false) {
        showError(errorCvc, inputCvc, errorText.cvcFormat);
    } else {
        hideError(errorCvc, inputCvc);
        validation = true;
    }
    return validation;
}

function _forEach(list, callback) {
    if (Array.isArray(list)) {
        for (let index = 0; index < list.length; i++) {
            callback(list[index], index, list);
        }
    } else {
        for (let key in list) {
            callback(list[key], key, list);
        }
    }
}

function cleanCardDetails() {
    _forEach(cardDetails, function (element) {
        element.textContent = ''
    });
}

function cleanFormInputs() {
    _forEach(formInputs, function (element) {
        element.value = ''
    });
}

function toggleModal() {

    form.classList.toggle('hidden');
    modal.classList.toggle('hidden');
}

inputCardholder.addEventListener('input', function (event) {
    detailCardholder.textContent = event.target.value;
});

inputNumber.addEventListener('input', function (event) {
    detailNumber.textContent = event.target.value.replace(/(\d{4}(?!\s))/g, "$1 ");
});

inputMonth.addEventListener('input', function (event) {
    detailMonth.textContent = event.target.value;
});

inputYear.addEventListener('input', function (event) {
    detailYear.textContent = event.target.value;
});

inputCvc.addEventListener('input', function (event) {
    detailCvc.textContent = event.target.value;
});

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    let cardHolderTest = validateCardholder();
    let numberTest = validateNumber();
    let monthTest = validateMonth();
    let yearTest = validateYear();
    let cvcTest = validateCvc();

    if (cardHolderTest && numberTest && monthTest && yearTest && cvcTest) {
        toggleModal();
    }
});

modalContinuation.addEventListener('click', function (event) {
    toggleModal();
    cleanCardDetails();
    cleanFormInputs();
});