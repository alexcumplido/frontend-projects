const URL_DATA = "./json/data.json";
const btnMenuMobile = document.querySelector('.btn-open-menu');
const navigation = document.querySelector('.navigation')
const btnSign = document.querySelectorAll('.sign');
const listNavLinks = document.querySelector('.list-nav-links');
let menuOpened = false;
let linksFetched;

async function fethData(URL) {
    fetch(URL)
        .then(function (response) {
            return response.text();
        })
        .then(function (response) {
            const responseProcessed = JSON.parse(response);
            linksFetched = responseProcessed;
        })
}

function createNavLinks() {
    for (let i = 0; i < linksFetched.length; i++) {

        let link = document.createElement('li');
        link.innerText = `${linksFetched[i].link}`

        if (linksFetched[i].submenu) {
            let y = 0;

            let subMenu = document.createElement('ul')

            while (y < linksFetched[i].submenu.length) {
                let subLink = document.createElement('li');
                subLink.innerText = `${linksFetched[i].submenu[y].sublink}`

                if (linksFetched[i].submenu[y].icon) {
                    subLink.style.background = `url(${linksFetched[i].submenu[y].icon}) no-repeat left center`
                }
                subMenu.append(subLink);
                link.append(subMenu);
                y++;
            }
        }

        listNavLinks.append(link);
    }
}

btnMenuMobile.addEventListener('click', function (event) {
    if (menuOpened == false) {
        menuOpened = true;
        event.target.classList.add('btn-close-menu')
        navigation.classList.add('nav-mobile-active');
        btnSign[0].classList.remove('hidden');
        btnSign[1].classList.remove('hidden');
        createNavLinks();

    } else {
        while (listNavLinks.firstChild) {
            listNavLinks.removeChild(listNavLinks.firstChild);
        }
        console.log();
        menuOpened = false;
        event.target.classList.remove('btn-close-menu')
        event.target.classList.add('btn-open-menu')
        navigation.classList.remove('nav-mobile-active');
        btnSign[0].classList.add('hidden');
        btnSign[1].classList.add('hidden');

    }
})

fethData(URL_DATA);