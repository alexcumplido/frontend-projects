const buttonMenu = document.querySelector('.btn-menu');
const dropdown = document.querySelectorAll('.dropdown');
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

for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function () {
        dropdown[i].classList.toggle('dropdown--active');
    })
}