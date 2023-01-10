// Write a function countVowels that takes in a string and counts how many vowels there are in the word. Vowels include: "a", "e", "i", "o", and "u".

// Handle lowercase and uppercase vowels.

function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let sum = 0;
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < vowels.length; j++) {
            if(str[i].toLowerCase() === vowels[j]) {
                sum += 1;
            }
        }
    }
    return sum;
}

module.exports = countVowels;


// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\CountVowels.test.js

const { assert } = require('chai');
const countVowels = require('../countVowels');

describe('countVowels', () => {
    it('should return zero', () => {
        assert.equal(countVowels('bczx'), 0);
    });

    it('should count all vowels', () => {
        assert.equal(countVowels("Igloo"), 3)
    })

    describe('uppercase vowels', () => {
        it('should count all uppercase vowels', () => {
            assert.equal(countVowels('AEIOU'), 5);
        });

        it('should only count vowels', () => {
            assert.equal(countVowels('APPLE'), 2);
        });
    })
    

    describe('lowercase vowels', () => {
        it('should count all lowercase vowels', () => {
            assert.equal(countVowels('aeiou'), 5);
        });

        it('should only count vowels', () => {
            assert.equal(countVowels('apple'), 2);
        });
    })
})