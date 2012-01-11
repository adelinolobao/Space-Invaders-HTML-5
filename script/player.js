/**
 * Class Player
 * implemented by Adelino Lobão
 * 10/01/2012
 */
function Player(width, height) {
	//define initial postion
	this.x = width/2;
	this.y = height - 100;
	//define the size of context
	this.ctxWidth = width;
	this.ctxHeight = height;

	//increment movement
	this.incMovement = 20;

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
		console.log('moveLeft');
		if(this.x > 0) {
			this.setPosition(this.x - this.incMovement, this.y);
		}
	}

	/**
	 * Moves the player character to right
	 */
	 this.moveRight = function() {
	 	if(this.x < this.ctxWidth) {
	 		this.setPosition(this.x + this.incMovement, this.y);
	 	}
	 }

	 /**
	  * Define the player positon
	  */
	 this.setPosition = function(x, y) {
	 	this.x = x;
	 	this.y = y;
	 }
}