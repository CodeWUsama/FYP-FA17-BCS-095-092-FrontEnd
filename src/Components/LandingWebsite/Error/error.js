import React, { Component } from 'react';
import classes from './error.module.css';

export default class error extends Component {
    render() {
        return (
            this.props.status ?
                <div className={classes.rootCont}>
                    <div style={this.props.msg?{backgroundColor:"#4BB543", color:"white", borderColor:"white"}:null} className={classes.errCont}>
                        <p>{this.props.text}</p>
                    </div>
                </div>

                : null
        );
    }
}