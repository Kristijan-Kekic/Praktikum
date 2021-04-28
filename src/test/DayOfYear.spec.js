var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const DayOfYear = require("../DayOfYear");

describe.skip('dayof year impl', function() {
	it('DayOfYear should be a function', function() {
		DayOfYear(1);
	});
});

it("Should return 1 for 01.01.2000", function() {
	expect(DayOfYear(2000, 1, 1)).to.equal(1);
});
it("Should return 2 for 02.01.2000", function() {
	expect(DayOfYear(2000, 1, 2)).to.equal(2);
});
it("Should return 32 for 01.02.2000", function() {
	expect(DayOfYear(2000, 2, 1)).to.equal(32);
});
it("Should return 60 for 01.03.1900", function() {
	expect(DayOfYear(1900, 3, 1)).to.equal(60);
});
it("Should return 61 for 01.03.2000", function() {
	expect(DayOfYear(2000, 3, 1)).to.equal(61);
});
it("Should return 92 for 01.04.2000", function() {
	expect(DayOfYear(2000, 4, 1)).to.equal(92);
});
it("Should return 136 for 15.05.2000", function() {
	expect(DayOfYear(2000, 5, 15)).to.equal(136);
});
