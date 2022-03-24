function showPopUp() {
    var txt;
    if (confirm("Here is a random number: " + generateRandomNumber(1, 23) + "\nMake a choice!")) {
        txt = "You pressed OK!";
        playSound('zap.m4a');
    } else {
        txt = "You pressed Cancel!";
        playSound('boink.wav');
    }
    document.getElementById("demoButton").innerHTML = txt;

    setTimeout(() => showPopUp(), 2000);
}

function generateRandomNumber(lowBound, highBound) {
    return Math.floor(Math.random() * highBound) + lowBound;
}

function playSound(file) {
    var audio = new Audio(file);
    audio.play();
}

