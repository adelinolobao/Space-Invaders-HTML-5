/**
 * File sprite.js
 * implemented by Adelino Lobão
 * 14/01/2012
 */

 /**
  * Class Sprite
  * @param increment - is the increment added to the sprite
  */
function Sprite(increment) {
	//increment
	var increment = increment;

	/**
	 * Initialize sprite image and size
	 * @param src - image source
	 * @param widht - image width
	 * @param height - image height
	 */
	this.initImage = function(src, width, height) {
		//set image sprite
		this.image = new Image();
		//set image source
		this.image.src = src;
		//set image width
		this.width = width;
		//set image height
		this.height = height;
	}
	/**
	 * Initialize the sprite position
	 * @param initPosX - initial position xx
	 * @param initPosY - initial position yy
	 */
	this.initPosition = function(initPosX, initPosY) {
		this.x = initPosX;
		this.y = initPosY;	
	}

	/**
	 * Set sprite position
	 * @param posX - position xx
	 * @param posY - position yy
	 */
	this.setPosition = function(posX, posY) {
		if((posX > 0) && (posX < WINDOW_WIDTH)) { //check the position boundaries
			this.x = posX;
	 		this.y = posY;
		}
	}

	/**
	 * Draw sprite
	 */
	this.draw = function() {
		//removes image size
		var positionX = this.x - (this.width / 2);
		var positionY = this.y - (this.height / 2);
		//draw image
		context.drawImage(this.image, positionX, positionY);
	}

	/**
	 * Move sprite to the left
	 */
	this.moveLeft = function() {
		this.setPosition(this.x - increment, this.y);
	}

	/**
	 * Move sprite to the right
	 */
	this.moveRight = function() {
		this.setPosition(this.x + increment, this.y);
	}

	/**
	 * Move sprite to the front
	 */
	this.moveFront = function() {
		this.setPosition(this.x, this.y + (increment * 3));
	}
}