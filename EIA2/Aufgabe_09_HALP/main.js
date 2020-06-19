"use strict";
var L09CoronaVirus;
(function (L09CoronaVirus) {
    window.addEventListener("load", handleLoad);
    let viruss = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Bam");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09CoronaVirus.crc2 = canvas.getContext("2d");
        drawBackground();
        createCoronii(10);
        window.setInterval(update, 20);
    }
    function drawBackground() {
        console.log("Background");
        L09CoronaVirus.crc2.resetTransform();
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
        L09CoronaVirus.crc2.fillStyle = L09CoronaVirus.crc2.createPattern(pattern.canvas, "repeat");
        L09CoronaVirus.crc2.fillRect(0, 0, L09CoronaVirus.crc2.canvas.width, L09CoronaVirus.crc2.canvas.height);
    }
    function createCoronii(_nCoronii) {
        console.log("SHOW SOME TIDDYS");
        for (let i = 0; i < _nCoronii; i++) {
            let coronii = new L09CoronaVirus.CoronaVirus(1.0);
            viruss.push(coronii);
        }
    }
    function update() {
        console.log("Update");
        drawBackground();
        for (let coronii of viruss) {
            coronii.move(1 / 80);
            coronii.draw();
        }
    }
})(L09CoronaVirus || (L09CoronaVirus = {}));
//# sourceMappingURL=main.js.map