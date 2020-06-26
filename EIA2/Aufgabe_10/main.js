"use strict";
var L10_CoronaVirus;
(function (L10_CoronaVirus) {
    window.addEventListener("load", handleLoad);
    // let viruss: CoronaVirus[] = [];
    // let cells: HumanCell[] = [];
    // let partis: Particles[] = [];
    let movable = [];
    function handleLoad(_event) {
        console.log("Bam");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_CoronaVirus.crc2 = canvas.getContext("2d");
        drawBackground();
        createCoronii(10);
        window.setInterval(update, 20);
        createCell(10);
        window.setInterval(update, 20);
        createParti(50);
    }
    function drawBackground() {
        console.log("Background");
        L10_CoronaVirus.crc2.resetTransform();
        //Eigener Background 
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = '#db305e';
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(5, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();
        //Punkt in Zelle
        pattern.beginPath();
        pattern.arc(50, 20, 2, 0, 2 * Math.PI);
        pattern.fillStyle = "#88888844";
        pattern.fill();
        L10_CoronaVirus.crc2.fillStyle = L10_CoronaVirus.crc2.createPattern(pattern.canvas, "repeat");
        L10_CoronaVirus.crc2.fillRect(0, 0, L10_CoronaVirus.crc2.canvas.width, L10_CoronaVirus.crc2.canvas.height);
    }
    function createCoronii(_nCoronii) {
        for (let i = 0; i < _nCoronii; i++) {
            let coronii = new L10_CoronaVirus.CoronaVirus(1.0);
            movable.push(coronii);
        }
        console.log(movable);
    }
    function createCell(_nCoronii) {
        for (let i = 0; i < _nCoronii; i++) {
            let cell = new L10_CoronaVirus.HumanCell(1.0);
            movable.push(cell);
        }
    }
    function createParti(_nCoronii) {
        for (let i = 0; i < _nCoronii; i++) {
            let parti = new L10_CoronaVirus.Particles(1.0);
            movable.push(parti);
        }
    }
    function update() {
        console.log("Update");
        drawBackground();
        for (let coronii of movable) {
            coronii.move(1 / 80);
            coronii.draw();
        }
        for (let cell of movable) {
            cell.move(1 / 100);
            cell.draw();
        }
        for (let parti of movable) {
            parti.move(1 / 50);
            parti.draw();
        }
    }
})(L10_CoronaVirus || (L10_CoronaVirus = {}));
//# sourceMappingURL=main.js.map