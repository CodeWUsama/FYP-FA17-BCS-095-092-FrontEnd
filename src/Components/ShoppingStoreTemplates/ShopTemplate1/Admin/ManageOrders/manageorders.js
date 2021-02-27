import React, { useEffect, useState } from 'react';
import classes from "./manageorders.module.css"
import TextField from '@material-ui/core/TextField';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);
    const [names, setNames] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await fetch("http://localhost:8080/s1td/viewAllOrders", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    id: localStorage.getItem("id")
                })
            })
                .then(result => {
                    return result.json();
                }).then(resultData => {
                    setOrders(resultData.orders);
                    setNames(resultData.productNames);
                })
                .catch(err => {
                    console.log(err);
                })
        }

        fetchData();

    }, [])


    let displayData = orders.map((order, i) => {
        return (
            <tr key={i}>
                <td>{names[i]}</td>
                <td>{order.total}</td>
                <td>{order.method}</td>
                <td>
                    <div className={classes.statusCont}>
                        {order.status}
                        <TextField id="newStatus" label="Change Status" style={{ margin: "20px 0px" }} />
                        <button onClick={() => handleChange(order)} type="button" className="btn btn-success">Change</button>
                    </div>
                </td>
            </tr>
        )
    })

    let handleChange = (order) => {
        fetch("http://localhost:8080/s1td/changeOrderStatus", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                orderId: order._id,
                newStatus:document.getElementById("newStatus").value
            })
        })
            .then(result => {
                return result.json();
            }).then(resultData => {
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className={classes.rootCont}>
            <div style={{ marginTop: "20px" }} className="container">
                <h2>Your Orders</h2>
                <p>In this table, the information about orders is being displayed:</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Method</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders ? displayData : null}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default ManageOrders;