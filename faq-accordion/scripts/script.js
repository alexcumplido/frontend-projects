const accordionItems = document.querySelectorAll('.accordion__item');
let currentItem = null;

for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener(('click'), function () {
        if (currentItem === null) {
            accordionItems[i].classList.add('accordion__item--active');
            currentItem = i;
        } else if (currentItem === i) {
            accordionItems[i].classList.remove('accordion__item--active');
            currentItem = null;
        } else {
            accordionItems[currentItem].classList.remove('accordion__item--active');
            accordionItems[i].classList.add('accordion__item--active');
            currentItem = i;
        }
    });
}