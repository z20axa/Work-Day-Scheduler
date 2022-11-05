// <p> element current day DOM variable assignments
var $currentday = $('#currentDay');

// <h5> element local storage DOM variable assignments
var $localstorageMessage = $('#localstorageMessage');

// <textarea> elements DOM variable assignments
var $9AMtextArea = $('#9AMtextArea');
var $10AMtextArea = $('#10AMtextArea');
var $11AMtextArea = $('#11AMtextArea');
var $12PMtextArea = $('#12PMtextArea');
var $1PMtextArea = $('#1PMtextArea');
var $2PMtextArea = $('#2PMtextArea');
var $3PMtextArea = $('#3PMtextArea');
var $4PMtextArea = $('#4PMtextArea');
var $5PMtextArea = $('#5PMtextArea');

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
var currentTime = parseInt(moment().format("h")); // parseInt to change to a number typeof
// console.log('currentDAy', currentDay);
// console.log('curentTime', currentTime);
// console.log('curentTime', typeof(currentTime));

// adds text to <p> element to display the current day 
$currentday.text(currentDay);

/**
 * function declaration to display the textarea colors red (current), gray (past), and green (future) compared to the current time from moment js library
 */
function displayappointmentColors(){
    // console.log('$Btn9AM value', parseInt($Btn9AM.val()));
    // console.log('$Btn9AM value', typeof(parseInt($Btn9AM.val())));

    /* background-color: #ff6961; red present textarea color */
    /* background-color: #d3d3d3; gray past textarea color */
    /* background-color: #77dd77; green future textarea color */

    // textarea color display if/else conditions for 9AM timeblock
    if(currentTime === parseInt($Btn9AM.val())){
        $9AMtextArea.css("background-color", "#ff6961"); // red present textarea color
    }else if(currentTime < parseInt($Btn9AM.val())){
        $9AMtextArea.css("background-color", "#d3d3d3"); // gray past textarea color
    }else{
        $9AMtextArea.css("background-color", "#77dd77"); // green future textarea color
    };

    // textarea color display if/else conditions for 10AM timeblock
    if(currentTime === parseInt($Btn10AM.val())){
        $10AMtextArea.css("background-color", "#ff6961"); // red present textarea color
    }else if(currentTime < parseInt($Btn10AM.val())){
        $10AMtextArea.css("background-color", "#d3d3d3"); // gray past textarea color
    }else{
        $10AMtextArea.css("background-color", "#77dd77"); // green future textarea color
    };

    // textarea color display if/else conditions for 11AM timeblock
    if(currentTime === parseInt($Btn11AM.val())){
        $11AMtextArea.css("background-color", "#ff6961"); // red present textarea color
    }else if(currentTime < parseInt($Btn11AM.val())){
        $11AMtextArea.css("background-color", "#d3d3d3"); // gray past textarea color
    }else{
        $11AMtextArea.css("background-color", "#77dd77"); // green future textarea color
    };

    // textarea color display if/else conditions for 12PM timeblock
    if(currentTime === parseInt($Btn12PM.val())){
        $12PMtextArea.css("background-color", "#ff6961"); // red present textarea color
    }else if(currentTime < parseInt($Btn12PM.val())){
        $12PMtextArea.css("background-color", "#d3d3d3"); // gray past textarea color
    }else{
        $12PMtextArea.css("background-color", "#77dd77"); // green future textarea color
    };

    // textarea color display if/else conditions for 1PM timeblock
    if((currentTime + 12) === parseInt($Btn1PM.val())){
        $1PMtextArea.css("background-color", "#ff6961"); // red present textarea color
    }else if((currentTime + 12) > parseInt($Btn1PM.val())){
        $1PMtextArea.css("background-color", "#d3d3d3"); // gray past textarea color
    }else{
        $1PMtextArea.css("background-color", "#77dd77"); // green future textarea color
    };

    // textarea color display if/else conditions for 2PM timeblock
    if((currentTime + 12) === parseInt($Btn2PM.val())){
        $2PMtextArea.css("background-color", "#ff6961"); // red present textarea color
    }else if((currentTime + 12) > parseInt($Btn2PM.val())){
        $2PMtextArea.css("background-color", "#d3d3d3"); // gray past textarea color
    }else{
        $2PMtextArea.css("background-color", "#77dd77"); // green future textarea color
    };

    // textarea color display if/else conditions for 3PM timeblock
    if((currentTime + 12) === parseInt($Btn3PM.val())){
        $3PMtextArea.css("background-color", "#ff6961"); // red present textarea color
    }else if((currentTime + 12) > parseInt($Btn3PM.val())){
        $3PMtextArea.css("background-color", "#d3d3d3"); // gray past textarea color
    }else{
        $3PMtextArea.css("background-color", "#77dd77"); // green future textarea color
    };

    // textarea color display if/else conditions for 4PM timeblock
    if((currentTime + 12) === parseInt($Btn4PM.val())){
        $4PMtextArea.css("background-color", "#ff6961"); // red present textarea color
    }else if((currentTime + 12) > parseInt($Btn4PM.val())){
        $4PMtextArea.css("background-color", "#d3d3d3"); // gray past textarea color
    }else{
        $4PMtextArea.css("background-color", "#77dd77"); // green future textarea color
    };

    // textarea color display if/else conditions for 5PM timeblock
    if((currentTime + 12) === parseInt($Btn5PM.val())){
        $5PMtextArea.css("background-color", "#ff6961"); // red present textarea color
    }else if((currentTime + 12) > parseInt($Btn5PM.val())){
        $5PMtextArea.css("background-color", "#d3d3d3"); // gray past textarea color
    }else{
        $5PMtextArea.css("background-color", "#77dd77"); // green future textarea color
    };
};

