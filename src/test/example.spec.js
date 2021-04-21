var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const fizzBuzzSuzz = require("../fizzBuzzSuzz");
/*
FizzBuzz problem: 
- za broj djeljiv sa 3 funkcija vraća "Fizz"
- za broj djeljiv sa 5 funkcija vraća "Buzz"
- Za broj djeljiv sa 7 funkcija vraća "Suzz"
- Za broj djeljiv sa 3 i 5 funkcija vraća FizzBuzz
- Za broj djeljiv sa 3 i 7 funkcija vraća FizzSuzz
- Za broj djeljiv sa 5 i 7 funkcija vraća BuzzSuzz
- Za ostale brojeve vratiti undefined
*/
describe('fizz buzz suzz problem', function() {
    it('fizzBuzzSuzz should be a function', function () {
        fizzBuzzSuzz(1);
    });
    it("function should throw error if argument is not a number", 
            function(){
        expect(()=>fizzBuzzSuzz("pero")).to.throw(Error);
    });
    it("function should accept number as an argument", function(){
        fizzBuzzSuzz(1);
    });
    it("should return Fizz if number is dividible by 3", function() {
        expect(fizzBuzzSuzz(3)).to.equal("Fizz");
        expect(fizzBuzzSuzz(6)).to.equal("Fizz");
    });
    it("should return Buzz if number is dividible by 5", function() {
        expect(fizzBuzzSuzz(5)).to.equal("Buzz");
    });
	it("should return Buzz if number is dividible by 7", function() {
        expect(fizzBuzzSuzz(7)).to.equal("Suzz");
    });
    it("should return FizzBuzz if number is dividible by 3 & 5", function() {
        expect(fizzBuzzSuzz(30)).to.equal("FizzBuzz");
    });
	it("should return FizzBuzz if number is dividible by 3 & 7", function() {
        expect(fizzBuzzSuzz(21)).to.equal("FizzSuzz");
    });
	it("should return FizzBuzz if number is dividible by 5 & 7", function() {
        expect(fizzBuzzSuzz(35)).to.equal("BuzzSuzz");
    });
    it("If number is not divisible by 3 or 5 or 7 should return empty string", function() {
        expect(fizzBuzzSuzz(4)).to.equal("");
    });
});

//R-G-R