import React, { Component } from 'react';
import classes from "./NavBar.module.css";
import { Route, HashRouter, NavLink } from 'react-router-dom';
import Travel from '../Home/Travel';
import Research from "../research/Research";
import Photography from "./../photography/Photography";
import ContactUs from "./../ContactUs/Contactme";

export default class Navbar extends Component {

    state = {
        option1: "HOME",
        option2: "RESAERCHES",
        option3: "PHOTOGRAPHY",
        option5: "CONTACT"
    }

    render() {

        return (
            <HashRouter>
                <div className={classes.topnav} >
                    <a href="/B1/" className={classes.home}>{this.state.option1}</a>
                    <a href="/B1/#/research">{this.state.option2}</a>
                    <a href="/B1/#/gallery">{this.state.option3}</a>
                    <a href="/B1/#/contact">{this.state.option5}</a>
                </div>
                <Route exact path="/" component={Travel} />
                <Route exact path="/research" component={Research} />
                <Route exact path="/gallery" component={Photography} />
                <Route exact path="/contact" component={ContactUs}/>
            </HashRouter>
        );
    }
}