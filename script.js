// variable declarations
var currentDay = moment().format("dddd, MMMM Do");
var currentTime = moment().format("hA");
console.log(currentDay);
console.log(currentTime);

// DOM variable assignments
// <p> element id=currentDay 
var currentdayEl = $('#currentDay');

// adds text to <p> element id=currentDay 
currentdayEl.text(currentDay);

