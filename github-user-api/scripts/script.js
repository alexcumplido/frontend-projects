// 1. Understand the problem 
//     Define inputs and ouputs
//     What are the explicit - implicit requirements ?

//     2. Create an example(features, user - flow)
//     Clarify simple examples and edge cases

// 3. Determine data structure

// 4. Write an algorithm
// Pseudocode

// 5. Code
//     Follow algorithm and test as you go

// What is the smallest unit of work / problem unit that I can work on ?
//     How can I get it done and fast ?
//         If stuck: how can I zoom out ?

// The GitHub users API endpoint is`https://api.github.com/users/:username`.So, if you wanted to search for the Octocat profile, you'd be able to make a request to `https://api.github.com/users/octocat`.

// - On first load, show the profile information for Octocat.
// - Display an error message(as shown in the design) if no user is found when a new search is made.
// - If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
// - If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design). The lorem ipsum text in the designs shows how the bio should look when it is present.
// - If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added(as shown in the design).
// - Website, twitter, and company information should all be links to those resaources.For the company link, it should remove the `@` symbol and link to the company page on GitHub.For Octocat, with `@github` being returned for the company, this would lead to a URL of`https://github.com/github`.
