/**
 * File enemy.js
 * implemented by Adelino Lobão
 * 19/01/2012
 */

/**
 * Class Enemy
 * @param initPosX - initial position xx
 * @param initPosY - initial position yy
 */
function Enemy(initPosX, initPosY) {
	//enemy sprite
	var sprite = new Sprite();
	//set image and size
	sprite.initImage('script/images/enemy.png', 22, 16);
	//set initial position of the sprite
	sprite.initPosition(initPosX, initPosY);

	/**
	 * Draws the enemy sprite
	 */
	this.draw = function() {
		sprite.draw();
	}

	/**
	 * Simulates one step of the enemy
	 */
	this.step = function() {}
}