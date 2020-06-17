"use strict";
var L09CoronaVirus;
(function (L09CoronaVirus) {
    let crc2;
    class CoronaVirus {
        constructor(_size) {
            console.log("Coroni constructor");
            this.position = new L09CoronaVirus.Vector(0, 0);
            this.velocity = new L09CoronaVirus.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(timeslice) {
            console.log("Coroni move");
        }
        draw() {
            console.log("Coroni draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.stroke(L09CoronaVirus.particle(this.type)); // ehy kp alda 
        }
    }
    L09CoronaVirus.CoronaVirus = CoronaVirus;
})(L09CoronaVirus || (L09CoronaVirus = {}));
//# sourceMappingURL=Coroni_classes.js.map