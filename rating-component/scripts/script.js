const modalRating = document.querySelector(".modal_rating");
const modalThankYou = document.querySelector(".modal_thankyou");
const btnGroup = document.querySelectorAll(".btn-rating");
const btnSubmit = document.querySelector(".btn-submit");
const rateInfo = document.querySelector(".rate-counter");
let rate = null;

for (let i = 0; i < btnGroup.length; i++) {
    btnGroup[i].addEventListener('click', function (event) {
        rateButton(event);
    });
}

function rateButton(event) {
    if (parseInt(event.target.innerText) !== rate) {
        for (let i = 0; i < btnGroup.length; i++) {
            if (parseInt(btnGroup[i].innerText) === rate) {
                btnGroup[i].classList.remove("btn-rating_active");
            }
        }
        rate = parseInt(event.target.innerText);
        event.target.classList.add("btn-rating_active");
        btnSubmit.removeAttribute('disabled');
    }
}

btnSubmit.addEventListener('click', function (event) {
    validate(rate);
});

function validate(rate) {
    if (typeof rate !== "number") {
        return;
    } else {
        printModal();
    }
}
function printModal() {
    modalRating.classList.remove("show");
    modalThankYou.classList.add("show");
    rateInfo.innerText = rate;
}