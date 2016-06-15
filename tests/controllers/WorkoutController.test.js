const assert = require('assert');
const expect = require('chai').expect;

const Rower = require('../../src/models/Rower');
const Workout = require('../../src/models/Workout');
const WorkoutController = require('../../src/controllers/WorkoutController');
var MockData = require('../MockData');

describe('WorkoutController',function(){
	describe('#getWorkout', function() {
		it('returns an instance of Workout', function () {
			var rower = new Rower();
			var workout = WorkoutController.getWorkout(rower);
			expect(workout).to.be.an.instanceof(Workout);
		});

		it('raises exception if it an instance of rower is not passed', function(){
			expect(WorkoutController.getWorkout).to.throw(TypeError);
		});

	});
});
