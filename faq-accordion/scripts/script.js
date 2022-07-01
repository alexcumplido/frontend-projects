const accordionItems = document.querySelectorAll('.accordion__item');
const accordionTitles = document.querySelectorAll(".accordion-title");
const accordionText = document.querySelectorAll('.accordion-text');
let currentItem = null;

function displayItem(i) {
    accordionTitles[i].classList.add("accordion-title-active");
    accordionText[i].classList.add("accordion-text-show");
}

function hideItem(i) {
    accordionTitles[i].classList.remove("accordion-title-active");
    accordionText[i].classList.remove("accordion-text-show");
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

