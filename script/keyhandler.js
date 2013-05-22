/**
 * File keyhandler.js
 * implemented by Adelino Lobão
 * 14/01/2012
 */

/**
 * Class KeyHandler
 */
function KeyHandler() {
	//define the Z key
 	this.Z_KEY = 122;
 	this.z_KEY = 90;
 	//define the X key
 	this.X_KEY = 120;
 	this.x_KEY = 88;
 	//define the space key
 	this.SPACE_KEY = 32;

 	/**
 	 * Handle the events when a key is pressed
 	 * @param e - event
 	 * @param player - player
 	 */
 	this.keyPress = function(e) {
 		keyPressed = e.which ? e.which : window.event.keyCode;

 		switch(keyPressed) {
 			case this.Z_KEY:
 			case this.z_KEY:
 				player.movingLeft = true;
 				break;
 			case this.X_KEY:
 			case this.x_KEY:
 				player.movingRight = true;
 				break;
 			case this.SPACE_KEY:
 				lasers[lasers.length] = new Laser(player);
 				break;
 		}
 	}

 	/**
 	 * Handle events when key is released
 	 * @param e - event
 	 */
 	this.keyUp = function(e) {
 		keyPressed = e.which ? e.which : window.event.keyCode;

 		switch(keyPressed) {
 			case this.Z_KEY:
 			case this.z_KEY:
 				player.movingLeft = false;
 				break;
 			case this.X_KEY:
 			case this.x_KEY:
 				player.movingRight = false;
 				break;
 		}
 	}
}