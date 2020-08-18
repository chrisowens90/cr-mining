const { places } = require('../data.js');
const { getAllAccountsThatHaveAtLeastOneValidShift } = require('../index.js');

describe("Task 1b: Get all accounts that have at least one valid shift", function () {

    describe("Places 1 and 5", function () {
        it("returns account 4", function (done) {

            const accountWithOneValidShift = getAllAccountsThatHaveAtLeastOneValidShift(places.filter(x => x.placeID === 5 || x.placeID === 1));

            expect(accountWithOneValidShift.length).toBe(1);
            expect(accountWithOneValidShift[0].accountID).toBe(4);
            done();
        });
    });

    describe("Place 1", function () {
        it("returns no accounts", function (done) {

            const accountWithOneValidShift = getAllAccountsThatHaveAtLeastOneValidShift(places.filter(x => x.placeID === 1));

            expect(accountWithOneValidShift.length).toBe(0);
            done();
        });
    });

    describe("Place 5", function () {
        it("returns account 4", function (done) {

            const accountWithOneValidShift = getAllAccountsThatHaveAtLeastOneValidShift(places.filter(x => x.placeID === 5));

            expect(accountWithOneValidShift.length).toBe(1);
            expect(accountWithOneValidShift[0].accountID).toBe(4);
            done();
        });
    });
});