/**
 * File laser.js
 * implemented by Adelino Lobão
 * 10/01/2012
 */

/**
 * Class Laser
 * @param player - player object
 */
function Laser(player) {
	//increment
	const INCREMENT = 20;
	//laser width
	this.width = 5;
	//laser height
	this.height = 5;
	//intial position xx
	this.x = player.getPositionX() - 2;
	//initial position yy
	this.y = player.getPositionY() - 15;

	/**
	 * Draw the laser
	 */
	this.draw = function() {
		//context style
		context.fillStyle = "red";
		//draw the rectangle laser
		context.fillRect(this.x, this.y, this.width, this.height);	
	}

	/**
	 * Simulate one step of the laser and verifies if it 
	 * already reach the top of the screen
	 */
	this.step = function() {
		this.y = this.y - INCREMENT;
		if(this.y <= 0)	return true;
		return false;
	}

	/**
	  * Return the position xx of the laser
	  */
	 this.getPositionX = function() {
	 	return this.x;
	 }

	 /**
	  * Return the position yy of the laser
	  */
	 this.getPositionY = function() {
	 	return this.y;
	 }
}