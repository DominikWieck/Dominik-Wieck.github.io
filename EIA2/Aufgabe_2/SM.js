var L02_SequenceMemory;
(function (L02_SequenceMemory) {
    var chosensequence = "";
    var sequenceArr = [];
    var gametime;
    var claritytime;
    var joker = false;
    var i = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.querySelector("#chosensequence").addEventListener("keydown", helper);
        var help = document.createElement("p"); //Funktion die die Sequenz vollständig anzeigen sollte
        function helper() {
            document.querySelector("#help").innerHTML = chosensequence; // Funktion, die das Dokument anzeigen sollte
        }
    }
    document.querySelector("#gametime").addEventListener("keydown", GTime);
    function GTime() {
        var help = document.createElement("p"); //Funktion die die Sequenz vollständig anzeigen sollte
        document.querySelector("#chosensequence").innerHTML = gametime;
        setInterval(GTime);
    }
    var time = setInterval(myTimer, 1000);
    function myTimer() {
    }
    document.querySelector("#claritytime").addEventListener("keydown", CTime);
    function CTime() {
        var help = document.createElement("p"); //Funktion die die Sequenz vollständig anzeigen sollte
        document.querySelector("#claritytime").innerHTML = gametime;
        setInterval(CTime);
    }
    var time = setInterval(myTimer, 1000);
    function myTimer() {
    }
    document.querySelector("Start").addEventListener("click", startGame);
    function startGame() {
        var help = document.createElement("p"); //Funktion die die Sequenz vollständig anzeigen sollte
        chosensequence = help.value;
        sequenceArr = chosensequence.split("");
        sequenceArr.sort();
        var letter = document.createElement("span");
        document.querySelector("#chosensequence").innerHTML = letter.textcontent;
    }
})(L02_SequenceMemory || (L02_SequenceMemory = {}));
//# sourceMappingURL=SM.js.map