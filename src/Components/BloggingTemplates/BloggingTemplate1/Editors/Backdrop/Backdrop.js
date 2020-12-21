import React, { Component } from 'react';
import classes from './Backdrop.module.css';

export default class Backdrop extends Component {
    render() {
        return (
            <div
                className={classes.backdrop}
                onClick={this.props.handler}
                style={{ zIndex: this.props.fullsize ? 1200 : 300 }}
            >
            </div>
        );
    }
}