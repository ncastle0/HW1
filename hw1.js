/*
Name: Yaneli Castillo
File: hw1.html
Date Created: 02-07-2025
Purpose: Patient Registration Form for Family Creek Clinic (MIS 3371 HW Assignment)
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

