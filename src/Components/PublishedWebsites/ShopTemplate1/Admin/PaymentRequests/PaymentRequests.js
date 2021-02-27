import React, { useEffect, useState } from 'react';
import classes from "./PaymentRequests.module.css";
import Request from './Request';

const PaymentRequests = () => {

    const [requests, setRequests] = useState([]);

    useEffect(() => {

        async function fetchData() {
            await fetch("http://localhost:8080/s1td/paymentRequests?id=" + localStorage.getItem("id"), {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
            })
                .then(result => {
                    return result.json();
                }).then(resultData => {
                    setRequests(resultData.requests);
                })
                .catch(err => {
                    console.log(err);
                })
        }

        fetchData();

    }, [])

    let renderRequests = requests.map((request, i) => {
        return <Request key={i} id={request._id} username={request.username} amount={request.amount} phone={request.phone} name={request.name} tid={request.tid} through={request.through} />
    })

    return (
        <div className={classes.rootCont}>
            {requests.length > 0 ? renderRequests : null}
        </div>
    );
}

export default PaymentRequests;