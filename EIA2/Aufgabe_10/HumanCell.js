"use strict";
var L10_CoronaVirus;
(function (L10_CoronaVirus) {
    class HumanCell extends L10_CoronaVirus.Moveable {
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
            // let nParticles: number = 40;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = L10_CoronaVirus.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "black");
            gradient.addColorStop(0.3, "#48803c");
            gradient.addColorStop(0.7, "#E6E6FA");
            gradient.addColorStop(1, "#E6E6FA");
            L10_CoronaVirus.crc2.resetTransform();
            L10_CoronaVirus.crc2.translate(this.position.x, this.position.y);
            L10_CoronaVirus.crc2.fillStyle = gradient;
            L10_CoronaVirus.crc2.scale(this.size, this.size);
            L10_CoronaVirus.crc2.fill(particle);
            L10_CoronaVirus.crc2.restore();
        }
    }
    L10_CoronaVirus.HumanCell = HumanCell;
})(L10_CoronaVirus || (L10_CoronaVirus = {}));
//# sourceMappingURL=HumanCell.js.map