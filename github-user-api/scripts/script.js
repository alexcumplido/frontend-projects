let URL_API = `https://api.github.com/users/:username`;
const formSearch = document.querySelector('.form__input__search');
const formSubmit = document.querySelector('.form__submit');
const formError = document.querySelector('.form__error');
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

formSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    if (formSearch.value) fetchData(URL_API);
})

function fetchData(URL_API) {
    let githubUser = formSearch.value.trim() || 'octocat';
    URL_API = URL_API.replace(':username', githubUser);
    fetch(URL_API)
        .then(function (promise) {
            return promise.text();
        }).then(function (responseToParse) {
            return JSON.parse(responseToParse);
        }).then(function (responseParsed) {
            validateUser(responseParsed);
        }).catch(function (error) {
            console.log(error);
        })
}

function validateUser(dataFetched) {
    if (dataFetched.message === "Not Found") {
        formError.innerText = dataFetched.message;
        formError.classList.add('show');
    } else {
        formError.classList.remove('show');
        showProfileData(dataFetched);
    }
}
function showProfileData(dataFetched) {
    let linksNull = `Not Available`;
    let bioNull = `This profile has no bio`;

    let {
        login, avatar_url, html_url, name, company, blog, location, bio, twitter_username, public_repos, followers, following, created_at
    } = dataFetched;

    profileAvatar.setAttribute('src', avatar_url);
    userField.setAttribute('href', html_url);
    nameField.textContent = name || login;
    userField.textContent = `@${login}`;

    let joinDate = new Date(created_at);
    let day = joinDate.getDay();
    let month = joinDate.toLocaleString('default', { month: 'short' });
    let year = joinDate.getFullYear();
    createdField.textContent = `Joined ${day} ${month} ${year}`

    bioField.textContent = bio || bioNull;

    reposField.textContent = public_repos;
    followingField.textContent = following;
    followersField.textContent = followers;

    locationField.textContent = location || linksNull;

    blogField.textContent = blog || linksNull;
    if (blog) blogField.setAttribute('href', `${blog}`);

    twitterField.textContent = (twitter_username) ? `@${twitter_username}` : linksNull;
    if (twitter_username) twitterField.setAttribute('href', `https://twitter.com/${twitter_username}`);

    companyField.textContent = company || linksNull;
    if (company) companyField.setAttribute('href', `https://github.com/${company}`);
}

fetchData(URL_API);