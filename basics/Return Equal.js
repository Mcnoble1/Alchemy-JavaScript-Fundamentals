// Let's imagine we're building a website that requires users to have a subscription to access content. We want to encourage users to try it out so we add a free trial.

// Let's update the canAccess function to allow access if the user has either a subscription or a free trial.
// If either purchasedSubscription or freeTrial are true, return true. Otherwise return false.


function canAccess(purchasedSubscription, freeTrial) {
    if (purchasedSubscription == true || freeTrial == true) {
        return true;
    } return false;
}

module.exports = canAccess;




//  TESTS
//  Path: Alchemy-JavaScript-Fundamentals\basics\Return Equal.test.js
const canAccess = require('../canAccess');
const { assert } = require('chai');

describe('canAccess', () => {
    describe('if they purchased a subscription', () => {
        it('should return true', () => {
            assert.equal(canAccess(true, false), true);
        });
    });
    describe('if they have a free trial', () => {
        it('should return true', () => {
            assert.equal(canAccess(false, true), true);
        });
    });
    describe('if they have not purchased and have no trial', () => {
        it('should return false', () => {
            assert.equal(canAccess(false, false), false);
        });
    });
});