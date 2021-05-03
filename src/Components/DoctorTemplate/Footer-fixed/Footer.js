import React, { Component } from 'react';
import classes from './Footer.module.css';
import Fb from './facebook.png';
import Twitter from './twitter.png';
import Insta from './instagram.png';
import Mail from './email.png';
import Phone from './phone.png';
import Whatsapp from './whatsapp.png';
import Location from './pin.png';
import axios from "axios";

export default class Footer extends Component {

    state = {
        footer: ""
    }

    async componentDidMount() {
        let response = await axios.get("http://localhost:8080/d1td/getHomeData?id=" + localStorage.getItem("id"));
        this.setState({ footer: response.data.data.footer });
    }

    render() {
        return (

            this.state.footer ?
                <div className={classes.rootCont}>
                    <div className={classes.div1}>
                        <p className={classes.abtHead}>About Us</p>
                        <p
                            className={classes.abtText}
                            style={{
                                fontSize: this.state.footer.aboutUs.fontSize,
                                fontFamily: this.state.footer.aboutUs.fontFamily,
                                color: this.state.footer.aboutUs.fontColor,
                                fontWeight: this.state.footer.aboutUs.bold ? "normal" : "lighter",
                                textDecoration: this.state.footer.aboutUs.underline ? "underline" : "none",
                                fontStyle: this.state.footer.aboutUs.italic ? "italic" : "normal",
                                textAlign: this.state.footer.aboutUs.align
                            }}
                            onClick={this.state.aboutUsHandler}
                        >{this.state.footer.aboutUs.text}</p>
                        <div className={classes.accCont}>
                            <img alt="icon" className={classes.accIcon} src={Fb} />
                            <img alt="icon" className={classes.accIcon} src={Twitter} />
                            <img alt="icon" className={classes.accIcon} src={Insta} />
                        </div>
                    </div>
                    <div className={classes.div2}>
                        <p className={classes.abtHead}>Quick Links</p>
                        <div className={classes.linksCont}>
                            <a href="/" className={classes.links}> Home</a>
                            <a href="/" className={classes.links}> Products</a>
                            <a href="/" className={classes.links}> Contact</a>
                            <a href="/" className={classes.links}> Account</a>
                            <a href="/" className={classes.links}> Login</a>
                        </div>
                    </div>

                    <div className={classes.div4}>
                        <p className={classes.abtHead}>Have a Question?</p>
                        <div className={classes.contactLink}>
                            <img alt="icon" className={classes.contactIcon} src={Location} />
                            <p className={classes.contactText}
                                style={{
                                    fontSize: this.state.footer.address.fontSize,
                                    fontFamily: this.state.footer.address.fontFamily,
                                    color: this.state.footer.address.fontColor,
                                    fontWeight: this.state.footer.address.bold ? "bold" : "normal",
                                    textDecoration: this.state.footer.address.underline ? "underline" : "none",
                                    fontStyle: this.state.footer.address.italic ? "italic" : "normal",
                                    textAlign: this.state.footer.address.align
                                }}
                                onClick={this.state.addressHandler}
                            >{this.state.footer.address.text}</p>
                        </div>
                        <div className={classes.contactLink}>
                            <img alt="icon" className={classes.contactIcon} src={Phone} />
                            <p className={classes.contactText}
                                style={{
                                    fontSize: this.state.footer.phone.fontSize,
                                    fontFamily: this.state.footer.phone.fontFamily,
                                    color: this.state.footer.phone.fontColor,
                                    fontWeight: this.state.footer.phone.bold ? "bold" : "normal",
                                    textDecoration: this.state.footer.phone.underline ? "underline" : "none",
                                    fontStyle: this.state.footer.phone.italic ? "italic" : "normal",
                                    textAlign: this.state.footer.phone.align
                                }}
                                onClick={this.state.phoneHandler}
                            >{this.state.footer.phone.text}</p>
                        </div>
                        <div className={classes.contactLink}>
                            <img alt="icon" className={classes.contactIcon} src={Mail} />
                            <p className={classes.contactText}
                                style={{
                                    fontSize: this.state.footer.email.fontSize,
                                    fontFamily: this.state.footer.email.fontFamily,
                                    color: this.state.footer.email.fontColor,
                                    fontWeight: this.state.footer.email.bold ? "bold" : "normal",
                                    textDecoration: this.state.footer.email.underline ? "underline" : "none",
                                    fontStyle: this.state.footer.email.italic ? "italic" : "normal",
                                    textAlign: this.state.footer.email.align
                                }}
                                onClick={this.state.emailHandler}
                            >{this.state.footer.email.text}</p>
                        </div>
                        <div className={classes.contactLink}>
                            <img alt="icon" className={classes.contactIcon} src={Whatsapp} />
                            <p className={classes.contactText}
                                style={{
                                    fontSize: this.state.footer.whatsapp.fontSize,
                                    fontFamily: this.state.footer.whatsapp.fontFamily,
                                    color: this.state.footer.whatsapp.fontColor,
                                    fontWeight: this.state.footer.whatsapp.bold ? "bold" : "normal",
                                    textDecoration: this.state.footer.whatsapp.underline ? "underline" : "none",
                                    fontStyle: this.state.footer.whatsapp.italic ? "italic" : "normal",
                                    textAlign: this.state.footer.whatsapp.align
                                }}
                                onClick={this.state.whatsappHandler}
                            >{this.state.footer.whatsapp.text}</p>
                        </div>
                    </div>
                </div>
                : null

        );
    }
}