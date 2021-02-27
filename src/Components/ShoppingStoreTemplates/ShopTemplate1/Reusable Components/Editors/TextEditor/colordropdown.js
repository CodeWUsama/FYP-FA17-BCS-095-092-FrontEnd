import React, { Component } from 'react';
import classes from './TextEditor.module.css';
import { SketchPicker } from 'react-color';

export default class colordropdown extends Component {
    state = {
        background: this.props.clr
    }

    triggerChange = (color) => {
        this.props.colorHandler(color.hex);
        this.setState({ background:color.hex  });
    }

    render() {
        return (
            <SketchPicker
                color={this.state.background}
                onChangeComplete={this.triggerChange}
            />
        );
    }
}