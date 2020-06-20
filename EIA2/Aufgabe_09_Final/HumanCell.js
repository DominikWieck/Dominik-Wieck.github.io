"use strict";
var L09CoronaVirus;
(function (L09CoronaVirus) {
    class HumanCells {
        constructor(_size, _position) {
            console.log("Coroni constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L09CoronaVirus.Vector(0, 0);
            this.velocity = new L09CoronaVirus.Vector(0, 0);
            this.velocity.random(20, 50);
            console.log(this.velocity);
            this.size = _size;
        }
        move(_timeslice) {
            console.log("Coroni move");
            let offset = new L09CoronaVirus.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09CoronaVirus.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09CoronaVirus.crc2.canvas.height;
            if (this.position.x > L09CoronaVirus.crc2.canvas.width)
                this.position.x -= L09CoronaVirus.crc2.canvas.width;
            if (this.position.y > L09CoronaVirus.crc2.canvas.height)
                this.position.y -= L09CoronaVirus.crc2.canvas.height;
        }
        draw() {
            // let nParticles: number = 40;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = L09CoronaVirus.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "black");
            gradient.addColorStop(0.3, "#48803c");
            gradient.addColorStop(0.7, "#E6E6FA");
            gradient.addColorStop(1, "#E6E6FA");
            L09CoronaVirus.crc2.resetTransform();
            L09CoronaVirus.crc2.translate(this.position.x, this.position.y);
            L09CoronaVirus.crc2.fillStyle = gradient;
            L09CoronaVirus.crc2.scale(this.size, this.size);
            L09CoronaVirus.crc2.fill(particle);
            L09CoronaVirus.crc2.restore();
        }
    }
    L09CoronaVirus.HumanCells = HumanCells;
})(L09CoronaVirus || (L09CoronaVirus = {}));
//# sourceMappingURL=HumanCell.js.map