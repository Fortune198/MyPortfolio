var trainSpeed = 250;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {

    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);

    function frame() {

        trainPosition += 2;
        train.style.left = trainPosition + "%";
        checkPosition(trainPosition);
    }
}
function checkPosition(currentPosition) {

    if (currentPosition === 260) {
        alert("Crash!");
        clearInterval(animation);
    }
}
function stopTrain() {

    if (trainPosition < 260) {
        alert("you almost crashed!")
        clearInterval(animation);
    }
}
