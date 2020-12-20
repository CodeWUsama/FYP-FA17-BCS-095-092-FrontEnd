import React, { Component } from 'react';
import classes from './AddDish.module.css';
import plusIcon from './plus.png';

export default class AddDish extends Component {
    render() {
        return (
            <div className={classes.contAdd}>
                <div className={classes.dishHeadCont}>
                    <p className={classes.dishHead}>Add Dish</p>
                </div>
                <div className={classes.dishCont}>
                    <img onClick={this.props.clickHandler} className={classes.addicon} alt="icon" src={plusIcon} />
                </div>
            </div>
        );
    }
} 