/*
PEDAC
1. Problem
    Create a component with an input range and a toggle to see prices for different page views. If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
        - 10K pageviews / $8 per month
        - 50K pageviews / $12 per month
        - 100K pageviews / $16 per month
        - 500k pageviews / $24 per month
        - 1M pageviews / $36 per month
    
    Inputs: 
        The value number type from the input range (change event)
        The click event from the toggle button 
    
    Output
        A number type value for the span.card__views text
        A number type value for the span.card__cost

    Requirements
        The user can slide up the input range and get different pageviews and monthly cost
        The user can slide down the input range and get different pageviews and monthly cost
        The user can switch the toggle and get a 25% discount over the monthly cost

2. Examples (user - flow features, edge cases)
    User slides up the input slide to 100K pageviews/month 
        and the span.card__views shows the text 100K PAGEVIEWS 
        and the span.card__cost shows 16$ / month

    If user switches the goggle then span.card__cost shows 16$*0.25 (Do discount percentage)

    If user switches again the toggle then span.card__cost shows 16$ (Without discount)

3. Data Structure
    a variable to target the span.card__views
    a variable to target the span.card__input
    a variable tot arget the span.card__cost
    a variable to target the button.card__toggle
    
    a function that listen for the change in input range and prints the value of the input in span.card__views
    a function that listen for the click in button.card__toggle
4. Algorightm
    (pseudocode)

5. Code
    (test)

*/

// What is the smallest unit of work / problem unit that I can work on ?
//     How can I get it done and fast ?
//         If stuck: how can I zoom out ?

const views = document.querySelector('#views');
views.addEventListener('change', function (event) {
    console.log(event.target.value);
})
