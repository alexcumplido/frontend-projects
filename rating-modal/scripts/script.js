const firstModal = document.querySelector(".first_modal");
const secondModal = document.querySelector(".second_modal");
const rateButtons = document.querySelectorAll(".btn-rating");
const submitButton = document.querySelector(".btn-submit");
const rateInfo = document.querySelector(".rate-info");
let currentRate = null;

function changeStateButton(event) {
    let newRate = parseInt(event.target.innerText);
    if (newRate !== currentRate) {
        if (currentRate) {
            //Subtract 1 to currentRate and match the position of current btn in nodeList.
            rateButtons[currentRate - 1].classList.remove("btn-rating_active");
        }
        currentRate = newRate;
        event.target.classList.add("btn-rating_active");
        submitButton.removeAttribute('disabled');
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

for (let i = 0; i < rateButtons.length; i++) {
    rateButtons[i].addEventListener('click', function (event) {
        changeStateButton(event);
    });
}

submitButton.addEventListener('click', function () {
    validate(currentRate);
});