const inputBill = document.getElementById('input-bill');
const radioTipButtons = document.querySelectorAll('.radio-tip');
const inputCustomTip = document.getElementById('input-custom-tip');
const inputNumPeople = document.getElementById('input-num-people');
const btnReset = document.getElementById('reset-calculations');
const printerBill = document.getElementById('printer-bill');
const printerTip = document.getElementById('printer-tip');
let buttonCurrentTip;
let tipPercentage = 0;

function updatePrice() {
    if (Number(inputNumPeople.value) > 0) {
        let price = parseFloat(inputBill.value);
        let tip = (price * tipPercentage) / 100;
        let people = Number(inputNumPeople.value)
        let priceBill = price + tip;
        let billEachPerson = (priceBill / people).toFixed(2);
        let tipEachPerson = (tip / people).toFixed(2);
        printCalcualtion(billEachPerson, tipEachPerson);
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

function reset() {
    inputBill.value = "";
    if (buttonCurrentTip) {
        buttonCurrentTip.checked = false;
        buttonCurrentTip = undefined;
    }
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
    if (buttonCurrentTip) {
        buttonCurrentTip.checked = false;
        buttonCurrentTip = undefined;
    }
    tipPercentage = parseInt(event.target.value);
    updatePrice();
});

inputNumPeople.addEventListener('input', updatePrice);
btnReset.addEventListener('click', reset);

window.addEventListener('DOMContentLoaded', function () {
    printCalcualtion(0, 0);
});