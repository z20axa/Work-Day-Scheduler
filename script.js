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
var currentTime = parseInt(moment().format("h"));

console.log(currentTime);
console.log(typeof(currentTime));

// adds text to <p> element to display the current day 
$currentday.text(currentDay);

// function displaceappointmentColors(){
//     /* background-color: #ff6961; present time color */
//     /* background-color: #d3d3d3; past time color */
//     /* background-color: #77dd77; future past time color*/
//     if(currentTime===$9AMtextArea.val()){
//         $9AMtextArea.css("background-color", "#ff6961");
//     }else if(currentTime<$9AMtextArea.val()){
//         $9AMtextArea.css("background-color", "#d3d3d3");
//     }else{
//         $9AMtextArea.css("background-color", "#77dd77");
//     };
//     console.log('$9AMtextArea.val()', $9AMtextArea);
// };

/**
 * function declaration to display message that time and appoinment texts have been stored in local storage
 */
function displaylocalstorageMessage(){
    $localstorageMessage.css("display", "block");
    $localstorageMessage.fadeOut(3000);
};

/**
 * function declaration to get the times and appoinment texts from local storage for the display to persist on the page even after page is refreshed
 */
function renderlocalstorageAppoinments(){

    //   // checks if local storage items are empty
    //   if (appointmentTime===null || appointmentText===null){
    //       return;
    //   } else if (appointmentTime===9){  
    //   // modify the text/attributes for the appointment text for display
    //   $9AMtextArea.text(appointmentText);
    //  };


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

    // // checks to make sure appoinment text entered is not blank
    // if($9AMtextArea.val() === ""){
    //   alert("Appoinment text cannot be blank!!!");
    // }else{
    // // store appoinment time and text to local storage 
    // localStorage.setItem("appointmentTime", JSON.stringify($Btn9AM.val()));
    // localStorage.setItem("appointmentText", JSON.stringify($9AMtextArea.val()));
    // };

    // console.log($Btn9AM.val());
    // console.log($9AMtextArea.val());

    localStorage.setItem("appointmentTime9AM", JSON.stringify($Btn9AM.val()));
    localStorage.setItem("appointmentText9AM", JSON.stringify($9AMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 10AM appointments entered
$Btn10AM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    localStorage.setItem("appointmentTime10AM", JSON.stringify($Btn10AM.val()));
    localStorage.setItem("appointmentText10AM", JSON.stringify($10AMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 11AM appointments entered
$Btn11AM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    localStorage.setItem("appointmentTime11AM", JSON.stringify($Btn11AM.val()));
    localStorage.setItem("appointmentText11AM", JSON.stringify($11AMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 12PM appointments entered
$Btn12PM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    localStorage.setItem("appointmentTime12PM", JSON.stringify($Btn12PM.val()));
    localStorage.setItem("appointmentText12PM", JSON.stringify($12PMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 1PM appointments entered
$Btn1PM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    localStorage.setItem("appointmentTime1PM", JSON.stringify($Btn1PM.val()));
    localStorage.setItem("appointmentText1PM", JSON.stringify($1PMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 2PM appointments entered
$Btn2PM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    localStorage.setItem("appointmentTime2PM", JSON.stringify($Btn2PM.val()));
    localStorage.setItem("appointmentText2PM", JSON.stringify($2PMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 3PM appointments entered
$Btn3PM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    localStorage.setItem("appointmentTime3PM", JSON.stringify($Btn3PM.val()));
    localStorage.setItem("appointmentText3PM", JSON.stringify($3PMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 4PM appointments entered
$Btn4PM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    localStorage.setItem("appointmentTime4PM", JSON.stringify($Btn4PM.val()));
    localStorage.setItem("appointmentText4PM", JSON.stringify($4PMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});

// click event listener for 5PM appointments entered
$Btn5PM.on('click', function(event){
    // prevent page to refresh to see the appointment entered display still on the page
    event.preventDefault();

    localStorage.setItem("appointmentTime5PM", JSON.stringify($Btn5PM.val()));
    localStorage.setItem("appointmentText5PM", JSON.stringify($5PMtextArea.val()));

    // function call to display the message that the appointment has been stored in local storage
    displaylocalstorageMessage();
});


// function call to display the appointments saved in local storage
renderlocalstorageAppoinments();

// // function call to displace the colors for present, past, and future
// displaceappointmentColors();

