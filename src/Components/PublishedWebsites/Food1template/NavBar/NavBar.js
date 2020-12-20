import React, { Component } from 'react';
import classes from './NavBar.module.css';
import NavItem from './NavItem/NavItem';
import hamIcon from './hamburgericon.png';
import NavItemPhone from './NavItem/NavItemPhone';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import Home from './../Homepage/Home';
import Login from "./../User/Login/Login";
import Signup from "./../User/Signup/Signup";
import Order from "./../ResusableComponents/OrderDish/Order";
import Dashboard from '../User/Dashboard/Dashboard';
import EditProfile from "./../User/EditProfile/EditProfile";
import Menu from "./../Menu/Menu";

export default class NavBar extends Component {

    state = {
        drawer: false,
    };

    toggleMenuHandler = () => {
        this.setState({ drawer: !this.state.drawer });
    }

    render() {
        let assignedClasses = [];
        assignedClasses.push(classes.menuCont);

        if (this.state.drawer === true) {
            assignedClasses.push(classes.open);
        };

        return (
            <HashRouter>
                <div className={classes.rootCont} >
                    <div className={classes.navBarCont}>

                        <div className={classes.hamburgerCont}>
                            <img className={classes.hamLogo} onClick={this.toggleMenuHandler} src={hamIcon} alt="Hamburger-Icon" />
                        </div>

                        <div className={classes.logoCont}>
                            <p className={classes.logoTextFirst}>Food</p>
                            <p className={classes.logoTextLast}>Spices</p>
                        </div>

                        <div className={classes.navListCont}>
                            <ul className={classes.navList}>
                                <NavItem navText="Home" navHref="/" />
                                <NavItem navText="Menu" navHref="/menu" />
                                <NavItem navText="Latest Dishes" navHref="/latest" />
                                <NavItem navText="Contact" navHref="/contact" />
                                <NavItem navText="Account" navHref={localStorage.getItem("userToken") ? "/dashboard" : "/account"} />
                            </ul>
                        </div>

                        <div className={classes.loginLinkCont}>
                            <ul className={classes.navList}>
                                <NavItem navText="Account" navHref={localStorage.getItem("userToken") ? "/dashboard" : "/account"} />
                            </ul>
                        </div>
                    </div>

                    <div className={assignedClasses.join(' ')}>
                        <ul className={classes.mobileNavList}>
                            <NavItemPhone navText="Home" navHref="/RestaurantWebsite/" />
                            <NavItemPhone navText="Menu" navHref="/RestaurantWebsite/menu" />
                            <NavItemPhone navText="Latest Dishes" navHref="/RestaurantWebsite/latest" />
                            <NavItemPhone navText="Contact" navHref="/RestaurantWebsite/contact" />
                            <NavItemPhone navText="Account" navHref={localStorage.getItem("userToken") ? "/dashboard" : "/account"} />
                        </ul>
                    </div>
                    <Route exact path="/" component={() => <Home id={localStorage.getItem("id")} />} />
                    <Route exact path="/account" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/orderDish" component={Order} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/editProfile" component={EditProfile} />
                    <Route exact path="/menu" component={Menu} />
                </div>
            </HashRouter>
        );
    }
}   