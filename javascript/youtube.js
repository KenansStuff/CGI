var player;

function resizeme() {


    var breite = $(window).width();
    if (breite > 720) {
      var breite = breite / 10 * 6;
    }
    var hoehe = breite / 16 * 9;

    var hoehemaps = breite / 600 * 450;

    $("#player").width(breite);
    $("#player").height(hoehe);
    $("#googlemaps").width(breite);
    $("#googlemaps").height(hoehemaps);
};

$(function() {
  resizeme();
  $(window).resize(resizeme);
});
