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
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*
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
Not sure if these two functions follow real SOLID principles, but I tried to concrete as much as possible the showing and hiding of accordion items. Both receive as parameters the position in the NodeList of the clicked item, wich match with the position of the other elements in their corresponding NodeList as well.

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
Looking forward to implement live validation on each input. I think could be done adding eventListener 'keyup' on each input and matching input.value against regular expressions.

#### Useful resources
- [RegExp.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test).
- [RegExp global flag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global).
- [Regex learn](https://regexlearn.com/).


