// Write a function fizzBuzz that takes an array of numbers and replaces any number divisible by three with the word "fizz" and any number divisible by five with the word "buzz". If a number is divisible by both three and five, replace it with "fizzbuzz"

// Once the appropriate numbers are replaced, return a concatenated string with only the words "fizz" or "buzz" included.

function fizzBuzz(numbers) {
    let str = "";
    for(let i = 0; i < numbers.length; i++) {
        if((numbers[i] % 3 === 0) && (numbers[i] % 5 === 0)) {
            str += "fizzbuzz";
        } else if (numbers[i] % 5 === 0) {
            str += "buzz";
        } else if (numbers[i] % 3 === 0) {
            str += "fizz";
        }
    }

    return str;
}

module.exports = fizzBuzz;

// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\FizzBuzz.test.js

const {assert} = require('chai');
const fizzBuzz = require('../fizzBuzz');

describe('fizzBuzz', () => {
    it('should return an empty string', () => {
        const numbers = [1, 2, 4, 7, 11];
        const result = fizzBuzz(numbers);
        assert.equal(result, "");
    })

    it('should return fizz', () => {
        const numbers = [3, 6, 9, 12];
        const result = fizzBuzz(numbers);
        assert.equal(result, "fizzfizzfizzfizz");
    })

    it('should return buzz', () => {
        const numbers = [5, 10, 20, 25];
        const result = fizzBuzz(numbers);
        assert.equal(result, "buzzbuzzbuzzbuzz");
    })

    it('should return fizzbuzz', () => {
        const numbers = [15, 30, 45];
        const result = fizzBuzz(numbers);
        assert.equal(result, "fizzbuzzfizzbuzzfizzbuzz");
    })

    it('should return all conditions', () => {
        const numbers = [1, 3, 5, 9, 11, 15, 17, 20];
        const result = fizzBuzz(numbers);
        assert.equal(result, "fizzbuzzfizzfizzbuzzbuzz");
    })
})