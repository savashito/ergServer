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
      rower = mockRower(69);

    });

    it('adds a rower to the workout', function () {
      expect( Object.keys(workout.getRowers()).length).to.equal(0);
      workout.addRower(rower);
      expect(Object.keys(workout.getRowers()).length).to.equal(1);
      var rowers = workout.getRowers();
      expect(rowers[rower.id]).to.equal(rower);
    });
   
    it('add multiple rowers to workout', function () {
      var rower1 = mockRower(1);
      var rower2 = mockRower(2);
      var rower3 = mockRower(3);
      workout.addRower(rower);
      workout.addRower(rower1);
      workout.addRower(rower2);
      workout.addRower(rower3);
      var rowers = workout.getRowers();
      expect(rowers[rower.id]).to.equal(rower);
      expect(rowers[rower1.id]).to.equal(rower1);
      expect(rowers[rower2.id]).to.equal(rower2);
      expect(rowers[rower3.id]).to.equal(rower3);
    });
    it('The workout should broadcast the message to tother rowers exudint the one sending it', function () {


    });
  });
});
