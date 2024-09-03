// document.getElementById("lefteye").style.backgroundColor = "purple";

// document.getElementById("head").style.transform ="rotate(345deg)";

// document.getElementById("body").style.border = "2px black solid";

// document.getElementById("mouth").style.borderRadius = "4px";

// document.getElementById("righteye").style.border = "4px yellow dotted";

// document.getElementById("leftarm").style.backgroundColor = "#FF00FF";

// document.getElementById("body").style.color = "#FF0000";

// document.getElementById("head").style.borderTop = "5px black solid";

// // Make nose round
// document.getElementById("nose").style.borderRadius = "100%";

// document.getElementById("rightarm").style.backgroundColor = "green";

// document.getElementById("mouth").style.backgroundColor = "pink";


var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var rightArm = document.getElementById("rightarm");
var mouth = document.getElementById("mouth");
mouth.addEventListener("click", changeColour);
rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown2);
rightArm.addEventListener("click", moveLeftRight);

function moveUpDown(e) {
    var robotPart = e.target;
    var top =100;
    var animation = setInterval(frame, 5);

    function frame() {

        robotPart.style.top = top+ "%";
        top--;
        if (top===20) {
            clearInterval(animation);
        }
    }
}

function moveUpDown2(e) {
    var robotPart = e.target;
    var top = 0;
    var animation = setInterval(frame, 5);

    function frame() {

        robotPart.style.top = top+ "%";
        top++;
        if (top===20) {
            clearInterval(animation);
        }
    }
}
function moveLeftRight(e) {
    var robotPart = e.target;
    var top =0;
    var animation = setInterval(frame, 5);

    function frame() {

        robotPart.style.left = top+ "%";
        top++;
        if (top===70) {
            clearInterval(animation);
        }
    }
}
function changeColour(e) {
    var robotPart = e.target;
    var num =0;
    var animation = setInterval(frame, 50);

    function frame() {
        if (num %2 === 0) {
            robotPart.style.backgroundColor = "green";
        } else {
            robotPart.style.backgroundColor = "yellow";
        }
        
        num++;
        if (num===70) {
            clearInterval(animation);
        }
    }
}
