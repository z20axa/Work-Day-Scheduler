// <p> element DOM variable assignments
var $currentday = $('#currentDay');

// <button> elements DOM variable assignments
var $Btn9AM = $('#Btn9AM');
var $Btn10AM = $('#Btn10AM');
var $Btn11AM = $('#Btn11AM');
var $Btn12PM = $('#Btn12PM');
var $Btn1PM = $('#Btn1PM');
var $Btn2PM = $('#Btn2PM');
var $Btn3PM = $('#Btn3PM');
var $Btn4PM = $('#Btn4PM');
var $Btn5PM = $('#Btn5PM');

// variable declarations by using moment JS library
var currentDay = moment().format("dddd, MMMM Do");
var currentTime = moment().format("hA");
console.log(currentDay);
console.log(currentTime);

// adds text to <p> element id=currentDay 
$currentday.text(currentDay);

$Btn9AM.on('click', function (event) {
    // event.preventDefault();
    console.log(this);
    console.log(event);
    console.log(event.target);
    // var newPassword = passwordGenerator(15);
    // passwordDisplayEl.text(newPassword);
    // console.log(newPassword);
});
  
