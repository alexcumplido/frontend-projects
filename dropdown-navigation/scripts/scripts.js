const buttonMenu = document.querySelector('.btn-menu');
const dropdown = document.querySelectorAll('.dropdown');
const navList = document.querySelector('.nav-list');
const navigation = document.querySelector('.navigation')
let currentItem = null;

buttonMenu.addEventListener('click', function () {
    if (buttonMenu.classList.contains('btn__menu--closed')) {
        buttonMenu.classList.replace('btn__menu--closed', 'btn__menu--open');
        navigation.classList.add('navigation--open')
    } else {
        navigation.classList.remove('navigation--open');
        buttonMenu.classList.replace('btn__menu--open', 'btn__menu--closed');
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