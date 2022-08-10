const inputBill = document.getElementById('input-bill');
const radioTipButtons = document.querySelectorAll('.radio-tip');
const inputCustomTip = document.getElementById('input-custom-tip');
const inputNumPeople = document.getElementById('input-num-people');
const btnReset = document.getElementById('reset-calculations');
const printerBill = document.getElementById('printer-bill');
const printerTip = document.getElementById('printer-tip');

let currentPriceBill = 0
let currentTipPercentage = 0;

inputBill.addEventListener('input', function (event) {
    currentPriceBill = parseFloat(event.target.value);
    updatePrice();
});

radioTipButtons.forEach(function (element, index, list) {
    element.addEventListener('click', function (event) {
        currentTipPercentage = parseInt(event.target.value);
        updatePrice();
    });
})

function updatePrice() {
    currentPriceBill = currentPriceBill + ((currentPriceBill * currentTipPercentage) / 100);
    printerBill.textContent = currentPriceBill;
}