## Form sign-up component

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
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. 
  - The email address is not formatted correctly.
- View the optimal layout for the site depending on their device's screen size

#### Screenshot
![Mobile preview](./design/mobile-design.jpg);

#### Links
- [Github Pages live](https://alexcumplido.github.io/frontend-mentor/form-validation/)
- [Frontend Mentor solution](https://www.frontendmentor.io/profile/alexcumplido)

#### Run project
```
# Just a local development server
```

#### Built with
- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Regular Expressions
- Mobile-first workflow

#### What I learned


```js
const regexFirstName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;

function validateFirstName() {
    let validate = false;
    if (userFirstName.value === "") {
        errorFirstName.textContent = 'Name can not be empty.';
        errorFirstName.classList.add('active');
        userFirstName.classList.add('input-error');
    } else if (regexFirstName.test(userFirstName.value) === false) {
        errorFirstName.textContent = 'Can not containt numeric or special values.';
        errorFirstName.classList.add('active');
        userFirstName.classList.add('input-error');
    } else {
        validate = true;
        errorFirstName.textContent = '';
        errorFirstName.classList.remove('active');
        userFirstName.classList.remove('input-error');
    }
    return validate;
}
```

#### Continued development
Looking forward to implement live validation on each input. I think could be done adding an eventListener 'keyup' on each input and comparing then the input.value against a regular expressions. I think that RegEx are at first complex to understand but very powerfull once you get confortable using them, I would like to spend some time understand this tool, the resources bellow will serve as a base study material.

#### Useful resources
- [RegExp from MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Regex learn](https://regexlearn.com/).