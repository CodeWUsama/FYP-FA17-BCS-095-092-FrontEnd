import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import classes from "./PaymentRequests.module.css";
import Request from './Request';

const PaymentRequests = () => {

    const [requests, setRequests] = useState([]);

    useEffect(() => {

        async function fetchData() {
            await fetch("http://localhost:8080/admin/paymentRequests", {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
            })
                .then(result => {
                    return result.json();
                }).then(resultData => {
                    console.log(resultData);
                    setRequests(resultData.payments);
                })
                .catch(err => {
                    console.log(err);
                })
        }

        fetchData();

    }, [])

    let renderRequests = null;
    if (requests) {
        console.log(requests);
        renderRequests = requests.map((request, i) => {
            return <Request key={i} id={request._id} username={request.username} amount={request.package} phone={request.phone} name={request.name} tid={request.tid} through={request.through} />
        })
    }

    return (
        <>
            <div style={{ marginTop: 100, height:"90vh" }}>
                <h1 style={{ textAlign: 'center' }}>Payment Requests</h1>
                <div className={classes.rootCont}>
                    {renderRequests}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PaymentRequests;