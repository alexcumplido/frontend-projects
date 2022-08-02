const pageViews = document.querySelector('.card__views');
const pageInputRange = document.querySelector('.card__input');
const pageCost = document.querySelector('.card__cost');
const costToggle = document.querySelector('.button__toggle');
let finalPrice = 16;
let flushPrice;

window.addEventListener('DOMContentLoaded', function (event) {
    pageInputRange.value = 100000;
    printViewsAndCost(pageInputRange.value)
})

pageInputRange.addEventListener('change', function (event) {
    let views = event.target.value;
    if (views >= 10000 && views < 50000) finalPrice = 8;
    if (views >= 50000 && views <= 100000) finalPrice = 12;
    if (views >= 100000 && views < 500000) finalPrice = 16;
    if (views >= 500000 && views < 1000000) finalPrice = 24;
    if (views >= 1000000) finalPrice = 36;
    printViewsAndCost(views)
});

function printViewsAndCost(views) {
    pageViews.textContent = `${views} pageviews`;
    pageCost.textContent = `$${finalPrice.toFixed(2)}/month`;
}

costToggle.addEventListener('click', function (event) {
    if (event.target.classList.contains('button__toggle--monthly')) {
        event.target.classList.replace('button__toggle--monthly', 'button__toggle--yearly');
        flushPrice = finalPrice;
        finalPrice = finalPrice - (finalPrice * 0.25);
        pageCost.textContent = `$${finalPrice.toFixed(2)}/month`;
    } else {
        event.target.classList.replace('button__toggle--yearly', 'button__toggle--monthly');
        finalPrice = flushPrice;
        pageCost.textContent = `$${finalPrice.toFixed(2)}/month`;;
    }
});