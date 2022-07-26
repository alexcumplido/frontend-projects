let URL_GITHUB = `https://api.github.com/users/:username`;
const formSearch = document.querySelector('.form__input__search');
const formSubmit = document.querySelector('.form__submit');
const formError = document.querySelector('.form__error-hide');
const profileAvatar = document.querySelector('.profile-avatar');
const nameField = document.querySelector('.name');
const userField = document.querySelector('.user');
const loginField = document.querySelector('.login');
const createdField = document.querySelector('.created_at');
const bioField = document.querySelector('.bio');
const reposField = document.querySelector('.public_repos');
const followersField = document.querySelector('.followers');
const followingField = document.querySelector('.following');
const locationField = document.querySelector('.location');
const blogField = document.querySelector('.blog');
const twitterField = document.querySelector('.twitter');
const companyField = document.querySelector('.company');
const main = document.querySelector('.main');
const themeToggle = document.querySelector('.theme__toggle');

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
        formError.classList.add('.form__error-show');
    } else {
        formError.classList.remove('.form__error-show');
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
    userField.textContent = `@${login}`;
    userField.setAttribute('href', html_url);
    createdField.textContent = `Joined ${day} ${month} ${year}`

    bioField.textContent = bio || `This profile has no bio`;

    reposField.textContent = public_repos;
    followingField.textContent = following;
    followersField.textContent = followers;

    locationField.textContent = location || `Not Available`;
    blogField.textContent = blog || `Not Available`;
    twitterField.textContent = (twitter_username) ? `@${twitter_username}` : `Not Available`;
    companyField.textContent = company || `Not Available`;

    if (blog) blogField.setAttribute('href', `${blog}`);
    if (twitter_username) twitterField.setAttribute('href', `https://twitter.com/${twitter_username}`);
    if (company) companyField.setAttribute('href', `https://github.com/${company}`);
}

formSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    if (formSearch.value) fetchData(URL_GITHUB);
})

themeToggle.addEventListener('click', function () {
    debugger;
    if (themeToggle.classList.contains('dark-theme')) {
        themeToggle.classList.replace('dark-theme', 'light-theme');
        main.classList.replace('dark-theme', 'light-theme');
        themeToggle.innerText = 'dark';
    } else {
        themeToggle.classList.replace('light-theme', 'dark-theme');
        main.classList.replace('light-theme', 'dark-theme');
        themeToggle.innerText = 'light';
    }
})

fetchData(URL_GITHUB);