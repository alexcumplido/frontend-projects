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
const errorMonth = document.getElementById('error-month');
const errorYear = document.getElementById('error-year');
const errorCvc = document.getElementById('error-cvc');


inputNumber.addEventListener('input', function (event) {
    detailNumber.textContent = event.target.value;
});

inputCardholder.addEventListener('input', function (event) {
    detailCardholder.textContent = event.target.value;
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