const assert = require('assert');
const expect = require('chai').expect;

const Workout = require('../../src/models/Workout');
const Rower = require('../../src/models/Rower');

describe('Workout', function() {
  describe('#addRower', function() {
    var workout, rower;

    beforeEach(function () {
      workout = new Workout();
      rower = new Rower({});
    });

    it('adds a rower to the workout', function () {
      expect(workout._rowers.length).to.equal(0);
      workout.addRower(rower);
      expect(workout._rowers.length).to.equal(1);
    });
  });
});
