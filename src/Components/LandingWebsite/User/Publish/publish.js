import React, { useState } from 'react';
import classes from "./publish.module.css";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Footer from "./../../Footer/Footer"
const Publish = () => {

    const [error, setError] = useState(false);
    const [subdomain, setSubdomain] = useState("");

    let handleSubmit = () => {
        fetch("http://localhost:8080/user/checkSubdomain?subdomain=" + document.getElementById("subdomain").value, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(resData => {
            if (resData.available === false) {
                setError(true);
            }
            else {
                fetch("http://localhost:8080/user/addSubdomain", {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem('token'),
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({
                        subdomain: document.getElementById("subdomain").value,
                        templateId: localStorage.getItem("toPublish"),
                        category:localStorage.getItem("category")
                    })
                }).then(res => {
                    if (res.status === 200) {
                        window.location.href = "/account";
                    }
                }).catch(err => {
                    console.log(err);
                })

            }
        }).catch(err => {
            console.log(err);
        })
    }

    let renderChooseSubdomain = () => {
        return (
            <div>
                <h1>Choose Subdomain</h1>
                <div className={classes.form}>
                    <TextField onChange={(e) => { setSubdomain(e.target.value) }} id="subdomain" type="text" variant="outlined" helperText={error ? "Already Taken" : ""} onFocus={() => setError(false)} error={error} className={classes.inputField} label="Enter Desired Subdomain" required={true}></TextField>
                    <div className={classes.subdomainCont}>
                        <p className={classes.fullUrl}>Your website will be published on:</p>
                        <p style={{ textAlign: 'center', color: "blue" }} className={classes.fullUrl}>{subdomain}.websitecreator.com</p>
                    </div>
                    <div className={classes.btn}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<ArrowForwardIcon />}
                            onClick={handleSubmit}
                        >
                            Publish
                      </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className={classes.rootCont}>
                <div className={classes.login}>
                    {renderChooseSubdomain()}
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Publish;
