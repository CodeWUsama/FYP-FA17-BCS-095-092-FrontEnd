import React, { Component } from 'react';
import classes from './TextEditor.module.css';

export default class fontFam extends Component {

    triggerChange = () => {
        let val = document.getElementById('fontFam').value;
        this.props.fontFamHandler(val);
    }

    render() {
        return (
            <select className={classes.fontFam} name="fontFam" id="fontFam" onChange={()=>this.triggerChange()} >
                <option style={{ fontFamily: this.props.fontFam}} value={this.props.fontFam}>{this.props.fontFam}</option>
                <option style={{ fontFamily: "Monospace" }} value="Monospace">Monospace</option>
                <option style={{ fontFamily: "Sans-serif" }} value="Sans-serif">Sans-serif</option>
                <option style={{ fontFamily: "Serif" }} value="Serif">Serif</option>
                <option style={{ fontFamily: "Cursive" }} value="Cursive">Cursive</option>
                <option style={{ fontFamily: "Fantasy" }} value="Fantasy">Fantasy</option>
                <option style={{ fontFamily: "Josefin Sans" }} value="Josefin Sans">Josefin Sans</option>
                <option style={{ fontFamily: "Poppins" }} value="Poppins">Poppins</option>
            </select>
        );
    }
}