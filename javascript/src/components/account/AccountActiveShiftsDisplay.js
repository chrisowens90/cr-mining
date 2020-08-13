import React from 'react';
import moment from 'moment-timezone';
import AccountActiveShiftDisplay from './AccountActiveShiftDisplay';
import { Grid, useTheme, makeStyles, Typography } from '@material-ui/core';
import { Wrapper } from '../../utilities/styles';
import WidgetNoResultsPlaceholder from '../generic/WidgetNoResultsPlaceholder'
import { PersonPinTwoTone } from '@material-ui/icons';


const useStyles = makeStyles({
    media: {
        height: 100,
    },
    root: {
        textAlign: 'left',
    },
    ...Wrapper,
})


const AccountActiveShiftsDisplay = ({ relevantPlaces, accounts }) => {

    const classes = useStyles();
    const theme = useTheme();

    var queenslandStartTime = moment('0700', 'hhmm').tz("Australia/Brisbane");
    var queenslandFinishTime = moment('1800', 'hhmm').tz("Australia/Brisbane");

    function StartsInCorrectTime(shiftStartTimeInUtc) {

        if (shiftStartTimeInUtc >= queenslandStartTime && shiftStartTimeInUtc <= queenslandFinishTime) {
            return true;
        }

        return false;
    }

    var accountsInCorrectTime = accounts.filter(a => relevantPlaces.some(p => p.accountID === a.accountID && StartsInCorrectTime(p.parsedShiftStartTime)));

    return (
        <div style={{ marginBottom: theme.spacing(3) }}>
            <Typography>
                Time Matching Accounts
            </Typography>
            <Grid container spacing={3} className={classes.wrapper}>
                {accountsInCorrectTime.map(account => {
                    return (
                        <Grid item xs={12} sm={6} md={3}>
                            <AccountActiveShiftDisplay account={account} />
                        </Grid>
                    )
                })}
                {!accountsInCorrectTime.length ? (
                    <Grid item style={{ textAlign: 'center' }} xs={12}>
                        <WidgetNoResultsPlaceholder text="No relevant accounts" description="Select machines to see relevant accounts." flip={true} icon={PersonPinTwoTone} />
                    </Grid>
                ) : null}
            </Grid>
        </div>
    )
}

export default AccountActiveShiftsDisplay;