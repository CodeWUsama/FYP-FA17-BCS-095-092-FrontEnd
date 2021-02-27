import React from 'react';
import { Component } from 'react';
import classes from "./Dashboard.module.css";

export default class Dashboard extends Component {
    state = {
        orders: []
    }


    _isMounted = false;

    async componentDidMount() {
        this._isMounted = true;
        await fetch("http://localhost:8080/s1td/viewOrders", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('userToken'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id")
            })
        })
            .then(result => {
                return result.json();
            }).then(resultData => {
                if (this._isMounted) {
                    this.setState({
                        orders: resultData.orders
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleLogout = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("p");
        localStorage.removeItem("d");
        window.location.href="/s1/#/account"
    }

    render() {

        let displayData = null;
        if (this.state.orders) {
            displayData = this.state.orders.map((order,i) => {
                return (
                    <tr key={i}>
                        <td>{order.productId}</td>
                        <td>{order.total}</td>
                        <td>{order.method}</td>
                        <td>{order.status}</td>
                    </tr>
                )
            })
        }

        return (
            <div className={classes.rootCont}>
                <h1 style={{ textAlign: 'center' }}>Welcome on Store Dashboard</h1>
                <div className={classes.btCont}>
                    <button onClick={() => { window.location.href = "/s1/#/editProfile" }} className={classes.btt}>Edit Profile</button>
                    <button className={classes.btt} onClick={this.handleLogout}>Logout</button>
                </div>
                <div style={{ marginTop: "20px" }} className="container">
                    <h2>Your Orders</h2>
                    <p>In this table, the information about orders is being displayed:</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Price</th>
                                <th>Method</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                           {displayData}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}