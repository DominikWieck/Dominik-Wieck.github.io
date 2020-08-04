"use strict";
var PaintIt;
(function (PaintIt) {
    class Square extends PaintIt.Figure {
        constructor(_type, _position, _velocity, _rotation, _color, _size) {
            super(_type, _position, _velocity, _rotation, _color, _size);
        }
        draw() {
            if (this.rotation == 0)
                PaintIt.crc2.translate(this.position.x, this.position.y);
            PaintIt.crc2.beginPath();
            PaintIt.crc2.moveTo(-25 * this.size, -25 * this.size);
            PaintIt.crc2.lineTo(-25 * this.size, 25 * this.size);
            PaintIt.crc2.lineTo(25 * this.size, 25 * this.size);
            PaintIt.crc2.lineTo(25 * this.size, -25 * this.size);
            PaintIt.crc2.lineTo(-25 * this.size, -25 * this.size);
            PaintIt.crc2.scale(this.size, this.size);
            PaintIt.crc2.fillStyle = this.color;
            PaintIt.crc2.strokeStyle = this.color;
            PaintIt.crc2.lineCap = "round";
            PaintIt.crc2.lineWidth = 5;
            PaintIt.crc2.lineJoin = "round";
            PaintIt.crc2.fill();
            PaintIt.crc2.stroke();
            PaintIt.crc2.closePath();
            PaintIt.crc2.resetTransform();
        }
    }
    PaintIt.Square = Square;
})(PaintIt || (PaintIt = {}));
//# sourceMappingURL=square.js.map