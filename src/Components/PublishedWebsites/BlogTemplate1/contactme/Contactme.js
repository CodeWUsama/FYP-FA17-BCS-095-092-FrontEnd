import React, { Component } from 'react';
import classes from './contact.module.css';
import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Paper } from '@material-ui/core';
import axios from 'axios'
import Footer from '../footer/FooterShow';

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
        axios.patch('http://localhost:8080/b1td/blognotifi', {
            name: name,
            email: email,
            message: email1,
            id: localStorage.getItem("id")
        }).then(result => {
            if (result.status == 200) {
                window.location.reload();
            }
        })

    }

    render() {
        return (
            <div>
                <Paper className={classes.root}>
                    <div className={classes.info}>
                        <div className={classes.inpu}>
                            <h5 >CONTACT US</h5>
                            <TextField
                                style={{ width: '90%', marginBottom:10 }}
                                className={classes.inputField}
                                id="fulltname" type="text"
                                label="Name" required={true} />

                            <TextField
                                style={{ width: '90%', marginBottom:10 }}
                                className={classes.inputField}
                                id="email" type="text"
                                label="Email" required={true} />

                            <TextField
                                style={{ width: '90%' }}
                                className={classes.inputField}
                                id="messege" type="text"
                                multiline
                                rows={2}
                                rowsMax={4}
                                label="Enter messege" required={true} />

                            <div className={classes.btn}>
                                <button type="button"
                                    class="btn btn-outline-danger"
                                    onClick={this.handleSubmit} >Submit</button>

                            </div>
                        </div>

                    </div>

                </Paper>
                <Footer />
            </div>
        )
    }
}