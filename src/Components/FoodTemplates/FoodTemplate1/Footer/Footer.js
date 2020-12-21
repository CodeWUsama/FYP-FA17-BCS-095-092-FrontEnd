import React, { Component } from 'react';
import classes from './Footer.module.css';
import Fb from './facebook.png';
import Twitter from './twitter.png';
import Insta from './instagram.png';
import Mail from './email.png';
import Phone from './phone.png';
import Whatsapp from './whatsapp.png';
import Location from './pin.png';

export default class Footer extends Component { 

    render() {
        return (
            <div className={classes.rootCont}>
                <div className={classes.div1}>
                    <p className={classes.abtHead}>About Us</p>
                    <p
                        className={classes.abtText}
                        style={{
                            fontSize: this.props.footer.aboutUs.fontSize,
                            fontFamily: this.props.footer.aboutUs.fontFamily,
                            color: this.props.footer.aboutUs.fontColor,
                            fontWeight: this.props.footer.aboutUs.bold ? "normal" : "lighter",
                            textDecoration: this.props.footer.aboutUs.underline ? "underline" : "none",
                            fontStyle: this.props.footer.aboutUs.italic ? "italic" : "normal",
                            textAlign: this.props.footer.aboutUs.align
                        }}
                        onClick={this.props.aboutUsHandler}
                    >{this.props.footer.aboutUs.text}</p>
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
                        <a href="/" className={classes.links}> Menu</a>
                        <a href="/" className={classes.links}> Gallery</a>
                        <a href="/" className={classes.links}> Contact</a>
                        <a href="/" className={classes.links}> About</a>
                        <a href="/" className={classes.links}> Login</a>
                    </div>
                </div>

                <div className={classes.div4}>
                    <p className={classes.abtHead}>Have a Question?</p>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Location} />
                        <p className={classes.contactText}
                            style={{
                                fontSize: this.props.footer.address.fontSize,
                                fontFamily: this.props.footer.address.fontFamily,
                                color: this.props.footer.address.fontColor,
                                fontWeight: this.props.footer.address.bold ? "bold" : "normal",
                                textDecoration: this.props.footer.address.underline ? "underline" : "none",
                                fontStyle: this.props.footer.address.italic ? "italic" : "normal",
                                textAlign: this.props.footer.address.align
                            }}
                            onClick={this.props.addressHandler}
                        >{this.props.footer.address.text}</p>
                    </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Phone} />
                        <p className={classes.contactText}
                            style={{
                                fontSize: this.props.footer.phone.fontSize,
                                fontFamily: this.props.footer.phone.fontFamily,
                                color: this.props.footer.phone.fontColor,
                                fontWeight: this.props.footer.phone.bold ? "bold" : "normal",
                                textDecoration: this.props.footer.phone.underline ? "underline" : "none",
                                fontStyle: this.props.footer.phone.italic ? "italic" : "normal",
                                textAlign: this.props.footer.phone.align
                            }}
                            onClick={this.props.phoneHandler}
                        >{this.props.footer.phone.text}</p>
                    </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Mail} />
                        <p className={classes.contactText}
                            style={{
                                fontSize: this.props.footer.email.fontSize,
                                fontFamily: this.props.footer.email.fontFamily,
                                color: this.props.footer.email.fontColor,
                                fontWeight: this.props.footer.email.bold ? "bold" : "normal",
                                textDecoration: this.props.footer.email.underline ? "underline" : "none",
                                fontStyle: this.props.footer.email.italic ? "italic" : "normal",
                                textAlign: this.props.footer.email.align
                            }}
                            onClick={this.props.emailHandler}
                        >{this.props.footer.email.text}</p>
                    </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Whatsapp} />
                        <p className={classes.contactText}
                            style={{
                                fontSize: this.props.footer.whatsapp.fontSize,
                                fontFamily: this.props.footer.whatsapp.fontFamily,
                                color: this.props.footer.whatsapp.fontColor,
                                fontWeight: this.props.footer.whatsapp.bold ? "bold" : "normal",
                                textDecoration: this.props.footer.whatsapp.underline ? "underline" : "none",
                                fontStyle: this.props.footer.whatsapp.italic ? "italic" : "normal",
                                textAlign: this.props.footer.whatsapp.align
                            }}
                            onClick={this.props.whatsappHandler}
                        >{this.props.footer.whatsapp.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}