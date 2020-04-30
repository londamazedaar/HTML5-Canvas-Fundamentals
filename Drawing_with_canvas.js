window.onload = function () {
    const canvas = this.document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // =====> Rectangle

        //ctx.fillStyle = 'Navy';
        //ctx.fillRect(10,50,100,200);
        // ctx.fillStyle = 'green';
        // ctx.strokeStyle ='black';
        // ctx.rect(10,50,100,200);
        // ctx.stroke();
        // ctx.fill();

    // =====> Drawing a Bar Graph Normally

        // const scores = [100,88,92,75,63,33];
        // let width = 20;
        // let x = 0;
        // let y = 0;
        // ctx.fillStyle = 'black';
        // scores.forEach(ele => {
        //     ctx.fillRect(x, 100 - this.parseInt(ele), width, this.parseInt(ele));
        //     x = x + width + 5;
        // })

    // =====> Drawing a Bar Graph using transforms(translate)

        // const scores = [100,88,92,75,63,33];
        // scores.reverse();
        // let width = 20;
        // let x = 0;
        // let y = 0;
        
        // ctx.translate(200,200);
        // ctx.rotate(Math.PI);
        // ctx.fillStyle = 'green';
        // scores.forEach(ele => {
        //     ctx.fillRect(x, y, width, this.parseInt(ele));
        //     x = x  + width + 5;
        // });
        // ctx.rotate(Math.PI);
        // ctx.translate(-200,-200);
        // ctx.fillRect(0,0,10,10);

    // =====> Draw circle using arc()

        // ctx.fillStyle = 'red';
        // ctx.arc(100,100,50,Math.PI / 2,3 * this.Math.PI/2,false);
        // ctx.strokeStyle = 'blue';
        // ctx.stroke();
        // ctx.fill();



    // =====> Using arcTo() for rounding corners

        // ctx.beginPath();
        // ctx.moveTo(80,50);

        // // top right
        // ctx.arcTo(210,50, 210, 70, 0);

        // // bottom right
        // ctx.arcTo(210, 200, 160, 200, 0);

        // // bottom left
        // ctx.arcTo(60,200,60,180,20);

        // // top left
        // ctx.arcTo(60, 50, 100, 50, 20);

        // ctx.stroke();

    // =====> Drawing lines

        // ctx.strokeStyle = 'green';
        // ctx.lineWidth = 10;
        
        // ctx.beginPath();
        // ctx.moveTo(100,100);
        // ctx.lineTo(200,100);
        // ctx.lineTo(200,300);
        // ctx.lineTo(100,100);
        // // ctx.miterLimit = 1;
        // // ctx.lineCap = 'round';
        // ctx.closePath();
        // ctx.stroke();

    // =====> Drawing Bezier Curve

        // ctx.strokeStyle = 'red';
        // ctx.lineWidth = 2;
        // ctx.fillStyle = 'green';
        // ctx.beginPath();
        // ctx.moveTo(50,50);
        // ctx.bezierCurveTo(200,400,400,400,400,50);
        // ctx.lineTo(50,50);
        // ctx.closePath();
        // ctx.stroke();
        // ctx.fill();

    // =====> Drawing Quadratic Curve

        // ctx.strokeStyle = 'red';
        // ctx.lineWidth = 2;
        // ctx.beginPath();
        // ctx.moveTo(50,50);
        // ctx.quadraticCurveTo(50,500,500,50);
        // ctx.lineTo(50,50);
        // ctx.closePath();
        // ctx.stroke();

    // =====> Filling, Stroking and MeasuringText

        // const text = 'Hello World';
        // ctx.font = '30pt Arial';
        // ctx.strokeText(text, 100,100);
        // ctx.fillText(text, 100,100);
        // let some = ctx.measureText(text).width;
        // this.console.log(some);

    // =====> Canvas transform with texts

        // ctx.font = '30pt Arial';
        // ctx.fillText('Regular Text', 100, 100);

        // ctx.save();

        // ctx.rotate(0.5 * this.Math.PI);
        // ctx.strokeText('Rotated Text', 200, -300);

        // ctx.restore();

        // ctx.fillText('Normal canvas rendering', 500, 500);


    // =====> Drawing Image onto canvas

        var img = new this.Image();

        img.src = 'html.png';

        img.onload = function(){
            drawImage();
        };
        

        function drawImage(){
            var destX = 100;
            var destY = 100;
            var destWidth = 100;
            var destHeight = 100;
            
            ctx.drawImage(img, destX, destY);

            // ----> Below is pattern creating using image

            var pattern = ctx.createPattern(img, 'repeat');
            ctx.fillStyle = pattern;
            ctx.fillRect(300,300,600,600);
        }




}