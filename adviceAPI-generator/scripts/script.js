const btnAdvice = document.querySelector('.advice-btn');
const adviceId = document.querySelector('.advice-identificator');
const adviceText = document.querySelector('.advice-text');
const ADVICE_URL = `https://api.adviceslip.com/advice`;

async function fetchAdvice() {
    fetch(ADVICE_URL)
        .then(function responseText(response) {
            return response.text();
        })
        .then(function parseData(data) {
            const dataParsed = JSON.parse(data);
            return dataParsed;
        })
        .catch(function (error) {
            console.log(error);
        })
}

function inyectAdvice(data) {
    let { advice, id } = data.slip;
    adviceId.innerText = id;
    adviceText.innerText = advice;
}

btnAdvice.addEventListener('click', function () {
    const advice = fetchAdvice();
    inyectAdvice(advice);
})
