import React, { Component } from 'react';
import AnimatedText from './animatedText';
import classes from "./Home.module.css";

export default class Home extends Component {
    render() {
        return (
            this.props.storeName ?
                <div className={classes.rootCont}>
                    <AnimatedText
                        storeName={this.props.storeName}
                        introText={this.props.introText}
                    />
                </div>
                :
                null
        );
    }
}