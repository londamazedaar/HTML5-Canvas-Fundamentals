window.onload = function(){
    const canvas = this.document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(0,0,200,100);
}