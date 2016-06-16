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
  broadcastToPeers(excludedRower,ergData){
  	for (rower in this._rowers){
  		if(rower.is(excludedRower)==false){
  			rower.send(ergData);
  		}
  	}
  }
  save(){
  	// save to db
  }

}

module.exports = Workout;
