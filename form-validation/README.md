## Form sign-up component
[Github Pages live](https://alexcumplido.github.io/frontend-projects/form-validation/)

### Table of contents
- [User flow](#user-flow)
- [Screenshot](#screenshot)
- [Run project](#run-project)
- [Built with](#built-with)
- [Thoughts](#thoughts)
- [Continued development](#continued-development)

#### User flow
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. 
  - The email address is not formatted correctly.
- View the optimal layout for the site depending on their device's screen size

#### Screenshot
![Mobile preview](./design/mobile-design.jpg);

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

#### Thoughts
Looking forward to implement live validation on each input. I think could be done adding an eventListener 'keyup' on each input and comparing then the input.value against a regular expressions. I think that RegEx are at first complex to understand but very powerfull once you get confortable using them. I would like to spend some time understand this tool, the resources below will serve as a base study material. Here is what I found about topic [RegExp from MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
and [Regex learn](https://regexlearn.com/).

#### Continued development
Need mandatory refactor.
```js
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
After the refactor the function is more concise. There is no explicit DOM manipulation inside each conditional statement, instead I focus that manipulation in three functions called showErrorFor, removeErrorFor and showSuccessFor receiving the corresponding arguments when called.

```js
function validateFirstName() {
    let validate = false;
    if (userFirstName.value === "") {
        showErrorFor(userFirstName, errorFirstName, 'Name can not be empty.');
    } else if (regexFirstName.test(userFirstName.value) === false) {
        showErrorFor(userFirstName, errorFirstName, 'Can not containt numeric or special values.');
    } else {
        removeErrorFor(userFirstName, errorFirstName);
        showSuccessFor(userFirstName);
        validate = true;
    }
    return validate;
}
```