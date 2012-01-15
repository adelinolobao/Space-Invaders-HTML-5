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
 	//define the X key
 	this.X_KEY = 120;
 	//define the space key
 	this.SPACE_KEY = 32;

 	/**
 	 * Handle the events when a key is pressed
 	 * @param e - event
 	 * @param player - player
 	 */
 	this.keyPress = function(e) {
 		//get the event
 		var e = window.event || e;
 		//char code
 		var charCode = e.charCode;

 		switch(charCode) {
 			case this.Z_KEY:
 				player.moveLeft();
 				break;
 			case this.X_KEY:
 				player.moveRight();
 				break;
 			case this.SPACE_KEY:
 				lasers[lasers.length] = new Laser(player);
 				break;
 		}
 	}
}