const accounts = [
    { accountID: 1, name: 'account01' },
    { accountID: 2, name: 'account02' },
    { accountID: 3, name: 'account03' },
    { accountID: 4, name: 'account04' }
];

const places = [
    { placeID: 1, accountID: 1, name: 'place01', shiftStart: 1100, GMT: '+01:00', active: true, operators: 15 },
    { placeID: 2, accountID: 2, name: 'place02', shiftStart: 2000, GMT: '-03:00', active: true, operators: 23 },
    { placeID: 3, accountID: 4, name: 'place03', shiftStart: 2000, GMT: '+10:00', active: true, operators: 7 },
    { placeID: 4, accountID: 3, name: 'place04', shiftStart: 0800, GMT: '+01:00', active: false, operators: 5 },
    { placeID: 5, accountID: 4, name: 'place05', shiftStart: 1000, GMT: '+10:00', active: true, operators: 9 },
    { placeID: 6, accountID: 2, name: 'place06', shiftStart: 0400, GMT: '+08:00', active: false, operators: 32 },
    { placeID: 7, accountID: 1, name: 'place07', shiftStart: 0100, GMT: '-03:00', active: false, operators: 45 },
    { placeID: 8, accountID: 3, name: 'place08', shiftStart: 0400, GMT: '+02:00', active: true, operators: 5 },
];

const machines = [
    { machineID: 1, placeID: 1, name: 'machine01' },
    { machineID: 2, placeID: 2, name: 'machine02' },
    { machineID: 3, placeID: 5, name: 'machine03' },
    { machineID: 4, placeID: 3, name: 'machine04' },
    { machineID: 5, placeID: 6, name: 'machine05' },
    { machineID: 6, placeID: 5, name: 'machine06' },
    { machineID: 7, placeID: 1, name: 'machine07' },
    { machineID: 8, placeID: 8, name: 'machine08' },
    { machineID: 9, placeID: 4, name: 'machine09' },
    { machineID: 10, placeID: 2, name: 'machine10' },
    { machineID: 11, placeID: 5, name: 'machine11' },
    { machineID: 12, placeID: 1, name: 'machine12' },
    { machineID: 13, placeID: 3, name: 'machine13' },
    { machineID: 14, placeID: 3, name: 'machine14' },
    { machineID: 15, placeID: 6, name: 'machine15' },
];


module.exports = { accounts, places, machines };