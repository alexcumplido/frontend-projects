const form = document.querySelector('[name="form-calculator"]');
const inputBill = document.getElementById('input-bill');
const errorBill = document.getElementById('error-bill');
const radioTipButtons = document.querySelectorAll('.form-radio');
const inputCustomTip = document.getElementById('input-tip');
const inputNumPeople = document.getElementById('input-people');
const errorNumPeople = document.getElementById('error-people');
const btnReset = document.getElementById('reset-calculations');
const printedBill = document.getElementById('printer-bill');
const printedTip = document.getElementById('printer-tip');

let buttonCurrentTip;
let tipPercentage = 0;

function updatePrice() {
    let totalCostPerson;
    let totalTipPerson;
    if (Number(inputNumPeople.value) > 0 && Number(inputBill.value)) {
        let totalBill = parseFloat(inputBill.value);
        let totalTip = (totalBill * (tipPercentage || 0)) / 100;
        let totalPeople = Number(inputNumPeople.value)
        let totalCost = totalBill + totalTip;
        totalCostPerson = (totalCost / totalPeople).toFixed(2);
        totalTipPerson = (totalTip / totalPeople).toFixed(2);
    }
    printPrice(totalCostPerson, totalTipPerson);
    handleDisableReset();
}

function printPrice(billEachPerson = 0, tipEachPerson = 0) {
    printedBill.textContent = `$${billEachPerson}`;
    printedTip.textContent = `$${tipEachPerson}`;
}

function handleDisableReset() {
    if (Number(inputNumPeople.value) > 0 && Number(inputBill.value)) {
        btnReset.removeAttribute('disabled');
    } else {
        btnReset.setAttribute('disabled', 'true');
    }
}

function testBill() {
    return Number(inputBill.value >= 100000);
}

function testPeople() {
    return Number(inputNumPeople.value == false);
}

function handleError(inputEl, errorEl, callback) {
    if (callback()) {
        inputEl.classList.add('input-error');
        errorEl.classList.replace('visually-hidden', 'error');
    } else {
        inputEl.classList.remove('input-error');
        errorEl.classList.replace('error', 'visually-hidden');
    }
}

function reset() {
    inputBill.value = "";
    checkRadioTip();
    tipPercentage = 0;
    inputCustomTip.value = "";
    inputNumPeople.value = "";
    printedBill.textContent = `$${0}`;
    printedTip.textContent = `$${0}`;
}

function checkRadioTip() {
    if (buttonCurrentTip) {
        buttonCurrentTip.checked = false;
        buttonCurrentTip = undefined;
    }
}

inputBill.addEventListener('input', function () {
    updatePrice();
    handleError(inputBill, errorBill, testBill);
});

radioTipButtons.forEach(function (element, index, list) {
    element.addEventListener('click', function (event) {
        if (inputCustomTip.value) inputCustomTip.value = "";
        buttonCurrentTip = event.target;
        tipPercentage = parseInt(event.target.value);
        updatePrice();
    });
});
 
inputCustomTip.addEventListener('input', function (event) {
    tipPercentage = parseInt(event.target.value);
    checkRadioTip();
    updatePrice();
});

inputNumPeople.addEventListener('input', function () {
    updatePrice();
    handleError(inputNumPeople, errorNumPeople, testPeople);
});

btnReset.addEventListener('click', function () {
    reset();
    handleDisableReset();
});

window.addEventListener('DOMContentLoaded', updatePrice);