window.onload = function(){
    const canvas = this.document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'green';
    // (startx, starty, width, height)
    ctx.fillRect(300,200,200,100);
    // (x, y, radius, start Angle, end Angle, anticlockwise)
    ctx.arc(100,100, 50, 0, 2*this.Math.PI, false);
    ctx.fill();
}