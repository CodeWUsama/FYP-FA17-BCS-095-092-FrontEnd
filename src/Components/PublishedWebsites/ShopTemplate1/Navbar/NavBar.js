import React, { Component } from 'react';
import classes from './NavBar.module.css';
import hamIcon from './hamburgericon.png';
import { Route, HashRouter, NavLink } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Products from '../Products/Products';
import ContactUs from './../ContactUs/ContactUs';
import Login from "./../User/Login/Login";
import Signup from "./../User/Signup/Signup";
import Dashbaord from "./../User/Dashboard/Dashboard";
import EditProfile from "./../User/EditProfile/EditProfile";
import Cart from "./../Cart/cart";
import Order from '../User/OrderProduct/Order';


export default class NavBar extends Component {

    state = {
        drawer: false,
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
    }

    render() {

        let assignedClasses = [];
        assignedClasses.push(classes.menuCont);

        if (this.state.drawer === true) {
            assignedClasses.push(classes.open);
        };

        return (
            <HashRouter>
                <div className={classes.storeRootCont} >
                    <div className={classes.navBarCont} style={{ marginTop: this.props.published ? 0 : 100 }}>

                        <div className={classes.hamburgerCont}>
                            <img className={classes.hamLogo} onClick={this.toggleMenuHandler} src={hamIcon} alt="Hamburger-Icon" />
                        </div>

                        <div className={classes.logoCont}>
                            <p className={classes.logoTextFirst}>My</p>
                            <p className={classes.logoTextLast}>Fashion</p>
                        </div>

                        <div className={classes.navListCont}>
                            <div className={classes.navList}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/">Home</NavLink>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/products">Products</NavLink>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/contact">Contact</NavLink>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to={localStorage.getItem("userToken") ? "/dashboard" : "/account"}>Account</NavLink>
                                {localStorage.getItem("userToken")
                                    ?

                                    <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/cart">Cart</NavLink>
                                    :
                                    null
                                }
                            </div>
                        </div>

                        <div className={classes.loginLinkCont}>
                            <ul className={classes.navList}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to={localStorage.getItem("userToken") ? localStorage.getItem("a") ? "/admin" : "/dashboard" : "/account"}>Account</NavLink>
                            </ul>
                        </div>
                    </div>

                    <div className={assignedClasses.join(' ')}>
                        <div className={classes.mobileNavList}>
                            <div className={classes.liNav}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/">Home</NavLink>
                            </div>
                            <div className={classes.liNav}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/products">Products</NavLink>
                            </div>
                            <div className={classes.liNav}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/contact">Contact</NavLink>
                            </div>
                            <div className={classes.liNav}>
                                <NavLink activeClassName={classes.active} exact className={classes.navLink} to={localStorage.getItem("userToken") ? "/dashboard" : "/account"}>Account</NavLink>
                            </div>
                            {localStorage.getItem("userToken") ?

                                <div className={classes.liNav}>
                                    <NavLink activeClassName={classes.active} exact className={classes.navLink} to="/cart"> Cart</NavLink>
                                </div>

                                : null
                            }
                        </div>
                    </div>

                </div>
                <Route exact path="/" children={<LandingPage published={this.props.published} />} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/contact" component={ContactUs} />
                <Route exact path="/account" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/dashboard" component={Dashbaord} />
                <Route exact path="/editProfile" component={EditProfile} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/checkout" component={Order} />
            </HashRouter>
        );
    }
}