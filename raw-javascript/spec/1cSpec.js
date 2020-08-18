const { places } = require('../data.js');
const { getTotalAmountOfOperatorsForGivenPlaces } = require('../index.js');

describe("Task 1c: Get total operators for places", function () {
    
    describe("Places 1 and 5", function () {
        it("returns 24", function (done) {

            const totalOperatorsForGivenPlaces = getTotalAmountOfOperatorsForGivenPlaces(places.filter(x => x.placeID === 1 || x.placeID === 5));
            
            expect(totalOperatorsForGivenPlaces).toBe(24);
            done();
        });
    });    

    describe("Place 1", function () {
        it("returns 15", function (done) {

            const totalOperatorsForGivenPlaces = getTotalAmountOfOperatorsForGivenPlaces(places.filter(x => x.placeID === 1));
            
            expect(totalOperatorsForGivenPlaces).toBe(15);
            done();
        });
    }); 

    describe("Place 5", function () {
        it("returns 9", function (done) {

            const totalOperatorsForGivenPlaces = getTotalAmountOfOperatorsForGivenPlaces(places.filter(x => x.placeID === 5));
            
            expect(totalOperatorsForGivenPlaces).toBe(9);
            done();
        });
    }); 
});