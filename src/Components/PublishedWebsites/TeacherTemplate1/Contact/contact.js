import React, { Component } from 'react';
import classes from './contact.module.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Paper } from '@material-ui/core';
import Footer from '../Footer/Footerpage'

export default class Fronscreen extends Component {
    state = {
        errorStatus: false,
        validFullname: false,

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

    //  sendMessage =()=>{

    //     let email = document.getElementById('email').value;

    //     axios.patch('http://localhost:8080/t1td/sendMessage',{ 
    //         email:email,
    //       } ).then(result => {
    //         if (result.status == 200) {
    //             console.log(email);
    //           window.location.reload();
    //       }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    //  }

    render() {
        return (
            <Paper className={classes.root}>
                <h5 style={{ marginLeft: '40%', padding: '1%' }}>CHAT </h5>
                <div className={classes.info}>

                    <div className={classes.inpu}>

                        <TextField
                            style={{ width: '90%' }}
                            className={classes.inputField}
                            id="fulltname" type="text"
                            label="Full Name" required={true} />

                        <TextField
                            style={{ width: '90%' }}
                            className={classes.inputField}
                            id="email" type="text"
                            label="Email" required={true} />
                        <p style={{ color: 'white' }}>.</p>
                        <textarea
                            style={{ width: '90%' }}
                            className={classes.inputField}
                            id="messege" type="text"
                            rows="5" cols="28"
                            aria-label="Enter messege" required={true} />

                        <div className={classes.btn}>
                            <button type="button"
                                onClick={this.handleSubmit}
                                // onSubmit={this.sendMessage}
                                class="btn btn-outline-danger" >Send</button>
                        </div>
                    </div>

                </div>

                <Footer />
            </Paper>

        )
    }
}