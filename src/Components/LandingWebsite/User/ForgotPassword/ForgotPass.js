import React, { Component } from 'react';
import classes from './ForgotPass.module.css';
import TextField from "@material-ui/core/TextField";
import Footer from '../../Footer/Footer';
import Error from './../../Error/error';

export default class ForgotPass extends Component {
    state = {
        username: "",
        userAuth: false,
        userVerification: false,
        error: false,
        errorMsg: "",
        msg: false,
        cpass: false
    }

    handleConfirmPass = (event) => {
        let val = event.target.value;
        let pass = document.getElementById("pass").value;
        if (val !== pass) {
            this.setState({ cpass: true });
            document.getElementById("submitBtn").disabled = true;
        }
        else {
            this.setState({ cpass: false });
            document.getElementById("submitBtn").disabled = false;
        }
    }

    handleSubmitUsername = (event) => {
        event.preventDefault();
        let username;
        if (this.state.username !== "") {
            username = this.state.username;
            this.setState({
                msg: true,
                errorMsg: "Code resent successfully on your email!",
                error:true
            });
        }
        else {
            username = document.getElementById('username').value;
        }
        fetch("http://localhost:8080/user/auth", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: username
            })
        }).then(res => {
            if (res.status === 200) {
                console.log("got");
                this.setState({
                    username: username,
                    userAuth: true,
                    error:false
                });
            }
            else {
                this.setState({
                    error: true,
                    errorMsg: "User Dont Exist! Try Siging Up Instead...."
                });
            }
        }).catch(err => {
            console.log(err);
        })
    }

    handleSubmitCode = (event) => {
        event.preventDefault();
        const code = document.getElementById('code').value;
        fetch("http://localhost:8080/user/verifyUser", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                code: code
            })
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    userAuth: false,
                    userVerification: true,
                    error:false
                });
                document.getElementById("pass").value = "";
            }
            else {
                this.setState({
                    error: true,
                    errorMsg: "Code mismatced! Try Resending..."
                });
            }
        }).catch(err => {
            console.log(err);
        })
    }

    handleSubmitPass = (event) => {
        event.preventDefault();
        const pass = document.getElementById('pass').value;
        const cpass = document.getElementById('cpass').value;
        if (pass === cpass) {
            fetch("http://localhost:8080/user/changePass", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: pass
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
    }

    render() {
        let toShow =
            <form onSubmit={this.handleSubmitUsername} className={classes.verifyForm}>
                <h1 style={{textAlign:"center"}}>User Verification</h1>
                <div className={classes.inCont}>
                    <TextField required onFocus={() => { this.setState({ error: false }) }} className={classes.input} label="Username" id="username" type="text" />
                </div>
                <button style={{ width: "120px" }} type="submit" className="btn btn-primary btn-block btn-large" >Send Code</button>
            </form>

        if (this.state.userAuth) {
            toShow =
                <form onSubmit={this.handleSubmitCode} className={classes.verifyForm}>
                    <h1>User Verification</h1>
                    <div className={classes.inCont}>
                        <TextField required onFocus={() => { this.setState({ error: false }) }} className={classes.input} label="Activation Code" id="code" type="number" />
                        <a onClick={this.handleSubmitUsername} className={classes.aTag}>Resend Code</a>
                    </div>
                    <button style={{ width: "120px" }} type="submit" className="btn btn-primary btn-block btn-large" >Verify</button>
                </form>
        }

        if (this.state.userVerification && this.state.userAuth===false) {
            toShow =
                <form onSubmit={this.handleSubmitPass} className={classes.verifyForm}>
                    <h1>Change Password</h1>
                    <div className={classes.inCont}>
                        <TextField onFocus={() => { this.setState({ error: false }) }} className={classes.input} label="New Password" id="pass" type="text" />
                        <TextField onFocus={() => { this.setState({ error: false }) }} error={this.state.cpass} helperText={this.state.cpass?"Password and Confirm Password must match.":""} className={classes.input} style={{marginTop:30}} onKeyUp={this.handleConfirmPass} label="Confirm Password" id="cpass" type="password" />
                    </div>
                    <button disabled id="submitBtn" style={{ width: "120px" }} type="submit" className="btn btn-primary btn-block btn-large" >Change</button>
                </form>
        }

        return (
            <div>
                <div className={classes.rootCont}>
                    <Error status={this.state.error} text={this.state.errorMsg} msg={this.state.msg} />
                    <div className={classes.verifyUserCont}>
                        {toShow}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}