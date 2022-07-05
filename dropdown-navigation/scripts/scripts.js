const URL_DATA = "./json/data.json";
const btnMenuMobile = document.querySelector('.btn-open-menu');
const navigationMovile = document.querySelector('.navigation-mvl')
const listNavLinksMobile = document.querySelector('.list-nav-links-mobile');
const btnSign = document.querySelectorAll('.sign');
let dropdown;
let subMenu;
let menuOpened = false;
let linksFetched;
let currentItem = null;

async function fethData(URL) {
    fetch(URL)
        .then(function (response) {
            return response.text();
        })
        .then(function (response) {
            const responseProcessed = JSON.parse(response);
            dataFetched = responseProcessed;
            // createNavLinksDesktop()
        })
}

function createAnchor(data) {
    let anchor = document.createElement('a');
    anchor.setAttribute('href', `#`);
    anchor.innerText = `${data}`
    return anchor;
}

function createNavLinksMobile() {
    for (let i = 0; i < dataFetched.length; i++) {

        let li = document.createElement('li');

        li.appendChild(
            createAnchor(dataFetched[i].link)
        );

        if (dataFetched[i].submenu) {

            li.classList.add('sub-menu');
            let subList = document.createElement('ul')
            subList.classList.add('dropdown');

            let y = 0;
            while (y < dataFetched[i].submenu.length) {

                let subLI = document.createElement('li');
                subLI.appendChild(
                    createAnchor(dataFetched[i].submenu[y].sublink)
                );

                subList.append(subLI);
                y++;
            }
            li.append(subList);
        }
        listNavLinksMobile.append(li);
    }

    dropdown = document.querySelectorAll('.dropdown');
    subMenu = document.querySelectorAll('.sub-menu');
}

function displayItem(i) {
    dropdown[i].classList.add("dropdown-show");
}

function hideItem(i) {
    dropdown[i].classList.remove("dropdown-show");
}

btnMenuMobile.addEventListener('click', function (event) {
    if (menuOpened == false) {
        menuOpened = true;
        event.target.classList.add('btn-close-menu')
        navigationMovile.classList.add('nav-mobile-active');
        btnSign[0].classList.remove('hidden');
        btnSign[1].classList.remove('hidden');
        createNavLinksMobile();

        for (let i = 0; i < subMenu.length; i++) {
            subMenu[i].addEventListener(('click'), function () {
                if (currentItem === null) {
                    displayItem(i);
                    currentItem = i;
                } else if (currentItem === i) {
                    hideItem(currentItem);
                    currentItem = null;
                } else {
                    hideItem(currentItem);
                    displayItem(i);
                    currentItem = i;
                }
            });
        }

    } else {
        while (listNavLinksMobile.firstChild) {
            listNavLinksMobile.removeChild(listNavLinksMobile.firstChild);
        }
        console.log();
        menuOpened = false;
        event.target.classList.remove('btn-close-menu')
        event.target.classList.add('btn-open-menu')
        navigationMovile.classList.remove('nav-mobile-active');
        btnSign[0].classList.add('hidden');
        btnSign[1].classList.add('hidden');
    }
})

fethData(URL_DATA);

// if (dataFetched[i].submenu[y].icon) {
//     subListItem.style.background = `url(${dataFetched[i].submenu[y].icon}) no-repeat left center`
// }

// const navigationDesktop = document.querySelector('.navigation-desktop');
// const listNavLinksDesktop = document.querySelector('.list-nav-links-desktop');

// function createNavLinksDesktop() {
//     for (let i = 0; i < dataFetched.length; i++) {

//         let link = document.createElement('li');
//         let anchor = document.createElement('a');
//         anchor.setAttribute('href', `#`);
//         anchor.innerText = `${dataFetched[i].link}`;
//         link.appendChild(anchor);

//         if (dataFetched[i].submenu) {
//             let y = 0;

//             let subMenu = document.createElement('ul')

//             while (y < dataFetched[i].submenu.length) {
//                 let subLink = document.createElement('li');
//                 let subAnchor = document.createElement('a')
//                 subAnchor.setAttribute('href', `#`);
//                 subAnchor.innerText = `${dataFetched[i].submenu[y].sublink}`;

//                 if (dataFetched[i].submenu[y].icon) {
//                     subLink.style.background = `url(${dataFetched[i].submenu[y].icon}) no-repeat left center`
//                 }
//                 subLink.appendChild(subAnchor);
//                 subMenu.append(subLink);
//                 link.append(subMenu);
//                 y++;
//             }
//         }
//         listNavLinksDesktop.append(link);
//     }
// }
