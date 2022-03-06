//playlist for sound
playlist = {
    '0' : 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
    '1' : 'sound/bird.mp3',
    '2' : 'sound/fish.mp3',
    '3' : 'http://www.amphibienschutz.de/sounds/spfr.wav',
}
function play(id) {
    var audio = new Audio();
    audio.src = playlist[id];
    audio.play();
}

//animation main-title
const text = document.querySelector(".main-title");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (var i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 80);
let color1 = "rgb(64, 199, 129)", color2 = "rgb(255, 255, 255)";
function onTick(){
    const span = text.querySelectorAll('span')[char];
    if (span.style.color == color1) span.style.color = color2;
    else span.style.color = color1;
    char++;
    if (char === splitText.length){
        char = 0
        return;
    }
}


//hover table text and background
$(document).ready(function() {
    let tableTxt = $("td");
    tableTxt.mouseenter(function() {
        $(this).css("color", "#40c781");
        $(this).css("background-color", "#323539");
    });
    tableTxt.mouseleave(function() {
        $(this).css("color", "white");
        $(this).css("background-color", "#212529");
    });
});
