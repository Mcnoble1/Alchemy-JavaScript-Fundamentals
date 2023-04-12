// A string is stored in the variable fakeName.

// Take this fake name and use it to replace every occurrence of "John" in the message.

// Do not change the message in other way.

const fakeName = require('./fakeName');

const message = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;

module.exports = message;

// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\Interpolate Name.test.js
const assert = require('assert');
const actualMessage = require('../index');
const fakeName = require('../fakeName');

const expectedMessage = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;

it('should replace the name', () => {
    const isEqual = (actualMessage === expectedMessage);

    if (!isEqual) {
        console.log("Your Message: ", actualMessage)
        console.log("Expected Message: ", expectedMessage)
        assert(false);
    }
    else {
        assert(true);
    }
});


// A string is stored in the variable fakeName.
const faker = require('faker');

module.exports = faker.name.findName()