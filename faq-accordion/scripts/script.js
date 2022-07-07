const accordionItems = document.querySelectorAll('.accordion__item');
let currentItem = null;

function displayItem(i) {
    accordionItems[i].classList.add('accordion_item--active');
}

function hideItem(i) {
    accordionItems[i].classList.remove('accordion_item--active');
}

for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener(('click'), function () {
        if (currentItem === null) {
            displayItem(i);
            currentItem = i;
        } else if (currentItem === i) {
            hideItem(currentItem);
            currentItem = null;
        } else {
            hideItem(currentItem);
            displayItem(i);
            currentItem = i;
        }
    });
}