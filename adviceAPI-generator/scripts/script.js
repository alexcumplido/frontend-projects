const btnAdvice = document.querySelector('.advice-btn');
const adviceId = document.querySelector('.advice-identificator');
const adviceText = document.querySelector('.advice-text');
const ADVICE_URL = `https://api.adviceslip.com/advice`;

async function fetchAdvice() {
    fetch(ADVICE_URL)
        .then((response) => response.json())
        .then((dataParsed) => inyectAdvice(dataParsed))
        .catch((error) => alert(`Network ${error}`));
}

function inyectAdvice(data) {
    let { advice, id } = data.slip;
    adviceId.innerText = `ADVICE #${Number(id)}`;
    adviceText.innerText = `"${String(advice)}"`;
}

btnAdvice.addEventListener('click', function () {
    fetchAdvice();
})
