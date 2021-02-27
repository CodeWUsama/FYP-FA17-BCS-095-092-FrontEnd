import React, { Component } from 'react';
import classes from './navbar.module.css';

export default class Navbar extends Component {

    state = {
        option1: "HOME",
        option2: "RECIPES",
        option3: "GALLERY",
        option5: "CONTACT"
    }
    render() {

        return (

            <div className={classes.topnav} >
                <div className={classes.vl}></div>
                <a href="/B1/#" >{this.state.option1}</a>
                <div className={classes.vl}></div>
                <a href="/B1/#/recipe">{this.state.option2}</a>
                <div className={classes.vl}></div>
                <a href="/B1/#/gallery">{this.state.option3}</a>
                <div className={classes.vl}></div>
                <a href="/B1/#/contact">{this.state.option5}</a>
                <div className={classes.vl}></div>
                <a href="/B1/#/notifi">NOTIFICATION</a>
            </div>

        );
    }
}