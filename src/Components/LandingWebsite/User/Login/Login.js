import React, { Component } from 'react';
import classes from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Footer/Footer';
import Error from '../../Error/error';
import TextField from "@material-ui/core/TextField";

export default class Login extends Component {
    state = {
        errorStatus: false,
        freeze:false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        let code;
        fetch("http://localhost:8080/user/login", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => {
            code = res.status;
            return res.json();
        }).then(resData => {
            if (code === 200) {
                localStorage.setItem('token', resData.token);
                if (resData.admin ===true) {
                    localStorage.setItem("ad",true);
                   return window.location.href = '/admin';
                }
                else {
                    localStorage.setItem('username', username);
                   return window.location.href = '/account';
                }
            }
            else {
                if(resData.freeze){
                    this.setState({ freeze:true, errorStatus:false  });
                }
                else{
                    this.setState({ errorStatus:true, freeze:false  });
                }
            }
        }).catch(err => {
            console.log(err);
        })

    }
    render() {
        return (
            <div style={{ marginTop: "100px" }}>
                <Error status={this.state.errorStatus} text="Wrong Username or Password!" />
                <Error status={this.state.freeze} text="There is some issue with your account. Please contact support." />
                <div className={classes.rootCont}>
                    <div className={classes.login}>
                        <h1>Login Form</h1>
                        <form className={classes.form} method="POST" onSubmit={this.handleSubmit}>
                            <TextField onFocus={() => { this.setState({ errorStatus: false }) }} id="username" type="text" className={classes.inputField} label="Username" required={true}></TextField>
                            <TextField onFocus={() => { this.setState({ errorStatus: false }) }} id="password" type="password" className={classes.inputField} label="Password" required={true}></TextField>
                            <a href="/forgot" className={classes.fPass}>Forgot Password</a>
                            <div className={classes.btn}>
                                <button className="btn btn-primary btn-block btn-large" type="submit" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={classes.navCont}>
                    <p className={classes.text}>Dont have an account?</p>
                    <a className={classes.aTag} href="/Signup">Signup Now!</a>
                </div>

                <Footer />
            </div>
        );
    }
}

