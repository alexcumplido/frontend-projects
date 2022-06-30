const URL_REQUEST = "./json/data.json";
const barClass = document.querySelector('.bar');
const barWrapper = document.querySelector('.bar-wrapper');
const dayWrapper = document.querySelector('.day-wrapper');
const statsTotal = document.querySelector('.stats-total-span')
let totalAmount = 0;
const currentDay = new Date().toLocaleString('en-us', { weekday: 'short' }).toLowerCase();

async function fetchResponse() {
    fetch(URL_REQUEST)
        .then(function (response) {
            return response.text();
        })
        .then(function (processedResponse) {
            const responseFetched = JSON.parse(processedResponse);
            createChart(responseFetched);
        })
        .catch(function (error) {
            console.log(error)
        });
}

function createChart(responseFetched) {
    for (let i = 0; i < responseFetched.length; i++) {
        createBar(responseFetched[i]);
        createDay(responseFetched[i]);
        totalAmount += responseFetched[i].amount;
    }
    statsTotal.innerText = `${totalAmount}$`;
}

function createBar(responseFetched) {
    let bar = document.createElement('div');
    let barLabel = document.createElement('span');
    barLabel.classList.add('bar-span');
    barLabel.innerText = `${responseFetched.amount}$`;
    bar.appendChild(barLabel);
    bar.classList.add('bar');
    bar.style.height = `${responseFetched.amount * 4}px`;
    bar.addEventListener('mouseover', function () {
        barLabel.classList.add('bar-span-active');
    })
    bar.addEventListener('mouseout', function () {
        barLabel.classList.remove('bar-span-active');
    })
    if (responseFetched.day === currentDay) {
        bar.classList.add('bar-current-day');
    }
    barWrapper.appendChild(bar);
}

function createDay(responseFetched) {
    let day = document.createElement('div');
    day.classList.add('day');
    day.innerText = responseFetched.day;
    dayWrapper.appendChild(day);
}

fetchResponse();