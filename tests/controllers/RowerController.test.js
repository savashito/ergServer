const assert = require('assert');
const expect = require('chai').expect;

const Rower = require('../../src/models/Rower');
const RowerController = require('../../src/controllers/RowerController');

var MockData = require('../MockData');

describe('RowerController', function() {
  describe('#getRower', function() {
    var rowerJSON;

    beforeEach(function () {
      rowerJSON = {
        workout: {}
      };
    });

    it("returns an instance of rower", function(){
      var rower = RowerController.getRower(rowerJSON);
      expect(rower).to.be.an.instanceof(Rower);
    });

    it("reads the workout of the rowerJSON passed in", function(){
      var rower = RowerController.getRower(rowerJSON);

    });

  });

  // describe('#move', function() {
  //   var ctrl, initialX, initialY, rowerId;
  //   beforeEach(function(){
  //     rowerId = '12345';
  //     initialX = 6;
  //     initialY = 17;
  //     ctrl = new Rower(rowerId, initialX, initialY);
  //   });
  //
  //   it('updates the location', function () {
  //     expect(rower.x).to.equal(initialX);
  //     expect(rower.y).to.equal(initialY);
  //
  //     var newX = 88;
  //     var newY = 45;
  //     rower.move(newX, newY);
  //     expect(rower.x).to.equal(newX);
  //     expect(rower.y).to.equal(newY);
  //   });
  // });
});
