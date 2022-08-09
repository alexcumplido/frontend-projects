
As a `type of user`, I want `some goal` so that `some reason`

As a User I want to split a bill between people and calculate a tip percentage over the total bill.
As a User I want to know how much each person needs to pay from the total bill cost plus the percentage tip
As a User I want to know how much each person needs to pay from the total tip percentage applied to the bill cost
As a User I want to be able to input a total bill cost, select a tip percentage and input a number of people
As a User I want to be able to reset the whole calculator to the initial state

PEDAC 
1. Problem  (inputs-outputs, explicit-implicit requirements)
    From a group of people, how much each one needs to pay given a total bill cost, a tip percentage and a number of people ?
    Given a bill as a number, the user can apply a tip percentage and a number of people among to divide the result between each of them.
    The user will se in a panel these 2 prints:
        - The total bill cost split that each person needs to pay
        - The total tip cost that each person needs to pay

    A reset button exist so everything goes without to the initial state
    Inputs:
        The total cost of the bill (integer or float) 
        The tip percentage as a number (integer or float) that needs to be added to the bill
        The number of people among will be divided the bill to pay
        Am event click on a reset buttonsage per number of people)

    Requirement
        Divide the bill cost between a specific number of poeple
        If a percentage tip applied, add that to the bill cost and re-calculate how much each one needs to pay

2. Examples (user-flow features, edge cases)
    The user can input a number (integer - float) as bill cost
    The user can select a specific percentage  as a number or float
    The user can reset the whole state of the application
    
3. Data Structure
    Variable to target the input cost bill
    Variables to target the tip percentage buttons
    Variable to target the custom tip input
    Variable to target the input number of poeple
    Variable to target the printer of total tip amount / person
    Variable to target the printer of total amount / person
    Variable to target the reset button

    function updatePrice()
    function reset ()

4. Algorightm 
    (pseudocode)

5. Code 
    (test)

1. What is the overall structure ?
3. What elements I need to use ?


What is the smallest unit of work/problem unit that I can work on ?
How can I get it done and fast ?
If stuck : how can I zoom out ?
