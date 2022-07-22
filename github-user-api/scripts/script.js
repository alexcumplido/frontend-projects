/*
1. Understand the problem 

    We have a small component with an input field and a button. On loading the component a network request is already executed and that information will be displayed into the DOM via DOM traversing. Once the user enters a username we insert it into an URL as query parameter to init a network request to GitHub API. If the user exist we receive a response that we have to proces and obtain certain values from that response to inyect into our DOM Model via DOM traversing. if the user does not exist we have to processt anyway and show an error to the user.

    Inputs:
        Username to search as string inserted by the user
        An event on the click button to start the search of the username
        Response from the network fetching petition

    Output:
        A response from the network petition, can be ok or can be failed
        If response ok an object with key properties and values
        If response ok but user not found an object with key and values
        A series of values inyected into the DOM via DOM Traversing

    Explicit requirements ?
        A input string to init the fetch, field can't be empty
        A response from the network resquest to fill the DOM Model via traversing

    Implicit requirements?
        
2. Create an example (features, user-flow, edge cases) 
    The user inputs a username and certain values from the response are displayed via DOM traversing
    The user inputs a username and the response returns non found so an error have to ve displayed via DOM traversing
    The response from the network request return null or undefined values so special values needs to be inyected via DOM traversing for those fields
    
3. Determine data structure
    Destructuring the object storing a copy of certain values into variables
     
4. Write an algorithm (in pseudocode)

    - On first load, fetch the GitHub api and show the profile information for Octocat https://api.github.com/users/octocat
    - When user inputs fhe search field and clicks the submit button:

        - Prevent default behaviour from form submitting
        - Init a fetch remplacing :username by the user input https://api.github.com/users/:username
        - Display an error message if the user does not exist in the GitHub API
        - If the user exist destructure the object response and get required key and corresponding values.
        - Store those values into variables

            - If a GitHub user hasn't added their name. Use their username (login) as name without the '@' and again with the '@' as username.
                - Add an '@' symbol to the username
            - If a GiHub user's bio is empty reference in that variable the string "This profile has no bio"
            - If any location, website, twitter or company are empty store in that variable the string "Not Available". Website, twitter and company must be links that point to those resources.
            - For the company link, it should remove the `@` symbol and link to the company page on GitHub.For Octocat, with `@github` being returned for the company, this would lead to a URL of`https://github.com/github`.

5. Code
    Follow algorithm and test as you go

What is the smallest unit of work / problem unit that I can work on ?
    How can I get it done and fast ?
        If stuck: how can I zoom out ?
*/

let URL_API = `https://api.github.com/users/:username`;
let dataFetched;
const formSearch = document.querySelector('.form__input__search');
const formSubmit = document.querySelector('.form__submit');
const formError = document.querySelector('.form__error');

formSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    fetchData(URL_API);
})

function fetchData(URL_API) {
    let githubUser = formSearch.value || 'octopus';
    URL_API = URL_API.replace(':username', githubUser);

    fetch(URL_API)
        .then(function (promise) {
            return promise.text();
        }).then(function (responseToParse) {
            console.log(responseToParse);
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
        displayProfile(dataFetched);
    }
}
function displayProfile(dataFetched) {
    let { login, name, company, blog, location, bio, twitter_username, public_repos, followers, following, created_at } = dataFetched;
    console.log(login, name, company, blog, location, bio, twitter_username, public_repos, followers, following, created_at);
}
