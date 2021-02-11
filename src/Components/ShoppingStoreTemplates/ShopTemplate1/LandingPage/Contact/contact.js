import React from 'react';
import { Component } from 'react';
import classes from "./contact.module.css";
import TextField from "@material-ui/core/TextField"
export default class Contact extends Component {

    state = {
        email: ""
    }

    updateEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    render() {
        return (
            <div className={classes.rootCont}>
                <hr />
                <p className={classes.head}>Get in Touch</p>
                <form className={classes.form}>
                    <TextField
                        label="Email"
                        id="email"
                        type="email"
                        variant="outlined"
                        style={{ width: "100%" }}
                        value={this.state.email}
                        onChange={this.updateEmail}
                    />
                    <TextField
                        label="Subject"
                        id="subject"
                        type="text"
                        variant="outlined"
                        style={{ width: "100%" }}
                        value={this.state.subject}
                        onChange={this.updateSubject}
                    />
                    <TextField
                        label="Message"
                        id="message"
                        type="text"
                        multiline
                        rows={5}
                        rowsMax={5}
                        variant="outlined"
                        style={{ width: "100%" }}
                        value={this.state.message}
                        onChange={this.updateMessage}
                    />
                    <button type="submit" className={classes.btn}>Send Message</button>
                </form>
            </div>
        );
    }
}