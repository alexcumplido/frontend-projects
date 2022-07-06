const URL_DATA = "./json/data.json";
let linksFetched;

const btnMenuMobile = document.querySelector('.btn-open-menu');
const navigationMovile = document.querySelector('.navigation-mvl')
const listNavLinksMobile = document.querySelector('.list-nav-links-mobile');
const signButtons = document.querySelector('.sign-wrapper');
const navigationDesktop = document.querySelector('.navigation-desktop');
const listNavLinksDesktop = document.querySelector('.list-nav-links-desktop');

let dropdown;
let subMenu;
let dropDownDesktop;
let subMenuDesktop;
let menuOpened = false;

let currentItemMobile = null;
let currentItemDesktop = null

async function fethData(URL) {
    fetch(URL)
        .then(function (response) {
            return response.text();
        })
        .then(function (response) {
            const responseProcessed = JSON.parse(response);
            dataFetched = responseProcessed;
            createNavLinksDesktop()
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
                if (dataFetched[i].submenu[y].icon) {
                    subLI.style.background = `url(${dataFetched[i].submenu[y].icon}) no-repeat left center`
                }
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

function createNavLinksDesktop() {
    for (let i = 0; i < dataFetched.length; i++) {
        let li = document.createElement('li');
        li.appendChild(
            createAnchor(dataFetched[i].link)
        );

        if (dataFetched[i].submenu) {
            li.classList.add('sub-menu-desktop');
            let list = document.createElement('ul')
            list.classList.add('dropdown-desktop');
            let y = 0;
            while (y < dataFetched[i].submenu.length) {
                let subLI = document.createElement('li');
                if (dataFetched[i].submenu[y].icon) {
                    subLI.style.background = `url(${dataFetched[i].submenu[y].icon}) no-repeat left center`
                }
                subLI.appendChild(
                    createAnchor(dataFetched[i].submenu[y].sublink)
                );
                list.append(subLI);
                y++;
            }
            li.append(list);
        }
        listNavLinksDesktop.append(li);
    }
    dropDownDesktop = document.querySelectorAll('.dropdown-desktop');
    subMenuDesktop = document.querySelectorAll('.sub-menu-desktop');
    for (let i = 0; i < subMenuDesktop.length; i++) {
        subMenuDesktop[i].addEventListener(('click'), function () {
            if (currentItemDesktop === null) {
                dropDownDesktop[i].classList.add("dropdown-desktop-show");
                currentItemDesktop = i;
            } else if (currentItemDesktop === i) {
                dropDownDesktop[currentItemDesktop].classList.remove("dropdown-desktop-show")
                currentItemDesktop = null;
            } else {
                dropDownDesktop[currentItemDesktop].classList.remove("dropdown-desktop-show");
                dropDownDesktop[i].classList.add("dropdown-desktop-show");
                currentItemDesktop = i;
            }
        });
    }
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
                if (currentItemMobile === null) {
                    dropdown[i].classList.add("dropdown-show");
                    currentItemMobile = i;
                } else if (currentItemMobile === i) {
                    dropdown[currentItemMobile].classList.remove("dropdown-show")
                    currentItemMobile = null;
                } else {
                    dropdown[currentItemMobile].classList.remove("dropdown-show");
                    dropdown[i].classList.add("dropdown-show");
                    currentItemMobile = i;
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