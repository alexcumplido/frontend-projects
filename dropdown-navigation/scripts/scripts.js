// Fetch JSON database

const URL_DATA = "./json/data.json";



async function fetchResponse(URL) {
    fetch(URL)
        .then(function (response) {
            return response.text();
        })
        .then(function (response) {
            const responseProcessed = JSON.parse(response);
            console.log(responseProcessed)
        })
}

fetchResponse(URL_DATA);

// 0. Code a basic HTML markup for the project
// 1. Create a database JavaScript Object Notation that contains references to the link - strings and images for each one.
// 2. Fetch JSON object and fill an array of objects with necessary items for the dropdown menu's
// 3. Create a basic markup for te dropdown menu in mobile version
//     - Default display is none
//         - Once hamburger clicked default style changes to absolute

// 4. This basic markup contains an unordered list
// 5. When hamburger button clicked JavaScript DOM manipulation starts
//     - Unordered list items is filled with strings from the JSON fetched
//         - This imples iterating over the array of objects and for each object inyecting an < li >
//             - If this object has an array of links inside then another < ul > is inyected inside
//                 - This inyected sublist contains strings that will be set as <li>
//             - This inyected sublist contains images that will be set as img elements

// 6. When closing button clicks all nodes from unordered list from mobile menu are removed