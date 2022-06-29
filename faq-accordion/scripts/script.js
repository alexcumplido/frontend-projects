const accordionItems = document.querySelectorAll('.accordion__item');
const accordionTitles = document.querySelectorAll(".accordion-title");
const accordionText = document.querySelectorAll('.accordion-text');
const arrows = document.querySelectorAll('.arrow');
let currentItem = null;

function displayItem(i) {
    accordionTitles[i].classList.add("title-active");
    accordionText[i].classList.add("accordion-text-show");
    arrows[i].classList.add("arrow-rotate");
}

function hideItem(i) {
    accordionTitles[i].classList.remove("title-active");
    accordionText[i].classList.remove("accordion-text-show");
    arrows[i].classList.remove("arrow-rotate");
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

