const firstModal = document.querySelector(".first_modal");
const secondModal = document.querySelector(".second_modal");
const rateButtons = document.querySelectorAll(".btn-rating");
const submitButton = document.querySelector(".btn-submit");
const rateInfo = document.querySelector(".rate-counter");
let rate = null;

for (let i = 0; i < rateButtons.length; i++) {
    rateButtons[i].addEventListener('click', function (event) {
        rateButton(event);
    });
}

function rateButton(event) {
    if (parseInt(event.target.innerText) !== rate) {
        for (let i = 0; i < rateButtons.length; i++) {
            if (parseInt(rateButtons[i].innerText) === rate) {
                rateButtons[i].classList.remove("btn-rating_active");
            }
        }
        rate = parseInt(event.target.innerText);
        event.target.classList.add("btn-rating_active");
        submitButton.removeAttribute('disabled');
    }
}

submitButton.addEventListener('click', function () {
    validate(rate);
});

function validate(rate) {
    if (typeof rate !== "number") {
        return;
    } else {
        showSecondModal();
    }
}
function showSecondModal() {
    firstModal.classList.remove("show");
    secondModal.classList.add("show");
    rateInfo.innerText = rate;
}