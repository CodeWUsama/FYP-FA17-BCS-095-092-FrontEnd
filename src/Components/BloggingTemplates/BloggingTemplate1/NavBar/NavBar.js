import React, { Component } from 'react';
import classes from "./NavBar.module.css";
import { Route, HashRouter, NavLink } from 'react-router-dom';
import Footer from '../../../LandingWebsite/Footer/Footer';
import Travel from '../Home/Travel';

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
                <Route path="/contact" component={Footer} />
                <Route path="/" component={Travel} />
                <Route path="/research" component={Footer} />
                <Route path="/gallery" component={Footer} />
            </HashRouter>
        );
    }
}