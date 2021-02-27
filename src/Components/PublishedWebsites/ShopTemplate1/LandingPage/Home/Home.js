import React, { Component } from 'react';
import AnimatedText from './animatedText';
import classes from "./Home.module.css";

export default class Home extends Component {
    render() {
        return (
            this.props.storeName ?
                <div className={classes.rootCont}>
                    <AnimatedText
                        storeNameEditor={this.props.storeNameEditor} storeName={this.props.storeName}
                        introTextEditor={this.props.introTextEditor} introText={this.props.introText}
                    />
                </div>
                :
                null
        );
    }
}