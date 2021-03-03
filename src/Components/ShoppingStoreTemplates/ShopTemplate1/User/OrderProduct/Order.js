import React from 'react';
import { Component } from 'react';
import classes from "./Order.module.css";
import TextField from "@material-ui/core/TextField"
import Checkout from "./../../Reusable Components/Checkout/Checkout";

export default class Order extends Component {

    state = {
        errorStatus: false,
        price: localStorage.getItem("total"),
        delivery: localStorage.getItem("d"),
        tax: 0,
        total: 0,
        confirm: false,
        products: localStorage.getItem("products"),
        method: "COD",
        address:""
    }

    componentDidMount() {
        let tax = (5 * this.state.price) / 100;

        this.setState({
            tax: tax,
            total: Number(this.state.price) + Number(this.state.delivery) + Number(tax)
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ confirm: true });
    }

    handleChange = (event) => {
        this.setState({ method: event.target.value });
    }
 
    render() {
        return (
            <div className={classes.mainCont}>
                {this.state.confirm ?
                    <div>
                        <Checkout products={this.state.products} total={this.state.total} address={this.state.address} />
                    </div>
                    :
                    <div className={classes.rootCont}>
                        <div className={classes.login}>
                            <h1>Order Form</h1>
                            <form className={classes.form} method="POST" onSubmit={this.handleSubmit}>

                            <TextField onFocus={() => { this.setState({ errorStatus: false }) }} id="address" onChange={(e) => this.setState({ address: e.target.value })} multiline rowsMax={5} rows={3} type="text" className={classes.inputField} label="Complete Address" required={true}></TextField>

                                <div className={classes.invoice}>
                                    <label style={{ marginBottom: "20px" }}>Invoice:</label>
                                    <p>Dish Price = {this.state.price}</p>
                                    <p>Delivery Fee = {this.state.delivery}</p>
                                    <p>Tax @ 5% = {this.state.tax}</p>
                                    <p>Grand Total = {this.state.total} RS</p>
                                </div>

                                <div className={classes.btn}>
                                    <button className="btn btn-success btn-block btn-large" type="submit" >Confirm & Pay</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }

            </div>
        );
    }
}