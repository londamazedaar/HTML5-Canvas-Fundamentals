window.onload = function () {
    const canvas = this.document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

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

        ctx.strokeStyle = 'black';

        let gradient = ctx.createRadialGradient(250,250,300,375,375,300);
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(0.5, 'lightgreen');
        gradient.addColorStop(1, 'lightblue');
        ctx.fillStyle = gradient;
        ctx.arc(300,300,300,0,2*this.Math.PI,false);
        ctx.stroke();
        ctx.fill();
}