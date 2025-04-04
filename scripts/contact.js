/* 
Assignment 3: Using JavaScript and Deploying a Website
File Name: contact.js
Description: showcasing skills in CSS, JavaScript, and website deployment via GitHub. It involves enhancing a provided website's styling
and functionality and deploying it using GitHub Pages.
Author: Jenna Hackett, ID: 000969721
Version: April 3rd 2025
*/

// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// gets the submit button element by id
let submitButton = document.getElementById("submit-button");

// gets main content area of the contact page
let contactPage = document.getElementById("contact-page")


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
function submission() {
    // thank you message string
    let thankYouMessage = "<p style='font-size: 24px; text-align: center;'>Thank you for your message</p>";

    // replaces content using .innerHTML
    contactPage.innerHTML = thankYouMessage;
}

// add event listener to submit button
submitButton.addEventListener("click", submission)