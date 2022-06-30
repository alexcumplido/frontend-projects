## FAQ Accordion component

### Table of contents

- [User flow](#user-flow)
- [Screenshot](#screenshot)
- [Links](#links)
- [Run project](#run-project)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)

#### User flow
- Hide/Show the answer to a question when the question is clicked
- See hover states for all interactive elements
- View optimal layout for the app depending on their device's screen size

#### Screenshot
![Mobile preview](./design/mobile-design.jpg)

#### Links
- Live Site: [Github Pages](https://alexcumplido.github.io/frontend-mentor/faq-accordion/)
- Solution: [Frontend Mentor solution](https://www.frontendmentor.io/profile/alexcumplido)

#### Run project
```
# Just a local development server
```
#### Built with
- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Mobile-first workflow

#### What I learned

Not sure if these two functions follow real SOLID principles, but I tried to concrete as much as possible the showing and hiding of accordion items. Both receive as parameters the position in the NodeList of the clicked item, wich match with the position of the other elements in their corresponding NodeList as well.

```js
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
```

#### Continued development

Looking forward to replace img tags by svg elements, so can be layout and styled taking advantage of vectorial graphics.

#### Useful resources
- [Background position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position). This really helps in  figurating how to position background-images.


