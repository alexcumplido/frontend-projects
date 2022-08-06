const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(function (element, index, list) {
    element.addEventListener(('click'), function (event) {
        if (element.ariaExpanded === 'false') {
            element.setAttribute('aria-expanded', 'true');
        } else if (element.ariaExpanded === 'true') {
            element.setAttribute('aria-expanded', 'false');
        }
    });
})
