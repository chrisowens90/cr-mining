import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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

const MachineDisplay = ({ clickHandler, machine }) => {

    const classes = useStyles();
    const { machineID, name, placeID } = machine;

    function onClickHandler() {
        if (clickHandler) clickHandler(machine);
    }

    return (
        <Card className={classes.root} onClick={onClickHandler}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/machine.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ textTransform: 'capitalize' }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Place: {placeID}<br />
                        Machine Id: {machineID}<br />
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MachineDisplay;