var myBeat = ["kick.mp3", "kick.mp3", "kick.mp3", "snare.mp3", "hihat.mp3", "hihat.mp3", "kick.mp3", "hihat.mp3", "snare.mp3", "not_even_close.mp3"];
var aufnahme = false;
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", function () { playSample("kick.mp3"); });
    document.querySelector("#button2").addEventListener("mousedown", function () { playSample("snare.mp3"); });
    document.querySelector("#button3").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
    document.querySelector("#button4").addEventListener("mousedown", function () { playSample("A.mp3"); });
    document.querySelector("#button5").addEventListener("mousedown", function () { playSample("C.mp3"); });
    document.querySelector("#button6").addEventListener("mousedown", function () { playSample("F.mp3"); });
    document.querySelector("#button7").addEventListener("mousedown", function () { playSample("G.mp3"); });
    document.querySelector("#button8").addEventListener("mousedown", function () { playSample("Chewbacca_Sound_6.mp3"); });
    document.querySelector("#button9").addEventListener("mousedown", function () { playSample("not_even_close.mp3"); });
    document.querySelector("#play").addEventListener("click", playBeatz);
    document.querySelector("#micro").addEventListener("click", aufnehmen);
    document.querySelector("#delete").addEventListener("click", loschen);
});
//Samples
function playSample(myMelody) {
    var audio = new Audio("assets/" + myMelody);
    audio.play();
    if (aufnahme == true) {
        myBeat.push(myMelody);
    }
}
//Beat Function
var tempo;
var index = 0;
function playBeatz() {
    var meinButton = document.querySelector("#play");
    if (meinButton.className == "fas fa-play") {
        meinButton.className = "fas fa-stop";
        tempo = setInterval(beot, 300);
        aufnahme = false;
    }
    else {
        meinButton.className = "fas fa-play";
    }
}
//Beotyoo
function beot() {
    playSample(myBeat[index]);
    index += 1;
    console.log(index);
    if (index > (myBeat.length - 1))
        index = 0;
}
//Löschen
function loschen() {
    myBeat.length = 0;
}
//Aufnahme
function aufnehmen() {
    aufnahme = true;
}
//# sourceMappingURL=drumpad.js.map