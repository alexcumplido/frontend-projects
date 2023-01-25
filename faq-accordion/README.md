## FAQ Accordion component
- [Github Pages live](https://alexcumplido.github.io/frontend-projects/faq-accordion/)

### Table of contents
- [User flow](#user-flow)
- [Screenshot](#screenshot)
- [Run project](#run-project)
- [Built with](#built-with)
- [Thoughts](#thoughts)
- [Continued development](#continued-development)

#### User flow
- Hide/Show the answer to a question when the question is clicked
- See hover states for all interactive elements
- View optimal layout for the app depending on their device's screen size

#### Screenshot
![Mobile preview](./design/mobile-design.jpg)

#### Run project
```
# Just a local development server
```

#### Built with
- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Mobile-first workflow

#### Thoughts
Not sure if there is there are to many statements inside that .addEventListener(), but I tried to concrete as much as possible the showing and hiding of accordion items. BI should refactor it in the near term.

```js
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
```

#### Continued development
The bonus for this was a unique CSS solution, even if I did not write much JavaScript for this challenge I would like to try the bonus point, building it only with CSS.