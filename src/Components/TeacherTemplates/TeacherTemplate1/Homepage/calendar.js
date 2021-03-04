import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from '@material-ui/core/styles';
import Calling from '../Calendar/Calling';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
        padding:0
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    cal: {
        display: 'flex',
        flexDirection: 'column',
        justifycontent: 'center',
        alignitems: 'center',
        // width:'60%'
    },


}));
const ReactCalendar = (props) => {

    const classes = useStyles();
    const [value, onChange] = useState(new Date());


    return (
        <div className={classes.top}>
            <h3> REQUEST FOR MEETING</h3>
            <p style={{ color: 'white' }}>.</p>
            <div className={classes.cal}>
                <Calendar
                    onChange={onChange}
                    value={value}
                />
                <div style={{ color: 'white' }}>.</div>
                <div style={{ color: 'white' }}>.</div>
                <div className={classes.options} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Calling
                        date={value}
                    />
                </div>
            </div></div>

    );
};
export default ReactCalendar;