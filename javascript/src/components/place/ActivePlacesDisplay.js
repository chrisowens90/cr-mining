import React, { useState, useEffect } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import ActivePlaceDisplay from './ActivePlaceDisplay';
import { Wrapper } from '../../utilities/styles';
import WidgetNoResultsPlaceholder from '../generic/WidgetNoResultsPlaceholder'
import { MapTwoTone } from '@material-ui/icons';


const useStyles = makeStyles({
    ...Wrapper,
})

const ActivePlacesDisplay = ({ machines, availablePlaces, relevantPlacesCallback }) => {

    const classes = useStyles();
    const [relevantPlaces, setRelevantPlaces] = useState([]);
    const [placeIds, setPlaceIds] = useState([]);
    const totalOperators = relevantPlaces.reduce((sum, x) => sum + x.operators, 0);

    useEffect(() => {
        setPlaceIds([...new Set(machines.map(x => x.placeID))]);
    }, [machines, availablePlaces]);

    useEffect(() => {
        setRelevantPlaces(availablePlaces.filter(x => placeIds.some(y => y === x.placeID && x.active)));
    }, [setRelevantPlaces, placeIds, availablePlaces]);

    useEffect(() => {
        if (relevantPlacesCallback) relevantPlacesCallback(relevantPlaces);
    }, [relevantPlaces, relevantPlacesCallback]);

    return (
        <div>
            <Typography variant="body1">Active Places servicing a total of {totalOperators} operator{totalOperators !== 1 ? "s" : ""}.</Typography>
            <Grid container spacing={3} className={classes.wrapper}>
                {relevantPlaces.map(place => {
                    return (
                        <Grid item xs={3}>
                            <ActivePlaceDisplay place={place} />
                        </Grid>
                    );
                })}
                {!relevantPlaces.length ? (
                    <Grid item style={{ textAlign: 'center' }} xs={12}>
                        <WidgetNoResultsPlaceholder text="No active places" description="Select machines to see relevant places listed here." flip={true} icon={MapTwoTone} />
                    </Grid>
                ) : null}
            </Grid>
        </div>
    )
}

export default ActivePlacesDisplay;