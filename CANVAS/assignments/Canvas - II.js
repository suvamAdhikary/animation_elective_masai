window.addEventListener("load", function(){

    draw()
})

function draw(){
    var canvas = document.getElementById("canvas");

    var ctx = canvas.getContext("2d");
    for(var i = 0; i < 8; i++){
        for(var j = 0; j < 8; j++){
            var x = i* 100;
            var y = j* 100;
            if(j % 2 === 0 && i % 2 === 0 || j % 2 !== 0 && i % 2 !== 0){
                ctx.fillStyle = "#000000"
                ctx.fillRect(x, y, 100, 100)
            }   else {
                ctx.fillStyle = "gray";
                ctx.fillRect(x, y, 100, 100)
            }
        }
    }
}