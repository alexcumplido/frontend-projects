let URL_GITHUB = `https://api.github.com/users/:username`;

const body = document.querySelector('.body');
const themeToggle = document.querySelector('.theme__toggle');

const formSearch = document.querySelector('.form__input');
const formSubmit = document.querySelector('.form__submit');
const formError = document.querySelector('.form__error-hide');
const profileAvatar = document.querySelector('.profile__user__avatar');
const basicInfo = document.querySelector('.profile__user-info')
const profileBio = document.querySelector('.bio');
const statsItems = document.querySelectorAll('.profile__stats-item');
const socialLinks = document.querySelectorAll('.profile__link');

function getInputSearch() {
    return formSearch.value.trim() || 'octocat';
}

function fetchData(URL_API) {
    fetch(URL_API.replace(':username', getInputSearch()))
        .then(function (response) {
            return response.json();
        }).then(function (responseParsed) {
            validateUser(responseParsed);
        }).catch(function (error) {
            console.log(error);
        })
}

function validateUser(dataFetched) {
    if (dataFetched.message === "Not Found") {
        formError.innerText = dataFetched.message;
        formError.classList.replace('form__error-hide', 'form__error-show');
    } else {
        formError.classList.replace('form__error-show', 'form__error-hide');
        showProfileData(dataFetched);
    }
}
function showProfileData(dataFetched) {
    let {
        login, avatar_url, html_url, name, company, blog, location, bio, twitter_username, public_repos, followers, following, created_at
    } = dataFetched;

    let joinDate = new Date(created_at);
    let day = joinDate.getDay();
    let month = joinDate.toLocaleString('default', { month: 'short' });
    let year = joinDate.getFullYear();

    profileAvatar.setAttribute('src', avatar_url);

    basicInfo.children[0].textContent = name || login;
    basicInfo.children[1].firstChild.textContent = `@${login}`;
    basicInfo.children[1].firstChild.setAttribute('href', html_url);
    basicInfo.children[2].textContent = `Joined ${day} ${month} ${year}`;

    profileBio.textContent = bio || `This profile has no bio`;

    statsItems[0].children[1].innerText = public_repos;
    statsItems[1].children[1].innerText = following;
    statsItems[2].children[1].innerText = followers;

    socialLinks[0].children[1].textContent = location || `Not Available`;
    socialLinks[1].children[1].textContent = blog || `Not Available`;
    socialLinks[2].children[1].textContent = (twitter_username) ? `@${twitter_username}` : `Not Available`;
    socialLinks[3].children[1].textContent = company || `Not Available`;

    if (blog) socialLinks[1].children[1].setAttribute('href', blog);
    if (twitter_username) socialLinks[2].children[1].setAttribute('href', `https://twitter.com/${twitter_username}`);
    if (company) socialLinks[3].children[1].setAttribute('href', `https://github.com/${company}`);

    for (let i = 0; i < socialLinks.length; i++) {
        socialLinks[i].children[1].classList.remove('link-not-avaible')
    }

    if (!location) socialLinks[0].children[1].classList.add('link-not-avaible');
    if (!blog) socialLinks[1].children[1].classList.add('link-not-avaible');
    if (!twitter_username) socialLinks[2].children[1].classList.add('link-not-avaible');
    if (!company) socialLinks[3].children[1].classList.add('link-not-avaible');
}

formSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    if (formSearch.value) fetchData(URL_GITHUB);
})

themeToggle.addEventListener('click', function () {
    if (themeToggle.classList.contains('light-theme')) {
        themeToggle.classList.remove('light-theme');
        body.classList.remove('light-theme');
        themeToggle.innerText = 'light';
    } else {
        themeToggle.classList.add('light-theme');
        body.classList.add('light-theme');
        themeToggle.innerText = 'dark';
    }
})

fetchData(URL_GITHUB);