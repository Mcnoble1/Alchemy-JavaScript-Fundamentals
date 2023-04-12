// There's a river that runs right between two towns. In order for cars to cross the river, we built a bridge!

// XOR

// Trouble is, there's only room for 1 car to cross the bridge at a time. This means that if both cars were to be crossing at the same time, neither would be able to cross.

// Complete the carCrossing function to return true if and only if one car is crossing.

//  The logical term for this situation is an "Exclusive OR". In other words, it is only true if exactly 1 of the terms are true.


function carCrossing(aCrossing, bCrossing) {
    if((aCrossing && !bCrossing) || (bCrossing && !aCrossing)) {
        return true
    } return false
}

module.exports = carCrossing;


// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\CarCrossing.test.js

const carCrossing = require('../carCrossing');
const { assert } = require('chai');

describe('carCrossing', () => {
    describe('when a is crossing and not b', () => {
        it('should allow a to cross', () => {
            assert.equal(carCrossing(true, false), true);
        });
    });
    describe('when both are crossing', () => {
        it('should be stalemate', () => {
            assert.equal(carCrossing(true, true), false);
        });
    });
    describe('when both are crossing', () => {
        it('should allow b to cross', () => {
            assert.equal(carCrossing(false, true), true);
        });
    });
    describe('when neither are crossing', () => {
        it('should not be true', () => {
            assert.equal(carCrossing(false, false), false);
        });
    });
});



