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

//keyhandler object
var keyHandler = new KeyHandler();
//player object
var player = new Player(width, height);

//handle events when the a key is pressed
document.onkeypress = function(e){
	keyHandler.keyPress(e, player);	
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