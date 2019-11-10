const canvas = document.querySelector("#matrix-effect");
const context = canvas.getContext("2d");
const height = (canvas.height = window.outerHeight);
const width = (canvas.width = window.outerWidth);
const column = Math.floor(width / 20) + 1;
const yPositions = Array(column).fill(0);

if (canvas.requestFullscreen) {
    console.log(canvas.requestFullscreen);
    canvas.requestFullscreen();
}

function makeMatrixEffect() {
    context.fillStyle = "#0001";
    context.fillRect(0, 0, width, height);
    context.font = "15pt monospaced";
    context.fillStyle = "#0f0";
    yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * 20;

        context.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) {
            yPositions[index] = 0;
        } else {
            yPositions[index] = y + 20;
        }
    });
}
function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

var elem = document.body; // Make the body go full screen.
requestFullScreen(elem);

setInterval(makeMatrixEffect, 50);
