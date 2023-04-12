// The object passed into removeSecret has a secret key that must be removed!

// Set the value of this key to undefined to pass the test cases. Modify the object directly, there is no need to return it.

function removeSecret(object) {
    delete object.secret;
}

module.exports = removeSecret;

// TESTS

// Path: Alchemy-JavaScript-Fundamentals\basics\SecretKey.test.js

const removeSecret = require('../removeSecret');
const { assert } = require('chai');

describe('removeSecret', () => {
    it('should remove the secret', () => {
        const person = {
            name: "Alice",
            secret: "afraid of the dark"
        }

        removeSecret(person);

        assert.equal(person.name, "Alice");
        assert.equal(person.secret, undefined);
    });
});