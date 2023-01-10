// Given an array of pizza orders, return the total number of pizzas ordered.

// The orders are an array of objects, each with pizzas key inside:

// const orders = [
//     { pizzas: 3 },
//     { pizzas: 5 },
//     { pizzas: 10 }
// ];
//  For this example above, we'd expect 18 total pizzas:

// const totalPizzas = numberOfPizzas(orders);
// console.log( totalPizzas ); // 18

function numberOfPizzas(orders) {
    sum = 0;
    for(let i = 0; i < orders.length; i++) {
        sum += orders[i].pizzas;
    }
    return sum;
}

module.exports = numberOfPizzas;

// TESTS

// Path: Alchemy-JavaScript-Fundamentals\basics\ManyOrders.test.js

const numberOfPizzas = require('../numberOfPizzas');
const { assert } = require('chai');

describe('numberOfPizzas', () => {
    describe('a single order', () => {
        const orders = [
            { pizzas: 3 },
        ]

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(orders), 3);
        });
    });

    describe('many orders', () => {
        const orders = [
            { pizzas: 3 },
            { pizzas: 5 },
            { pizzas: 10 },
        ]

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(orders), 18);
        });
    });
});