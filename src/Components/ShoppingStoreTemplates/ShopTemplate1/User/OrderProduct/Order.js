import React from 'react';
import { Component } from 'react';
import classes from "./Order.module.css";
import TextField from "@material-ui/core/TextField"
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"

export default class Order extends Component {

    state = {
        errorStatus: false,
        price: localStorage.getItem("total"),
        delivery: localStorage.getItem("d"),
        tax: 0,
        total: 0,
        products: localStorage.getItem("products"),
        method: "COD"
    }

    componentDidMount() {
        let tax = (5 * this.state.price) / 100;

        this.setState({
            tax: tax,
            total: Number(this.state.price) + Number (this.state.delivery) + Number(tax)
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let code;
        fetch("http://localhost:8080/s1td/order", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Authorization: "Bearer " + localStorage.getItem('userToken'),
            },
            body: JSON.stringify({
                templateId: localStorage.getItem("id"),
                products:this.state.products,
                method: this.state.method,
                total: this.state.total
            })
        }).then(res => {
            code = res.status;
            return res.json();
        }).then(resData => {
            if (code === 200) {
                window.location.href = "/s1/#/dashboard"
            }
            else {
                this.setState({ errorStatus: true });
            }
        }).catch(err => {
            console.log(err);
        })

    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({ method: event.target.value });
    }

    render() {
        return (
            <div className={classes.mainCont}>
                <div className={classes.rootCont}>
                    <div className={classes.login}>
                        <h1>Order Form</h1>
                        <form className={classes.form} method="POST" onSubmit={this.handleSubmit}>

                            <TextField onFocus={() => { this.setState({ errorStatus: false }) }} id="address" multiline rowsMax={5} rows={3} type="text" className={classes.inputField} label="Complete Address" required={true}></TextField>
                            <div className={classes.optionCont}>
                                <FormLabel component="legend">Payment Method</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={this.state.method} onChange={this.handleChange}>
                                    <FormControlLabel value="COD" control={<Radio />} label="Cash On Delivery" />
                                    <FormControlLabel value="JazzCash" control={<Radio />} label="JazzCash" />
                                    <FormControlLabel value="EasyPaisa" control={<Radio />} label="EasyPaisa" />
                                </RadioGroup>
                            </div>

                            <div className={classes.invoice}>
                                <label style={{ marginBottom: "20px" }}>Invoice:</label>
                                <p>Dish Price = {this.state.price}</p>
                                <p>Delivery Fee = {this.state.delivery}</p>
                                <p>Tax @ 5% = {this.state.tax}</p>
                                <p>Grand Total = {this.state.total} RS</p>
                            </div>

                            <div className={classes.btn}>
                                <button className="btn btn-success btn-block btn-large" type="submit" >Confirm Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}