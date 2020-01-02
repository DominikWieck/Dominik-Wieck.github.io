var myBeat: string [] = ["kick.mp3", "kick.mp3", "snare.mp3", "hihat.mp3"];
var aufnahme: boolean = false;

window.addEventListener("load", function (): void {
    document.querySelector("#button1").addEventListener("mousedown", function (): void { playSample("kick.mp3"); });
    document.querySelector("#button2").addEventListener("mousedown", function (): void { playSample("snare.mp3"); });
    document.querySelector("#button3").addEventListener("mousedown", function (): void { playSample("hihat.mp3"); });
    document.querySelector("#button4").addEventListener("mousedown", function (): void { playSample("A.mp3"); });
    document.querySelector("#button5").addEventListener("mousedown", function (): void { playSample("C.mp3"); });
    document.querySelector("#button6").addEventListener("mousedown", function (): void { playSample("F.mp3"); });
    document.querySelector("#button7").addEventListener("mousedown", function (): void { playSample("G.mp3"); });
    document.querySelector("#button8").addEventListener("mousedown", function (): void { playSample("Chewbacca_Sound_6.mp3"); });
    document.querySelector("#button9").addEventListener("mousedown", function (): void { playSample("not_even_close.mp3"); });
    document.querySelector("#play").addEventListener("click", playBeatz);
    document.querySelector("#micro").addEventListener("click", aufnehmen);
    document.querySelector("#delete").addEventListener("click", loschen);
});

//Samples
function playSample(myMelody: string): void {
    var audio: HTMLAudioElement = new Audio("assets/" + myMelody);
    audio.play();
    if (aufnahme == true) {
        myBeat.push(myMelody);
    }
}

//Beat Function
var tempo: number;
var index: number = 0;
function playBeatz(): void {

    //Button Play
    if (document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-pause");

        tempo = setInterval(beot, 300);
        aufnahme = false;
    }
    //Button Stop
    else {
        document.getElementById("play").classList.remove("fa-pause");
        document.getElementById("play").classList.add("fa-play"); clearInterval(tempo);
    }
}

//Beotyoo
function beot(): void {
    playSample(myBeat[index]);
    index += 1;

    console.log(index);

    if (index > (myBeat.length - 1))
        index = 0;
}


//Löschen
function loschen(): void {
    myBeat.length = 0;
}

//Aufnahme
function aufnehmen(): void {
    aufnahme = true;
}