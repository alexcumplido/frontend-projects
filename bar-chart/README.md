## Rating modal
[Github Pages live](https://alexcumplido.github.io/frontend-mentor/bar-chart/) | [Frontend Mentor solution](https://www.frontendmentor.io/solutions/dynamically-javascript-bar-chart-j6zOow7w2c)

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
function createBar(dayItem) {
    let bar = document.createElement('div');
    let barLabel = document.createElement('span');
    barLabel.classList.add('bar-span');
    barLabel.innerText = `${dayItem.amount}$`;
    bar.appendChild(barLabel);
    bar.classList.add('bar');
    if (dayItem.day === currentDay) {
        bar.classList.add('bar-current-day');
    }

    bar.style.height = `${(dayItem.amount / 100) * totalAmount}px`;

    // Emulate hover state.
    bar.addEventListener('mouseover', function () {
        barLabel.classList.add('bar-span-active');
    })
    bar.addEventListener('mouseout', function () {
        barLabel.classList.remove('bar-span-active');
    })

    barWrapper.appendChild(bar);
}
```





