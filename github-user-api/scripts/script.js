let URL_GITHUB = `https://api.github.com/users/:username`;

const body = document.querySelector('.body');
const themeToggle = document.querySelector('.theme__toggle');

const formSearch = document.querySelector('.form__input');
const formSubmit = document.querySelector('.form__submit');
const formError = document.querySelector('.form__error-hide');

const profileAvatar = document.querySelector('.profile__user__avatar');
const nameField = document.querySelector('.user-name');
const userNameField = document.querySelector('.user-username');
const createdField = document.querySelector('.user-date');

const bioField = document.querySelector('.bio');

const reposField = document.querySelector('.repos');
const followersField = document.querySelector('.followers');
const followingField = document.querySelector('.following');

const locationField = document.querySelector('.location');
const blogField = document.querySelector('.blog');
const twitterField = document.querySelector('.twitter');
const companyField = document.querySelector('.company');

function getInputSearch() {
    let search = formSearch.value.trim() || 'octocat';
    return search;
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
    nameField.textContent = name || login;
    userNameField.textContent = `@${login}`;
    userNameField.setAttribute('href', html_url);
    createdField.textContent = `Joined ${day} ${month} ${year}`

    bioField.textContent = bio || `This profile has no bio`;

    reposField.textContent = public_repos;
    followingField.textContent = following;
    followersField.textContent = followers;

    locationField.textContent = location || `Not Available`;
    blogField.textContent = blog || `Not Available`;

    twitterField.textContent = (twitter_username) ? `@${twitter_username}` : `Not Available`;
    companyField.textContent = company || `Not Available`;

    if (blog) { } blogField.setAttribute('href', `${blog}`);
    if (twitter_username) twitterField.setAttribute('href', `https://twitter.com/${twitter_username}`);
    if (company) companyField.setAttribute('href', `https://github.com/${company}`);

    locationField.classList.remove('link-not-avaible');
    blogField.classList.remove('link-not-avaible');
    twitterField.classList.remove('link-not-avaible');
    companyField.classList.remove('link-not-avaible');

    if (!location) locationField.classList.add('link-not-avaible');
    if (!blog) blogField.classList.add('link-not-avaible');
    if (!twitter_username) twitterField.classList.add('link-not-avaible');
    if (!company) companyField.classList.add('link-not-avaible');
}

formSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    if (formSearch.value) fetchData(URL_GITHUB);
})

themeToggle.addEventListener('click', function () {
    if (themeToggle.classList.contains('dark-theme')) {
        themeToggle.classList.replace('dark-theme', 'light-theme');
        body.classList.replace('dark-theme', 'light-theme');
        themeToggle.innerText = 'dark';
    } else {
        themeToggle.classList.replace('light-theme', 'dark-theme');
        body.classList.replace('light-theme', 'dark-theme');
        themeToggle.innerText = 'light';
    }
})

fetchData(URL_GITHUB);