// require('mocha');
const assert = require('assert');
var WorkoutController = require('../controllers/WorkoutController.js')
var MockData = require('./MockData');
describe('WorkoutController',function(){
		it(' Should create and return a new workout when workout doesn\'t exists',function(){
			var workout = MockData.getWorkout();
			var workoutObj = WorkoutController.login(workout);
			listWorkouts = WorkoutController.listWorkouts();
			assert.equal(listWorkouts[workout.id],workoutObj);
		});

});
/*

	before(function(){
		// The before() callback gets run before all tests in the suite. Do one-time setup here.
	});
	
	beforeEach(function(){
		// The beforeEach() callback gets run before each test in the suite.
	});
	it('does x when y', function(){
		// Now... Test!
		 assert.equal(-1, [1,2,3].indexOf(5));
		 assert.equal(-1,3);
	});
	after(function() {
		// after() is run after all your tests have completed. Do teardown here.
	});
	*/