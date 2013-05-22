/**
 * File player.js
 * implemented by Adelino Lobão
 * 10/01/2012
 */

 /**
  * Class Player
  */
function Player() {

	//image src
	var imgSrc = 'script/images/ship.png';
	//width
	this.width = 26;
	//height
	this.height = 16;

	//indicates if the sprite is moving left
	this.movingLeft = false;
	//indicates if the sprite is moving right
	this.movingRight = false;

	//create the player sprite
	var sprite = new Sprite(20);
	//set sprite image and size
	sprite.initImage('script/images/ship.png', 26, 16);
	//set initial position of the sprite
	sprite.initPosition(WINDOW_WIDTH / 2, WINDOW_HEIGHT - 100);

	/**
	 * Draw the player
	 */
	this.draw = function() {
		sprite.draw();
	}

	/**
	 * Moves the player character to left
	 */
	this.moveLeft = function() {
		sprite.moveLeft();
	}

	/**
	 * Moves the player character to right
	 */
	 this.moveRight = function() {
	 	sprite.moveRight();
	 }

	 /**
	  * Return the position xx of the player
	  */
	 this.getPositionX = function() {
	 	return sprite.x;
	 }

	 /**
	  * Return the position yy of the player
	  */
	 this.getPositionY = function() {
	 	return sprite.y;
	 }
}