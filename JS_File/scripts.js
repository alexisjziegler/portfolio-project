/*
    Name: Alexis Ziegler
    Student ID: 970781611
    Course: IST 256
    Assignment: LIVE Portfolio Page + DOM Activities
    Submission Date: February 8, 2026
    GitHub Repository: https://github.com/alexisjziegler/portfolio-project 
*/


/* Script for toggling and un-toggling the visibility of the sections */

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

/* Alert on page load and unload */
function onload() {
    // Get all sections and hide them on page load
    alert("Welcome to my portfolio!");
}

function onunload() {
    alert("Thank you for visiting my portfolio!");
}