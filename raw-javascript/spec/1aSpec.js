const { machines } = require('../data.js');
const { getAllActivePlacesForGivenMachines } = require('../index.js');

describe("Task 1a: Get all active places for machines", function () {
    
    describe("Machines 4 and 5", function () {
        it("returns place number 3", function (done) {

            const activePlacesForGivenMachines = getAllActivePlacesForGivenMachines(machines.filter(x => x.machineID === 4 || x.machineID === 5));
            
            expect(activePlacesForGivenMachines.length).toBe(1);
            expect(activePlacesForGivenMachines[0].placeID).toBe(3);
            done();
        });
    });

    describe("Machine 5", function () {
        it("returns no places", function (done) {

            const activePlacesForGivenMachines = getAllActivePlacesForGivenMachines(machines.filter(x => x.machineID === 5));
            
            expect(activePlacesForGivenMachines.length).toBe(0);
            done();
        });
    });

    describe("Machine 4", function () {
        it("returns place number 3", function (done) {

            const activePlacesForGivenMachines = getAllActivePlacesForGivenMachines(machines.filter(x => x.machineID === 4));
            
            expect(activePlacesForGivenMachines.length).toBe(1);
            expect(activePlacesForGivenMachines[0].placeID).toBe(3);
            done();
        });
    });
});