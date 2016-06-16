const Rower = require("../models/Rower");
const Workout = require("../models/Workout");

class WorkoutController {
  static getWorkout(rower){
    if (!(rower instanceof Rower)){
      throw new TypeError();
    }
    
    return new Workout();
  }
  static getWorkoutFromErg(ergDataJSON){

  }
  static getUserFromErg(ergDataJSON){

  }

}

module.exports = WorkoutController;
