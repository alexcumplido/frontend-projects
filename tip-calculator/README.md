
As a `type of user`, I want `some goal` so that `some reason`

PEDAC 
1. Problem  (inputs, output, requirements)
    As a user I want to calculate given a bill and input how much each person need to pay.
    As a User I want to input a bill cost, select a tip percentage and input a number of people
    As a User I want to divide the bill between people 
    As a User I want to divide the total tip between people
    As a User I want to know how much each person needs to pay from the total bill plus the tip
    As a User I want to see how much each person needs to pay from the total tip percentage 
    As a User I want to reset the whole calculator to the initial state

    Inputs:
        The total cost of the bill (integer or float) 
        The tip percentage as a number (integer or float) 
        The number of people among will be divided the bill to pay
        Am event click on a reset button

    Requirement
        Divide the bill plus the tip  between a number of people
        Divide the tip betweeen a number of people
        If a percentage tip applied, add that to the bill cost and re-calculate how much each one needs to pay
        Print the outputs in a panel so the it show how much each person needs to pay from the total bill cost and the tip 

2. Examples (user-flow features)
    The user can input a number (integer - float) as bill cost
    The user can select a specific percentage as a number or float
    The user can reset the whole state of the application
    
3. Data Structure

    function eventListener to lister for the inputs
    function eventListener to add a listener to the buttons
    function updatePrice()
    function reset ()

4. Algorightm (pseudocode)

5. Code (test)

1. What is the overall structure ?
3. What elements I need to use ?


What is the smallest unit of work/problem unit that I can work on ?
How can I get it done and fast ?
If stuck : how can I zoom out ?

## Rating modal
[Tip calculator app](https://alexcumplido.github.io/frontend-mentor/tip-calculator/) | [Frontend Mentor solution](https://www.frontendmentor.io/solutions/dynamically-javascript-bar-chart-j6zOow7w2c)

### Table of contents
- [User flow](#user-flow)
- [Screenshot](#screenshot)
- [Run project](#run-project)
- [Built with](#built-with)
- [Thoughts](#thoughts)
- [Continued development](#continued-development)

#### User flow
- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day's bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device's screen size

#### Screenshot
![Mobile view](./design/mobile-design.jpg)

#### Run project
```
# Just a local development server
```

#### Built with
- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Document Object Model manipulation
- Mobile-first workflow

#### Thoughts
This was my first project from Junior Frontend Mentor challenges. Comes really in handy since it has been a few month without coding any JavaScript at all and now I restarted to learning it and digging deep into programming again. 

#### Continued development
I believe this function that creates each of the chart bars is giantic, need a refactor at some point. 

```js
function testBill() {
    return Number(inputBill.value >= 100000);
}

function testPeople() {
    return Number(inputNumPeople.value == false);
}

function handleError(inputEl, errorEl, callback) {
    if (callback()) {
        inputEl.classList.add('input-error');
        errorEl.classList.replace('visually-hidden', 'error');
    } else {
        inputEl.classList.remove('input-error');
        errorEl.classList.replace('error', 'visually-hidden');
    }
}
```