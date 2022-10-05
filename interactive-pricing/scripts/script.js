const pageViews = document.querySelector('.card__views');
const inputRange = document.getElementById('views');
const pageCost = document.querySelector('.card__price');
const buttonToggle = document.getElementById('btn__toggle');
const cardDiscount = document.querySelector('.card__discount');

function handleSlider() {
    inputRange.style.backgroundSize =
        `${(inputRange.value - inputRange.min) * 100 / (inputRange.max - inputRange.min)}% 100%`
}

function printPrice(price) {
    pageCost.textContent = `$${price.toFixed(2)}`;
}

function handleViews(views) {
    if (views >= 10000 && views < 100000) {
        views = `${views.substring(0, 2)}K`;
    } else if (views >= 100000 && views < 1000000) {
        views = `${views.substring(0, 3)}K`
    } else if (views >= 1000000) {
        views = `${views.substring(0, 1)}M`
    }
    pageViews.textContent = `${views} pageviews`;
    handleSlider();
}

function handlePrice(views) {
    if (views >= 10000 && views < 50000) finalPrice = 8;
    if (views >= 50000 && views < 100000) finalPrice = 12;
    if (views >= 100000 && views < 500000) finalPrice = 16;
    if (views >= 500000 && views < 1000000) finalPrice = 24;
    if (views >= 1000000) finalPrice = 36;
    if (buttonToggle.ariaPressed === 'true') {
        finalPrice = finalPrice - (finalPrice * 0.25);
    }
    printPrice(finalPrice);
}

function handleToggle() {
    if (buttonToggle.ariaPressed === 'false') {
        buttonToggle.ariaPressed = true;
        handlePrice(inputRange.value)
        cardDiscount.textContent = "-25%";
        buttonToggle.classList.replace('btn__toggle--month', 'btn__toggle--year');
    } else if (buttonToggle.ariaPressed === 'true') {
        buttonToggle.ariaPressed = false;
        handlePrice(inputRange.value)
        cardDiscount.textContent = "25%";
        buttonToggle.classList.replace('btn__toggle--year', 'btn__toggle--month');
    }
    printPrice(finalPrice);
}

inputRange.addEventListener('input', function (event) {
    handleViews(event.target.value);
    handlePrice(event.target.value);
});

buttonToggle.addEventListener('click', function () {
    handleToggle();
});

window.addEventListener('DOMContentLoaded', function () {
    cardDiscount.textContent = '25%';
    handlePrice(inputRange.value);
    handleViews(inputRange.value);
});