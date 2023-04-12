// Given an array of students, sort first by graduated then by grade like in the example above.

// Each object in the students array will have properties id, graduated and grade just like in the example shown above.

function sortStudents(students) {
    students.sort((a, b) => b.graduated - a.graduated || b.grade - a.grade)
}

module.exports = sortStudents;

// TESTS

// Path: Alchemy-JavaScript-Fundamentals\dataStructures\SortStudents.test.js

const { assert } = require('chai');
const sortStudents = require('../sortStudents');

describe('sortStudents', () => {
    it('should sort graduated student to the top', () => {
        let actual = [
            { id: 1, graduated: false, grade: 100 },
            { id: 2, graduated: true, grade: 90 },
        ];
        sortStudents(actual);
        const expected = [
            { id: 2, graduated: true, grade: 90 },
            { id: 1, graduated: false, grade: 100 },
        ];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });

    it('should sort by grade after sorting by graduated', () => {
        let actual = [
            { id: 1, graduated: false, grade: 90 },
            { id: 2, graduated: true, grade: 90 },
            { id: 3, graduated: true, grade: 95 },
            { id: 4, graduated: false, grade: 87 },
            { id: 5, graduated: true, grade: 70 },
            { id: 6, graduated: false, grade: 88 },
            { id: 7, graduated: true, grade: 85 },
        ];
        sortStudents(actual);
        const expected = [
            { id: 3, graduated: true, grade: 95 },
            { id: 2, graduated: true, grade: 90 },
            { id: 7, graduated: true, grade: 85 },
            { id: 5, graduated: true, grade: 70 },
            { id: 1, graduated: false, grade: 90 },
            { id: 6, graduated: false, grade: 88 },
            { id: 4, graduated: false, grade: 87 },
        ];
        console.log({ actual, expected });
        assert.sameDeepOrderedMembers(actual, expected);
    });
});