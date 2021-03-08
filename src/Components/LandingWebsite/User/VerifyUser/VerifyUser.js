import React, { Component } from 'react';
import classes from './VerifyUser.module.css';
import TextField from "@material-ui/core/TextField";
import Footer from './../../Footer/Footer';

export default class VerifyUser extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const code = document.getElementById('code').value;
        console.log(code);
        fetch("http://localhost:8080/user/verifyUser", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username:localStorage.getItem("username"),
                code: code
            })
        }).then(res => {
            if (res.status === 200) {
                window.location.href = "/login"
            }
            else {
                //this.setState({ errorStatus: true });
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <div className={classes.rootCont}>
                    <div className={classes.verifyUserCont}>
                        <form onSubmit={this.handleSubmit} className={classes.verifyForm}>
                            <h1>User Verification</h1>
                            <div className={classes.inCont}>
                                <TextField className={classes.input} label="Activation Code" id="code" type="number" />
                            </div>
                            <button style={{ width: "120px" }} type="submit" className="btn btn-primary btn-block btn-large" >Verify</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}