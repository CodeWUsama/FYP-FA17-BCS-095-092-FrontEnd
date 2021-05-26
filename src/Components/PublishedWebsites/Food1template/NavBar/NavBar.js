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
import ContactUs from '../ContactUs/ContactUs';
import axios from 'axios';

export default class NavBar extends Component {

    state = {
        drawer: false,
        name: ""
    };

    toggleMenuHandler = () => {
        this.setState({ drawer: !this.state.drawer });
    }

    componentDidMount() {
        window.addEventListener("resize", (e) => {
            if (e.target.innerWidth >= 930) {
                this.setState({ drawer: false });
            }
        })
        axios.get("http://localhost:8080/f1td/getHomeData?id=" + localStorage.getItem("id")).then(result => {
            this.setState({ name: result.data.data.name.text });
        })
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
                    <div className={classes.navBarCont} style={{ top: this.props.published ? 0 : 100 }}>

                        <div className={classes.hamburgerCont}>
                            <img className={classes.hamLogo} onClick={this.toggleMenuHandler} src={hamIcon} alt="Hamburger-Icon" />
                        </div>

                        <div className={classes.logoCont}>
                            <p className={classes.logoTextFirst}>{this.state.name.split(" ")[0]}</p>
                            <p className={classes.logoTextLast}>{this.state.name.split(" ")[1]}</p>
                        </div>

                        <div className={classes.navListCont}>
                            <ul className={classes.navList}>
                                <NavItem navText="Home" navHref="/" />
                                <NavItem navText="Menu" navHref="/menu" />
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
                    <Route exact path="/contact" component={ContactUs} />
                </div>
            </HashRouter>
        );
    }
}