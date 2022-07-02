const form = document.querySelector("form");
const radioGroup = document.querySelectorAll("input[type='radio']");;
const submitButton = document.querySelector(".btn-submit");
const firstModal = document.querySelector(".first_modal");
const secondModal = document.querySelector(".second_modal");
const rateInfo = document.querySelector(".rate-info");
let currentRate = null;

function getRateFromRadio() {
    for (let i = 0; i < radioGroup.length; i++) {
        if (radioGroup[i].checked == true) {
            currentRate = parseInt(radioGroup[i].value);
        }
    }
}

function validate(currentRate) {
    if (typeof currentRate !== "number") {
        return;
    } else {
        showSecondModal();
    }
}

function showSecondModal() {
    firstModal.classList.remove("show");
    secondModal.classList.add("show");
    rateInfo.innerText = currentRate;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    getRateFromRadio();
    validate(currentRate);
})