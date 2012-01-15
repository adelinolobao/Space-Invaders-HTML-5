/**
 * File player.js
 * implemented by Adelino Lobão
 * 10/01/2012
 */

 /**
  * Class Player
  * @param widht - window widht
  * @param height - window height
  */
function Player() {
	//increment movement
	const incMovement = 20;
	
	//create the player sprite
	var sprite = new Sprite();
	//set sprite image and size
	sprite.initImage('script/images/ship.png', 26, 16);
	//set initial position of the sprite
	sprite.initPosition(WINDOW_WIDTH/2, WINDOW_HEIGHT-100);

	/**
	 * Draw the player
	 * @param context - canvas context
	 */
	this.draw = function(context) {
		sprite.draw(context);
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
}