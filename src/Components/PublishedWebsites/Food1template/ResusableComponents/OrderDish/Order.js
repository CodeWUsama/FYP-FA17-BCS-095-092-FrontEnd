import React from 'react';
import { Component } from 'react';
import classes from "./Order.module.css";
import TextField from "@material-ui/core/TextField"
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Footer from '../../Footer/Footer';

export default class Order extends Component {

    state = {
        errorStatus: false,
        price: 0,
        delivery: 0,
        tax: 0,
        total: 0,
        dishId: null,
        method: "COD"
    }

    componentDidMount() {
        let dishId = (window.location.hash.split("/")[2].split("=")[1]);
        let tax = (5 * localStorage.getItem("p")) / 100;

        this.setState({
            dishId: dishId,
            price: localStorage.getItem("p"),
            delivery: localStorage.getItem("d"),
            tax: tax,
            total: Number(localStorage.getItem("p")) + Number(localStorage.getItem("d")) + Number(tax)
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let code;
        fetch("http://localhost:8080/f1td/orderDish", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Authorization: "Bearer " + localStorage.getItem('userToken'),
            },
            body: JSON.stringify({
                templateId: localStorage.getItem("id"),
                dishId: this.state.dishId,
                method: this.state.method,
                total:this.state.total
            })
        }).then(res => {
            code = res.status;
            return res.json();
        }).then(resData => {
            if (code === 200) {
                window.location.href="/RestaurantWebsite/#/dashboard"
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

                            {/* <div className={classes.optionCont}>
                                <label>Delivery Method:</label>
                                <div className="form-check">
                                    <input onChange={()=>{this.handleMethodChange("cod")}} className="form-check-input" type="radio" name="method" id="cod" value="cod" checked />
                                    <label className="form-check-label" htmlFor="cod">Cash on delivery</label>
                                </div>
                                <div className="form-check">
                                    <input onChange={()=>{this.handleMethodChange("JazzCash")}} className="form-check-input" type="radio" name="method" id="JazzCash" value="jazzcash" />
                                    <label className="form-check-label" htmlFor="jazzcash">JazzCash</label>
                                </div>
                                <div className="form-check">
                                    <input onChange={()=>{this.handleMethodChange("EasyPaisa")}} className="form-check-input" type="radio" name="method" id="EasyPaisa" value="easypaisa" />
                                    <label className="form-check-label" htmlFor="easypaisa">EasyPaisa</label>
                                </div>
                            </div> */}
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