/**
 * function declaration to display message that the time and appoinment text has been stored in local storage
 */
function displaylocalstorageMessage(){
    $localstorageMessage.css("display", "block"); // change css display from none to block to display on the page
    $localstorageMessage.fadeOut(3000); // to disappear/fade out diplay message after 3 secs
};

/**
 * function declaration to get the times and appoinment texts from local storage for the display to persist on the page even after page is refreshed
 */
function renderlocalstorageAppoinments(){
    // gets 9AM appointment time and text from local storage
    var appointmentTime9AM = JSON.parse(localStorage.getItem("appointmentTime9AM")); 
    var appointmentText9AM = JSON.parse(localStorage.getItem("appointmentText9AM")); 

    // gets 10AM appointment time and text from local storage
    var appointmentTime10AM = JSON.parse(localStorage.getItem("appointmentTime10AM")); 
    var appointmentText10AM = JSON.parse(localStorage.getItem("appointmentText10AM")); 

    // gets 11AM appointment time and text from local storage
    var appointmentTime11AM = JSON.parse(localStorage.getItem("appointmentTime11AM")); 
    var appointmentText11AM = JSON.parse(localStorage.getItem("appointmentText11AM")); 

    // gets 12PM appointment time and text from local storage
    var appointmentTime12PM = JSON.parse(localStorage.getItem("appointmentTime12PM")); 
    var appointmentText12PM = JSON.parse(localStorage.getItem("appointmentText12PM")); 

    // gets 1PM appointment time and text from local storage
    var appointmentTime1PM = JSON.parse(localStorage.getItem("appointmentTime1PM")); 
    var appointmentText1PM = JSON.parse(localStorage.getItem("appointmentText1PM")); 

    // gets 2PM appointment time and text from local storage
    var appointmentTime2PM = JSON.parse(localStorage.getItem("appointmentTime2PM")); 
    var appointmentText2PM = JSON.parse(localStorage.getItem("appointmentText2PM")); 

    // gets 3PM appointment time and text from local storage
    var appointmentTime3PM = JSON.parse(localStorage.getItem("appointmentTime3PM")); 
    var appointmentText3PM = JSON.parse(localStorage.getItem("appointmentText3PM")); 

    // gets 4PM appointment time and text from local storage
    var appointmentTime4PM = JSON.parse(localStorage.getItem("appointmentTime4PM")); 
    var appointmentText4PM = JSON.parse(localStorage.getItem("appointmentText4PM")); 

    // gets 5PM appointment time and text from local storage
    var appointmentTime5PM = JSON.parse(localStorage.getItem("appointmentTime5PM")); 
    var appointmentText5PM = JSON.parse(localStorage.getItem("appointmentText5PM")); 

    // add the texts from local storage to the <textarea> elements to dispaly in the timeblocks
    $9AMtextArea.text(appointmentText9AM);
    $10AMtextArea.text(appointmentText10AM);
    $11AMtextArea.text(appointmentText11AM);
    $12PMtextArea.text(appointmentText12PM);
    $1PMtextArea.text(appointmentText1PM);
    $2PMtextArea.text(appointmentText2PM);
    $3PMtextArea.text(appointmentText3PM);
    $4PMtextArea.text(appointmentText4PM);
    $5PMtextArea.text(appointmentText5PM);
};

// click event listener for 9AM appointments entered
$Btn9AM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    // store appointment time and text in local storage
    localStorage.setItem("appointmentTime9AM", JSON.stringify($Btn9AM.val()));
    localStorage.setItem("appointmentText9AM", JSON.stringify($9AMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 10AM appointments entered
$Btn10AM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    // store appointment time and text in local storage
    localStorage.setItem("appointmentTime10AM", JSON.stringify($Btn10AM.val()));
    localStorage.setItem("appointmentText10AM", JSON.stringify($10AMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 11AM appointments entered
$Btn11AM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    // store appointment time and text in local storage
    localStorage.setItem("appointmentTime11AM", JSON.stringify($Btn11AM.val()));
    localStorage.setItem("appointmentText11AM", JSON.stringify($11AMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 12PM appointments entered
$Btn12PM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    // store appointment time and text in local storage
    localStorage.setItem("appointmentTime12PM", JSON.stringify($Btn12PM.val()));
    localStorage.setItem("appointmentText12PM", JSON.stringify($12PMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 1PM appointments entered
$Btn1PM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    // store appointment time and text in local storage
    localStorage.setItem("appointmentTime1PM", JSON.stringify($Btn1PM.val()));
    localStorage.setItem("appointmentText1PM", JSON.stringify($1PMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 2PM appointments entered
$Btn2PM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    // store appointment time and text in local storage
    localStorage.setItem("appointmentTime2PM", JSON.stringify($Btn2PM.val()));
    localStorage.setItem("appointmentText2PM", JSON.stringify($2PMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 3PM appointments entered
$Btn3PM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    // store appointment time and text in local storage
    localStorage.setItem("appointmentTime3PM", JSON.stringify($Btn3PM.val()));
    localStorage.setItem("appointmentText3PM", JSON.stringify($3PMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 4PM appointments entered
$Btn4PM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    // store appointment time and text in local storage
    localStorage.setItem("appointmentTime4PM", JSON.stringify($Btn4PM.val()));
    localStorage.setItem("appointmentText4PM", JSON.stringify($4PMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 5PM appointments entered
$Btn5PM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    // store appointment time and text in local storage
    localStorage.setItem("appointmentTime5PM", JSON.stringify($Btn5PM.val()));
    localStorage.setItem("appointmentText5PM", JSON.stringify($5PMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// // function call to displace the colors for present, past, and future
displayappointmentColors();

// function call to display the appointments saved in local storage
renderlocalstorageAppoinments();



