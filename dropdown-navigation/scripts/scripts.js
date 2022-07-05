// Fetch JSON database

const URL_DATA = "./json/data.json";

async function fethData(URL) {
    fetch(URL)
        .then(function (response) {
            return response.text();
        })
        .then(function (response) {
            const responseProcessed = JSON.parse(response);
            console.log(responseProcessed)
        })
}

fethData(URL_DATA);

const btnMenuMobile = document.querySelector('.btn-open-menu');
const navigation = document.querySelector('.navigation')
const btnSign = document.querySelectorAll('.sign');
const navLinks = document.querySelector('.nav-links');
let menuOpened = false;

btnMenuMobile.addEventListener('click', function (event) {
    if (menuOpened == false) {
        menuOpened = true;
        event.target.classList.add('btn-close-menu')
        navigation.classList.add('nav-mobile-active');
        btnSign[0].classList.remove('hidden');
        btnSign[1].classList.remove('hidden');
        createNavLinks();

    } else {
        menuOpened = false;
        event.target.classList.remove('btn-close-menu')
        event.target.classList.add('btn-open-menu')
        navigation.classList.remove('nav-mobile-active');
        btnSign[0].classList.add('hidden');
        btnSign[1].classList.add('hidden');
    }
})

// 1. Problem analysis(Understand)
// 2. Define features and user flow
// 3. Structure variables and functions
// 4. Pseudocode
// 5. Implement programm

// Input data
// Access - manipulate data
// Output data

// Fill an unordered list with list items

// Variable that targets a reference to Unordered List
// Variable that targets a reference to a List Item


// Iterate over the array of data fetched
// In each iteration do the following:
// Take the LI node
// Get the value of property link and inyect as innerText into de LI NODE

// Test for a boolean value of property submenu
//If true
// Declare a variable referenving an UL node
// Asign a class to that variable of submenu
// Iterate over submenu array and
// Declare a variable referencing a LI node
// Add to that LI a class of submenu-link
// Inyect submenu string as inner text to that variable
// Append LI to submenu UL created

// 6. When closing button clicks all nodes from unordered list from mobile menu are removed

function createNavLinks() {

}