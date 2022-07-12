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
            inyectAdvice(dataParsed)
        })
        .catch(function (error) {
            console.log(error);
        })
}

function inyectAdvice(data) {
    let { advice, id } = data.slip;
    adviceId.innerText = `ADVICE #${Number(id)}`;
    adviceText.innerText = `"${String(advice)}"`;
}

btnAdvice.addEventListener('click', function () {
    fetchAdvice();
})
