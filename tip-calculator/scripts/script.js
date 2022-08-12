const inputBill = document.getElementById('input-bill');
const radioTipButtons = document.querySelectorAll('.form-radio');
const inputCustomTip = document.getElementById('input-custom-tip');
const inputNumPeople = document.getElementById('input-num-people');
const btnReset = document.getElementById('reset-calculations');
const printerBill = document.getElementById('printer-bill');
const printerTip = document.getElementById('printer-tip');
const form = document.getElementById('form');
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
    } else {
        printCalcualtion(0, 0);
        printErrorPeople();
    }
}

function printErrorPeople() {
    if (Number(inputNumPeople.value == false)) console.log('Not enough people')
}

function printCalcualtion(billEachPerson, tipEachPerson) {
    printerBill.textContent = `$${billEachPerson}`;
    printerTip.textContent = `$${tipEachPerson} `;
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
    printerBill.textContent = "";
    printerTip.textContent = "";
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

inputNumPeople.addEventListener('input', updatePrice);

btnReset.addEventListener('click', reset);

window.addEventListener('DOMContentLoaded', function () {
    printCalcualtion(0, 0);
});
