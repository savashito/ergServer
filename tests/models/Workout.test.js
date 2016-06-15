const assert = require('assert');
const expect = require('chai').expect;

const Workout = require('../../src/models/Workout');
const Rower = require('../../src/models/Rower');
import {mockRower} from "../MockData";

describe('Workout', function() {
  describe('#addRower', function() {
    var workout, rower;

    beforeEach(function () {
      workout = new Workout();
      rower = mockRower;

    });

    it('adds a rower to the workout', function () {
      expect( Object.keys(workout.getRowers()).length).to.equal(0);
      workout.addRower(rower);
      expect(Object.keys(workout.getRowers()).length).to.equal(1);
      var rowers = workout.getRowers();
      expect(rowers[rower.id]).to.equal(rower);
      // expect(Object.keys(rowers).indexOf(rower.id) > -1).to.equal(true);
    });
   /* 
    it('get a rower to the workout', function () {

    });
*/
  });
});
