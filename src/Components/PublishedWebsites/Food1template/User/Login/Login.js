import React, { Component } from 'react';
import classes from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Footer/Footer';
import Error from "../../../../LandingWebsite/Error/error";
import TextField from "@material-ui/core/TextField";

export default class Login extends Component {
    
    state = {
        errorStatus: false
    }
 
    handleSubmit = (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        let code;
        fetch("http://localhost:8080/f1td/login", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: username,
                pass: password,
                templateId:localStorage.getItem("id")
            })
        }).then(res => {
            code = res.status;
            return res.json();
        }).then(resData => {

            if (code === 200) {
                localStorage.setItem('userToken', resData.userToken);
                window.location.href="/RestaurantWebsite/#/dashboard"
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
            <div style={{ marginTop: "200px" }}>
                <Error status={this.state.errorStatus} text="Wrong Username or Password!" />
                <div className={classes.rootCont}>
                    <div className={classes.login}>
                        <h1>Login to Restaurant</h1>
                        <form className={classes.form} method="POST" onSubmit={this.handleSubmit}>
                            <TextField onFocus={() => { this.setState({ errorStatus: false }) }} id="username" type="text" className={classes.inputField} label="Username" required={true}></TextField>
                            <TextField onFocus={() => { this.setState({ errorStatus: false }) }} id="password" type="password" className={classes.inputField} label="Password" required={true}></TextField>
                            <div className={classes.btn}>
                                <button className="btn btn-success btn-block btn-large" type="submit" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={classes.navCont}>
                    <p className={classes.text}>Dont have an account?</p>
                    <a className={classes.aTag} href="/RestaurantWebsite/#/signup">Signup Now!</a>
                </div>

                <Footer/>
            </div>
        );
    }
}

