import React, { Component } from 'react';
import classes from './EditProfile.module.css';
import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./../../Footer/Footer";
import Error from "../../ResusableComponents/Error/error";

export default class EditProfile extends Component {
    state = {
        errorStatus: false,
        errorStatus1: false,
        validUsername: false,
        validPass: false,
        fullname: "",
        contact: "",
        email: "",
        msg: false,
        msgText: "",
        cPass: false
    }

    async componentDidMount() {
        await fetch("http://localhost:8080/f1td/getUserData", {
            method:"POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('userToken'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id:localStorage.getItem("id")
            })
        }).then(res => {
            return res.json();
        }).then(resData => {
            this.setState({
                contact: resData.user.contact,
                email: resData.user.email
            });
        }).catch(err => {
            console.log(err);
        })
    }

    validateName = (event) => {
        let val = event.target.value;
        if (!(/^([a-zA-Z\s]{0,})$/.test(val))) {
            this.setState({
                validFullname: true,
                fullname: val,
                errorStatus: false,
                msg: false,
                msgText: ""
            })
        }
        else {
            this.setState({
                validFullname: false,
                fullname: val,
                errorStatus: false,
                msg: false,
                msgText: ""
            });
        }
    }

    validatePass = (event) => {
        let val = event.target.value;
        let pass = document.getElementById("pass").value;
        if (val !== pass) {
            this.setState({ cPass: true });
            document.getElementById("submitBtn").disabled = true;
        }
        else {
            this.setState({ cPass: false });
            document.getElementById("submitBtn").disabled = false;
        }
    }

    emailInput = (event) => {
        let val = event.target.value;
        this.setState({
            email: val,
            errorStatus: false,
            msg: false,
            msgText: ""
        });
    }

    contactInput = (event) => {
        this.setState({
            contact: event.target.value,
            errorStatus: false,
            msg: false,
            msgText: ""
        });
    }

    handleSubmitProfile = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/f1td/updateProfile", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('userToken'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                contact: document.getElementById('contact').value,
                email: document.getElementById('email').value
            })
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    msg: true,
                    errorStatus: true,
                    msgText: "Profile Details Updated Successfully."
                });
            }
            else {
                this.setState({
                    errorStatus: true,
                    msgText: "Error occured while updating. Please try again."
                });
            }
        })
    }

    handleSubmitPass = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/f1td/updatePassword", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('userToken'),
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id:localStorage.getItem("id"),
                oldPass: document.getElementById('oPass').value,
                newPass: document.getElementById('pass').value
            })
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    msg: true,
                    errorStatus1: true,
                    msgText: "Password Updated Successfully."
                });
            }
            else {
                this.setState({
                    errorStatus1: true,
                    msgText: "Old password does not match. Please try again."
                });
            }
        })
    }


    render() {
        return (
            <div>
                <div className={classes.info}>
                    <form className={classes.inpu} onSubmit={this.handleSubmitProfile}>
                        <h3>Personal settings</h3>
                        <Error status={this.state.errorStatus} msg={this.state.msg} text={this.state.msgText} />
                        <TextField value={this.state.contact} onChange={this.contactInput} className={classes.inputField} id="contact" type="tel" label="Contact" required={true} />
                        <TextField value={this.state.email} onChange={this.emailInput} className={classes.inputField} id="email" type="email" label="Email" required={true} />
                        <div className={classes.btn}>
                            <button type="submit" style={{ width: '40%' }} className="btn btn-success btn-block btn-large" >Update</button>
                        </div>
                    </form>
                    <form className={classes.inpu} onSubmit={this.handleSubmitPass}>
                        <h3>Account settings</h3>
                        <Error status={this.state.errorStatus1} msg={this.state.msg} text={this.state.msgText} />
                        <div className={classes.inputflied}>
                            <TextField onFocus={()=>{this.setState({ errorStatus1:false  })}} className={classes.inputField} id="oPass" type="password" label="Old Password" required={true} />
                            <TextField className={classes.inputField} id="pass" type="password" label="New Password" required={true} />
                            <TextField className={classes.inputField} error={this.state.cPass} helperText={this.state.cPass ? "New password and confirm password must match." : ""} onKeyUp={this.validatePass} id="cPass" type="password" label="Confirm Password" required={true} />
                        </div>
                        <div className={classes.btn}>
                            <button disabled type="submit" id="submitBtn" style={{ width: '40%' }} className="btn btn-success btn-block btn-large" >Update</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}