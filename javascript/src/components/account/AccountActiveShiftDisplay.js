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

const AccountActiveShiftDisplay = ({ account }) => {

    const { accountID, name } = account;
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image="/static/images/account.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ textTransform: 'capitalize' }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        accountID: {accountID}<br />
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default AccountActiveShiftDisplay;