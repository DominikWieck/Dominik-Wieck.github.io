"use strict";
var PaintIt;
(function (PaintIt) {
    class Circle extends PaintIt.Figure {
        constructor(_type, _position, _velocity, _rotation, _color, _size) {
            super(_type, _position, _velocity, _rotation, _color, _size);
        }
        draw() {
            if (this.rotation == 0)
                PaintIt.crc2.translate(this.position.x, this.position.y);
            PaintIt.crc2.beginPath();
            PaintIt.crc2.arc(0, 0, 30 * this.size, -1.35, 1.4 * Math.PI);
            PaintIt.crc2.scale(this.size * 2, this.size * 2);
            PaintIt.crc2.lineCap = "round";
            PaintIt.crc2.strokeStyle = this.color;
            PaintIt.crc2.lineWidth = 3;
            PaintIt.crc2.stroke();
            PaintIt.crc2.closePath();
            PaintIt.crc2.resetTransform();
        }
    }
    PaintIt.Circle = Circle;
})(PaintIt || (PaintIt = {}));
//# sourceMappingURL=circle.js.map