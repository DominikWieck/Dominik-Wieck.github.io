namespace L10_CoronaVirus {


    export class CoronaVirus  extends Moveable{


        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number, _position?: Vector) {
            console.log("Coroni constructor");

            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(20, 50);
            console.log(this.velocity);
            this.size = _size;
        }


        draw(): void {

            crc2.resetTransform();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            console.log("Coroni draw");
            for (let i: number = 0; i < 8; i++) {
                crc2.beginPath();
                crc2.rotate(10);
                crc2.moveTo(0, 40);
                crc2.lineTo(0, 50);
                crc2.strokeStyle = "#B43104";
                crc2.lineWidth = 2;
                crc2.stroke();
                crc2.closePath();
            }


            //Zeichnen des Kreises 
            crc2.beginPath();
            crc2.arc(0, 0, 40, 0, 2 * Math.PI);
            crc2.fillStyle = "#822414";
            crc2.fill();
            crc2.closePath();

        }
    }

}
