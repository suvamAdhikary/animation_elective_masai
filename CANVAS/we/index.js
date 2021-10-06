
var player = {
    posX: 150,
    posY: 150,
    currentDirection: null,
}

window.addEventListener("load", function(){
    // var canvas = document.getElementById("canvas");

    // var ctx = canvas.getContext("2d");

    // x, y, width, height
    // ctx.fillRect(0, 0, 100, 100);
    // ctx.fillRect(100, 100, 100, 100)

    draw()

    document.addEventListener("keyup", handleDirectionChange)
})

var gameSettings = {
    gridHeight: 100,
    gridWidth: 100,
    offsetX: 100,
    offsetY: 100,
    gridX: 8,
    gridY: 8,
}

var events = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]

function draw(){
    var canvas = document.getElementById("canvas");

    var ctx = canvas.getContext("2d");
    for(var i = 0; i < 8; i++){
        for(var j = 0; j < 8; j++){
            var x = gameSettings.offsetX + i*gameSettings.gridWidth;
            var y = gameSettings.offsetY + j*gameSettings.gridHeight;
            if(j % 2 === 0 && i % 2 === 0 || j % 2 !== 0 && i % 2 !== 0){
                ctx.fillStyle = "#000000"
                // ctx.beginPath();
                ctx.fillRect(x, y, 100, 100)
            }   else {
                ctx.fillStyle = "brown";
                ctx.fillRect(x, y, 100, 100)
            }
            // player position
            changePosition(player.currentDirection)
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(
                    player.posX,
                    player.posY,
                    gameSettings.gridHeight/2,
                    0,
                    360
                )
            // if(player.posX === i && player.posY === j){
            //     ctx.fillStyle = "white";

            //     ctx.arc(
            //             x + gameSettings.gridWidth/2,
            //             y + gameSettings.gridHeight/2,
            //             gameSettings.gridHeight/2,
            //             0,
            //             360
            //         )
            //         ctx.fill()
            // }
        }
    }
    // if(stopAnimation){
    //     return
    // }
    window.requestAnimationFrame(draw)
}

function handleDirectionChange(e) {
    e.preventDefault();
    if( !events.includes(e.code)){
        return
    }
    switch(e.code){
        case "ArrowLeft": {
            player.currentDirection = "left"
            break;
        }
        case "ArrowRight": {
            player.currentDirection = "right"
            break;
        }
        case "ArrowUp": {
            player.currentDirection = "up"
            break;
        }
        case "ArrowDown": {
            player.currentDirection = "down"
            break;
        }
        default: {
            return
        }
    }
}

function changePosition(direction) {
    if( !["left", "right", "up", "down"].includes(direction)){
        return;
    }
    var xMin = gameSettings.offsetX;
    var xMax = gameSettings.gridWidth * gameSettings.gridX + gameSettings.offsetX;
    var yMin = gameSettings.offsetY;
    var yMax = gameSettings.gridHeight * gameSettings.gridY + gameSettings.offsetY;
    switch(direction){
        case "left": {
            if(player.posX + 50 < xMin){
                player.posX = xMax + 50;
            } else {
                player.posX = player.posX -1;
            }
            break;
        }
        case "right": {
            if(player.posX - 50 > xMax) {
                player.posX = gameSettings.offsetX - 50;
            } else {
                player.posX = player.posX + 1;
            }
            break;
        }
        case "up": {
            if(player.posY - 50 > yMax){
                player.posY = yMax + 50;
            } else {
                player.posY = player.posY - 1;
            }
            break;
        }
        case "down": {
            if(player.posY + 50 < yMin){
                player.posY = 0;
            } else {
                player.posY = player.posY + 1;
            }
            break;
        }
        default: {
            return
        }
    }
    draw()
}

// setInterval(()=> {
//     changePosition(player.currentDirection)

// }, 200)