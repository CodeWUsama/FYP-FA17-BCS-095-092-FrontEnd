import React from 'react';
import { Component } from 'react';
import classes from "./contact.module.css";
import TextField from "@material-ui/core/TextField";
import Footer from '../Footer-fixed/Footer';
import CustomAlert from "../ReusableStuff/Alert/alert";

export default class Contact extends Component {

    state = {
        email: "",
        message: "",
        subject: "",
        success: false,
        error: false
    }

    updateEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    updateSubject = (event) => {
        this.setState({ subject: event.target.value });
    }

    updateMessage = (event) => {
        this.setState({ message: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:8080/d1td/contactRequest", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message
            })
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        success: true,
                        error: false,
                    });
                }
                else {
                    this.setState({
                        error: true,
                        success: false,
                    });
                }
            })
    }

    render() {
        return (
            <div className={classes.rootCont}>
                <hr />
                <p className={classes.head}>Chat with me</p>
                <form className={classes.form} onSubmit={this.handleSubmit}>
                    <TextField
                        label="Email"
                        id="email"
                        type="email"
                        variant="outlined"
                        style={{ width: "100%" }}
                        value={this.state.email}
                        onChange={this.updateEmail}
                        InputLabelProps={{ style: { color: 'white' } }}
                        inputProps={{ style: { borderColor: "white" } }}
                    />
                    <TextField
                        label="Subject"
                        id="subject"
                        type="text"
                        variant="outlined"
                        style={{ width: "100%" }}
                        value={this.state.subject}
                        onChange={this.updateSubject}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />
                    <TextField
                        label="Message"
                        id="message"
                        type="text"
                        multiline
                        rows={10}
                        rowsMax={10}
                        variant="outlined"
                        style={{ width: "100%" }}
                        value={this.state.message}
                        onChange={this.updateMessage}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />

                    <div style={{ margin: "20px 0px" }}>

                        {this.state.success ?
                            <CustomAlert
                                mode="success"
                                title="Success"
                                description="Message Sent. Admin will soon get in touch with you on email."
                                onClose={() => { this.setState({ success: false }); }}
                            />
                            : null
                        }

                        {this.state.error ?
                            <CustomAlert
                                mode="error"
                                title="Error"
                                description="Message Sending Failed. Please try again."
                                onClose={() => { this.setState({ error: false }); }}
                            />
                            : null
                        }

                    </div>

                    <button type="submit" className={classes.btn}>Send Message</button>
                </form>
                {this.props.footer ? <Footer /> : null}

            </div>
        );
    }
}