//playlist for sound
playlist = {
    '0' : 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
    '1' : '9pbx76j-birds_RSAB9U5R.mp3',
    '2' : 'https://www.youtube.com/watch?v=BM-eu593lzw',
    '3' : 'audio/seagulls.mp3',
}
function play(id) {
    var audio;
    audio = new Audio(playlist[id]);
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
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer = null;
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
