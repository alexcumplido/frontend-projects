const pageViews = document.querySelector('.card__views');
const inputRange = document.getElementById('views');
const pageCost = document.querySelector('.card__price');
const buttonToggle = document.getElementById('btn__toggle');
const cardDiscount = document.querySelector('.card__discount');

function handleSlider() {
    inputRange.style.backgroundSize =
        `${(inputRange.value - inputRange.min) * 100 / (inputRange.max - inputRange.min)}% 100%`
}

function handleViews(views) {
    switch (true) {
        case (views >= 10000 && views < 100000):
            views = `${views.substring(0, 2)}K`;
            break;
        case (views >= 100000 && views < 1000000):
            views = `${views.substring(0, 3)}K`
            break;
        case (views >= 1000000):
            views = `${views.substring(0, 1)}M`
            break;
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
    pageCost.textContent = `$${finalPrice.toFixed(2)}`;
}

function handleToggle(event) {
    if (event.target.ariaPressed === 'false') {
        event.target.ariaPressed = true;
        handlePrice(inputRange.value)
        cardDiscount.textContent = "-25%";
        event.target.classList.replace('btn__toggle--month', 'btn__toggle--year');
    } else if (event.target.ariaPressed === 'true') {
        event.target.ariaPressed = false;
        handlePrice(inputRange.value)
        cardDiscount.textContent = "25%";
        event.target.classList.replace('btn__toggle--year', 'btn__toggle--month');
    }
    pageCost.textContent = `$${finalPrice.toFixed(2)}`;
}

inputRange.addEventListener('input', function (event) {
    handleViews(event.target.value);
    handlePrice(inputRange.value);
});

buttonToggle.addEventListener('click', function (event) {
    handleToggle(event);
});

window.addEventListener('DOMContentLoaded', function () {
    cardDiscount.textContent = "25%";
    finalPrice = 16;
    pageCost.textContent = `${finalPrice.toFixed(2)}`;
    handleViews(inputRange.value);
});