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
	static getRower(rowerJSON, socket){
    var workoutData = rowerJSON.workout;
		return new Rower();
	}
}

module.exports = RowerController;
