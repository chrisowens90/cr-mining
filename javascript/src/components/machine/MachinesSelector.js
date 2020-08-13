import React, { useState, useEffect } from 'react';
import { Grid, useTheme, makeStyles, Typography } from '@material-ui/core';
import MachineDisplay from './MachineDisplay';
import { Wrapper } from '../../utilities/styles';
import WidgetNoResultsPlaceholder from '../generic/WidgetNoResultsPlaceholder'
import { AirportShuttleTwoTone } from '@material-ui/icons';

const useStyles = makeStyles({
    media: {
        height: 100,
    },
    root: {
        textAlign: 'left',
    },
    ...Wrapper,
})


const MachinesSelector = ({ machines, selectedMachinesCallback }) => {

    const classes = useStyles();
    const theme = useTheme();
    const [selectedMachines, setSelectedMachines] = useState([]);
    const [remainingMachines, setRemainingMachines] = useState(machines);

    function selectMachine(machine) {
        setSelectedMachines([...selectedMachines, machine]);
        setRemainingMachines([...remainingMachines.filter(x => x.machineID !== machine.machineID)]);
    }

    function deselectMachine(machine) {
        setSelectedMachines([...selectedMachines.filter(x => x.machineID !== machine.machineID)]);
        setRemainingMachines([...remainingMachines, machine]);
    }

    // Notify parent of selected machines change if a callback has been provided
    useEffect(() => {
        if (selectedMachinesCallback) selectedMachinesCallback(selectedMachines);
    }, [selectedMachines, selectedMachinesCallback]);

    return (
        <div style={{ marginBottom: theme.spacing(3) }}>
            <Typography>
                Remaining Machines
            </Typography>
            <Grid container spacing={3} className={classes.wrapper}>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        {remainingMachines.map(machine => {
                            return (
                                <Grid item xs={12} sm={6} md={3}>
                                    <MachineDisplay machine={machine} clickHandler={selectMachine} key={`machine-${machine.machineID}`} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>

            <Typography variant="body1" align="center">
                Selected Machines
            </Typography>
            <Grid container spacing={3} className={classes.wrapper}>
                {selectedMachines.map(machine => {
                    return (
                        <Grid item xs={12} sm={6} md={3}>
                            <MachineDisplay machine={machine} clickHandler={deselectMachine} key={`machine-${machine.machineID}`} />
                        </Grid>
                    )
                })}
                {!selectedMachines.length ? (
                    <Grid item style={{ textAlign: 'center' }} xs={12}>
                        <WidgetNoResultsPlaceholder text="No machine selected" description="Click on an available machine to select it." flip={true} icon={AirportShuttleTwoTone} />
                    </Grid>
                ) : null}
            </Grid>
        </div>
    )
}

export default MachinesSelector;