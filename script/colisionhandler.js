/**
 * File colision.js
 * implemented by Adelino Lobão
 * 20/01/2012
 */

 /**
  * Class ColisionHandler
  */
 function ColisionHandler() {

 	/**
 	 * Checks the colision between two objects
 	 * @param obj1 - first object
 	 * @param obj2 - second object
 	 */
 	this.detectColisionBetweenObjects = function(obj1, obj2) {
 		if((obj1.getPositionY() + obj1.height) < obj2.getPositionY()) {
 			return false;
 		}
 		else if(obj1.getPositionY() > (obj2.getPositionY() + obj2.height)) {
 			return false;
 		}
 		else if((obj1.getPositionX() + obj1.width) < obj2.getPositionX()) {
 			return false;
 		}
 		else if(obj1.getPositionX() > (obj2.getPositionX() + obj2.width)) {
 			return false;
 		}
 		return true;
 	}
 }