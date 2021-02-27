import React, { Component } from 'react';
import classes from './Signup.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from "@material-ui/core/TextField";
import Error from "./../../Reusable Components/Error/error";

export default class Signup extends Component {

    state = {
        errorStatus: false,
        validFullname: false,
        validUsername: false,
        validPass: false
    }

    validateName = (event) => {
        let val = event.target.value;
        if (!(/^([a-zA-Z\s]{1,})$/.test(val))) {
            this.setState({ validFullname: true })
        }
        else {
            this.setState({ validFullname: false });
        }
    }

    validPass = (event) => {
        let val = event.target.value;
        if (!(/^([a-zA-Z0-9]{8,})$/.test(val))) {
            this.setState({ validPass: true })
        }
        else {
            this.setState({ validPass: false });
        }
    }

    validateUsername = (event) => {
        let val = event.target.value;
        if (!(/^([a-zA-Z0-9]{1,})$/.test(val))) {
            this.setState({ validUsername: true })
        }
        else {
            this.setState({ validUsername: false });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
        const password = document.getElementById('password').value;
        fetch("http://localhost:8080/s1td/signup", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                contact: contact,
                password: password,
                templateId:localStorage.getItem("id")
            })
        }).then(res => {
            console.log(res);
            if (res.status === 200) {
                window.location.href="/s1/#/account"
            }
            else if(res.status===500) {
                console.log("error");
                this.setState({ errorStatus: true });
            }
        }).catch(err => {
            console.log(err);
        })

    }
    render() {
        return (
            <div className={classes.cont}>
                <Error status={this.state.errorStatus} text="User Already Exists!" />
                <div className={classes.rootCont}>
                    <header className={classes.header}>
                        <div className={classes.login}>
                            <h1>Signup Form</h1>
                            <form className={classes.form} method="POST" onSubmit={this.handleSubmit}>
                                <TextField error={this.state.validUsername} helperText={this.state.validUsername ? "Only Alphanumeric characters without spaces and special symbols are allowed!" : ""} onKeyUp={this.validateUsername} className={classes.inputField} id="username" type="text" label="Username" required={true} />
                                <TextField className={classes.inputField} id="contact" type="tel" label="Contact" required={true} />
                                <TextField className={classes.inputField} id="email" type="email" label="Email" required={true} />
                                <TextField error={this.state.validPass} helperText={this.state.validPass ? "Password should contain atleast 8 alphanumeric characters!" : ""} onKeyUp={this.validatePass} className={classes.inputField} id="password" type="password" label="Password" required={true} />
                                <div className={classes.btn}>
                                    <button type="submit" className="btn btn-primary btn-block btn-large" >Submit</button>
                                </div>
                            </form>
                        </div>
                    </header>
                </div>

                <div className={classes.navCont}>
                    <p className={classes.text}>Already have an account?</p>
                    <a className={classes.aTag} href="/S1/#account">Login Now!</a>
                </div>
            </div>
        );
    }
}
