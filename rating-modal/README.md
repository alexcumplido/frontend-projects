## Rating modal
[Github Pages live](https://alexcumplido.github.io/frontend-mentor/rating-modal/) | [Frontend Mentor solution](https://www.frontendmentor.io/solutions/javascript-interactive-modal-vIDpbcZYq1)

### Table of contents
- [User flow](#user-flow)
- [Screenshot](#screenshot)
- [Run project](#run-project)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)

#### User flow
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating
- See hover states for all interactive elements on the page
- View the optimal layout for the app depending on their device's screen size

#### Screenshot
![First Modal preview](./design/mobile-design.jpg)
![Second modal preview](./design/mobile-thank-you-state.jpg);

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
This [blog-post](https://markheath.net/post/customize-radio-button-css) based on this [Stack over flow question](https://stackoverflow.com/questions/4641752/css-how-to-style-a-selected-radio-buttons-label) was really helpful when styling the label and radio inputs. The main concept works around styling the label and not the input. The key concepts are:

1. Relating label and input via the `for` attribute allow the user click on the `<label>` generating same effect than clicking over the `<input>` itself.

2. Making "disappear" de `<input>`. Do not use display none, that would make the `<input>` invisible to screen readers.

3. Style the label as you wish.

4. Active states for the label can be emulated based on the :pseudo-class selector `<checked>` plus de adjacent sibling selector `+`. Because of the HTML structure we implemented once any input goes as `<checked>` the next sibling element will be the corresponding `<label>`, which can be styled based on input state.

```html
<input type="radio" id="1" name="radio-rate" value="1" />
<label for="1">1</label>
```
```css
fieldset {
    display: flex;
}

input[type="radio"] {
    position: fixed;
    width: 0;
    opacity: 0;
}

label {
    display: inline-block;
    padding: 1rem 1.25rem;
    color: var(--midGrey);
    background-color: var(--midGreyAplha);
}

label:hover {
    color: var(--white);
    background-color: var(--lightGray);
}

input[type="radio"]:checked+label {
    color: var(--white);
    background-color: var(--orange)
}

input[type="radio"]:focus+label {
    outline: 1px solid var(--orange);
}
```

#### Continued development
I would like to apply better accessibility for this component, looking into [MDN Accesibility Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility) as a basis material.