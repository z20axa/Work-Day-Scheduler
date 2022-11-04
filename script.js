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
console.log(currentDay);
console.log(currentTime);
console.log(typeof(currentTime));

// adds text to <p> element id=currentDay 
$currentday.text(currentDay);

function displaceappointmentColors(){
    /* background-color: #ff6961; present time color */
    /* background-color: #d3d3d3; past time color */
    /* background-color: #77dd77; future past time color*/
    if(currentTime===$9AMtextArea.val()){
        $9AMtextArea.css("background-color", "#ff6961");
    }else if(currentTime<$9AMtextArea.val()){
        $9AMtextArea.css("background-color", "#d3d3d3");
    }else{
        $9AMtextArea.css("background-color", "#77dd77");
    };
    console.log('$9AMtextArea.val()', $9AMtextArea);
};

function displaylocalstorageMessage(){
    $localstorageMessage.css("display", "block");
    $localstorageMessage.fadeOut(3000);
};

function renderlocalstorageAppoinments(){
    var appointmentTime = JSON.parse(localStorage.getItem("appointmentTime")); // get appointment time from local storage
    var appointmentText = JSON.parse(localStorage.getItem("appointmentText")); // get appointment text from local storage

    // console.log(appointmentTime);
    // console.log(appointmentText);

    $9AMtextArea.text(appointmentText);
  
    //   // checks if local storage items are empty
    //   if (appointmentTime===null || appointmentText===null){
    //       return;
    //   } else if (appointmentTime===9){  
    //   // modify the text/attributes for the appointment text for display
    //   $9AMtextArea.text(appointmentText);
    //  };
};

$Btn9AM.on('click', function (event) {
    event.preventDefault();
    // console.log(event);
    // console.log(this);
    // console.log(event.target);
    // var child = event.target;
    // console.log(child);
    console.log($Btn9AM.val());
    // console.log($9AMtextArea.val());
    // checks to make sure appoinment text entered is not blank
    if($9AMtextArea.val() === ""){
      alert("Appoinment text cannot be blank!!!");
    }else{
    // store appoinment time and text to local storage 
    localStorage.setItem("appointmentTime", JSON.stringify($Btn9AM.val()));
    localStorage.setItem("appointmentText", JSON.stringify($9AMtextArea.val()));
    };

    displaylocalstorageMessage();
});

// function call to display the appointments saved in local storage
renderlocalstorageAppoinments();

// function call to displace the colors for present, past, and future
displaceappointmentColors();

