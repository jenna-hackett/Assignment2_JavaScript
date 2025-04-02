/* 
Assignment 3: Using JavaScript and Deploying a Website
File Name: booking.js
Description: Showcasing skills in CSS, JavaScript, and website deployment via GitHub. It involves enhancing a provided website's styling
and functionality and deploying it using GitHub Pages.
Author: Jenna Hackett, ID: 000969721
Version: April 1st, 2025
*/

/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// sets default cost and num of days selected
let costPerDay = 35;
let numOfDays = 0;
let dayType = "full";

// type of day buttons
let fullDay = document.getElementById("full");
let halfDay = document.getElementById("half");

// clear button and total cost display
let clearButton = document.getElementById("clear-button");
let costDisplay = document.getElementById("calculated-cost");

// selecting all day buttons... CAN I USE THIS????
let dayElements = document.querySelectorAll(".day-selector li");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// function to update the cost of booking calculator
function updateCost() {
    costDisplay.textContent = numOfDays * costPerDay;
}

// days clicked function
function daysClicked(event) {
    let clickedDay = event.target;
    if (clickedDay.classList.contains("clicked")) {
        clickedDay.classList.remove("clicked");
        numOfDays--;
    } else {
        clickedDay.classList.add("clicked");
        numOfDays++;
    }
    updateCost();
}

// adding event listeners to each day.
dayElements.forEach(function(day) {
    day.addEventListener("click", daysClicked);
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


