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

