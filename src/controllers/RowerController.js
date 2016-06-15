const Rower = require('../models/Rower');


class RowerController {
    // constructor (id, x, y) {
    //     this.id = id
    //     this.move(x, y)
    // }
//     move (x, y) {
//         this.x = x
//         this.y = y
//     }
	static getRower(){
		return new Rower();
	}
}
/*
function RowerController() {	
  return this;
}
RowerController.getRower = function(){
	return Rower(); 
}*/

// RowerController.getRower();

module.exports = RowerController;
// module.exports.RowerController = RowerController;
