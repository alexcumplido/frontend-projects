
const form = document.querySelector('[name="form-calculator"]');
const inputBill = document.getElementById('input-bill');
const radioTipButtons = document.querySelectorAll('.form-radio');
const inputCustomTip = document.getElementById('input-tip');
const inputNumPeople = document.getElementById('input-people');
const errorNumPeople = document.getElementById('error-people');
const btnReset = document.getElementById('reset-calculations');
const printerBill = document.getElementById('printer-bill');
const printerTip = document.getElementById('printer-tip');

let buttonCurrentTip;
let tipPercentage = 0;

function updatePrice() {
    if (Number(inputNumPeople.value) > 0) {
        let totalBill = parseFloat(inputBill.value);
        let totalTip = (totalBill * tipPercentage) / 100;
        let totalPeople = Number(inputNumPeople.value)
        let totalCost = totalBill + totalTip;
        let totalCostPerson = (totalCost / totalPeople).toFixed(2);
        let totalTipPerson = (totalTip / totalPeople).toFixed(2);
        printCalcualtion(totalCostPerson, totalTipPerson);
        handleDisabledReset();
    } else {
        handleDisabledReset();
        printCalcualtion(0, 0);
    }
}

function handleDisabledReset() {
    if (Number(inputNumPeople.value) > 0) {
        btnReset.removeAttribute('disabled');
    } else {
        btnReset.setAttribute('disabled', 'true');
    }
}

function handleErrorPeople() {
    if (Number(inputNumPeople.value == false)) {
        errorNumPeople.classList.replace('visually-hidden', 'error-people');
        inputNumPeople.classList.add('input-people--error');
    } else {
        errorNumPeople.classList.replace('error-people', 'visually-hidden');
        inputNumPeople.classList.remove('input-people--error');
    }
}

function printCalcualtion(billEachPerson, tipEachPerson) {
    if (billEachPerson == 'NaN' || tipEachPerson == 'NaN') {
        billEachPerson = 0;
        tipEachPerson = 0;
    }
    printerBill.textContent = `$${billEachPerson}`;
    printerTip.textContent = `$${tipEachPerson}`;
}

function checkRadioTip() {
    if (buttonCurrentTip) {
        buttonCurrentTip.checked = false;
        buttonCurrentTip = undefined;
    }
}

function reset() {
    inputBill.value = "";
    checkRadioTip();
    tipPercentage = 0;
    inputCustomTip.value = "";
    inputNumPeople.value = "";
    printerBill.textContent = `$${0}`;
    printerTip.textContent = `$${0}`;
    handleDisabledReset();
}

inputBill.addEventListener('input', updatePrice);

radioTipButtons.forEach(function (element, index, list) {
    element.addEventListener('click', function (event) {
        if (inputCustomTip.value) inputCustomTip.value = "";
        buttonCurrentTip = event.target;
        tipPercentage = parseInt(event.target.value);
        updatePrice();
    });
});

inputCustomTip.addEventListener('input', function (event) {
    checkRadioTip();
    tipPercentage = parseInt(event.target.value);
    updatePrice();
});

inputNumPeople.addEventListener('input', function () {
    handleErrorPeople()
    updatePrice();
});

btnReset.addEventListener('click', reset);

window.addEventListener('DOMContentLoaded', function () {
    printCalcualtion(0, 0);
});
