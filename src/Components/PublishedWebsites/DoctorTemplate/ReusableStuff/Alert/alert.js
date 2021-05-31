import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 'max-content',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


export default function DescriptionAlerts(props) {
    const classes = useStyles();

    let renderAlert = () => {
        if (props.mode === "error") {
            return (
                <Alert severity="error" onClose={props.onClose}>
                    <AlertTitle>{props.title}</AlertTitle>
                    {props.description}
                </Alert>
            )
        }
        else if (props.mode === "warning") {
            return (
                <Alert severity="warning" onClose={props.onClose}>
                    <AlertTitle>{props.title}</AlertTitle>
                    {props.description}
                </Alert>
            )
        }
        else if (props.mode === "info") {
            return (
                <Alert severity="info" onClose={props.onClose}>
                    <AlertTitle>{props.title}</AlertTitle>
                    {props.description}
                </Alert>
            )
        }
        else if (props.mode === "success") {
            return (
                <Alert severity="success" onClose={props.onClose}>
                    <AlertTitle>{props.title}</AlertTitle>
                    {props.description}
                </Alert>
            )
        }
    }

    return (
        <div className={classes.root}>
            {renderAlert()}
        </div>
    );
}