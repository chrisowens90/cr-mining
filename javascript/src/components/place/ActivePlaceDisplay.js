import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ScrollPretty } from '../../utilities/styles';


const useStyles = makeStyles({
    media: {
        height: 140,
    },
    root: {
        textAlign: 'left',
    },
    ...ScrollPretty,
});

const ActivePlaceDisplay = ({ place }) => {

    const { placeID, accountID, name, parsedShiftStartTime, shiftStart, active, operators, GMT } = place;
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image="/static/images/place.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ textTransform: 'capitalize' }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Place: {placeID}<br />
                        shiftStart: {shiftStart}<br />
                        GMT: {GMT}<br />
                        active: {String(active)}<br />
                        operators: {operators}<br />
                        accountID: {accountID}<br />
                        Parsed Shift Time: {parsedShiftStartTime.format()}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ActivePlaceDisplay;