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

}