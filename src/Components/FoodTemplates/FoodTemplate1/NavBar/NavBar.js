import React, { Component } from 'react';
import classes from './NavBar.module.css';
import NavItem from './NavItem/NavItem';
import hamIcon from './hamburgericon.png';
import NavItemPhone from './NavItem/NavItemPhone';
import { Route, HashRouter } from 'react-router-dom';
import Home from './../Homepage/Home';
import Menu from "./../Menu/Menu"
import ContactUs from '../ContactUs/ContactUs';
import AdminDashboard from "./../Admin/Dashboard/Dashboard";
import ContactRequest from "./../Admin/ContactRequests/contactrequests";
import PaymentRequest from "./../Admin/PaymentRequests/PaymentRequests";
import PaymentDetails from "./../Admin/PaymentDetails/PaymentDetails";
import ManageOrders from "./../Admin/ManageOrders/manageorders"
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
                    <div className={classes.navBarCont}>

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
                                <NavItem navText="Admin" navHref="/Admin" />
                            </ul>
                        </div>

                        <div className={classes.loginLinkCont}>
                            <ul className={classes.navList}>
                                <NavItem navText="Admin" navHref="/Admin" />
                            </ul>
                        </div>
                    </div>

                    <div className={assignedClasses.join(' ')}>
                        <ul className={classes.mobileNavList}>
                            <NavItemPhone navText="Home" navHref="/" />
                            <NavItemPhone navText="Menu" navHref="/menu" />
                            <NavItemPhone navText="Contact" navHref="/contact" />
                            <NavItemPhone navText="Admin" navHref="/Admin" />
                        </ul>
                    </div>
                    <Route exact path="/" component={() => <Home id={localStorage.getItem("id")} />} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/contact" component={ContactUs} />
                    <Route exact path="/admin" component={AdminDashboard} />
                    <Route exact path="/admin/contactrequests" component={ContactRequest} />
                    <Route exact path="/admin/paymentrequests" component={PaymentRequest} />
                    <Route exact path="/admin/paymentdetails" component={PaymentDetails} />
                    <Route exact path="/admin/manageorders" component={ManageOrders} />
                </div>
            </HashRouter>
        );
    }
}