PEDAC
1. Problem
  Input - Output
  How to get inputs form validated through Regular Expressions ?
    Create a regular expression that matches your validation standards
    Once the form is submitted compare the regex against the input 
  How to replace the form element by a continuation modal ?
    If validation is OK hidden the form and display the form
  How to turn back the layout to its initial stage ?
    When continue clicked hide the modal and display the form

Requirements
- Update card details as the user fills in the fields
- Validate form fields once submitted
- If errors display messages otherwise display completed state
- When user clicks continue reset the form

**Remember name the url project something non-related to cards/forms or payments in order to prevent secutiry blockage.

2. Examples (user-flow, features)

As a `user`, I want `fill the form `and see how the card details are `card details are  synchronously updated` so that `I can get a better user experience`.

As a user I want to receive an error message when the form is submitted if:
  - Any input field is empty
  - The card number, expire date, or CVC fields are in the wrong format

  so I can realize if I input incorrectly any input

As a user I want to view the optimat layout in mobile or desktop devices.
As a user I want to see the hover, active and focus states for interactive elements

3. Data Structure
  confirmButton.addEventListner() 

  for each input a function that validates the value and the regex
  a variable that target the form html component
  a variable that tharget the modal wrapper 


4. Algorightm (pseudocode)
W
  2. Work on the JavaScript Logig
    X - Query Card details via document selectors
    X - Query input HTML element via document selectors
    X - add event listener to each input and inyect value to the card detail output
    X - add an event listener to the form submit and prevent devault
    X - Create regex expressions for each input that needs validation

    - compare input value agaisnt regex
    - If validation form is ok change style via dom and hide form displaying modal
    - add event listener to continue button from modal
    - If user clicks hide modal and display form

5. Code (test)


https://stackoverflow.com/questions/25101781/javascript-regex-split-credit-card-numbers