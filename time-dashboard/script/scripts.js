/*
1. Understand the problem 

    What are the inputs and outputs ?
    Inputs: JavaScritp Object Notation
    Outputs: String

    What are the features-user flow ?
    When a user clicks on a button we want to print data throught the Document Object Model.
    Every button reperesents a different Daily, weekly and monthly timeframe. There is avaible data for each timeframe.

    Explicit requirements
    User clicks on daily, weekly or monthly button and stats for that specific timeframe are showed

    Implicit requirements ?
    How is structured the JSON ?
    Structured as an array of nested objects, first level properties are title and timeframe.
    Second level nesting properties are stats for each timeframe.
    Where we will be printing the data for each timeframe ?
    In DOM nodes previously selected

2. Create an example
    What examples can we create ?
    Is like when you click on one day of the google calendar, different appointments an info is showed 
    for each day you click.

    printDashboardData(timeframe)
    
3. Determine data structure
    The same that we are receiving from the JSON fetch but parsed

4. Write an algorithm
    Fetch the local JSON and make accessible the data returned
    Attach an event listener to each button so when clicked a function can be trigerred
    Store a reference of HTML elements were wi will be printing the data
    Iterate over the example object
    For each object in the array find the one that matches the prop title with the value of the title card
    If Matches iterate over timeframes and print both properties

5. Code
    Follow algorithm and test as you go

*/

const URL_DATA = `./json/data.json`;
let dataFetched;
async function fetchData() {
    fetch(URL_DATA)
        .then(function (response) {
            return response.text();
        }).then(function (responseToParse) {
            return JSON.parse(responseToParse);
        }).then(function (responseParsed) {
            dataFetched = responseParsed;
        }).catch(function (error) {
            console.log(error)
        })
}
fetchData();

const timeframes = document.getElementsByClassName("button-timeframe");
const cards = document.getElementsByClassName("card");

for (let i = 0; i < timeframes.length; i++) {
    timeframes[i].addEventListener('click', function (event) {
        let time = event.target.innerText.toLowerCase();
        printDashboardData(time);
    })
}

function printDashboardData(time) {
    for (let i = 0; i < dataFetched.length; i++) {

        let { current: currentValue, previous: previousValue } = dataFetched[i].timeframes[time];

        let itemTitle = dataFetched[i].title.toLowerCase().replace(' ', '-');
        cards[i].classList.add(itemTitle);

        let cardTitle = document.querySelector(`.${itemTitle} .card-title`);
        let cardCurrentData = document.querySelector(`.${itemTitle} .card-data-current`);
        let cardPreviousData = document.querySelector(`.${itemTitle} .card-data-previous`);

        cardTitle.innerText = dataFetched[i].title;
        cardCurrentData.innerText = String(currentValue);
        cardPreviousData.innerText = String(previousValue);
    }
}