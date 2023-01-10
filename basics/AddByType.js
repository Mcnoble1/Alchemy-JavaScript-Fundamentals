// Modify the numberOfPizzas function to only count pizzas when the order.type is equal to ORDER_TYPES.PIZZA.

// The orders will have a type keyword:

// const orders = [
//     { pizzas: 3, type: ORDER_TYPES.PIZZA },
//     { wings: 12, type: ORDER_TYPES.WINGS },
// ];

// const ORDER_TYPES = {
//     PIZZA: 0,
//     WINGS: 5,
//     SALAD: 3,
//     BURGER: 10,
//     SANDWITCH: 7,
// }

// module.exports = ORDER_TYPES;

const ORDER_TYPES = require('./orderTypes');
function numberOfPizzas(orders) {
    sum = 0;
    for(let i = 0; i < orders.length; i++) {
        if(orders[i].type === ORDER_TYPES.PIZZA) {
            sum += orders[i].pizzas;
        }
    }
    return sum;
}

module.exports = numberOfPizzas;


// TESTS

// Path: Alchemy-JavaScript-Fundamentals\basics\ManyOrders.test.js

const numberOfPizzas = require('../numberOfPizzas');
const { assert } = require('chai');
const ORDER_TYPES = require('../orderTypes');

describe('numberOfPizzas', () => {
    describe('just pizza', () => {
        const orders = [
            { pizzas: 3, type: ORDER_TYPES.PIZZA, extraCheese: true },
            { pizzas: 5, type: ORDER_TYPES.PIZZA, extraCheese: false },
            { pizzas: 10, type: ORDER_TYPES.PIZZA, extraCheese: true },
        ]

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(orders), 18);
        });
    });

    const keys = Object.keys(ORDER_TYPES);
    describe(keys.join(', '), () => {
        const orders = keys.reduce((arr, key) => {
            return arr.concat({
                type: key,
            });
        }, [{ pizzas: 3, type: ORDER_TYPES.PIZZA }]);

        it('should return the number of pizzas', () => {
            assert.equal(numberOfPizzas(orders), 3);
        });
    });
});