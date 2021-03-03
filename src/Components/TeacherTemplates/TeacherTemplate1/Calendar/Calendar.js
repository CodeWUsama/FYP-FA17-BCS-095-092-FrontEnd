import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from '@material-ui/core/styles';
import Calling from './Calling';
import Footer from '../Footer/Footerpage'
import classes from './calender.module.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  cal: {
    justifycontent: 'center',
    alignitems: 'center',
    display:'flex',
    // flexDirection:'column',
    width: '80%',
  },

}));
const ReactCalendar = (props) => {
 
// const classes = useStyles();
const [value, onChange] = useState(new Date());
 
  
  return (
    <div className={classes.top}  style={{display:'flex', justifyContent:'center', }}>
      <div className={classes.cal}>
      <div>
      <h3 > REQUEST FOR MEETING</h3>
      <div style={{color:'white'}}>.</div>
          <Calendar
            onChange={onChange}
            value={value}
          />
        <div style={{color:'white'}}>.</div>
        <div className={classes.options} style={{marginLeft:'20%' }}>
          <Calling
            date= {value}
          /> 
        </div></div>
      </div>
      <Footer/>
    </div>
  );
};
export default ReactCalendar;