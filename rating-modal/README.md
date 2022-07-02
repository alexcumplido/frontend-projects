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
This [blog-post](https://markheath.net/post/customize-radio-button-css) based on this [Stack over flow question](https://stackoverflow.com/questions/4641752/css-how-to-style-a-selected-radio-buttons-label) was really helpful when styling the radio inputs. I took the concepts from both readings and applied a solution I believe is even more simple. The concept is making "disapper" the input and styling just the label, since the space of the label is related with each input.
1. I used the `<label>` tg as wrapper for the `<input>`. 
2. The text number is aligned via flex inside the label.
3. Apply width of 0 to the input                

The only caveat is tat the :active CSS pseudo-class is just gonna runs while the user clicks over the label. 

```html
<label>
    1
    <input type="radio"id="1" name="radio-rate" value="1" />
</label>
```
```css
label {
    padding: 1rem 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    font-weight: 700;
    color: var(--midGrey);
    background-color: var(--midGreyAplha);
}

label input[type="radio"] {
    width: 0;
}

label:hover {
    ...
}

label:active {
    ...
}
```

#### Continued development
Honestly I would be adding 