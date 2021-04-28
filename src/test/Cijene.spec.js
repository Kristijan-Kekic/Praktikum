var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const DayOfYear = require("../Cijene");

it("Should return 34.5", function() {
	expect(DayOfYear(2000, 1, 1)).to.equal(1);
});
it("Should return 37.0", function() {
	expect(DayOfYear(2000, 2, 15)).to.equal(46);
});
it("Should return 39.0", function() {
	expect(DayOfYear(2000, 3, 15)).to.equal(64);
});
it("Should return 37.0", function() {
	expect(DayOfYear(2000, 4, 2)).to.equal(137);
});