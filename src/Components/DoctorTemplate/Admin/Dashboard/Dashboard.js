import React from 'react';
import classes from "./Dashboard.module.css"
import Button from '@material-ui/core/Button';
import MessageIcon from '@material-ui/icons/Message';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import Footer from "./../../Footer-fixed/Footer"

const Dashboard = (props) => {
    return (
        <>
            <div className={classes.rootCont}>
                <Button
                    variant="contained"
                    onClick={()=>{props.history.push("/admin/messages")}}
                    color="primary"
                    style={{ height: 80, width: 500, fontSize: 30, marginBottom: 50, boxShadow:"none", outlineColor:'white' }}
                    className={classes.button}
                    startIcon={<MessageIcon />}
                >
                    Contact Messages
            </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>{props.history.push("/admin/appointments")}}
                    style={{ height: 80, width: 500, fontSize: 30, boxShadow:"none", outlineColor:'white' }}
                    className={classes.button}
                    startIcon={<SportsHandballIcon />}
                >
                    Manage Appointments
            </Button>
            </div>
            <Footer />
        </>
    );
}


export default Dashboard;