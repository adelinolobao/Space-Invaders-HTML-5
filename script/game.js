/**
 * File game.js
 * implement by Adelino Lobão
 * 09/10/2012
 */

//definition of window
var width = 600;
var height = 800;

var gameLoop;

var c = document.getElementById("content");
var ctx = c.getContext("2d");

c.width = width;
c.height = height;

var drawScene = function() {
	ctx.fillStyle = '#000';
	ctx.clearRect(0, 0, width, height);
	ctx.beginPath();
	ctx.rect(0, 0, width, height);
	ctx.closePath();
	ctx.fill();
}

//add a player
var player = new Player(width, height);

//check the key pressed
document.onkeypress = function(e) {
	var e = window.event || e;
	var charCode = e.charCode;

	var Z_KEY = 122;
	var X_KEY = 120;
	var SPACE_KEY = 32

	switch(charCode) {
		case Z_KEY:
			player.moveLeft();
			break;
		case X_KEY:
			player.moveRight();
			break;
		case SPACE_KEY:
			console.log('shoot');
			break;
	}
}

var RunGame = function() {
	//draw the scene
	drawScene();

	//draw the player
	player.draw(ctx);

	const FRAME_RATE = 50;
	var intervalTime = 1000 / FRAME_RATE;	
	gameLoop = setTimeout(RunGame, intervalTime);
}

RunGame();