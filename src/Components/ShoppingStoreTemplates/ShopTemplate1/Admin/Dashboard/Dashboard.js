import React from 'react';
import { Component } from 'react';
import classes from "./Dashboard.module.css";

export default class Dashboard extends Component {

    handleLogout = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("a");
        window.location.href = "/s1/#/account"
    }

    handlePaymentRequests = () => {
        window.location.href = "/s1/#/admin/paymentrequests"
    }

    render() {

        return (
            <div className={classes.rootCont}>
                <h1 style={{ textAlign: 'center' }}>Welcome on Admin Dashboard</h1>
                <div className={classes.btCont}>
                    <button className={classes.btt} onClick={this.handlePaymentRequests}>Payment Requests</button>
                    <button className={classes.btt} onClick={()=>window.location.href="/S1/#/admin/manageorders"} >Manage Orders</button>
                    <button className={classes.btt} onClick={() => window.location.href = "/S1/#/admin/contactrequests"} >Contact Requests</button>
                    <button className={classes.btt} onClick={()=>window.location.href="/S1/#/admin/paymentdetails"} >PaymentDetails</button>
                </div>
            </div>
        );
    }
}