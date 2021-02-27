import React, { Component } from 'react';
import classes from './AddProduct.module.css';
import plusIcon from './plus.png';

export default class AddProduct extends Component {
    render() {
        return (
            <div className={classes.contAdd}>
                <div className={classes.dishCont}>
                    <img onClick={this.props.clickHandler} className={classes.addicon} alt="icon" src={plusIcon} />
                </div>
            </div>
        );
    }
} 