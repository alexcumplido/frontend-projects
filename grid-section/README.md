## Responsive Grid Section

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

#### Screenshot
![Mobile preview](./designs/desktopView.PNG)

#### Links
- [Github Pages live](https://alexcumplido.github.io/frontend-projects/grid-section/)

#### Run project
```
# Just a local development server
```

#### Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid Layout
- Media Queries
- Mobile-first workflow

#### What I learned
I used a mix approach during the CSS coding. I started with a mobile first technique taking advantage of the normal flow of the page. Then, for the outer desktop layout I used grid and for the inner one flexbox. I think both techniques combine pretty well in this case, Grid is very powerfull when it comes to place elements in the overall layout, flexbox gives you less control in that sense but for small components like the rating or comments containers let you distribute the space pretty well.

I found interesting how structured and semantic HTML5 builds Accessibility. At first I created the comments cards with an article tag, however both html `<article>` and `<section>` require an `<H2>-<H6>` as a direct children element and not `<p>`, so I applied an H2 and replaced both `<p>` by `<span>`.

#### Continued development
I am looking forward to reduce the code in the Media Query, I think there to much code relying on the Media Query.

#### Useful resources
- [CSS tricks Grid Layou guide](https://css-tricks.com/snippets/css/complete-guide-grid/). Again CSS tricks allways is an incredible resource for Flexbox as well for Grid. You can understand in deep parents and children behaviour.