namespace L02_SequenceMemory { //gecoded mit Tanja Schuchter

    let chosensequence: string = "";
    let sequenceArr: string[] = [];
    let gametime: number;
    let claritytime: number;
    let joker: boolean = false;
    let i: number = 0;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        document.querySelector("#chosensequence").addEventListener("keydown", helper);

        let help: HTMLInputElement = <HTMLInputElement>document.createElement("p"); //Funktion die die Sequenz vollständig anzeigen sollte

        function helper() {
            document.querySelector("#help").innerHTML = chosensequence; // Funktion, die das Dokument anzeigen sollte
        }

    }

    document.querySelector("#gametime").addEventListener("keydown", GTime);
    function GTime() {

        let help: HTMLInputElement = <HTMLInputElement>document.createElement("p"); //Funktion die die Sequenz vollständig anzeigen sollte

        document.querySelector("#chosensequence").innerHTML = gametime;
        setInterval(GTime)


    }


    let time = setInterval(myTimer, 1000);

    function myTimer() { // Funktion des Countdowns

    }

    document.querySelector("#claritytime").addEventListener("keydown", CTime);
    function CTime() {
        let help: HTMLInputElement = <HTMLInputElement>document.createElement("p"); //Funktion die die Sequenz vollständig anzeigen sollte
        document.querySelector("#claritytime").innerHTML = gametime;
        setInterval(CTime);


    }


    let time = setInterval(myTimer, 1000);

    function myTimer() {

    }

    document.querySelector("Start").addEventListener("click", startGame)

    function startGame {

        let help: HTMLInputElement = <HTMLInputElement>document.createElement("p"); //Funktion die die Sequenz vollständig anzeigen sollte

        chosensequence = help.value;
        sequenceArr = chosensequence.split("");
        sequenceArr.sort();
        let letter: HTMLSpanElement = <HTMLSpanElement>document.createElement("span");
        document.querySelector("#chosensequence").innerHTML = letter.textcontent;

    }

}

}
