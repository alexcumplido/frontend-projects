## Flexbox card

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
- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

#### Screenshot
![Mobile preview](./designs/mobileView.JPG)

#### Links
- [Github Pages live](https://alexcumplido.github.io/frontend-projects/card-component)

#### Run project
```
# Just a local development server
```

#### Built with
- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow

#### What I learned
Applied the following flexbox configuration via the shortcut flex and the property flex-basis in order to get a two-row card in destkop viewport. Giving a 100% to the first flex-item all the space of the first row will be filled by that element, then I made equals in terms of space-distribution, the other two flex-items, made them dsitribute themselves equally along the second row.

```css
.card:nth-of-type(1) {
    flex-basis: 100%;
}

.card:nth-of-type(2),
.card:nth-of-type(3) {
    flex: 1 1 15rem;
}
```

#### Continued development
I would like to give a try again and implement CSS Grid Layout instead of Flexbox. 

#### Useful resources
- [CSS tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). CSS tricks allways is an incredible resource for Flexbox or Grid. The graphics illustrate perfectly how you can apply the different flexbox properties.