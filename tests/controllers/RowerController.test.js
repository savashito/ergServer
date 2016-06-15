const assert = require('assert');
const expect = require('chai').expect;

const Rower = require('../../src/models/Rower');
const RowerController = require('../../src/controllers/RowerController');

var MockData = require('../MockData');

describe('RowerController', function() {
  describe('#getRower', function() {
    beforeEach(function(){
      // w/e
    });

    it("returns an instance of rower", function(){
      var rower = RowerController.getRower();
      expect(rower).to.be.an.instanceof(Rower);
    })
  });
});
