const accordionItems = document.querySelectorAll('.accordion__item');
const accordionTitles = document.querySelectorAll(".accordion-title");
const accordionText = document.querySelectorAll('.accordion-text');
const arrows = document.querySelectorAll('.arrow');
let currentActive = null;

function displayItem(i) {
    accordionTitles[i].classList.add("title-active");
    accordionText[i].classList.add("show");
    arrows[i].classList.add("arrow-rotate");
}

function hideItem(currentActive) {
    accordionTitles[currentActive].classList.remove("title-active");
    accordionText[currentActive].classList.remove("show");
    arrows[currentActive].classList.remove("arrow-rotate");
}

for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener(('click'), function () {
        if (currentActive === null) {
            displayItem(i);
            currentActive = i;
        } else if (currentActive === i) {
            hideItem(currentActive);
            currentActive = null;
        } else {
            hideItem(currentActive);
            displayItem(i);
            currentActive = i;
        }
    });
}

