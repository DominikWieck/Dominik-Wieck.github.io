namespace L08_Coroni {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

     

        drawBackground();

        drawCoroni({ x: 10, y: 10 }, { x: 250, y: 250 });
        drawBloodcells({ x: 30, y: 40 }, { x: 250, y: 250 });
        
      

    }

    function drawBackground(): void {
        console.log("Background");

        

        let pattern: CanvasRenderingContext = document.createElement("canvas").getContext('2d');
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

        crc2.fillStyle = crc2.createPattern(pattern.canvas, 'repeat');
        crc2.fillRect(0, 0, canvas.width, canvas.height);


        pattern.strokeStyle = "";
        pattern.stroke();
        pattern.closePath();

        //Punkt in Zelle
        pattern.beginPath();
        pattern.arc(50, 20, 2, 0, 2 * Math.PI);
        pattern.fillStyle = "#16ff0a";
        pattern.fill();

        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function drawCoroni(_position: Vector, _size: Vector): void {
        console.log("Bloodcell", _position, _size);


        let nParticles: number = 50;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "#4b8bbf");
        //
        gradient.addColorStop(1, "#000000");
        //

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {

            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);

        }
        crc2.restore;


    }


    function drawBloodcells(_position: Vector, _size: Vector): void {
        console.log("Bloodcell", _position, _size);


        let nParticles: number = 70;
        let radiusParticle: number = 30;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "#a33636");
        //
        gradient.addColorStop(1, "#000000");
        //

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {

            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);

        }
        crc2.restore;
    }

    