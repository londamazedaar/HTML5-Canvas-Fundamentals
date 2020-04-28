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

    // =====> Drawing a Bar Graph

        const scores = [100,88,92,75,63,33];
        let width = 20;
        let x = 0;
        let y = 0;
        ctx.fillStyle = 'black';
        scores.forEach(ele => {
            ctx.fillRect(x, 100 - this.parseInt(ele), width, this.parseInt(ele));
            x = x + width + 5;
        })
}