## Rating modal

### Table of contents
- [Overview](#overview)
    - [User flow](#user-flow)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [Development process](#development-process)
    - [Run project](#run-project)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)

### Overview

#### User flow
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating
- See hover states for all interactive elements on the page
- View the optimal layout for the app depending on their device's screen size

#### Screenshot
![First Modal preview](./design/mobile-design.jpg)
![Second modal preview](./design/mobile-thank-you-state.jpg);

#### Links
- Live Site: [Github Pages](https://alexcumplido.github.io/frontend-mentor/rating-modal/)
- Solution: [Frontend Mentor solution](https://www.frontendmentor.io/profile/alexcumplido)

### Development process

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

This projects comes really handy since it has been a few month without coding any JS at all.
It works pretty well to refresh DOM manipulation and basic iterations.

#### Continued development
I tried to keep functions as concrete as possible. But I believe this one is still doing many things. 

```js
function changeStateButton(event) {
    let newRate = parseInt(event.target.innerText);
    if (newRate !== currentRate) {
        if (currentRate) {
            //Subtract 1 to currentRate and match the position of current btn in nodeList.
            rateButtons[currentRate - 1].classList.remove("btn-rating_active");
        }
        currentRate = newRate;
        event.target.classList.add("btn-rating_active");
        submitButton.removeAttribute('disabled');
    }
}
```
Receive an event (the button clicked), extracting its value, compare if the value is different from the current one (if user clicked different buttons), from now JS checks if there is a current Rate and if there is locate the corresponding button in the nodelist so active sates can be removed and new active styles can be added to the new button clicked.

#### Useful resources
- [Wes Boss DOM: Module 4](https://wesbos.com/javascript/04-the-dom/introduction-to-the-dom/). I used Wes Bos documentation ad a first approach to DOM again. Then I went towards the classic MDN docs.




