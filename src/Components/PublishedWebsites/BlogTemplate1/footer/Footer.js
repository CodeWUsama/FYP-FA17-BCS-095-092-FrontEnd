import React, { Component } from 'react';
import classes from './Footer.module.css';
import Fb from './facebook.png';
import Twitter from './twitter.png';
import Insta from './instagram.png';
import Mail from './email.png';
import Linkedin from './linkedin.png';
import Whatsapp from './whatsapp.png';

export default class Footer extends Component {
    render() {
        return (
            <div className={classes.rootCont}>

                <div className={classes.div1}>
                    <p className={classes.abtHead}>About Us</p>
                    <p
                        style={{
                            fontSize: this.props.footer.fontSize,
                            fontFamily: this.props.footer.fontFamily,
                            color: this.props.footer.fontColor,
                            fontWeight: this.props.footer.bold ? "bold" : "normal",
                            fontStyle: this.props.footer.italic ? "italic" : "normal",
                            textDecoration: this.props.footer.underline ? "underline" : "none",
                            textAlign: this.props.footer.align,
                        }}
                    > {this.props.footer.text} </p>
                    <div className={classes.accCont}>
                        <img alt="icon" className={classes.accIcon} src={Fb} />
                        <img alt="icon" className={classes.accIcon} src={Twitter} />
                        <img alt="icon" className={classes.accIcon} src={Insta} />
                    </div>
                </div>
                <div className={classes.div2}>
                    <p className={classes.abtHead}>Site</p>
                    <div className={classes.linksCont}>
                        <a href="/B1P/#/" className={classes.links}> Home</a>
                        <a href="/B1P/#/recipe" className={classes.links}> Blogs</a>
                        <a href="/B1P/#/gallery" className={classes.links}> Gallery </a>
                        <a href="/B1P/#/contact" className={classes.links}> Contact</a>
                    </div>
                </div>

                <div className={classes.div4}>
                    <p className={classes.abtHead}>CONTACT</p>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Linkedin} />
                        <p
                            className={classes.contactText}
                            style={{
                                fontSize: this.props.linkedin.fontSize,
                                fontFamily: this.props.linkedin.fontFamily,
                                color: this.props.linkedin.fontColor,
                                fontWeight: this.props.linkedin.bold ? "bold" : "normal",
                                fontStyle: this.props.linkedin.italic ? "italic" : "normal",
                                textDecoration: this.props.linkedin.underline ? "underline" : "none",
                                textAlign: this.props.linkedin.align,
                            }}
                        > {this.props.linkedin.text} </p>
                    </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Mail} />
                        <p
                            className={classes.contactText}
                            style={{
                                fontSize: this.props.mail.fontSize,
                                fontFamily: this.props.mail.fontFamily,
                                color: this.props.mail.fontColor,
                                fontWeight: this.props.mail.bold ? "bold" : "normal",
                                fontStyle: this.props.mail.italic ? "italic" : "normal",
                                textDecoration: this.props.mail.underline ? "underline" : "none",
                                textAlign: this.props.mail.align,
                            }}
                        > {this.props.mail.text} </p>  </div>
                    <div className={classes.contactLink}>
                        <img alt="icon" className={classes.contactIcon} src={Whatsapp} />
                        <p
                            className={classes.contactText}
                            style={{
                                fontSize: this.props.footercontact.fontSize,
                                fontFamily: this.props.footercontact.fontFamily,
                                color: this.props.footercontact.fontColor,
                                fontWeight: this.props.footercontact.bold ? "bold" : "normal",
                                fontStyle: this.props.footercontact.italic ? "italic" : "normal",
                                textDecoration: this.props.footercontact.underline ? "underline" : "none",
                                textAlign: this.props.footercontact.align,
                            }}
                        > {this.props.footercontact.text} </p>   </div>
                </div>
            </div>
        );
    }
}