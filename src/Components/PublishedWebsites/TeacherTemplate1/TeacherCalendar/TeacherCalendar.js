import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from '@material-ui/core/styles';
import Teachercall from '../Calendar/TeacherCall'
import Meeting from './Meetings';
import classes from './teacher.module.css'

const useStyles = makeStyles((theme) => ({

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  top:{
    width:'100%',
    display:'flex',
    // flexDirection:'column',
    justifycontent: 'center',
  },
  cal: {
    display:'flex',
    flexDirection:'column',
    justifycontent: 'center',
    alignitems: 'center',
    marginleft: '30%',
    width: '100%',
  },
 
}));
const ReactCalendar = (props) => {
 
  //  const classes = useStyles();
  const [value, onChange] = useState(new Date());
 
  
  return (
    <div className={classes.top}>
      <div>
        <h3 style={{ marginLeft:'10%'}} >EVENTS</h3>
        <p style={{color:'white'}}>.</p>
        <div className={classes.cal} style={{display:'flex'}}>
          <Calendar
            onChange={onChange}
            value={value}
          /><p style={{color:'white'}}>.......</p>
          <Teachercall/>
       </div>
      <Meeting/>
      </div>
    </div>
  );
};
export default ReactCalendar;