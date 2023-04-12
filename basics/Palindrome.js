// Write a function isPalindrome that takes a word string and returns true if the word is a palindrome or false if it is not.

// A palindrome is a word that is spelled the same forwards as it is backwards.

//  The word pop is a palindrome.


function isPalindrome(string) {
    let reversedString = "";
    for(let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    if(string === reversedString) {
        return true;
    } return false;
}

module.exports = isPalindrome;


// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\Palindrome.test.js

const { assert } = require('chai');
const isPalindrome = require('../palindrome');

describe('isPalindrome', () => {
    describe('is a palindrome', () => {
        it('should return true', () => {
            assert.equal(isPalindrome('pop'), true);
        });

        it('should return true', () => {
            assert.equal(isPalindrome('kayak'), true);
        });

        it('should return true', () => {
            assert.equal(isPalindrome('racecar'), true);
        });
    })
    
    describe('is not a palindrome', () => {
        it('should return false', () => {
            assert.equal(isPalindrome('bear'), false);
        });

        it('should return false', () => {
            assert.equal(isPalindrome('pizza'), false);
        });

        it('should return false', () => {
            assert.equal(isPalindrome('representative'), false);
        });
    })
})