var i = 0;
var txt = 'Nice project you got there bro, sweeeet!'; // Not sure what we want here, but this the first text shown
var speed; //Value used to control the speed at which the txt variable will be displayed
var sped = txt.length/1.5; //Value used to create varible speed for the word printing animation
var secret_value_1 = "supersecret" // We can put whatever we want here

// Does a nice printing animation that hides a text box
function typeTextOut() {
    var big_text = document.getElementById("slogan");
    if (i < txt.length) {
        big_text.value += txt.charAt(i);
        speed = sped + (i * 1.1);
        i++;
        setTimeout(typeTextOut, speed);
    }
}

// Checks if the inputted data is the correct data and alerts if correct
function activateHiddenInputOne() {
    var big_text = document.getElementById("slogan");
    if (secret_value_1 == big_text.value) {
        setTimeout(alertInput(1), 1000);
    }
}

// We can put whatever we want here
function alertInput(secret_number) {
    if (secret_number === 1) {
        setTimeout(alert("Why hello there.  Aren't you a curious little bugger?"), 1000); 
    }
}