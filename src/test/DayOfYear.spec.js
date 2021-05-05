var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const DayOfYear = require("../DayOfYear");

describe('dayof year impl', function() {
	it('DayOfYear should be a function', function() {
		expect(DayOfYear).to.be.a('function');
	});
});

it('should return 1 for 01.01.2000' , function() {
	expect(DayOfYear(2000, 1, 1)).to.be.equal(1);
});

it('should return 2 for 02.01.2000' , function() {
	expect(DayOfYear(2000, 1, 2)).to.be.equal(2);
});

it('should return 32 for 01.02.2000' , function() {
	expect(DayOfYear(2000, 2, 1)).to.be.equal(32);
});
it('should return 60 for 01.03.2001' , function() {
	expect(DayOfYear(2001, 3, 1)).to.be.equal(60);
});
it('should return 61 for 01.03.2000' , function() {
	expect(DayOfYear(2000, 3, 1)).to.be.equal(61);
});
it('should return 92 for 01.04.2000' , function() {
	expect(DayOfYear(2000, 4, 1)).to.be.equal(92);
});
it('should return 91 for 01.04.2001' , function() {
	expect(DayOfYear(2001, 4, 1)).to.be.equal(91);
});
it('should return 136 for 15.05.2000' , function() {
	expect(DayOfYear(2000, 5, 15)).to.be.equal(136);
});
it('should return 167 for 15.06.2000' , function() {
	expect(DayOfYear(2000, 6, 15)).to.be.equal(167);
});
it('should return 196 for 14.07.2000' , function() {
	expect(DayOfYear(2000, 7, 14)).to.be.equal(196);
});
it('should return 227 for 14.08.2000' , function() {
	expect(DayOfYear(2000, 8, 14)).to.be.equal(227);
});
it('should return 226 for 14.08.2001' , function() {
	expect(DayOfYear(2001, 8, 14)).to.be.equal(226);
});
it('should return 245 for 01.09.2000' , function() {
	expect(DayOfYear(2000, 9, 1)).to.be.equal(245);
});
it('should return 275 for 01.10.2000' , function() {
	expect(DayOfYear(2000, 10, 1)).to.be.equal(275);
});
it('should return 306 for 01.11.2000' , function() {
	expect(DayOfYear(2000, 11, 1)).to.be.equal(306);
});
it('should return 366 for 31.12.2000' , function() {
	expect(DayOfYear(2000, 12, 31)).to.be.equal(366);
});
it('should return 365 for 31.12.1999' , function() {
	expect(DayOfYear(1999, 12, 31)).to.be.equal(365);
});
