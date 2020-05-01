window.onload = function () {
    const canvas = this.document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // =====> Rendering Linear Gradients

        ctx.strokeStyle = 'black';
        
        let gradient = ctx.createLinearGradient(200, 200, 600, 600);
        
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(0.5, 'green');
        gradient.addColorStop(1, 'blue');
        ctx.fillStyle = gradient;
        ctx.rect(200,200,400,400);
        ctx.fill();
        
        
}