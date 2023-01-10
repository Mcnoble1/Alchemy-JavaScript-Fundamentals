// Write a function reverse that takes a string as an argument and returns a string with all the letters reversed.

// For example, reverse("cat") would return the string "tac".

function reverse(string) {
    let reversedString = "";
 
    for(let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
 }
 
 module.exports = reverse;

//  TESTS
//  Path: Alchemy-JavaScript-Fundamentals\basics\ReverseString.test.js

const { assert } = require('chai');
const reverse = require('../reverse');

describe('reverse', () => {
    it('should return an empty string', () => {
        assert.equal(reverse(""), "");
    });

    it('should reverse a short string', () => {
        assert.equal(reverse('cat'), 'tac');
    });

    it('should reverse a long string', () => {
        assert.equal(reverse('macintosh'), 'hsotnicam');
    });
})