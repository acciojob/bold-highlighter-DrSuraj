// function highlight() {
//     //Write your code here


// }


// function return_normal() {
//     //Write your code here

    
// }

// script.js

// Function to highlight bold words in green
function highlight() {
    const boldElements = document.querySelectorAll('strong');
    boldElements.forEach(element => {
        element.style.color = 'green';
    });
}

// Function to revert the color of bold words back to black
function return_normal() {
    const boldElements = document.querySelectorAll('strong');
    boldElements.forEach(element => {
        element.style.color = 'black';
    });
}

// Get the link element and add event listeners
const link = document.getElementById('bold-high');
link.addEventListener('mouseover', highlight);
link.addEventListener('mouseout', return_normal);
