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


    get parsedShiftStartTime(){
        var test = moment(this.shiftStart, 'hhmm').utcOffset(this.GMT);        

        debugger;

        return test;
    }
}

export default Place;
