const { accounts, places } = require('./data.js');
const moment = require('moment');
require('moment-timezone');

const QLD_START_TIME = moment('0700', 'hhmm').tz("Australia/Brisbane");
const QLD_FINISH_TIME = moment('1800', 'hhmm').tz("Australia/Brisbane");


/* Used to parse shift times using moment */
const getParsedShiftTime = (gmt, shiftStart) => {
    return moment().utcOffset(gmt).set({
        hours: String(shiftStart).substring(0, 2),
        minutes: String(shiftStart).substring(2, 2),
    })
};


/* Used to fulfill task 1a */
function getAllActivePlacesForGivenMachines(machinesInput) {
    return places.filter(x => machinesInput.some(y => y.placeID === x.placeID && x.active));
}


/* Used to fulfull task 1b */
function getAllAccountsThatHaveAtLeastOneValidShift(placesInput) {
    return accounts.filter(a => placesInput
        .some(p => p.accountID === a.accountID
            && getParsedShiftTime(p.GMT, p.shiftStart) >= QLD_START_TIME
            && getParsedShiftTime(p.GMT, p.shiftStart) <= QLD_FINISH_TIME
        ));
}


/* Used to fulfill task 1c */
function getTotalAmountOfOperatorsForGivenPlaces(placesInput) {
    return placesInput.reduce((sum, x) => sum + x.operators, 0);
}


module.exports = {
    getAllActivePlacesForGivenMachines,
    getAllAccountsThatHaveAtLeastOneValidShift,
    getTotalAmountOfOperatorsForGivenPlaces
}