import React, { Component } from 'react';
import Backdrop from './Backdrop';
import classes from './Backdrop.module.css';

export default class Editor extends Component {
    render() {
        return (
            this.props.enableBackdropEditor ?
                <div className={classes.rootCont}>
                    <Backdrop fullsize={this.props.fullsize} handler={this.props.backdropHandler}/>
                    <div className={classes.editorCont}>
                        {this.props.children}
                    </div>
                </div>
                : null
        );
    }
}