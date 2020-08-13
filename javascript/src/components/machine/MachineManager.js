import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import MachinesSelector from './MachinesSelector';
import ActivePlacesDisplay from '../place/ActivePlacesDisplay';
import AccountActiveShiftsDisplay from '../account/AccountActiveShiftsDisplay';


const MachineManager = ({ availableMachines, availablePlaces, availableAccounts }) => {

    const [selectedMachines, setSelectedMachines] = useState([]);
    const [relevantPlaces, setRelevantPlaces] = useState([]);

    return (
        <Grid container>
            <Grid item xs={12}>
                <MachinesSelector machines={availableMachines} selectedMachinesCallback={setSelectedMachines} />
            </Grid>
            <Grid item xs={12}>
                <ActivePlacesDisplay availablePlaces={availablePlaces} machines={selectedMachines} relevantPlacesCallback={setRelevantPlaces} />
            </Grid>
            <Grid item xs={12}>
                <AccountActiveShiftsDisplay relevantPlaces={relevantPlaces} accounts={availableAccounts} />
            </Grid>
        </Grid>
    );
}

export default MachineManager;