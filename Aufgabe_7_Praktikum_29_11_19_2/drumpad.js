//Kick
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", function () {
        playSample("kick.mp3");
    });
    //Snare
    document.querySelector("#button2").addEventListener("mousedown", function () {
        playSample("snare.mp3");
    });
    //High-Hat
    document.querySelector("#button3").addEventListener("mousedown", function () {
        playSample("hihat.mp3");
    });
    //Tone F
    document.querySelector("#button4").addEventListener("mousedown", function () {
        playSample("F.mp3");
    });
    //Tone G
    document.querySelector("#button5").addEventListener("mousedown", function () {
        playSample("G.mp3");
    });
    //Tone A
    document.querySelector("#button6").addEventListener("mousedown", function () {
        playSample("A.mp3");
    });
    //Tone C
    document.querySelector("#button7").addEventListener("mousedown", function () {
        playSample("C.mp3");
    });
    //Laugh, well actually its Chewbacca
    document.querySelector("#button8").addEventListener("mousedown", function () {
        playSample("Chewbacca_Sound_6.mp3");
    });
    //Laugh, well not even close bby
    document.querySelector("#button9").addEventListener("mousedown", function () {
        playSample("not_even_close.mp3");
    });
    //Play that stuff
    document.querySelector("#playb").addEventListener("click", StartBeat);
});
function playSample(PlayBeat) {
    var sound = new Audio("assets/" + PlayBeat);
    sound.play();
}
;
function StartBeat() {
    var inter = setInterval(Beat, 300);
    var myBeatyo = ["assets/kick.mp3", "assets/kick.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/not_even_close.mp3"];
    var index = 0;
    function Beat() {
        var MyMelody = new Audio(myBeatyo[index]);
        MyMelody.play();
        index += 1;
        if (index > 11)
            index = 0;
        console.log(myBeatyo[index]);
    }
    ;
}
;
//# sourceMappingURL=drumpad.js.map