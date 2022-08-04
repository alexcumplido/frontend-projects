const pageViews = document.querySelector('.card__views');
const inputRange = document.querySelector('.card__input');
const pageCost = document.querySelector('.card__price');
const buttonToggle = document.querySelector('.btn__toggle');
const cardDiscount = document.querySelector('.card__discount');
let finalPrice = 16;
let flushPrice;

function renderInputSlider() {
    inputRange.style.backgroundSize =
        (inputRange.value - inputRange.min) * 100 / (inputRange.max - inputRange.min) + '% 100%';
}

function renderCost() {
    pageCost.textContent = `$${finalPrice.toFixed(2)}`;
}

function renderViews(views) {
    if (views >= 10000 && views < 100000) views = `${views.substring(0, 2)}K`
    if (views >= 100000 && views < 1000000) views = `${views.substring(0, 3)}K`
    if (views >= 1000000) views = `${views.substring(0, 1)}M`
    pageViews.textContent = `${views} pageviews`;
}

window.addEventListener('DOMContentLoaded', function () {
    inputRange.value = 100000;
    cardDiscount.textContent = "25%";
    renderViews(inputRange.value);
    renderCost();
    renderInputSlider();
});

inputRange.addEventListener('input', function (event) {
    let views = event.target.value;
    if (views >= 10000 && views < 50000) finalPrice = 8;
    if (views >= 50000 && views <= 100000) finalPrice = 12;
    if (views >= 100000 && views < 500000) finalPrice = 16;
    if (views >= 500000 && views < 1000000) finalPrice = 24;
    if (views >= 1000000) finalPrice = 36;
    renderViews(event.target.value)
    renderCost();
    renderInputSlider();
});

buttonToggle.addEventListener('click', function (event) {
    if (event.target.ariaPressed === 'false') {
        event.target.ariaPressed = true;
        flushPrice = finalPrice;
        finalPrice = finalPrice - (finalPrice * 0.25);
        cardDiscount.textContent = "-25%";
        event.target.classList.replace('btn__toggle--month', 'btn__toggle--year');
        renderCost();
    } else if (event.target.ariaPressed === 'true') {
        event.target.ariaPressed = false;
        finalPrice = flushPrice;
        cardDiscount.textContent = "25%";
        event.target.classList.replace('btn__toggle--year', 'btn__toggle--month');
        renderCost();
    }
});