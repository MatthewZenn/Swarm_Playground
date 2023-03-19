var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var player = {
	x:canvas.width/2,
	y:canvas.height-100,
	speed: 20
};

document.onkeydown = move;

function move(e) {
	
	if(e.keyCode == 37) { 
		player.x -= player.speed;
	}
	if(e.keyCode == 39) {
		player.x += player.speed;	
	}
    if(e.keyCode == 38) { 
		player.y -= player.speed;
	}
	if(e.keyCode == 40) {
		player.y += player.speed;	
	}

	update();	
}

function clearCanvas() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
}

function play(x,y) {
	var x = player.x;
	var y = player.y;
	ctx.fillStyle = "rgb(195, 101, 255)";
	ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
    ctx.fill();
}

function collide() {
    if(player.x < 20) {
        player.x = 20;
    }
    if(player.x > 1900) {
        player.x = 1900;
    }
    if(player.y < 20) {
        player.y = 20;
    }
    if(player.y > 680) {
        player.y = 680;
    }
}

function update() {
	clearCanvas();
    collide();
	play();

}
