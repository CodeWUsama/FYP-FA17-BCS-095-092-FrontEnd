import React, { Component } from 'react';
import classes from './ContactUs.module.css';
import profileIcon from './profile.png';

export default class ContactUs extends Component {

    handleSubmit = () => {
        fetch("http://localhost:8080/f1td/postComplaint", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value,
            })
        })
            .then(result => {
                return result.json();
            }).then(resultData => {
                console.log(resultData);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className={classes.rootCont}>
                <div className={classes.rightCont}>
                    <div className={classes.picCont}>
                        <img alt="profileIcon" src={profileIcon} className={classes.profileIcon} />
                        <p
                            style={{
                                fontSize: this.props.adminName.fontSize,
                                fontFamily: this.props.adminName.fontFamily,
                                color: this.props.adminName.fontColor,
                                fontWeight: this.props.adminName.bold ? "bold" : "normal",
                                textDecoration: this.props.adminName.underline ? "underline" : "none",
                                fontStyle: this.props.adminName.italic ? "italic" : "normal",
                                textAlign: this.props.adminName.align
                            }}
                            className={classes.adminName}
                        >
                            {this.props.adminName.text}
                        </p>
                        <p
                            style={{
                                fontSize: this.props.adminMessage.fontSize,
                                fontFamily: this.props.adminMessage.fontFamily,
                                color: this.props.adminMessage.fontColor,
                                fontWeight: this.props.adminMessage.bold ? "bold" : "normal",
                                textDecoration: this.props.adminMessage.underline ? "underline" : "none",
                                fontStyle: this.props.adminMessage.italic ? "italic" : "normal",
                                textAlign: this.props.adminMessage.align
                            }}
                            className={classes.adminMsg}
                        >
                            {this.props.adminMessage.text}
                        </p>
                    </div>
                </div>
                <div className={classes.leftCont}>
                    <form onSubmit={this.handleSubmit} className={classes.contactForm}>
                        <p className={classes.formHead}>Contact Us</p>
                        <input required className={classes.formInput} id="name" placeholder="Subject" />
                        <input required className={classes.formInput} id="email" placeholder="Email" />
                        <textarea required className={classes.formInput} id="message" placeholder="Message" />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button className={classes.submitButton} type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}