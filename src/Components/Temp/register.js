import React from 'react';
import { Component } from 'react';
import classes from "./register.module.css"
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"

export default class Register extends Component {

    state = {
        name: "",
        cnic: null,
        email: null,
        age: null,
        fatherName: "",
        gender: "male",
        password: null,
        mbr: null
    }
    handleSubmit = (event) => {
        console.log(this.state.name);
        event.preventDefault();
        let code;
        fetch("http://localhost:8080/hospital/register", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                age: this.state.age,
                cnic: this.state.cnic,
                gender: this.state.gender,
                fatherName: this.state.fatherName,
                password: this.state.password
            })
        }).then(res => {
            code = res.status;
            return res.json();
        }).then(resData => {
            if (code === 200) {
                this.setState({ mbr: resData.MPR });
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className={classes.root}>
                {this.state.mbr ? <h5>Registered successfully with MPR: {this.state.mbr}</h5> : null}
                <form className={classes.form} onSubmit={this.handleSubmit}>
                    <h1 className={classes.head}>Patient Registration</h1>
                    <TextField style={{ width: "90%" }} label="Name" type="text" onChange={(e) => { this.setState({ name: e.target.value }) }} required />
                    <TextField style={{ width: "90%" }} label="CNIC" type="number" onChange={(e) => { this.setState({ cnic: e.target.value }) }} required />
                    <TextField style={{ width: "90%" }} label="Father Name" type="text" onChange={(e) => { this.setState({ fatherName: e.target.value }) }} required />
                    <TextField style={{ width: "90%" }} label="Age" type="number" onChange={(e) => { this.setState({ age: e.target.value }) }} required />
                    <TextField style={{ width: "90%" }} label="Email" type="email" onChange={(e) => { this.setState({ email: e.target.value }) }} required />
                    <div style={{ marginTop: 20, width: "90%" }}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" value={this.state.gender} onChange={(e) => { this.setState({ gender: e.target.value }) }}>
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </div>
                    <TextField style={{ width: "90%" }} label="Password" type="password" onChange={(e) => { this.setState({ password: e.target.value }) }} required />
                    <button style={{ marginTop: "20px" }} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}