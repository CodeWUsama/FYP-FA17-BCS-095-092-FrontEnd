import React, { useState } from 'react';
import { useEffect } from 'react';
import classes from "./PaymentDetails.module.css";
import TextField from "@material-ui/core/TextField";

const PaymentDetails = () => {

    const [jName, setJName] = useState("");
    const [jNum, setJNum] = useState("");

    const [eName, setEName] = useState("");
    const [eNum, setENum] = useState("");

    useEffect(() => {
        async function fetchData() {
            await fetch("http://localhost:8080/f1td/paymentDetails?id=" + localStorage.getItem("id"), {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": 'application/json'
                },
            })
                .then(result => {
                    return result.json();
                }).then(resultData => {
                    setJName(resultData.paymentDetails.jName);
                    setJNum(resultData.paymentDetails.jNum);
                    setEName(resultData.paymentDetails.eName);
                    setENum(resultData.paymentDetails.eNum);
                })
                .catch(err => {
                    console.log(err);
                }) 
        }

        fetchData();

    }, [])

    let handleUpdate = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/f1td/paymentDetails", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                paymentDetails: {
                    jName: jName,
                    jNum: jNum,
                    eName: eName,
                    eNum: eNum
                }
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
            <h1 className={classes.h1}>Payment Details</h1>
            <form className={classes.form} onSubmit={handleUpdate}>

                <TextField className={classes.input} value={jName} id="jName" onChange={(e) => setJName(e.target.value)} label="Jazzcash Account Name" variant="standard" />
                <TextField className={classes.input} value={jNum} id="jNum" onChange={(e) => setJNum(e.target.value)} label="Jazzcash Account Num" variant="standard" />

                <TextField className={classes.input} value={eName} id="eName" onChange={(e) => setEName(e.target.value)} label="Easypaisa Account Name" variant="standard" />
                <TextField className={classes.input} value={eNum} id="eNum" onChange={(e) => setENum(e.target.value)} label="Easypaisa Account Num" variant="standard" />
        
                <button type="submit" className={"btn btn-primary"}>Update</button>

            </form>
        </div>
    );
}

export default PaymentDetails;