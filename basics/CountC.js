// The function countC takes a string str as its only argument.

// This function should return the number of c's found in the string. It must count both lower-case c and upper-case C.

function countC(str) {
    let Cs = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() === 'c') {
            Cs += 1;
        }
    }
    return Cs;
}

module.exports = countC;

// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\CountC.test.js

const { assert } = require('chai');
const countC = require('../countC');

describe('countC', () => {
    it('should return zero', () => {
        assert.equal(countC('pizza'), 0);
    });

    it('should handle lowercase c', () => {
        assert.equal(countC('character'), 2);
    });

    it('should handle uppercase c', () => {
        assert.equal(countC('Circus'), 2);
    });
})