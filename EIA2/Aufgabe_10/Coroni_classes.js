"use strict";
var L10_CoronaVirus;
(function (L10_CoronaVirus) {
    class CoronaVirus extends L10_CoronaVirus.Moveable {
        constructor(_size, _position) {
            console.log("Coroni constructor");
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L10_CoronaVirus.Vector(0, 0);
            this.velocity = new L10_CoronaVirus.Vector(0, 0);
            this.velocity.random(20, 50);
            console.log(this.velocity);
            this.size = _size;
        }
        draw() {
            L10_CoronaVirus.crc2.resetTransform();
            L10_CoronaVirus.crc2.save();
            L10_CoronaVirus.crc2.translate(this.position.x, this.position.y);
            console.log("Coroni draw");
            for (let i = 0; i < 8; i++) {
                L10_CoronaVirus.crc2.beginPath();
                L10_CoronaVirus.crc2.rotate(10);
                L10_CoronaVirus.crc2.moveTo(0, 40);
                L10_CoronaVirus.crc2.lineTo(0, 50);
                L10_CoronaVirus.crc2.strokeStyle = "#B43104";
                L10_CoronaVirus.crc2.lineWidth = 2;
                L10_CoronaVirus.crc2.stroke();
                L10_CoronaVirus.crc2.closePath();
            }
            //Zeichnen des Kreises 
            L10_CoronaVirus.crc2.beginPath();
            L10_CoronaVirus.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
            L10_CoronaVirus.crc2.fillStyle = "#822414";
            L10_CoronaVirus.crc2.fill();
            L10_CoronaVirus.crc2.closePath();
        }
    }
    L10_CoronaVirus.CoronaVirus = CoronaVirus;
})(L10_CoronaVirus || (L10_CoronaVirus = {}));
//# sourceMappingURL=Coroni_classes.js.map