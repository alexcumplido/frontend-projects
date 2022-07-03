## FAQ Accordion component
- [Github Pages live](https://alexcumplido.github.io/frontend-mentor/faq-accordion/) | [Frontend Mentor solution](https://www.frontendmentor.io/solutions/js-accordion-component-U8k7rbRFtj)

### Table of contents
- [User flow](#user-flow)
- [Screenshot](#screenshot)
- [Run project](#run-project)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
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

#### What I learned
Not sure if these two functions follow real SOLID principles, but I tried to concrete as much as possible the showing and hiding of accordion items. Both receive as parameters the position in the NodeList of the clicked item, wich match with the position of the other elements in their corresponding NodeList as well.

```js
function displayItem(i) {
    accordionTitles[i].classList.add("title-active");
    accordionText[i].classList.add("accordion-text-show");
}

function hideItem(i) {
    accordionTitles[i].classList.remove("title-active");
    accordionText[i].classList.remove("accordion-text-show");
}
```

#### Continued development
The bonus for this was a unique CSS solution, even if I did not write much JavaScript for this challenge I would like to try the bonus point, building it only with CSS.