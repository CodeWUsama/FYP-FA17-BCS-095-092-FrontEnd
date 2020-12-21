import React, { Component } from 'react';
import classes from './contact.module.css';
import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    render() {
        return (
            <div className={classes.info}>
                <div className={classes.inpu}>
                    <h5>CONTACT US</h5>

                    <TextField style={{ width: '90%' }} error={this.state.validFullname} helperText={this.state.validFullname ? "Only Alphabets are allowed!" : ""} onKeyUp={this.validateName} className={classes.inputField} id="fulltname" type="text" label="First Name" required={true} />
                    <TextField style={{ width: '90%' }} className={classes.inputField} id="email" type="text" label="Email" required={true} />
                    <TextField style={{ width: '90%' }} className={classes.inputField} id="messege" type="text" label="Enter messege" required={true} />
                    <div className={classes.btn}>
                        <button type="submit" style={{ width: '40%' }} className="btn btn-primary btn-block btn-large" >Send</button>
                    </div>
                </div>
            </div>


        )
    }
}