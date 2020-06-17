namespace L09CoronaVirus {

    let crc2: CanvasRenderingContext2D;
    export class CoronaVirus {


        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number) {
            console.log("Coroni constructor");
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }

        move(timeslice: number): void {
            console.log("Coroni move");

        }

        draw(): void {
            console.log("Coroni draw");
            crc2.save()
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
          crc2.stroke(particle(this.type)); // ehy kp alda weiß net 
        }
    }
}
