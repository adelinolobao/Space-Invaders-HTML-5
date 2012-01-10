/**
 * File game.js
 * implement by Adelino Lobão
 * 09/10/2012
 */

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

var player = new Player(width/2, height/2);

var RunGame = function() {
	drawScene();

	//draw the player
	player.draw(ctx);

	const FRAME_RATE = 50;
	var intervalTime = 1000 / FRAME_RATE;	
	gameLoop = setTimeout(RunGame, intervalTime);
}

RunGame();