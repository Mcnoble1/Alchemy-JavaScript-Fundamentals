// Let's find the longer half of the string before and after the x!

// First, you'll need to find the lower-case x.
// Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.
// Take the longer string and return it!

function splitAtX(string) {
    for (let i = 0; i < string.length; i+=1) {
        if (string[i] === 'x') {
            let one = string.slice(0, i);
            let two = string.slice(i+1)
            if (one.length > two.length) {
                return one;
            } else {
                return two;
            }
        }
    }
}

module.exports = splitAtX;

// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\LongerHalf.test.js

const splitAtX = require('../splitAtX');
const { assert } = require('chai');

describe('splitAtX', () => {
    it('should handle the first half being longer', () => {
        assert.equal(splitAtX("Happyxdays"), "Happy");
        assert.equal(splitAtX("before the x is long"), "before the ");
    });

    it('should handle the second half being longer', () => {
        assert.equal(splitAtX("10xDeveloper"), "Developer");
        assert.equal(splitAtX("before the x is shorter than after"), " is shorter than after");
    });
});