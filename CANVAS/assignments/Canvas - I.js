window.addEventListener('load', ()=> {

    var canvas = document.getElementById("canvas");

    var ctx = canvas.getContext("2d");

    // x, y, width, height
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 200, 300);
    
    ctx.beginPath();
    ctx.arc(100, 150, 50, 0, 2 * Math.PI);
    ctx.stroke();
})