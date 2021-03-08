import React, { Component } from 'react';
import classes from './Signup.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './../../Footer/Footer';
import TextField from "@material-ui/core/TextField";
import Error from "./../../Error/error";

export default class Signup extends Component {

    state = {
        errorStatus: false,
        validFullname: false,
        validUsername: false,
        validPass: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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
        const fullname = document.getElementById('fullname').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
        const password = document.getElementById('password').value;
        fetch("http://localhost:8080/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: username,
                fullname: fullname,
                email: email,
                contact: contact,
                password: password
            })
        }).then(res => {
            if (res.status === 200) {
                localStorage.setItem("username", username);
                window.location.href = "/verify"
            }
            else {
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
                                <TextField error={this.state.validFullname} helperText={this.state.validFullname ? "Only Alphabets are allowed!" : ""} onKeyUp={this.validateName} className={classes.inputField} id="fullname" type="text" label="Full Name" required={true} />
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
                    <a className={classes.aTag} href="/login">Login Now!</a>
                </div>

                <Footer />
            </div>
        );
    }
}
