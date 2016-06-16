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
	static _erg2rower={};
	static rowers={};

	static getRower(rowerJSON){
		if(rowers[rowerJSON.id]==undefined){
			rowers[rowerJSON.id] = new Rower();
		}
		var rower = rowers[rowerJSON.id];
		
   	 	// var workoutData = rowerJSON.workout;
		return rower;
	}
	static assignErgToRower(rowerJSON,ergJSON){
		var rower = getRower(rowerJSON);
		_erg2rower[ergJSON.id] =rower
		saveErg2Rower();

	}
}

module.exports = RowerController;
