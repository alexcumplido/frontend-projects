const pageViews = document.querySelector('.card__views');
const inputRange = document.querySelector('.card__input');
const pageCost = document.querySelector('.card__price');
const buttonToggle = document.querySelector('.btn__toggle');
const cardDiscount = document.querySelector('.card__discount');
let finalPrice;
let flushPrice;

function handleUpdateSlider() {
    inputRange.style.backgroundSize =
        `${(inputRange.value - inputRange.min) * 100 / (inputRange.max - inputRange.min)}% 100%`
}
function handleUpdateViews(views) {
    if (views >= 10000 && views < 100000) views = `${views.substring(0, 2)}K`;
    if (views >= 100000 && views < 1000000) views = `${views.substring(0, 3)}K`;
    if (views >= 1000000) views = `${views.substring(0, 1)}M`;
    pageViews.textContent = `${views} pageviews`;
    handleUpdateSlider();
}

function handleUpdatePrice(views) {
    if (views >= 10000 && views < 50000) finalPrice = 8;
    if (views >= 50000 && views < 100000) finalPrice = 12;
    if (views >= 100000 && views < 500000) finalPrice = 16;
    if (views >= 500000 && views < 1000000) finalPrice = 24;
    if (views >= 1000000) finalPrice = 36;
    pageCost.textContent = `$${finalPrice.toFixed(2)}`;
}

function handleUpdatePlan(event) {
    if (event.target.ariaPressed === 'false') {
        event.target.ariaPressed = true;
        flushPrice = finalPrice;
        finalPrice = finalPrice - (finalPrice * 0.25);
        cardDiscount.textContent = "-25%";
        event.target.classList.replace('btn__toggle--month', 'btn__toggle--year');
    } else if (event.target.ariaPressed === 'true') {
        event.target.ariaPressed = false;
        finalPrice = flushPrice;
        cardDiscount.textContent = "25%";
        event.target.classList.replace('btn__toggle--year', 'btn__toggle--month');
    }
    pageCost.textContent = `$${finalPrice.toFixed(2)}`;
}

window.addEventListener('DOMContentLoaded', function () {
    cardDiscount.textContent = "25%";
    finalPrice = 16;
    pageCost.textContent = `${finalPrice.toFixed(2)}`;
    handleUpdateViews(inputRange.value);
});

inputRange.addEventListener('input', function (event) {
    handleUpdateViews(event.target.value);
    handleUpdatePrice(event.target.value);
});

buttonToggle.addEventListener('click', function (event) {
    handleUpdatePlan(event);
});