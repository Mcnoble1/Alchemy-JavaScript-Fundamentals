// Create a function move that will be added to the Shape.prototype. This function should take two arguments: x and y.

// It should move the shape's position by adding the corresponding arguments value:

// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {x, y}
}

Shape.prototype.move = function(x,y) {
    this.position.x += x;
    this.position.y += y;
}

module.exports = Shape;


// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\MoveShape.test.js

const { assert } = require('chai');
const Shape = require('../Shape');

let shape;
let x = 5;
let y = 10;
let moveX = 20;
let moveY = 30;
describe('Shape Instance', () => {
    beforeEach(() => {
        shape = new Shape(x, y);
    });

    it('should set the initial position coordinates', () => {
        assert.equal(shape.position.x, x);
        assert.equal(shape.position.y, y);
    });

    it('should have a function called move', () => {
        assert.equal(typeof shape.move, "function");
    });

    it('should handle a move', () => {
        shape.move(moveX, moveY);
        assert.equal(shape.position.x, x + moveX);
        assert.equal(shape.position.y, y + moveY);
    });
});