const buttonMenu = document.querySelector('.btn-menu');
const dropdown = document.querySelectorAll('.dropdown');
const navList = document.querySelector('.nav-list');
const navigationWrapper = document.querySelector('.nav-overlay');
let currentItem = null;

buttonMenu.addEventListener('click', function () {
    if (buttonMenu.classList.contains('btn-menu--open')) {
        buttonMenu.classList.replace('btn-menu--open', 'btn-menu--close');
        navigationWrapper.classList.add('nav-overlay--open');
    } else {
        navigationWrapper.classList.remove('nav-overlay--open');
        buttonMenu.classList.replace('btn-menu--close', 'btn-menu--open');
    }
});

function displayItem(i) {
    dropdown[i].classList.add('dropdown--active');
}

function hideItem(i) {
    dropdown[i].classList.remove('dropdown--active');
}

for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function (event) {
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
    })
}