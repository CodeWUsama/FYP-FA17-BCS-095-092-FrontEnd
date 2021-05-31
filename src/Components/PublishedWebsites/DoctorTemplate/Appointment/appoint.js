import React from 'react';
import { Component } from 'react';
import classes from "./appoint.module.css";
import TextField from "@material-ui/core/TextField";
import Footer from '../Footer-fixed/Footer';
import CustomAlert from "../ReusableStuff/Alert/alert";

export default class Appoint extends Component {

    state = {
        success: false,
        error: false
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:8080/d1td/getAppointment", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem("id"),
                email: document.getElementById("email").value,
                matter: document.getElementById("matter").value,
                details: document.getElementById("details").value,
                time:document.getElementById("time").value,
                name:document.getElementById("name").value
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
                <p className={classes.head}>Make Appointment</p>
                <form className={classes.form} onSubmit={this.handleSubmit}>
                    <TextField
                        label="Name"
                        id="name"
                        type="text"
                        variant="outlined"
                        style={{ width: "100%" }}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />
                    <TextField
                        label="Email"
                        id="email"
                        type="email"
                        variant="outlined"
                        style={{ width: "100%" }}
                        InputLabelProps={{ style: { color: 'white' } }}
                        inputProps={{ style: { borderColor: "white" } }}
                    />
                    <TextField
                        label="Matter of Discussion"
                        id="matter"
                        type="text"
                        variant="outlined"
                        style={{ width: "100%" }}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />
                    <TextField
                        label="Preferred Day and Time"
                        id="time"
                        type="text"
                        variant="outlined"
                        style={{ width: "100%" }}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />
                    <TextField
                        label="Details"
                        id="details"
                        type="text"
                        multiline
                        rows={7}
                        rowsMax={10}
                        variant="outlined"
                        style={{ width: "100%" }}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />

                    <div style={{ margin: "20px 0px" }}>

                        {this.state.success ?
                            <CustomAlert
                                mode="success"
                                title="Success"
                                description="Appointment Request Sent. Admin will soon get in touch with you on email regarding confirmation."
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

                    <button type="submit" className={classes.btn}>Submit to Admin</button>
                </form>
                <Footer />

            </div>
        );
    }
}