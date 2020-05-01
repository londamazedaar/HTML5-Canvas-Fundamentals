let radius = 50;
let posY = 70;
let posX = radius;
let canvas, ctx, canvasWidth, canvasHeight;
let dir = 1;
let speed = 8;


window.onload = function () {

    canvas = this.document.getElementById('myCanvas');
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    this.console.log(canvasWidth, canvasHeight);
    ctx = canvas.getContext('2d');

    // =====> Rendering Linear Gradients

        // ctx.strokeStyle = 'black';
        
        // let gradient = ctx.createLinearGradient(200, 200, 600, 600);
        
        // gradient.addColorStop(0, 'white');
        // gradient.addColorStop(0.5, 'green');
        // gradient.addColorStop(1, 'blue');
        // ctx.fillStyle = gradient;
        // ctx.rect(200,200,400,400);
        // ctx.fill();

    // =====> Rendering Radial Gradient

        // ctx.strokeStyle = 'black';
        // let gradient = ctx.createRadialGradient(250,250,300,375,375,300);
        // gradient.addColorStop(0, 'white');
        // gradient.addColorStop(0.5, 'lightgreen');
        // gradient.addColorStop(1, 'lightblue');
        // ctx.fillStyle = gradient;
        // ctx.arc(300,300,300,0,2*this.Math.PI,false);
        // ctx.stroke();
        // ctx.fill();

    // =====> Using Transform

        // ctx.font = '30pt Arial';
        // ctx.save();
        // ctx.translate(200,350);
        // ctx.rotate(-0.5*Math.PI);
        // ctx.scale(2,2);

        // let rtext = 'Rotated';
        // ctx.fillText(rtext,0,0);
        // ctx.restore();

        // ctx.fillRect(250,100,200,100);
    
    // =====> Animation

        // window.setInterval(function(){
        //     animate();
        // },60);
        this.animate();
};

function animate(){
    update();
    draw();
    window.requestAnimationFrame(function(){
        animate();
    })
}

function draw(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = 'Navy';
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, 2*Math.PI, false);
    ctx.closePath();
    ctx.fill();
}

function update(){
    // Move right until react canvas width
    if(dir > 0){
        dir = (posX < canvasWidth - radius) ? 1 : -1;
    }

    // Move left until we react 0
    if(dir < 0){
        dir = (posX > 0 + radius) ? -1 : 1;
    }

    posX += speed * dir;

}