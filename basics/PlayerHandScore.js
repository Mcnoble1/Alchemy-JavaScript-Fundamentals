// The function playerHandScore that takes in a string of face cards (Jack, Queen, and King only) and returns the total score of the players hand.

// The cards are represented by the first letter in the name of the card:

// A "K" is 4 points
// A "Q" is 3 points
// A "J" is 2 points
// Example Usage:

// console.log( playerHandScore("K") ); // 4
// console.log( playerHandScore("KJ") ); // 6
// console.log( playerHandScore("KQQ") ); // 10 

const CARDS = {
    K: 4,
    Q: 3,
    J: 2,
}

function playerHandScore(hand) {
    let sum = 0;
    for(i = 0; i < hand.length; i++) {
        if(hand[i] === 'K') {
            sum += CARDS.K;
        } else if (hand[i] === 'Q') {
            sum += CARDS.Q;
        } else if (hand[i] === 'J') {
            sum += CARDS.J;
        }
    }
    console.log(sum);
    return sum;
}

module.exports = playerHandScore;


// TESTS
// Path: Alchemy-JavaScript-Fundamentals\basics\test\playerHandScore.test.js

const {assert} = require('chai');
const playerHandScore = require('../playerHandScore');

describe('playerHandScore', () => {
    it('should return a score of 0', () => {
        const hand = "";
        const result = playerHandScore(hand);
        assert.equal(result, 0);
    });

    it('should return the total hand score', () => {
        const hand = "J";
        const result = playerHandScore(hand);
        assert.equal(result, 2);
    });

    it('should return the total hand score', () => {
        const hand = "QQ";
        const result = playerHandScore(hand);
        assert.equal(result, 6);
    });

    it('should return the total hand score', () => {
        const hand = "JKQQ";
        const result = playerHandScore(hand);
        assert.equal(result, 12);
    });
});