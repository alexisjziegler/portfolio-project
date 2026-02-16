/*
    Name: Alexis Ziegler
    Student ID: 970781611
    Course: IST 256
    Assignment: LIVE Portfolio Page + Bootstrap
    Submission Date: February 15, 2026
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

function onUnload() {
    alert("Thank you for visiting my portfolio!");
}

/* Onmouseover and onmouseout functions */
function onMouseOver(element) {
    element.style.width = '15%'
    element.style.transition = 'width 0.5s';
    element.style.transition = 'height 0.5s';
    element.style.height = '30%';
}

function onMouseOut(element) {
    element.style.width = '13%';
    element.style.height = '10%';
    element.style.transition = 'width 0.5s';
    element.style.transition = 'height 0.5s';
}