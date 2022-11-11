let URL_GITHUB = `https://api.github.com/users/:username`;
const body = document.querySelector('body');
const themeToggle = document.querySelector('.theme__toggle');
const formSearch = document.getElementById('search');
const formSubmit = document.getElementById('submit');
const formError = document.querySelector('.form__error-hide');
const userAvatar = document.getElementById('avatar');
const userName = document.getElementById('name');
const userUsername = document.getElementById('username');
const userDate = document.getElementById('date');
const userBio = document.getElementById('bio');
const userRepos = document.getElementById('public_repos');
const userFollowers = document.getElementById('followers');
const userFollowing = document.getElementById('following');
const userLocation = document.getElementById('location');
const userBlog = document.getElementById('blog');
const userTwitter = document.getElementById('twitter');
const userCompany = document.getElementById('company');

const userSocial = document.querySelectorAll('.profile__link');

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
            alert('Error loading data');
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

    let creationDate = new Date(created_at);
    let joinDate = creationDate.toLocaleString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });

    userAvatar.setAttribute('src', avatar_url);

    userName.textContent = name || login;
    userUsername.textContent = `@${login}`;
    userUsername.setAttribute('href', html_url);
    userDate.textContent = `Joined ${joinDate}`;

    userBio.textContent = bio || `This profile has no bio`;

    userRepos.textContent = public_repos;
    userFollowers.textContent = followers;
    userFollowing.textContent = following;

    userLocation.textContent = location || `Not Available`;
    userBlog.textContent = blog || `Not Available`;
    userTwitter.textContent = (twitter_username) ? `@${twitter_username}` : `Not Available`;
    userCompany.textContent = company || `Not Available`;

    for (let i = 0; i < userSocial.length; i++) {
        userSocial[i].firstElementChild.classList.remove('profile__svg-notfound');
        userSocial[i].lastElementChild.classList.remove('profile__link-notfound');
    }

    if (!location) linkNotAvaible(userLocation);

    if (blog) {
        userBlog.setAttribute('href', blog);
    } else {
        linkNotAvaible(userBlog);
    }

    if (twitter_username) {
        userTwitter.setAttribute('href', `https://twitter.com/${twitter_username}`);
    } else {
        linkNotAvaible(userTwitter);
    }

    if (company) {
        userCompany.setAttribute('href', `https://github.com/${company}`);
    } else {
        linkNotAvaible(userCompany);
    }
}

function linkNotAvaible(element) {
    element.previousElementSibling.classList.add('profile__svg-notfound');
    element.classList.add('profile__link-notfound');
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