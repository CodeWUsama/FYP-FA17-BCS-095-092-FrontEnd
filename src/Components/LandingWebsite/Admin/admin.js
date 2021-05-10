import React, { useState, useEffect } from 'react';
import classes from "./admin.module.css";
import PeopleIcon from '@material-ui/icons/People';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MessageIcon from '@material-ui/icons/Message'; 
import LanguageIcon from '@material-ui/icons/Language';
import Footer from "../Footer/Footer"

const Admin = () => {


    let handleLogout = () => {
        localStorage.removeItem("ad");
        localStorage.removeItem("token");
        window.location.href = "/login";
    }


    return (
        <div className={classes.rootCont}>
            <div className={classes.header}>
                <p>!</p>
                <h1 className={classes.center}>Admin Dashboard</h1>
                <p className={classes.logout} onClick={handleLogout}>Logout</p>
            </div>
            <div className={classes.optionsCont}>
                <div className={classes.option} onClick={() => window.location.href = "/admin/users"}>
                    <div className={classes.icon}>
                        <PeopleIcon style={{ fontSize: 200 }} />
                    </div>
                    <div className={classes.text}>
                        <p className={classes.textStyle}>Manage Users</p>
                    </div>
                </div>

                <div className={classes.option} onClick={() => window.location.href = "/admin/websites"}>
                    <div className={classes.icon}>
                        <LanguageIcon style={{ fontSize: 200 }} />
                    </div>
                    <div className={classes.text}>
                        <p className={classes.textStyle}>Manage websites</p>
                    </div>
                </div>

                <div className={classes.option} onClick={() => window.location.href = "/admin/payments"}>
                    <div className={classes.icon}>
                        <MonetizationOnIcon style={{ fontSize: 200 }} />
                    </div>
                    <div className={classes.text}>
                        <p className={classes.textStyle}>Manage Payments</p>
                    </div>
                </div>

                <div className={classes.option} onClick={() => window.location.href = "/admin/messages"}>
                    <div className={classes.icon}>
                        <MessageIcon style={{ fontSize: 200 }} />
                    </div>
                    <div className={classes.text}>
                        <p className={classes.textStyle}>Messages</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}




export default Admin;
