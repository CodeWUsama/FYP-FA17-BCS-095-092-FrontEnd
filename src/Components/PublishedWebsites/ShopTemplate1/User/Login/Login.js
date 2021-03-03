import React, { Component } from 'react';
import classes from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from "./../../Reusable Components/Error/error";
import TextField from "@material-ui/core/TextField";
import Footer from '../../Footer copy/Footer';

export default class Login extends Component {
    
    state = {
        errorStatus: false
    }
 
    handleSubmit = (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        let code;
        fetch("http://localhost:8080/s1td/login", {
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
                if (resData.admin) {
                    this.setState({ errorStatus: true });
                }
                else {
                    window.location.href = "/ShoppingWebsite/#/dashboard";
                }
                
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
            <div style={{ paddingTop: "180px" }}>
                <Error status={this.state.errorStatus} text="Wrong Username or Password!" />
                <div className={classes.rootCont}>
                    <div className={classes.login}>
                        <h1>Login to Store</h1>
                        <form className={classes.form} method="POST" onSubmit={this.handleSubmit}>
                            <TextField onFocus={() => { this.setState({ errorStatus: false }) }} id="username" type="text" className={classes.inputField} label="Username" required={true}></TextField>
                            <TextField onFocus={() => { this.setState({ errorStatus: false }) }} id="password" type="password" className={classes.inputField} label="Password" required={true}></TextField>
                            <div className={classes.btn}>
                                <button className="btn btn-primary btn-block btn-large" type="submit" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={classes.navCont}>
                    <p className={classes.text}>Dont have an account?</p>
                    <a className={classes.aTag} href="/ShoppingWebsite/#/signup">Signup Now!</a>
                </div>
                <Footer/>
            </div>
        );
    }
}

