import React, { Component } from 'react';
import classes from './contactHome.module.css';
import TextField from '@material-ui/core/TextField';
import Mail from '../Footer/email.png';
import Linkedin from '../Footer/linkedin.png';
import axios from 'axios';
import Whatsapp from '../Footer/whatsapp.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Paper } from '@material-ui/core';

export default class Fronscreen extends Component {
    state = {
        errorStatus: false,
        validFullname: false,
    }

    validateName = (event) => {
        let val = event.target.value;
        if (!(/^([a-zA-Z]{1,})$/.test(val))) {
            this.setState({ validFullname: true })
        }
        else {
            this.setState({ validFullname: false });
        }
    }


    handleSubmit = (event) => {
        event.preventDefault()

        let name = document.getElementById('fulltname').value;
        let email1 = document.getElementById('messege').value;
        let email = document.getElementById('email').value;
        axios.patch('http://localhost:8080/t1td/addnotifi', {
            name: name,
            email: email,
            message: email1,
            tempId:localStorage.getItem("id")
        }).then(result => {
            if (result.status == 200) {
                window.location.reload();
            }
        })

    }


    render() {
        return (
            <Paper className={classes.root}>
                <h5 style={{ marginLeft: '40%', padding: '2%' }}>CONTACT US</h5>
                <div className={classes.info}>

                    <div className={classes.div4}>

                        <div className={classes.contactLink}>
                            <img alt="icon" className={classes.contactIcon} src={Linkedin} />
                            <p
                                className={classes.contactText}
                                style={{
                                    fontSize: this.props.linkedin.fontSize,
                                    fontFamily: this.props.linkedin.fontFamily,
                                    color: this.props.linkedin.fontColor,
                                    fontWeight: this.props.linkedin.bold ? "bold" : "normal",
                                    fontStyle: this.props.linkedin.italic ? "italic" : "normal",
                                    textDecoration: this.props.linkedin.underline ? "underline" : "none",
                                    textAlign: this.props.linkedin.align,
                                }}
                                onClick={this.props.linkedinEditor}
                            > {this.props.linkedin.text} </p>
                        </div>
                        <div className={classes.contactLink}>
                            <img alt="icon" className={classes.contactIcon} src={Mail} />
                            <p
                                className={classes.contactText}
                                style={{
                                    fontSize: this.props.mail.fontSize,
                                    fontFamily: this.props.mail.fontFamily,
                                    color: this.props.mail.fontColor,
                                    fontWeight: this.props.mail.bold ? "bold" : "normal",
                                    fontStyle: this.props.mail.italic ? "italic" : "normal",
                                    textDecoration: this.props.mail.underline ? "underline" : "none",
                                    textAlign: this.props.mail.align,
                                }}
                                onClick={this.props.mailEditor}
                            > {this.props.mail.text} </p>  </div>
                        <div className={classes.contactLink}>
                            <img alt="icon" className={classes.contactIcon} src={Whatsapp} />
                            <p
                                className={classes.contactText}
                                style={{
                                    fontSize: this.props.footercontact.fontSize,
                                    fontFamily: this.props.footercontact.fontFamily,
                                    color: this.props.footercontact.fontColor,
                                    fontWeight: this.props.footercontact.bold ? "bold" : "normal",
                                    fontStyle: this.props.footercontact.italic ? "italic" : "normal",
                                    textDecoration: this.props.footercontact.underline ? "underline" : "none",
                                    textAlign: this.props.footercontact.align,
                                }}
                                onClick={this.props.footercontactEditor}
                            > {this.props.footercontact.text} </p>   </div>
                    </div>
                    <div className={classes.inpu}>

                        <TextField style={{ width: '90%', marginBottom:20 }} className={classes.inputField} id="fulltname" type="text" label="Name" required={true} />
                        <TextField style={{ width: '90%', marginBottom:20 }} className={classes.inputField} id="email" type="text" label="Email" required={true} />
                        <TextField style={{ width: '90%' }} className={classes.inputField} id="messege" type="text" label="Enter messege" required={true} />

                        <div className={classes.btn}>
                            <button onClick={this.handleSubmit} type="button" class="btn btn-outline-danger">Submit</button>
                        </div>
                    </div>
                </div>
            </Paper>

        )
    }
}