var width = 320;
var height = 500;

var gameLoop;

var c = document.getElementById("content");
var ctx = c.getContext("2d");

c.width = width;
c.height = height;

var clear = function() {
	ctx.fillStyle = '#000';
	ctx.clearRect(0, 0, width, height);
	ctx.beginPath();
	ctx.rect(0, 0, width, height);
	ctx.closePath();
	ctx.fill();
}

var RunGame = function() {
	clear();

	gameLoop = setTimeout(RunGame(), 1000 / 50);
}

RunGame();