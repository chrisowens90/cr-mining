import moment from 'moment-timezone';


class Place {

    constructor({
        placeID,
        accountID,
        name,
        shiftStart,
        GMT,
        active,
        operators
    }) {
        this.placeID = placeID;
        this.accountID = accountID;
        this.name = name;
        this.shiftStart = shiftStart;
        this.GMT = GMT;
        this.active = active;
        this.operators = operators;
    }


    get parsedShiftStartTime() {
        return moment().utcOffset(this.GMT).set({
            hours: this.shiftStart?.substring(0, 2),
            minutes: this.shiftStart?.substring(2, 2),
        })
    }
}

export default Place;
