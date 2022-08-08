const btnAdvice = document.querySelector('.advice-btn');
const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const ADVICE_URL = `https://api.adviceslip.com/advice`;

async function fetchAdvice() {
    fetch(ADVICE_URL)
        .then((response) => response.json())
        .then((dataParsed) => printAdvice(dataParsed))
        .catch((error) => alert(`Network ${error}`));
}

function printAdvice(data) {
    let { advice, id } = data.slip;
    adviceId.innerText = `advice #${Number(id)}`;
    adviceText.innerText = `"${String(advice)}"`;
}

btnAdvice.addEventListener('click', fetchAdvice);
document.addEventListener('DOMContentLoaded', fetchAdvice);