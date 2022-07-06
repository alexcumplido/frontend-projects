const URL_DATA = "./json/data.json";
let linksFetched;

const btnMenuMobile = document.querySelector('.btn-open-menu');
const navigationMovile = document.querySelector('.navigation-mvl')
const listNavLinksMobile = document.querySelector('.list-nav-links-mobile');
const signButtons = document.querySelector('.sign-wrapper');
let dropdown;
let subMenu;
let menuOpened = false;

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
            let list = document.createElement('ul')
            list.classList.add('dropdown');
            let y = 0;
            while (y < dataFetched[i].submenu.length) {
                let subLI = document.createElement('li');
                subLI.appendChild(
                    createAnchor(dataFetched[i].submenu[y].sublink)
                );
                list.append(subLI);
                y++;
            }
            li.append(list);
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
        event.target.classList.replace('btn-open-menu', 'btn-close-menu')
        navigationMovile.classList.add('nav-mobile-active');
        signButtons.classList.remove('hidden');
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
        signButtons.classList.add('hidden');
        navigationMovile.classList.remove('nav-mobile-active');
        event.target.classList.replace('btn-close-menu', 'btn-open-menu')
        menuOpened = false;
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
