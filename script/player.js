/**
 * Class Player
 * implemented by Adelino Lobão
 * 10/01/2012
 */
function Player(x, y) {
	//define initial postion xx
	this.x = x;
	//define initial position yy
	this.y = y;

	//loading player image
	this.image = new Image();
	this.image.src = 'script/images/ship.png';
	this.width = 26;
	this.height = 16;

	/**
	 * Draw the player
	 * @param _ctx - canvas context
	 */
	this.draw = function(_ctx) {
		//removes the image size
		var positionX = this.x - (this.width / 2);
		var positionY = this.y - (this.height / 2);
		//the the image
		_ctx.drawImage(this.image, positionX, positionY);
	}

	/**
	 * Moves the player character to left
	 */
	this.moveLeft = function() {
		;
	}

	/**
	 * Moves the player character to right
	 */
	 this.moveRight = function() {
	 	
	 }
}