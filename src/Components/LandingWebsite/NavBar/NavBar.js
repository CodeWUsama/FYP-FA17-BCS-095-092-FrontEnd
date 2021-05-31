import React, { Component } from 'react';
import classes from './NavBar.module.css';
import NavItem from "./NavLinks/NavItem";
import hamIcon from './hamburgericon.png';
import accIcon from './accountlogo.png';
import { Route } from 'react-router';
import Home from '../Homepage/Home';
import Dashboard from './../User/Dashboard/dashboard';
import Signup from '../User/Signup/Signup';
import Login from '../User/Login/Login';
import NavF1 from './../../FoodTemplates/FoodTemplate1/NavBar/NavBar';
import NavItemPhone from './NavLinks/NavItemPhone';
import VerifyUser from '../User/VerifyUser/VerifyUser';
import ForgotPass from './../User/ForgotPassword/ForgotPass';
import EditProfile from '../User/EditProfile/EditProfile';
import RestaurantNavBar from "./../../PublishedWebsites/Food1template/NavBar/NavBar";
import NavB1 from "../../BloggingTemplates/BlogTemplate1/Main/main";
import NavS1 from "./../../ShoppingStoreTemplates/ShopTemplate1/Navbar/NavBar";
import Billing from '../User/Billing/billing';
import Checkout from '../User/Checkout/Checkout';
import NavS1P from "./../../PublishedWebsites/ShopTemplate1/Navbar/NavBar";
import Packages from "./../Packages/packages";
import NavT1 from "./../../TeacherTemplates/TeacherTemplate1/main";
import NavT1P from "./../../PublishedWebsites/TeacherTemplate1/main";
import NavB1P from "../../PublishedWebsites/BlogTemplate1/Main/main";
import Publish from '../User/Publish/publish';
import NavD1 from "./../../DoctorTemplate/main";
import NavDoc from "./../../PublishedWebsites/DoctorTemplate/main";
import Admin from "../Admin/admin";
import Users from "../Admin/Users/users";
import Websites from '../Admin/Websites/websites';
import Payments from "./../Admin/PaymentRequests/PaymentRequests";
import Contact from "./../Contact/contact";
import ContactRequests from "./../Admin/ContactRequests/contactrequests";
import Unauth from '../Unauth/unauth';

export default class NavBar extends Component {

    state = {
        drawer: false,
        status: false
    };

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.setState({ status: true });
        }
    }

    toggleMenuHandler = () => {
        if (this.state.drawer === false) {
            this.setState({ drawer: true });
        }
        else {
            this.setState({ drawer: false });
        }
    }


    render() {

        let assignedClasses = [];
        assignedClasses.push(classes.menuCont);

        if (this.state.drawer === true) {
            assignedClasses.push(classes.open);
        };

        return (
            <div>
                <div className={classes.navbarCont}>

                    <div className={classes.hamburgerCont}>
                        <img onClick={this.toggleMenuHandler} className={classes.hamLogo} src={hamIcon} alt="Hamburger-Icon" />
                    </div>

                    <div className={classes.logoCont}>
                        <h2 style={{ marginLeft: 30, color: '#384158' }} className={classes.logoText}>Website</h2>
                        <h2 style={{ color: '#14BDEE' }} className={classes.logoText} >Creator</h2>
                    </div>

                    <div className={classes.linksCont}>
                        <ul className={classes.navList}>
                            <NavItem navText="Home" navHref="/" />
                            <NavItem navText="Packages" navHref="/packages" />
                            <NavItem navText="Contact Us" navHref="/contact" />
                            <NavItem navText="Workspace" navHref={this.state.status ? localStorage.getItem("ad") ? "/admin" : "/account" : "/login"} />
                        </ul>
                    </div>

                    <div style={{ cursor: 'pointer' }} onClick={() => window.location.href = this.state.status ? localStorage.getItem("ad") ? "/admin" : "/account" : "/login"} className={classes.accountCont}>
                        <img className={classes.accLogo} src={accIcon} alt="Account-Icon" />
                    </div>

                </div>

                <div className={assignedClasses.join(' ')}>
                    <ul className={classes.mobileNavList}>
                        <NavItemPhone navText="Home" navHref="/" />
                        <NavItemPhone navText="Packages" navHref="/packages" />
                        <NavItemPhone navText="Contact Us" navHref="/contact" />
                        <NavItemPhone navText="Create Website" navHref={this.state.status ? localStorage.getItem("ad") ? "/admin" : "/account" : "/login"} />
                    </ul>
                </div>

                <Route exact path="/" component={Home} />
                <Route exact path="/packages" component={Packages} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/verify" component={VerifyUser} />
                <Route exact path="/forgot" component={ForgotPass} />

                {localStorage.getItem("token") ?
                    <>
                        <Route exact path="/billing" component={Billing} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path="/editProfile" component={EditProfile} />
                        <Route exact path='/F1/' component={NavF1} />
                        <Route exact path='/RestaurantWebsite/' component={RestaurantNavBar} />
                        <Route exact path="/B1/" component={NavB1} />
                        <Route exact path="/B1P/" component={NavB1P} />
                        <Route exact path="/S1/" component={NavS1} />
                        <Route exact path="/T1/" component={NavT1} />
                        <Route exact path="/ShoppingWebsite/" component={NavS1P} />
                        <Route exact path="/TeacherWebsite/" component={NavT1P} />
                        <Route exact path="/D1/" component={NavD1} />
                        <Route exact path="/DoctorWebsite/" component={NavDoc} />
                        <Route exact path="/publish/" component={Publish} />
                        <Route exact path="/account" component={Dashboard} />
                        <Route exact path="/admin/" component={Admin} />
                        <Route exact path="/admin/users" component={Users} />
                        <Route exact path="/admin/websites" component={Websites} />
                        <Route exact path="/admin/payments" component={Payments} />
                        <Route exact path="/admin/messages" component={ContactRequests} />
                    </> :
                    null}

            </div>

        );
    }

}

