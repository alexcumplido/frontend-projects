const pageViews = document.querySelector('.card__views');
const pageInputRange = document.querySelector('.card__input');
const pageCost = document.querySelector('.card__cost');
const costToggle = document.querySelector('.button__toggle');
const cardDiscount = document.querySelector('.card__discount');

let finalPrice = 16;
let flushPrice;

function printViewsAndCost(views) {
    if (views >= 10000 && views < 100000) views = `${views.substring(0, 2)}K`
    if (views >= 100000 && views < 1000000) views = `${views.substring(0, 3)}K`
    if (views >= 1000000) views = `${views.substring(0, 1)}M`
    pageViews.textContent = `${views} pageviews`;
    pageCost.textContent = `$${finalPrice.toFixed(2)}`;
    const span = document.createElement('span');
    span.textContent = '/ month';
    pageCost.appendChild(span);
}

window.addEventListener('DOMContentLoaded', function (event) {
    pageInputRange.value = 100000;
    cardDiscount.textContent = "25%";
    printViewsAndCost(pageInputRange.value);

    pageInputRange.style.backgroundSize =
        (pageInputRange.value - pageInputRange.min) * 100 / (pageInputRange.max - pageInputRange.min) + '% 100%';
})

pageInputRange.addEventListener('change', function (event) {
    let views = event.target.value;
    if (views >= 10000 && views < 50000) finalPrice = 8;
    if (views >= 50000 && views <= 100000) finalPrice = 12;
    if (views >= 100000 && views < 500000) finalPrice = 16;
    if (views >= 500000 && views < 1000000) finalPrice = 24;
    if (views >= 1000000) finalPrice = 36;
    printViewsAndCost(event.target.value)
});

costToggle.addEventListener('click', function (event) {
    if (event.target.classList.contains('button__toggle--monthly')) {
        flushPrice = finalPrice;
        finalPrice = finalPrice - (finalPrice * 0.25);
        cardDiscount.textContent = "-25%";
        printViewsAndCost(pageInputRange.value);
        event.target.classList.replace(
            'button__toggle--monthly', 'button__toggle--yearly'
        );
    } else {
        finalPrice = flushPrice;
        printViewsAndCost(pageInputRange.value)
        cardDiscount.textContent = "25%";
        event.target.classList.replace(
            'button__toggle--yearly', 'button__toggle--monthly'
        );
    }
});

pageInputRange.addEventListener('input', function (event) {
    let inputMinValue = event.target.min;
    let inputMaxVale = event.target.max;
    let inputValue = event.target.value;
    event.target.style.backgroundSize =
        (inputValue - inputMinValue) * 100 / (inputMaxVale - inputMinValue) + '% 100%';
});