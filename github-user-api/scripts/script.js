let URL_GITHUB = `https://api.github.com/users/:username`;

const body = document.querySelector('.body');
const themeToggle = document.querySelector('.theme__toggle');

const formSearch = document.querySelector('.form__input');
const formSubmit = document.querySelector('.form__submit');
const formError = document.querySelector('.form__error-hide');

const profileAvatar = document.querySelector('.profile__user__avatar');
const profileName = document.querySelector('.user-name');
const profileUserName = document.querySelector('.user-username');
const profileDate = document.querySelector('.user-date');

const profileBio = document.querySelector('.bio');

const profileRepos = document.querySelector('.repos');
const profileFollowers = document.querySelector('.followers');
const profileFollowing = document.querySelector('.following');

const profileLocation = document.querySelector('.location');
const profileBlog = document.querySelector('.blog');
const profileTwitter = document.querySelector('.twitter');
const profileCompany = document.querySelector('.company');

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
    profileName.textContent = name || login;
    profileUserName.textContent = `@${login}`;
    profileUserName.setAttribute('href', html_url);
    profileDate.textContent = `Joined ${day} ${month} ${year}`

    profileBio.textContent = bio || `This profile has no bio`;

    profileRepos.textContent = public_repos;
    profileFollowing.textContent = following;
    profileFollowers.textContent = followers;

    profileLocation.textContent = location || `Not Available`;
    profileBlog.textContent = blog || `Not Available`;
    profileTwitter.textContent = (twitter_username) ? `@${twitter_username}` : `Not Available`;
    profileCompany.textContent = company || `Not Available`;

    if (blog) profileBlog.setAttribute('href', blog);
    if (twitter_username) profileTwitter.setAttribute('href', `https://twitter.com/${twitter_username}`);
    if (company) profileCompany.setAttribute('href', `https://github.com/${company}`);

    profileLocation.classList.remove('link-not-avaible');
    profileBlog.classList.remove('link-not-avaible');
    profileTwitter.classList.remove('link-not-avaible');
    profileCompany.classList.remove('link-not-avaible');

    if (!location) profileLocation.classList.add('link-not-avaible');
    if (!blog) profileBlog.classList.add('link-not-avaible');
    if (!twitter_username) profileTwitter.classList.add('link-not-avaible');
    if (!company) profileCompany.classList.add('link-not-avaible');
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