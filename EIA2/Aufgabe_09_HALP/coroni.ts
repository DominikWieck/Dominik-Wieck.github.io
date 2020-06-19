
// Ursprungscode von Aufgabe_08 von Luzia Gunzenhauser und abgeändert
//Aufgabe 09_

namespace L09CoronaVirus {

    export let particle: Path2D = new Path2D();



    console.log("load");
    interface Vector {
        x: number;
        y: number;
    }

    let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
       


        drawBackground();
        drawHumanCell({ x: 350, y: 170 }, { x: 450, y: 450 });
        showAntibodies({ x: 250, y: 370 });
        buildKillercells({ x: 50, y: 670 });
        buildCorona({ x: 10, y: 20 });
        drawParticles({ x: 40, y: 500 }, { x: 600, y: 600 });

    }

  

    function drawHumanCell(_position: Vector, _size: Vector): void {

        //Zeichnen der Cellen sowie das duplizieren dieser 
        console.log("HumanCell", _position, _size);
        let nParticles: number = 40;
        let radiusParticle: number = 20;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "black");
        gradient.addColorStop(0.3, "#48803c");
        gradient.addColorStop(0.7, "#E6E6FA");
        gradient.addColorStop(1, "#E6E6FA");



        crc2.save();

        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {

            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();

    }



    function drawAntibodies(_position: Vector, _size: Vector): void {


        //Zeichnen der Antikörper 

        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.lineTo(_position.x + 22, _position.y - 12);
        crc2.lineWidth = 2.5;
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 31, _position.y - 18, 12, 0.7, 1.4 * Math.PI);
        crc2.stroke();
        crc2.closePath();

        crc2.save();

        crc2.translate(_position.x, _position.y);


        crc2.restore();



    }

    function showAntibodies(_position: Vector): void {

        //Double the Anti-cells 

        for (let drawn: number = 0; drawn < 7; drawn++) {
            _position.x = Math.random() * crc2.canvas.width / 1.4; //Variieren der Werte
            _position.y = 450 + (20 * Math.random());

            drawAntibodies(_position, { x: 450, y: 650 });
        }
    }



    function buildKillercells(_position: Vector): void {

        for (let drawn: number = 0; drawn < 5; drawn++) {
            _position.x = Math.random() * crc2.canvas.width / 1.8;
            _position.y = 300 + (20 * Math.random());


        }
    }

    

    function buildCorona(_position: Vector): void {
        let radius: number;
        let position: number = 20;

        //Fünf Coronazellen sollen gezeichnet werden 
        for (let i: number = 0; i < 5; i++) {
            radius = 5;
            _position.x = position + radius;
            position = _position.x + radius;
            _position.y = 300 + (50 * Math.random());

            
        }

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.restore();
    }

    //Luftpartikel werden gezeichnet und dubliziert 


    function drawParticles(_position: Vector, _size: Vector): void {

        let nParticles: number = 90;
        let radiusParticle: number = 4;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 20%)");
        gradient.addColorStop(1, "#ffcc01");
        crc2.fillStyle = gradient;

        crc2.save();

        crc2.translate(_position.x, _position.y);


        crc2.restore();

        for (let drawn: number = 0; drawn < nParticles; drawn++) {

            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }

        let coronii: CoronaVirus = new CoronaVirus(1);
        coronii.draw();
        

        console.log(coronii);
        for (let i: number = 0; i < 100; i++){
            coronii.draw();
            coronii.move(0.1);

        }
    }







}