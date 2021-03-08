import React, { useState, useEffect } from 'react';
import classes from "./Checkout.module.css";
import CreditCardIcon from '@material-ui/icons/CreditCard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MyCheckoutForm from "./checkoutForm";
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import CustomAlert from "../Alert/alert";

const Checkout = (props) => {

    const [method, setMethod] = useState("creditCard");
    const [plan, setPlan] = useState("");
    const [amount, setAmount] = useState(0);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [tid, setTid] = useState("");
    const [success, setSuccess] = useState(false);
    const [warning, setWarning] = useState(false);
    const [error, setError] = useState(false);

    const [jName, setJName] = useState("");
    const [jNum, setJNum] = useState("");

    const [eName, setEName] = useState("");
    const [eNum, setENum] = useState("");

    useEffect(() => {

        window.scrollTo(0, 0);
        let url = (window.location.href);
        setPlan(url.split("=")[1]);

        plan === "Pro" ? setAmount(500) : setAmount(1000);

        document.getElementById(method).className = classes.selected;

        if (method != "creditCard") {
            document.getElementById("creditCard").className = classes.method;
        }

        if (method != "jazzcash") {
            document.getElementById("jazzcash").className = classes.method;
        }

        if (method != "easypaisa") {
            document.getElementById("easypaisa").className = classes.method;
        }

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

    });

    let changeMethod = (method) => {
        setMethod(method);
    }

    let renderCreditCard = () => {
        return (
            <div className={classes.ccCont}>
                <div className={classes.creditCard}>
                    <p style={{ color: "white" }} className={classes.head2}>Payment via Card</p>
                    <MyCheckoutForm total={props.total} products={props.products} address={props.address} />
                </div>
            </div>
        )
    }

    let handleSubmission = (through) => {
        fetch("http://localhost:8080/f1td/orderViaLocal", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('userToken'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                name: name,
                phone: phone,
                tid: tid,
                amount: props.total,
                through: through,
                products: props.products,
                address: props.address
            })
        })
            .then(res => {
                if (res.status === 200) {
                    setSuccess(true);
                }
                else {
                    setError(true);
                }
            })
    }

    let renderAlert = () => {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20, marginTop: 20 }}>
                {success ?
                    <CustomAlert
                        mode="success"
                        title="Success"
                        description="Request Sent Successfully"
                        onClose={() => { setSuccess(false) }}
                    />
                    : null
                }
                {warning ?
                    <CustomAlert
                        mode="warning"
                        title="Warning"
                        description="Request Sent Already. Please Wait!"
                        onClose={() => { setWarning(false) }}
                    />
                    : null
                }
                {error ?
                    <CustomAlert
                        mode="error"
                        title="Error"
                        description="Error Occurred. Please contact admin."
                        onClose={() => { setError(false) }}
                    />
                    : null
                }

            </div>
        )
    }

    let renderJazzcash = () => {
        return (
            <div className={classes.jcCont}>
                <div className={classes.jazzcash}>
                    <p style={{ color: "white", textAlign: "center" }} className={classes.head2}>Payment via Jazz Cash</p>
                    <input onChange={(e) => { setName(e.target.value) }} value={name} name="name" type="text" placeholder="Account Holder Name" className={classes.input} />
                    <input onChange={(e) => { setPhone(e.target.value) }} value={phone} name="phone" type="number" placeholder=" Account Number" className={classes.input} />
                    <p className={classes.desc}>Kindly send {props.total} rupees on the following Jazz Cash account:</p>
                    <p className={classes.desc}><strong>Account Holder Name:</strong> {jName} <br /><strong>Account Number:</strong> {jNum}</p>
                    <p className={classes.desc}>After performing payment, please write the TID in given field and then click on following button to request to admin for payment verification. Usually, it takes upto 24 hours to respond to payment request. We will send you a confirmation email. However, incase of inconvience, you can reach out admin anytime.</p>
                    <input onChange={(e) => { setTid(e.target.value) }} value={tid} name="tid" type="number" placeholder="Transaction ID (TID)" className={classes.input} />

                    {renderAlert()}

                    <div className={classes.btnCont}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<Icon>send</Icon>}
                            style={{
                                width: "300px"
                            }}
                            onClick={() => { handleSubmission("jazzcash") }}
                        >
                            Request For Verification
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    let renderEasypaisa = () => {
        return (
            <div className={classes.jcCont}>
                <div style={{ backgroundColor: "#00BD5f" }} className={classes.jazzcash}>
                    <p style={{ color: "white", textAlign: "center" }} className={classes.head2}>Payment via Easy Paisa</p>
                    <input onChange={(e) => { setName(e.target.value) }} value={name} name="name" type="text" placeholder="Account Holder Name" className={classes.input} />
                    <input onChange={(e) => { setPhone(e.target.value) }} value={phone} name="phone" type="number" placeholder=" Account Number" className={classes.input} />
                    <p className={classes.desc}>Kindly send {props.total} rupees on the following Easy Paisa account:</p>
                    <p className={classes.desc}><strong>Account Holder Name:</strong> {eName}<br /><strong>Account Number:</strong> {eNum}</p>
                    <p className={classes.desc}>After performing payment, please write the TID in given field and then click on following button to request to admin for payment verification. Usually, it takes upto 24 hours to respond to payment request. We will send you a confirmation email. However, incase of inconvience, you can reach out admin anytime.</p>
                    <input onChange={(e) => { setTid(e.target.value) }} value={tid} name="tid" type="number" placeholder="Transaction ID (TID)" className={classes.input} />
                    {renderAlert()}
                    <div className={classes.btnCont}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<Icon>send</Icon>}
                            onClick={() => { handleSubmission("easypaisa") }}
                            style={{
                                width: "300px"
                            }}
                        >
                            Request For Verification
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={classes.rootCont}>
            <p className={classes.head}>Checkout</p>
            <p className={classes.head2}>Choose Payment Method</p>

            <div className={classes.methodsCont}>

                <div className={classes.method} id="creditCard" onClick={() => changeMethod("creditCard")}>
                    <div className={classes.methodCont}>
                        <CreditCardIcon
                            style={{
                                height: 50,
                                width: 50
                            }}
                        />
                        <p className={classes.methodText} >Credit Card</p>
                    </div>
                    {method === "creditCard" ?
                        <div className={classes.checkedCont}>
                            <CheckCircleIcon
                                color="primary"
                            />
                        </div>
                        : null
                    }
                </div>

                <div className={classes.method} id="jazzcash" onClick={() => changeMethod("jazzcash")}>
                    <div className={classes.methodCont}>
                        <MonetizationOnIcon
                            style={{
                                height: 50,
                                width: 50
                            }}
                        />
                        <p className={classes.methodText} >JazzCash</p>
                    </div>
                    {method === "jazzcash" ?
                        <div className={classes.checkedCont}>
                            <CheckCircleIcon
                                color="primary"
                            />
                        </div>
                        : null
                    }
                </div>

                <div className={classes.method} id="easypaisa" onClick={() => changeMethod("easypaisa")}>
                    <div className={classes.methodCont}>
                        <AccountBalanceIcon
                            style={{
                                height: 50,
                                width: 50
                            }}
                        />
                        <p className={classes.methodText} >EasyPaisa</p>
                    </div>
                    {method === "easypaisa" ?
                        <div className={classes.checkedCont}>
                            <CheckCircleIcon
                                color="primary"
                            />
                        </div>
                        : null
                    }
                </div>
            </div>

            {method === "creditCard" ? renderCreditCard() : null}
            {method === "jazzcash" ? renderJazzcash() : null}
            {method === "easypaisa" ? renderEasypaisa() : null}

        </div>
    );
}

export default Checkout;