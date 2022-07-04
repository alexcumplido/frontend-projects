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