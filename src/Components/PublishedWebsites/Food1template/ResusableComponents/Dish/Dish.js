import React, { Component } from 'react';
import classes from './dish.module.css';

export default class Dish extends Component {
    state = {
        dishDetails: false
    }

    toggleDetails = () => {
        this.setState({ dishDetails: !this.state.dishDetails });
    }

    handleOrder = () => {
        if (localStorage.getItem("userToken")) {
            localStorage.setItem("p", this.props.price);
            localStorage.setItem("d", this.props.delivery);
            window.location.href = "/RestaurantWebsite/#orderDish/?id=" + this.props.dishId;
        }
        else {
            window.location.href = "/RestaurantWebsite/#account"
        }
    }

    render() {
        let layer = this.state.dishDetails ?
            <div className={classes.layer}>
            </div>
            :
            null;
        let content = this.state.dishDetails ?
            <div className={classes.dishDetailCont}>
                <div className={classes.dishTextCont}>
                    <p className={classes.dishText}>{this.props.desc}</p>
                    <div className={classes.buttonCont}>
                        <button onClick={this.handleOrder} className={classes.orderButton}>Order Now</button>
                    </div>
                </div>
            </div>
            : null;
        return (
            <div className={classes.rootCont} style={{ flexBasis: this.props.flexBasis }}>
                <div style={{width:300}}>
                    <div className={classes.dishHeadCont}>
                        <p className={classes.dishHead}>{this.props.dishName}</p>
                    </div>
                    <div onMouseEnter={this.toggleDetails} onMouseLeave={this.toggleDetails} style={{ backgroundImage: this.props.backgroundImg }} className={classes.dishCont}>
                        {layer}
                        {content}
                    </div>
                </div>
            </div>
        );
    }

} 