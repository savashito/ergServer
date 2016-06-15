class Workout {
  constructor(){
    this._rowers = {};
  }
  addRower(rower){
  	this._rowers[rower.id] = rower;
  }
  getRowers(){
  	return this._rowers;
  }

}

module.exports = Workout;
